suite('Global Test', () => {
	test('page has a valid title', () => {
		assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
	});
});

suite('"About" Page Tests', () =>{
	test('page should contain link to contact page', () =>{
		assert($('a[href="/contact"').length);
	});
});