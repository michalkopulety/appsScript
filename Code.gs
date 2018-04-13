function onInstall(e) {
	onOpen();
}

function onOpen(e) {
    ScriptApp.newTrigger("onEdit")
		.forSpreadsheet(e.source)
		.onEdit()
		.create();
}

function onEdit(e) {
  var range = e.range;
  range.setNote('Last modified: ' + new Date());
  console.log(e);
}