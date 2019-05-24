({ 
    doInit : function(cmp){
        var todayDate= new Date();
        console.log('jmd-->'+todayDate);
        cmp.set("v.todayDate","");
    },
    cancelDialog : function(component, helper) {
        var homeEvt = $A.get("e.force:navigateToObjectHome");
        homeEvt.setParams({
            "scope": "Daily_Expense__c"
        });
        homeEvt.fire();
    }
})