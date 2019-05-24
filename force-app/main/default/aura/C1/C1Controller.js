({
    doAc : function(component, event, helper) {
        // var evn = component.getEvent("dd");        
        //evn.setParams({'ms':'Deepak'});     
        // evn.fire();
        
        //$A.get("e.c:SampleApplicationEvent");         
        var evn1 =$A.get("e.c:appli");        
        evn1.setParams({'ms1':'Deepak1'});     
        evn1.fire();
    }   
})