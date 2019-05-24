({
    doInit : function(component, event, helper){
        component.set('v.Columns', [
            { label: 'CASE KEY', fieldName: 'CaseNumber', type: 'Auto Number'},
            { label: 'Priority', fieldName: 'Priority', type: 'Picklist'}
        ]);
        component.set('v.activeItem','Cases');
    },
    handleBeforeSelect: function(component, event) {
        event.preventDefault();
        console.log(event.getParam('name'));
        var eventName= event.getParam('name');
        if(eventName=='Cases'){
            component.set('v.Columns', [
                { label: 'CASE KEY', fieldName: 'CaseNumber', type: 'Auto Number'},
                { label: 'Priority', fieldName: 'Priority', type: 'Picklist'}
            ]);
            component.set('v.Data',component.get('v.caseList'));
        }
        else if(eventName=='Parties'){
            
            component.set('v.Columns', [
                { label: 'PARTY NAME', fieldName: 'Name', type: 'text'},
                { label: 'Phone Number', fieldName: 'Phone', type: 'Phone'}
            ]);
            component.set('v.Data',component.get('v.accList'));
        }
            else if(eventName=='Representatives'){
                component.set('v.Columns', [
                    { label: 'Name', fieldName: 'Name', type: 'text'},                  
                    { label: 'TITLE', fieldName: 'Title', type: 'text'},
                    { label: 'PHONE', fieldName: 'Phone', type: 'Phone'},
                    { label: 'Email', fieldName: 'Email', type: 'Email'}
                ]);
                component.set('v.Data',component.get('v.conList'));
            }
        
        
        component.set('v.activeItem', event.getParam('name'));
        component.set('v.selectedItem', event.getParam('name'));
        
        /*var action = component.get("c.getSobject");
        action.setParams({ objName : component.get("v.activeItem") });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
                component.set("v.resultData" ,response.getReturnValue())
            }
        });
        $A.enqueueAction(action);*/
        
        
    },
    handleClick : function(component, event, helper) {
        var searchText = component.get('v.searchText');
        var action = component.get('c.searchForIds');
        component.set('v.AccountColumns', [
            { label: 'Name', fieldName: 'Name', type: 'text'},
            { label: 'Phone Number', fieldName: 'Phone', type: 'Phone'}
        ]);
        component.set('v.ContactColumns', [
            { label: 'Name', fieldName: 'Name', type: 'text'},
            { label: 'Email', fieldName: 'Email', type: 'Email'}
        ]);
        action.setParams({searchText: searchText});
        component.set('v.accList',null);
        component.set('v.conList',null);
        component.set('v.caseList',null);
        component.set('v.Data',null);
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var ids = response.getReturnValue();
                component.set('v.accList',ids[0]);
                component.set('v.conList',ids[1]);
                component.set('v.caseList',ids[2]);
                var eventName= component.get('v.selectedItem');
               
                if(eventName=='Cases'){
                    component.set('v.Data',ids[2]);
                }
                else if(eventName=='Parties'){                    
                    component.set('v.Data',ids[0]);
                }
                    else if(eventName=='Representatives'){                       
                        component.set('v.Data',ids[1]);
                    }
            }
        });
        $A.enqueueAction(action);
    }
})