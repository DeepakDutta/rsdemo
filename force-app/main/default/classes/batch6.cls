public class batch6 implements Database.batchable<sObject> {
    public Database.QueryLocator start(Database.BatchableContext bc){
        String query='select id from account';
        return Database.getQueryLocator(query);        
    }
    public void execute(Database.BatchableContext bc,List<Account> scope){
        
    }
    public void finish(Database.BatchableContext bc){
        
    }
}