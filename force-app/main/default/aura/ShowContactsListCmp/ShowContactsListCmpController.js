({
  init: function(component, event, helper) {
      debugger;
    var accountIdsJson = sessionStorage.getItem('customSearch--accountRecordIds'); 
    var contactIdsJson = sessionStorage.getItem('customSearch--contactRecordIds'); 
    var caseIdsJson = sessionStorage.getItem('customSearch--caseRecordIds'); 
    if (!$A.util.isUndefinedOrNull(accountIdsJson)) {
      var ids = JSON.parse(accountIdsJson);
      component.set('v.accountRecordIds', ids);
      sessionStorage.removeItem('customSearch--accountRecordIds'); 
    }
    if (!$A.util.isUndefinedOrNull(contactIdsJson)) {
      var ids = JSON.parse(contactIdsJson);
      component.set('v.contactRecordIds', ids);
      sessionStorage.removeItem('customSearch--contactRecordIds'); 
    }
    if (!$A.util.isUndefinedOrNull(caseIdsJson)) {
      var ids = JSON.parse(caseIdsJson);
      component.set('v.caseRecordIds', ids);
      sessionStorage.removeItem('customSearch--caseRecordIds'); 
    }
  }
})