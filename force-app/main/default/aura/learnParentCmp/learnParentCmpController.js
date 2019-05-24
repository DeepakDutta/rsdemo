({
	hand : function(component, event, helper) {
		var ev = event.getParam('message');
        component.set("v.msg",ev);
	}
})