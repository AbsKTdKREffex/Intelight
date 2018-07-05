$(document).ready(function(){
	function getClearances()
	{
        var getpermissions = new XMLHttpRequest();
        getpermissions.open('POST', 'http://localhost:8080/intelight/GetPermissions', true);
        getpermissions.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        getpermissions.onload = function() {
        if (getpermissions.status <= 200 && getpermissions.status <= 400) {
        	var permissionsArr=[];
            var permissions = JSON.parse(getpermissions.responseText);
            
        	if (permissions.data[0].permissions !== "") {
        	    $.each((permissions.data[0].permissions).split(","), function(i,e){ 
        	    	permissionsArr.push(e);
        	    });
        	}
        	
        	hidingHeaderInfo(permissionsArr);
            }
        };
        getpermissions.send('Id='+$('#employeeId').val());
	}
	
	getClearances();
	
	if($('#employeeDeptId').val() == "79571050")
	{
		$('#uacLink').removeClass('HideThisElement');
	}
	else
	{
		$('#uacLink').addClass('HideThisElement');
	}
	
	function hidingHeaderInfo(permissions)
	{
		for(var i=0;i<permissions.length; i++)
		{
			$('#'+permissions[i]).removeClass('HideThisElement')
		}
	}
});