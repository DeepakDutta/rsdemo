public class readAttribute {
    @AuraEnabled public String DeveloperName {get;set;}
    
    @AuraEnabled
    public static readAttribute initClass(){
        //create class instance
        readAttribute obj = new readAttribute();
        //set value in class properties
        obj.DeveloperName = 'Piyush soni';
        
        return obj ;
    }
}