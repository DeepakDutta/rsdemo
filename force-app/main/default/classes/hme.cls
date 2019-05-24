public class hme {
    public Boolean showIframe {get;set;}
    public hme(){
        showIframe=false;
    }
    public void showFrame(){
        showIframe= true;
        system.debug('jmd--'+showIframe);
    }
}