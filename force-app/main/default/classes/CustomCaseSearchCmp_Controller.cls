public class CustomCaseSearchCmp_Controller {
    @AuraEnabled
    public static Map<String, List<String>> searchForIds(String searchText) {
        System.debug('this is search string '+searchText);
        List<List<SObject>> results = [FIND :searchText IN ALL FIELDS RETURNING Account(Id, Name ),Contact(Id, Name), Case(Id)];
        Map<String, List<String>> resultMap = new Map<String, List<String>>();
        resultMap.put('Account', new List<String>());
        resultMap.put('Contact', new List<String>());
        resultMap.put('Case', new List<String>());
        for (List<SObject> sobjs : results) {
            for (SObject sobj : sobjs) {
                String sobjectName;
                if(sobj.getSObjectType().getDescribe().getName() == 'Account')
                    sobjectName = 'Account';
                else if(sobj.getSObjectType().getDescribe().getName() == 'Contact')
                    sobjectName = 'Contact';
                else if(sobj.getSObjectType().getDescribe().getName() == 'Case')
                    sobjectName = 'Case';
                
                if(!String.isEmpty(sobjectName) && sobjectName != null) {
                    List<String> resultList = resultMap.get(sobjectName);
                    resultList.add(sobj.Id);
                    resultMap.put(sobjectName, resultList);
                }
            }
        }
        
        return resultMap;
        
    }
}