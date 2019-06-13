const {CssSelectorParser} = require('css-selector-parser')

const parser = new CssSelectorParser()
parser.registerNestingOperators('>', '+', '~')
parser.registerAttrEqualityMods('^', '$', '*', '~', '|')

const complexity = selector => {
	if (typeof selector !== 'string' || selector.trim() === '') {
		throw new Error('`selector` must be a string')
	}

	let rule = parser.parse(selector)
	let total = 0

	while ((rule = rule.rule)) {
		if (rule.tagName && rule.tagName !== '*') {
			total += 1
		}

		if (rule.id) {
			total += 1
		}

		if (rule.classNames) {
			total += rule.classNames.length
		}

		if (rule.attrs) {
			total += rule.attrs
				.map(attr => (attr.value ? 2 : 1))
				.reduce((total, attributeCount) => total + attributeCount)
		}

		if (rule.pseudos) {
			total += rule.pseudos
				.filter(pseudo => pseudo.name !== '')
				.map(pseudo => (pseudo.name === 'not' ? complexity(pseudo.value) : 1))
				.reduce((total, pseudoCount) => total + pseudoCount)
		}
	}

	return total
}

module.exports = complexity
