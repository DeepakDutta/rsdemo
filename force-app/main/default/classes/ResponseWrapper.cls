global class ResponseWrapper {
    public String message;
    public Integer statusCode;
    public DataWrapper data;
    
    global ResponseWrapper(String message,Integer statuscode,String id,String name){
        this.message= message;
        this.statusCode = statuscode;
        //if(String.isNotBlank(id)){
            data = new DataWrapper(id,name);  
       // }             
    }
    global Class DataWrapper{
        public OpportunityWrapper opportunity;
        public DataWrapper(String opportunityId,String opportunityName){
            opportunity=new OpportunityWrapper(opportunityId,opportunityName);
        }        
    }
    global Class OpportunityWrapper{
        public String opportunityId;
        public String opportunityName;
        public OpportunityWrapper(String opportunityId,String opportunityName){
            this.opportunityId= opportunityId;
            this.opportunityName= opportunityName;
        }
    }
}