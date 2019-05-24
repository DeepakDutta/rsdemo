({
    handleClick : function(component, event, helper) {
        var searchText = component.get('v.searchText');
        var action = component.get('c.searchForIds');
        component.set('v.AccountColumns', [
            { label: 'Name', fieldName: 'Name', type: 'text'},
            { label: 'Phone Number', fieldName: 'Phone', type: 'Phone'},
            
        ]);
            component.set('v.ContactColumns', [
            { label: 'Name', fieldName: 'Name', type: 'text'},
            { label: 'Email', fieldName: 'Email', type: 'Email'},
        ]);
        component.set('v.CaseColumns', [
            { label: 'Case Number', fieldName: 'CaseNumber', type: 'Auto Number'},
            { label: 'Priority', fieldName: 'Priority', type: 'Picklist'}
        ]);
        action.setParams({searchText: searchText});
        component.set('v.accList',null);
        component.set('v.conList',null);
        component.set('v.caseList',null);
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var ids = response.getReturnValue();
                component.set('v.accList',ids[0]);
                component.set('v.conList',ids[1]);
                component.set('v.caseList',ids[2]);
                
            }
        });
        $A.enqueueAction(action);
    },
    
    doInit : function(component, event, helper){
        component.set('v.CaseColumns', [
            { label: 'CASE KEY', fieldName: 'CaseNumber', type: 'Auto Number'},
            { label: 'Priority', fieldName: 'Priority', type: 'Picklist'}
        ]);
        component.set('v.activeItem','Cases');
    },
    handleBeforeSelect: function(component, event) {
        event.preventDefault();
        console.log(event.getParam('name'));
        var eventName= event.getParam('name');
        if(eventName=='Parties'){
            component.set('v.CaseColumns', [
                { label: 'CASE KEY', fieldName: 'CaseNumber', type: 'Auto Number'},
                { label: 'Priority', fieldName: 'Priority', type: 'Picklist'}
            ]);
        }
        
        
        component.set('v.activeItem', event.getParam('name'));
        var action = component.get("c.getSobject");
        action.setParams({ objName : component.get("v.activeItem") });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
                component.set("v.resultData" ,response.getReturnValue())
            }
        });
        $A.enqueueAction(action);
        
        
    },
    handleClick1 : function(component, event, helper) {
        var searchText = component.get('v.searchText');
        var action = component.get('c.searchForIds');
        component.set('v.AccountColumns', [
            { label: 'Name', fieldName: 'Name', type: 'text'},
            { label: 'Phone Number', fieldName: 'Phone', type: 'Phone'},
            
        ]);
            component.set('v.ContactColumns', [
            { label: 'Name', fieldName: 'Name', type: 'text'},
            { label: 'Email', fieldName: 'Email', type: 'Email'},
        ]);
        
        action.setParams({searchText: searchText});
        component.set('v.accList',null);
        component.set('v.conList',null);
        component.set('v.caseList',null);
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var ids = response.getReturnValue();
                component.set('v.accList',ids[0]);
                component.set('v.conList',ids[1]);
                component.set('v.caseList',ids[2]);
                
            }
        });
        $A.enqueueAction(action);
    }
    
})