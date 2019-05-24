public class RequestWrapper{
    public String LastName;
    public String contactTitle;
    
    public static RequestWrapper parse(String json){
        return (RequestWrapper) System.JSON.deserialize(json, RequestWrapper.class);
    }    
}