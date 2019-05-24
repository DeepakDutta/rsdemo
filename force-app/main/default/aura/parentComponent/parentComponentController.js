({
	parentFunction : function(component, event, helper) {
		var chld = component.find("childCmp");
        chld.childAuraMethod('Parent Button Click');
	}
})