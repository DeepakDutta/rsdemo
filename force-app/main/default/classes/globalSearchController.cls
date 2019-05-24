public class globalSearchController {
    @AuraEnabled 
    public static List<SObject> getSobject(String objName){
        String queryStr='select Id,Name from ' + objName;
        System.debug('queryStr'+queryStr);
        List<Sobject> results=Database.query(queryStr);
        System.debug('results'+results);
        return results ;
    }
}