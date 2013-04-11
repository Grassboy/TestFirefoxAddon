var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
	include: "https://mail.google.com/mail/*",
	onAttach: function(worker){
		
	}
});
