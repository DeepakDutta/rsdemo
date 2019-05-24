public without sharing class CustomSearchController {
    @AuraEnabled
    public static List<List<SObject>> searchForIds(String searchText) {
        List<List<SObject>> results = [FIND :'*'+searchText+'*' IN ALL FIELDS RETURNING Account(Name,Phone), Contact(name,Email), Case(CaseNumber,Priority)];         
        return results;
    }
}