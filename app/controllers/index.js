function doClick(e) {
	alert($.label.text);
}

$.index.open();


var template = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + 'test.html').read().getText();
var data = { content: 'This is a test' };
var text = _.template(template)(data);
console.error(text);