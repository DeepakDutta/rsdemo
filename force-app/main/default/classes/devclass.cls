global class devclass {
  //  Map<Id,List<OpportunityLineItem>> op= new Map<Id,List<OpportunityLineItem>>();
   // Map<Id,Map<id,List<OpportunityLineItem>>> mp = new Map<Id,Map<id,List<OpportunityLineItem>>>();
    public devclass(){
    /*    List<opportunity> opp = [select id,(select id,opportunityid from OpportunityLineItems) from opportunity];
        List<Account> ac= [select id,(select id,accountid from Opportunities) from account where id='0010o00002KEO7M'];
        for(opportunity opp1:opp){
            op.put(opp1.id,opp1.OpportunityLineItems);
        }             
        for(Account a:ac){
            for(Opportunity con: a.Opportunities){
                if(!mp.containsKey(con.accountid)){
                    mp.put(con.accountid,new map<id,List<OpportunityLineItem>>());
                }
                mp.get(con.accountid).put(con.id,op.get(con.id));
            }   
        }
        system.debug('jmd-->'+mp);       
        for(Id ACCid:mp.keySet()){
            for(id oppId:mp.get(ACCid).keyset()){
                system.debug('jmd11-->'+mp.get(obj).get(o));
            }
        } */
        
    }
    public void up(){
        try{
        List<Account> acc = [select AnnualRevenue from account where id='0010o00002Kqfa9'];
        acc[0].AnnualRevenue = 10;
        update acc;
        }
        catch(Exception ex){
            ApexPages.addmessage(new ApexPages.message(ApexPages.severity.WARNING,ex.getMessage()));
        }
    }
    
    @RemoteAction
    global static Integer methd(Integer i){
        
        //  system.debug('jmd isFuture--'+system.isFuture());
        // system.debug('jmd isBatch--'+system.isBatch());
        // system.debug('jmd isQueueable--'+system.isQueueable());
        // system.debug('jmd isScheduled--'+limits.getLimitQueries());
        
        return i;
    }
    
}