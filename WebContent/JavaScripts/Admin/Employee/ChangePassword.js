$(document).ready(function(){
//	var ab=${password};
	var matched=false;
	var sessionPwd=document.querySelector('#cuntPassSession').value;
	$('#ChangePassword').on( 'focusout', '#cruntPass', function () {
		console.log(document.querySelector('#cruntPass').value);
		var Pwd=document.querySelector('#cruntPass').value;
    		if(sessionPwd==Pwd)
    		{
//    			matched=true;
    			$("#pass").attr("disabled",false);
    			$("#cnfrmPass").attr("disabled",false);
    			$("#passLbl").removeClass("disabled");
    			$("#cnfrmPassLbl").removeClass("disabled");
    		}
    		else
			{
    			toastr.error('Incorrect Password!');
    			$("#pass").attr("disabled",true);
    			$("#cnfrmPass").attr("disabled",true);
    			$("#passLbl").addClass("disabled");
    			$("#cnfrmPassLbl").addClass("disabled");
			}
    });
	
	$('#ChangePassword').on( 'focusout', '#cnfrmPass', function () {
    	var cnfpassword=document.querySelector('#cnfrmPass').value;
    	var password=document.querySelector('#pass').value;
    		if(cnfpassword=="" || password=="")
    		{
    			toastr.error('Please Enter The Password');
    		}
    		else if(cnfpassword===password)
			{
    			$("#changeBtn").attr("disabled",false);
			}
    		else
    		{
    			toastr.error('Password Did Not Match!');
    		}
			return false;
    });
	
	$("#changeBtn").click(function() {
    	var cnfpassword=document.querySelector('#cnfrmPass').value;
    	$.ajax({
            type: "POST",
            url: '../../../ChangePasswordServlet',
            data:$("#LogInForm").serialize(),
            success: function(data)
            {
                if (data == 0) {
                	toastr.error('Failed to Change Password!');
    			} else {
	    				toastr.success('Password Changed Successfully!');
	    				setTimeout(function(){window.location='../../../index.html';}, 5000);
    				}
            }
    	
    	});
        return false; // avoid to execute the actual submit of the form.
    });
});