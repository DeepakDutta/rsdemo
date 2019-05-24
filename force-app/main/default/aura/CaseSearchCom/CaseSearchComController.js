({
    doInit: function(component,event,helper){
        component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'text', sortable : true},
            {label: 'Email', fieldName: 'Email', type: 'email', sortable : true},
            {label: 'Phone', fieldName: 'Phone', type: 'phone', sortable : true}]);
    },
    next: function (component, event, helper) {
        helper.next(component, event);
    },
    previous: function (component, event, helper) {
        helper.previous(component, event);
    },    
    onKeyUpEnterCheck : function(component, event, helper) {
        //call apex class method
        if(component.get("v.searchText").length > 2){
            var action = component.get('c.searchForIds');
            
            console.log('jmd-->'+JSON.stringify(action));
            action.setParams({"searchText" : component.get("v.searchText")});
            action.setCallback(this,function(response){
                var state = response.getState();
                if (state === "SUCCESS") {
                    component.set('v.SObjects',response.getReturnValue());
                    if(response.getReturnValue()['Case'].length > 0){
                        component.set('v.caseRecordIds',response.getReturnValue()['Case']);
                        component.set('v.accountRecordIds',response.getReturnValue()['Account']);
                        component.set('v.contactRecordIds',response.getReturnValue()['Contact']);
                    }
                }
            });
            $A.enqueueAction(action);
        }
    },
    handleClick : function(component, event, helper) {
         var pageSize = component.get("v.pageSize");
        if(component.get("v.searchText").length > 2){
            var action = component.get('c.searchForIds');
              console.log('JMD action-->'+JSON.stringify(action));
            action.setParams({"searchText" : component.get("v.searchText")});
            action.setCallback(this,function(response){
                var state = response.getState();
                if (state === "SUCCESS") {
                    component.set('v.SObjects',response.getReturnValue());
                    if(response.getReturnValue()['Case'].length > 0){
                        component.set('v.caseRecordIds',response.getReturnValue()['Case']);
                        component.set('v.accountRecordIds',response.getReturnValue()['Account']);
                        component.set('v.contactRecordIds',response.getReturnValue()['Contact']);
                        
                        
                        // get size of all the records and then hold into an attribute "totalRecords"
                        component.set("v.totalRecords", component.get("v.contactRecordIds").length);
                        // set star as 0
                        component.set("v.startPage",0);
                        
                        component.set("v.endPage",pageSize-1);
                        var PaginationList = [];
                       
                        for(var i=0; i< pageSize; i++){
                            console.log('JMD2-->'+JSON.stringify(component.get("v.contactRecordIds")));
                            if(component.get("v.contactRecordIds").length> i){
                                 console.log('JMD3-->'+JSON.stringify(PaginationList));
                                PaginationList.push(response.getReturnValue()[i]);  
                            }
                        }
                        component.set('v.PaginationList', PaginationList);
                       console.log('JMD-->'+JSON.stringify(PaginationList));
                        
                    }
                }
            });
            $A.enqueueAction(action);
        }
    },
    hideSpinner : function (component, event, helper) {
        var spinner = component.find('MySpinner');
        $A.util.removeClass(spinner, 'slds-show'); 
    	$A.util.addClass(spinner, 'slds-hide');   
    },
    showSpinner : function (component, event, helper) {
        var spinner = component.find('MySpinner');
        $A.util.removeClass(spinner, 'slds-hide'); 
    	$A.util.addClass(spinner, 'slds-show');   
    },
    showCases : function (component, event, helper) {
        var cases = component.find('Cases');
        var accounts = component.find('Accounts');
        var contacts = component.find('Contacts');
        $A.util.removeClass(cases, 'slds-hide'); 
    	$A.util.addClass(cases, 'slds-show');
        $A.util.addClass(accounts, 'slds-hide'); 
    	$A.util.removeClass(accounts, 'slds-show');
        $A.util.addClass(contacts, 'slds-hide'); 
    	$A.util.removeClass(contacts, 'slds-show');
    },
    showParties : function (component, event, helper) {
        var cases = component.find('Cases');
        var accounts = component.find('Accounts');
        var contacts = component.find('Contacts');
        $A.util.removeClass(accounts, 'slds-hide'); 
    	$A.util.addClass(accounts, 'slds-show');
        $A.util.addClass(cases, 'slds-hide'); 
    	$A.util.removeClass(cases, 'slds-show');
        $A.util.addClass(contacts, 'slds-hide'); 
    	$A.util.removeClass(contacts, 'slds-show');
    },
    showRepresentatives : function (component, event, helper) {
        var cases = component.find('Cases');
        var accounts = component.find('Accounts');
        var contacts = component.find('Contacts');
        $A.util.removeClass(contacts, 'slds-hide'); 
    	$A.util.addClass(contacts, 'slds-show');
        $A.util.addClass(accounts, 'slds-hide'); 
    	$A.util.removeClass(accounts, 'slds-show');
        $A.util.addClass(cases, 'slds-hide'); 
    	$A.util.removeClass(cases, 'slds-show');
    },
    handleBeforeSelect: function(component, event) {}
})