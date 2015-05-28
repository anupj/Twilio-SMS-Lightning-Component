({
	sendMessage : function(component, event, helper) {
        console.log("sendMessage start");
        var number = component.get("v.destinationNumber");
        console.log("The destination number is: "+number);
        var smsMessage = component.get("v.textMessage");
        console.log("The text message is: "+smsMessage);
        var accountId = component.get("v.accountSID");
        console.log("the account sid is: "+accountId);
        var token = component.get("v.token");
        console.log("the token is: "+token);
        var tPhoneNumber = component.get("v.twiPhoneNumber");
        console.log("the twiPhoneNumber is: "+tPhoneNumber);

        //call the controller method
        var action = component.get("c.sendMessages");
        action.setParams({"accSid":accountId, "tok":token,"twiNum": tPhoneNumber, "mobNumber": number, "message": smsMessage});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(component.isValid() && state == "SUCCESS"){
                console.log('woohooo success!');
            } else {
                console.log('booo there was a problem and the state is: '+state);
            }
        });
        $A.enqueueAction(action);
	}
})
