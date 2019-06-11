const test = require('ava')
const loc = require('..')

test('it only expects strings', t => {
	const provider = [1, null, undefined, -1, {}, [], false, '']

	provider.map(notSelector => {
		t.throws(() => loc(notSelector))
	})
})

test('it counts simple selectors', t => {
	const provider = [[1, '.class'], [1, 'element'], [1, '#id'], [0, '*']]

	provider.map(([expected, selector]) => {
		const actual = loc(selector)
		t.is(
			loc(selector),
			expected,
			`Expected ${selector} to have LOC of ${expected}, found ${actual}`
		)
	})
})

test('it counts combined selectors', t => {
	const provider = [
		[3, '.class .within .class'],
		[2, 'ul > li'],
		[2, 'dt ~ dd'],
		[2, 'h1 + p'],
		[2, 'test#me'],
		[2, '#id.class'],
		[4, '.class#id[attribute=value]']
	]

	provider.map(([expected, selector]) => {
		const actual = loc(selector)
		t.is(
			actual,
			expected,
			`Expected ${selector} to have LOC of ${expected}, found ${actual}`
		)
	})
})

test('it counts pseudo selectors', t => {
	const provider = [
		[2, 'p:first-child'],
		[2, 'a :only-child'],
		[2, 'li:nth-child(2n+1)'], // @TODO: support spaces around operators: https://github.com/gajus/scalpel/issues/11
		[2, 'p::first-letter']
	]

	provider.map(([expected, selector]) => {
		const actual = loc(selector)
		t.is(
			actual,
			expected,
			`Expected ${selector} to have LOC of ${expected}, found ${actual}`
		)
	})
})

test('it counts attribute selectors', t => {
	const provider = [
		[1, '[aria-hidden]'],
		[2, '[property|="value"]'],
		[2, '[property^="value"]'],
		[2, '[property$="value"]'],
		[2, '[property*="value"]'],
		[2, '[property="value"]']
	]

	provider.map(([expected, selector]) => {
		const actual = loc(selector)
		t.is(
			actual,
			expected,
			`Expected ${selector} to have LOC of ${expected}, found ${actual}`
		)
	})
})

test('it counts insane real-world cases', t => {
	const provider = [
		// Carbon Design System
		[
			13, // Should be 14, but counting inside :not() is hard
			'.bx--side-nav--website--light .bx--side-nav__menu[role=menu] a.bx--side-nav__link[role=menuitem]:not(.bx--side-nav__link--current):not([aria-current=page]):hover .bx--side-nav__icon svg'
		],
		// Smashing Magazine
		[
			8,
			'.dashboard-membership__desc.for-supporters li.for-members.for-smashing:not(.for-supporters) time::after'
		],
		// CSS Tricks
		[
			10,
			'body:not(.woocommerce-page):not(.page-template-page-search-results) .overflow-table-wrap>table.overflow-table:not(.gsc-table-result):not(.gcsc-branding):not(.gsc-resultsHeader) table'
		],
		// Google Cloud
		[
			14,
			'body.dropdown-available[data-navigation="dropdown"] .devsite-doc-set-nav-tab-container:nth-child(6) .devsite-dropdown-menu-column:nth-child(1) .devsite-nav-item:nth-child(3) a.devsite-nav-title span::after'
		]
	]

	provider.map(([expected, selector]) => {
		const actual = loc(selector)
		t.is(
			actual,
			expected,
			`Expected ${selector} to have LOC of ${expected}, found ${actual}`
		)
	})
})
