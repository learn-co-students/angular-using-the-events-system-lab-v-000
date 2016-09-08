var path = require('path');

describe('Events Test', function() {
	it('should remove the item', function() {
		browser.get('http://localhost:8080');

		var list = element.all(by.repeater('contact in ctrl.contacts'));
    expect(list.count()).toEqual(125);

		var item = list.get(1);
    item.element(by.css('a')).click();
    expect(list.count()).toEqual(124);

    var itemTwo = list.get(2);
    itemTwo.element(by.css('a')).click();
    expect(list.count()).toEqual(123);

	});
});
