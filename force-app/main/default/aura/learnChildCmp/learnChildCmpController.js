({
    onclick : function(component, event, helper) {
        //var even= component.getEvent('passValue');
        var even= $A.get("e.c:learnCmpEvent");
        even.setParams({"message":"Deepak"});
        even.fire();
    }
})