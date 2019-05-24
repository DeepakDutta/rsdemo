public with sharing class NoObjectPermission {
    Public String OName {get;set;}
    public NoObjectPermission(){
        NoObjectPermission__c obj = [select Name from NoObjectPermission__c where Name='Test2'];
        OName = obj.Name;
    }
    public void createRecord(){
        NoObjectPermission__c obj = new NoObjectPermission__c();
        obj.Name='Test2';
        insert obj;
        ApexPages.Message myMsg = new ApexPages.Message(ApexPages.Severity.INFO,'Created Successfully!');
        Apexpages.addMessage(myMsg);
    }
}