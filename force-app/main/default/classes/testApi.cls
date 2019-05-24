@RestResource(urlMapping='/v1/contacts/*')
global class testApi {
    @HttpPut
    global static ResponseWrapper updateQuoteRecord(){
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String ContentType = RestContext.request.headers.get('Content-Type') ;
      //  if(ContentType!='application/json'){
          //  res.statusCode=400;
         //   return new ResponseWrapper('Content-Type should be application/json.',StatusCodeUtility.BADREQUEST,'','');
     //   }
     //   else{
            Blob body = req.requestBody;
            String requestString = body.toString();  
            
            RequestWrapper rw = (RequestWrapper)JSON.deserialize(requestString,RequestWrapper.class);
            try{
                if(String.isBlank(rw.LastName)){
                    res.statusCode=400;                
                    return new ResponseWrapper('LastName is required.',StatusCodeUtility.BADREQUEST,'','');
                }
                else if(String.isBlank(rw.contactTitle)){
                    res.statusCode=400;                
                    return new ResponseWrapper('contactTitle is required.',StatusCodeUtility.BADREQUEST,'','');
                }      
                else{
                    List<Contact> con = [select id,Title,LastName from Contact where id=:rw.LastName];
                    if(con.size()>0){
                        con[0].Title=rw.contactTitle;
                        update con;
                        res.statusCode=200;         
                        return new ResponseWrapper('record updated successfully.',StatusCodeUtility.SUCCESS,'','');
                    }
                    else{
                        res.statusCode=404;     
                        return new ResponseWrapper('record not found.',StatusCodeUtility.NOTFOUND,'','');
                    }
                }
            }
            catch(Exception e){
                res.statusCode=500;
                return new ResponseWrapper(e.getMessage(),StatusCodeUtility.ERROR,'','');
            }
       // }
    }
}