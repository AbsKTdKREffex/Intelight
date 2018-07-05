$(document).ready(function(){
    var ourRequest1 = new XMLHttpRequest();
    var Data = [];
    ourRequest1.open('GET', '../../../CheckPasswordInfo');
    ourRequest1.onload = function() {
      if (ourRequest1.status >= 200 && ourRequest1.status < 400) {
    	  Data = JSON.parse(ourRequest1.responseText);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest1.onerror = function() {
      console.log("Connection error");
    };
    
    ourRequest1.send();
	
	$("#submitBtn").click(function() {
		for(i=0;i<Data.data.length;i++)
		{
	        if($('#contactNo').val() == Data.data[i].contactNo && $('#email').val() == Data.data[i].emailId && $('#birthDate').val() == Data.data[i].birthdaydate && $('#userId').val() == Data.data[i].userId)
	        {
	        	$("#ChangePasswordForm").removeClass("HideThisElement");
	        	$("#ChangePassword").addClass("HideThisElement");
	        	$('#employeeId').val(Data.data[i].rowId);
	        }
        }
        return false; // avoid to execute the actual submit of the form.
    });
	
	$("#closeBtn").click(function() {
		console.log('clicked');
		window.location.replace("../../../index.html");
    });
	
	$("#changePwdBtn").click(function() {
		if($("#pass").val() == "")
		{
        	toastr.error('Please Enter Password!');
		}
		else if($("#pass").val() == $("#cnfrmPass").val())
    	{
        	$.ajax({
                type: "POST",
                url: '../../../ChangePasswordServlet?flag=frgot',
                data:$("#LogInForm").serialize(),
                success: function(data)
                {
                    if (data == 0) 
                    {
                    	toastr.error('Failed to Change Password!');
        			}
                    else 
        			{
	    				window.location="../../../index.html";
        			}
                }
        	
        	});
    	}
    	else
    	{
        	toastr.error('Password Did not matched!');
    	}
		return false;
    });
});