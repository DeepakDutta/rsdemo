({
    childFunction : function(component, event, helper) {
        var prms = event.getParam("arguments");
        console.log('---'+JSON.stringify(prms));
        alert(prms.p1+' ----Child function called from parent component');
    },
    fireComponentEvent : function(componenet,event,helper){
        //Get the event using registerEvent name.
        var cmpEvnt = component.getEvent("cmpEvnt");
        ALERT(cmpEvnt);
        cmpEvnt.setParams({'msg':'child'});
        cmpEvnt.fire();
    },
    nameThatButton : function(cmp, event, helper) {
        var cm = cmp.find('button1');
        
         console.log('jmd-->'+cm);
        var whichOne = event.getSource().getGlobalId();
       
        cmp.set("v.whichButton", whichOne);
    }
})