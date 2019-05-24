({
    navigateUrl : function(component, event, helper) {
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": "https://www.google.com"
        });
        urlEvent.fire();
        console.log('jmd');
        

    }
})