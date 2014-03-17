﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'toponym-manager';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var tfilter = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	tfilter.keyup = function tfilter_keyup (event)// @startlock
	{// @endlock
		//WAF.sources.component0_toponym.query("name = :1", event.currentTarget.value + "@");
		var theName = $$(getHtmlId('tfilter')).getValue();
		$comp.sources.toponym.query('name = :1 order by name', { params: [theName + "*"]});

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_tfilter", "keyup", tfilter.keyup, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
