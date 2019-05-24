({
	doInit : function(cmp, event, helper) {
		
        var urlString = window.location.href;
        var retURL = urlString.substring(urlString.indexOf("retURL=")+7);
        console.log(retURL);
        cmp.set('v.returnURL', retURL);
        
	},
    handleClick: function (cmp, event, helper) {
        var navEvt = $A.get("e.force:navigateToURL");
        navEvt.setParams({
            "url": cmp.get("v.returnURL")
        });
        navEvt.fire();
    }
})