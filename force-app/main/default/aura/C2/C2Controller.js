({
    component2Event : function(component, event, helper) {
        var ev =  event.getParam("ms1");
        component.set("v.msg",ev);
    }
})