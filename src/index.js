const {createParser} = require('scalpel')
const parser = createParser()

module.exports = selector => {
	if (typeof selector !== 'string' || selector.trim() === '') {
		throw new Error('selector must be a string')
	}

	return parser
		.parse(selector)
		.filter(x => x.type === 'selector')
		.map(x => x.body)
		.map(list =>
			list
				.map(y => y.type)
				.reduce((acc, curr) => {
					if (curr === 'attributeValueSelector') {
						return (acc += 2)
					}
					return (acc += 1)
				}, 0)
		)
		.reduce((acc, curr) => {
			return (acc += curr)
		}, 0)
}
