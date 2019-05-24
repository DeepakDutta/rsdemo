public class processBuilderClass {

    
    public class OpportunityParameter{
        @InvocableVariable(required=true)
        public Id oppId;
        @InvocableVariable(required=true)
        public String name;
        @InvocableVariable(required=true)
        public Decimal amount;
        @InvocableVariable(required=true)
        public Date closeDate;
    }
    
    @InvocableMethod
    public static void processBuilderMethod(OpportunityParameter[] con){
        for(OpportunityParameter o:con){
             system.debug('jmd-->'+o.name);
        }
       
    }
}