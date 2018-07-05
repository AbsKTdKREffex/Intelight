$(document).ready(function(){
	
    function cardDataRefresh(){
    	
    	var ourRequest1 = new XMLHttpRequest();
        var data1 = [];
        var clientId=document.getElementById('clientId').value;
        ourRequest1.open('GET', '../../../GetSpecificClientList?companyId='+clientId);
        
        ourRequest1.onload = function() {
          if (ourRequest1.status >= 200 && ourRequest1.status < 400) {
        	data1 = JSON.parse(ourRequest1.responseText);
            createHTML1(data1);
          } else {
            console.log("We connected to the server, but it returned an error.");
          }
        };

        ourRequest1.onerror = function() {
          console.log("Connection error");
        };
    	
    	ourRequest1.send();
    }
    
    function createHTML1(Data) {
        document.getElementById('companyNameCard').value = Data.data[0].companyName;
        $("#companyNameCardLbl").addClass("active");
        document.getElementById('industryCard').value = Data.data[0].industry;
        $("#industryCardLbl").addClass("active");
        document.getElementById('locationCard').value = Data.data[0].location;
        $("#locationCardLbl").addClass("active");
        document.getElementById('creditTimeCard').value = Data.data[0].creditTime;
        $("#creditTimeCardLbl").addClass("active");
        document.getElementById('creditLimitCard').value = Data.data[0].creditLimit;
        $("#creditLimitCardLbl").addClass("active");
    }
    
    var ourRequest2 = new XMLHttpRequest();
    var data2 = [];
    ourRequest2.open('GET', '../../../GetLegendList');
    ourRequest2.onload = function() {
      if (ourRequest2.status >= 200 && ourRequest2.status < 400) {
    	data2 = JSON.parse(ourRequest2.responseText);
        createHTML3(data2);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest2.onerror = function() {
      console.log("Connection error");
    };
    
    ourRequest2.send();
    
    function createHTML3(Data) {
//    	var options3;
    	$('#designationContactP').empty();
        options3 = '<option value="" selected>Designation</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Designation") {
        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
        $('#designationContactP').html(options3);
        $('#designationContactP').material_select('refresh');
    }
    cardDataRefresh();
    

    var ourRequest3 = new XMLHttpRequest();
    var data3 = [];
    ourRequest3.open('GET', '../../../GetStateList');
    ourRequest3.onload = function() {
      if (ourRequest3.status >= 200 && ourRequest3.status < 400) {
    	data3 = JSON.parse(ourRequest3.responseText);
        createHTML4(data3);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest3.onerror = function() {
      console.log("Connection error");
    };

   function createHTML4(petsData) {
 	   var selectBox2 = document.getElementById("state");
 	   var options2 = [];

 	   $("#state option").each(function(index, option) {
 	          $(option).remove();
 	     });
 	   
 	      options2.push("<option value='' selected>Select State</option>");
 	      options2.push("<optgroup label= 'Union Territory'>");
 	      for (i = 0; i < petsData.data.length; i ++)
 	      {
 	       if (petsData.data[i].statetype === "Union Territory") {
 	        options2.push("<option value='" + petsData.data[i].stateId + "'>" + petsData.data[i].state + "</option>");
 	    }
 	      }
 	      options2.push("<optgroup label= 'State'>");
 	      for (i = 0; i < petsData.data.length; i ++)
 	      {
 	       if (petsData.data[i].statetype === "State") {
 	        options2.push("<option value='" + petsData.data[i].stateId + "'>" + petsData.data[i].state + "</option>");
 	    }
 	      }
 	      $('#state').append(options2.join("")).material_select();
 	      $('#state').material_select('enable');
 	      $( "#state" ).material_select( "refresh" )
   }

   ourRequest3.send();
   
	// Setup - add a text input to each footer cell
    $('#datatables thead #filterrow th').each( function () {
    	var title = $(this).text();
        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
    });
 // Apply the search
    $("#datatables thead input").on('keyup change', function () {
        table.column($(this).parent().index() + ':visible')
            .search(this.value)
            .draw();
    });
    
	var table = $('#datatables').DataTable({
		dom: 'Bfrtip',
        buttons: [
            {
                text: 'New Contact Person',
                action: function ( dt, node, config ) {
                	loadBlankform();
                }
            }
        ],
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetContactPersonList?Id="+document.getElementById('clientId').value,
		"columns": [
        	 {
                 defaultContent: '<center><i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
            { "data": "name" },
            { "data": "designation_text" },
            { "data": "contactNo" },
            { "data": "altContactNo" },
            { "data": "emailId" },
            { "data": "location" }
            
        ],
    });
	
	 $('#datatablesAddress thead #filterrowAddress th').each( function () {
	    	var title = $(this).text();
	        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
	    });
		
	    
	 // Apply the search
	    $("#datatablesAddress thead input").on('keyup change', function () {
	        table.column($(this).parent().index() + ':visible')
	            .search(this.value)
	            .draw();
	    });
	    
	    
	    
		var table1 = $('#datatablesAddress').DataTable( {
			dom: 'Bfrtip',
	        buttons: [
	            {
	                text: 'New Address',
	                action: function ( dt, node, config ) {
	                	loadBlankform1();
	                }
	            }
	        ],
			"bLengthChange": false,
			"searching": true,
			"orderCellsTop": true ,
			"sScrollX": "100%",
	        "sScrollXInner": "100%",
	        "bScrollCollapse": true,
			"ajax": "../../../GetAddressList?Id="+document.getElementById('clientId').value,
			"columns": [
	        	 {
	                 defaultContent:'<center><i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
	                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
	             },
	            { "data": "branchName" },
	            { "data": "contactNo" },
	            { "data": "gstNo" },
	            { "data": "location" }
	            
	        ],
	    } );
		
	
    $('#datatables tbody').on( 'click', '.edit_me', function () {

    	var data = table.row( $(this).parents('tr') ).data();
//    	console.log(data);
    		document.getElementById("editContactPForm").reset();
//    		document.querySelector('#selectedContctPId').value = data.contactPersonId;
    		document.querySelector('#EditContactPerson #NewElement-modal-title').innerHTML = 'Update Contact Person Details';
            $("#alertMessage").addClass("HideThisElement");
            $("#errorMessage").addClass("HideThisElement");
            if (data.contactPersonId  !== "") {
        		$('#selectedContctPId').val(data.contactPersonId);
        	}
            if (data.designation  !== "") {
                $('#designationContactP').val(data.designation).material_select("refresh");
               }
            if (data.firstName  !== "") {
                $('#firstName').val(data.firstName);
                $('#firstNameLbl').addClass("active");
               }
            if (data.lastName  !== "") {
                $('#lastName').val(data.lastName);
                $('#lastNameLbl').addClass("active");
               }
            if (data.location  !== "") {
                $('#locationcontct').val(data.location);
                $('#locationcontctLbl').addClass("active");
               }
            if (data.contactNo  !== "") {
                $('#contactNoCP').val(data.contactNo);
                $('#contactNoCPLbl').addClass("active");
               }
            if (data.altContactNo  !== "") {
                $('#altContactNo').val(data.altContactNo);
                $('#altContactNoLbl').addClass("active");
               }
            if (data.emailId  !== "") {
                $('#emailId').val(data.emailId);
                $('#emailIdLbl').addClass("active");
               }
         $("#SubmitButtonRegisterContactP").addClass("HideThisElement");
         $("#SubmitButtonUpdateContactP").removeClass("HideThisElement");
        $('#EditContactPerson').modal('show');
    });
    
    $('#datatablesAddress tbody').on( 'click', '.edit_me', function () {

    	var data = table1.row( $(this).parents('tr') ).data();
    		document.getElementById("editAddressForm").reset();
//    		document.querySelector('#selectedAddressId').value = data.addressId;
    		document.querySelector('#Address-modal-title').innerHTML = 'Update Address Details';
            $("#alertMessage").addClass("HideThisElement");
            $("#errorMessage").addClass("HideThisElement");
            if (data.addressId  !== "") {
        		$('#selectedAddressId').val(data.addressId);
        	}
            if (data.location  !== "") {
                $('#locationAdd').val(data.location);
                $('#locationAddLbl').addClass("active");
               }
            if (data.branchName  !== "") {
                $('#branchName').val(data.branchName);
                $('#branchNameLbl').addClass("active");
               }
            if (data.address  !== "") {
                $('#address').val(data.address);
                $('#addressLbl').addClass("active");
               }
            if (data.gstNo  !== "") {
                $('#gstNo').val(data.gstNo);
                $('#gstNoLbl').addClass("active");
               }
            if (data.contactNo  !== "") {
                $('#contactNoAdd').val(data.contactNo);
                $('#contactNoAddLbl').addClass("active");
               }
            if (data.state  !== "") {
                $('#state').val(data.state).material_select("refresh");
               }
            if (data.pincode  !== "") {
                $('#pincode').val(data.pincode);
                $('#pincodeLbl').addClass("active");
               }
         $("#SubmitButtonRegisterAddress").addClass("HideThisElement");
         $("#SubmitButtonUpdateAddress").removeClass("HideThisElement");
        $('#EditAddress').modal('show');
    });
    
	$('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeleteEmpId').value = data.contactPersonId;
    	document.querySelector('#deletePara').innerHTML = "Contact Person details will be deleted from system.";
    	//$("#DeleteEmployeeConfirmedAddress").addClass("HideThisElement");
    	$("#DeleteEmployeeConfirmedAddress").css('display','none');
        //$("#DeleteEmployeeConfirmedContactP").removeClass("HideThisElement");
        $("#DeleteEmployeeConfirmedContactP").css('display','');
    	$('#centralModalDangerDemo').modal('show');
    });
	
	$('#datatablesAddress tbody').on( 'click', '.delete_me', function () {
    	var data = table1.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeleteEmpId').value = data.addressId;
    	document.querySelector('#deletePara').innerHTML = "Address details will be deleted from system.";
    	//$("#DeleteEmployeeConfirmedAddress").removeClass("HideThisElement");
    	$("#DeleteEmployeeConfirmedAddress").css('display','');
        //$("#DeleteEmployeeConfirmedContactP").addClass("HideThisElement");
        $("#DeleteEmployeeConfirmedContactP").css('display','none');
    	$('#centralModalDangerDemo').modal('show');
    });
    //for validating the mobile number 
//    $('#RegisterNewClient').on( 'focusout', '#mobileno', function () {
//    	var mobile=document.querySelector('#mobileno').value;
//    	var selectedClientId=document.querySelector('#selectedClientId').value;
//    	for(var i=0;i<myString.data.length;i++)
//    	{
//    		if(mobile==myString.data[i].mobileNo)
//    		{
//    			if(selectedClientId != myString.data[i].clientId || selectedClientId == "")
//    				{
//		    			document.querySelector('#alertMessage').innerHTML = "<strong>Duplicate!</strong> The Number You Entered Is Already In Use By "+myString.data[i].employeeName+" !";
//		        		$("#alertMessage").removeClass("HideThisElement");
//		        		$("#SubmitButtonUpdate").addClass("disabled");
//		        		$("#SubmitButtonUpdate").attr("disabled",true);
//		        		$("#SubmitButtonRegister").addClass("disabled");
//		        		$("#SubmitButtonRegister").attr("disabled",true);
//		        		break;
//    				}
//    		}
//    		else
//			{
//    			$("#alertMessage").addClass("HideThisElement");
//				$("#SubmitButtonUpdate").removeClass("disabled");
//				$("#SubmitButtonUpdate").attr("disabled",false);
//        		$("#SubmitButtonRegister").removeClass("disabled");
//        		$("#SubmitButtonRegister").attr("disabled",false);
//			}
//    	}
//    });
//    
//    $('#RegisterNewClient').on( 'focusout', '#emailId', function () {
//    	var email=document.querySelector('#emailId').value;
//    	var selectedClientId=document.querySelector('#selectedClientId').value;
//    	for(var i=0;i<myString.data.length;i++)
//    	{
//    		if(selectedClientId != myString.data[i].clientId || selectedClientId == "")
//			{
//	    		if(email==myString.data[i].emailId)
//	    		{
//	    			document.querySelector('#alertMessage').innerHTML = "<strong>Duplicate!</strong> The Email Id You Entered Is Already In Use By "+myString.data[i].employeeName+" !";
//	        		$("#alertMessage").removeClass("HideThisElement");
//	        		$("#SubmitButtonUpdate").addClass("disabled");
//	        		$("#SubmitButtonUpdate").attr("disabled",true);
//	        		$("#SubmitButtonRegister").addClass("disabled");
//	        		$("#SubmitButtonRegister").attr("disabled",true);
//	        		break;
//	    		}
//			}
//    		else
//			{
//    			$("#alertMessage").addClass("HideThisElement");
//				$("#SubmitButtonUpdate").removeClass("disabled");
//				$("#SubmitButtonUpdate").attr("disabled",false);
//        		$("#SubmitButtonRegister").removeClass("disabled");
//        		$("#SubmitButtonRegister").attr("disabled",false);
//			}
//    	}
//    });
//    
//    $('#RegisterNewClient').on( 'focusout', '#GSTNo', function () {
//    	var usrid=document.querySelector('#GSTNo').value;
//    	var selectedClientId=document.querySelector('#selectedClientId').value;
//    	for(var i=0;i<myString.data.length;i++)
//    	{
//    		if(usrid==myString.data[i].GSTNo)
//    		{
//    			if(selectedClientId != myString.data[i].clientId || selectedClientId == "")
//    			{
//	    			document.querySelector('#alertMessage').innerHTML = "<strong>Duplicate!</strong> The GST No You Entered Is Already Register To "+myString.data[i].employeeName+" !";
//	        		$("#alertMessage").removeClass("HideThisElement");
//	        		$("#SubmitButtonUpdate").addClass("disabled");
//	        		$("#SubmitButtonUpdate").attr("disabled",true);
//	        		$("#SubmitButtonRegister").addClass("disabled");
//	        		$("#SubmitButtonRegister").attr("disabled",true);
//	        		break;
//    			}
//    		}
//    		else
//			{
//    			$("#alertMessage").addClass("HideThisElement");
//				$("#SubmitButtonUpdate").removeClass("disabled");
//				$("#SubmitButtonUpdate").attr("disabled",false);
//        		$("#SubmitButtonRegister").removeClass("disabled");
//        		$("#SubmitButtonRegister").attr("disabled",false);
//			}
//    	}
//    });
    
//    $('#RegisterNew').on( 'focusin', '#mobileno', function () {
//	        
//    });
    
    // For Drop Downs
   
//    
//    function createHTML3(Data) {
//    	var options3;
//    	$('#source').empty();
//        options3 = '<option value="" selected>Source</option>';
//        for (i = 0; i < Data.data.length; i++)
//        {
//        	if (Data.data[i].category == "Source") {
//        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
//    		}
//        }
//        $('#source').html(options3);
//        $('#source').material_select('refresh');
//    }    
    
	$("#SubmitButtonUpdate").click(function() {
    	var url = "../../../ClientUpdateServlet"; // the script where you handle the form input.
//    	if (document.getElementById("clientName").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("location").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("contactNo").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("source").value == "placeholder") {
//			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Source is not selected !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#editClientForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('<strong>Error!</strong>');
						} else {
							document.getElementById("editClientForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#EditClient').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							cardDataRefresh();
//							validationData();
							toastr.success('Client Details Updated Successfully!');
						}
	               },
	               error: function () {
	            	   toastr.error('<strong>Error!</strong>');
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
	
	$("#SubmitButtonUpdateContactP").click(function() {

    	var url = "../../../ContactPUpdateServlet"; // the script where you handle the form input.
//    	if (document.getElementById("clientName").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("location").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("contactNo").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("source").value == "placeholder") {
//			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Source is not selected !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#editContactPForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('<strong>Error!</strong>');
						} else {
							document.getElementById("editContactPForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#EditContactPerson').modal('hide');
							$('#datatables').DataTable().ajax.reload();
//							cardDataRefresh();
//							validationData();
							toastr.success('Contact Persons Details Updated Successfully!');
						}
	               },
	               error: function () {
	            	   toastr.error('<strong>Error!</strong>');
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
	
	$("#SubmitButtonUpdateAddress").click(function() {

    	var url = "../../../AddressUpdateServlet"; // the script where you handle the form input.
//    	if (document.getElementById("clientName").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("location").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("contactNo").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("source").value == "placeholder") {
//			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Source is not selected !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#editAddressForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('<strong>Error!</strong>');
						} else {
							document.getElementById("editAddressForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#EditAddress').modal('hide');
							$('#datatablesAddress').DataTable().ajax.reload();
							toastr.success('Address Updated Successfully!');
						}
	               },
	               error: function () {
	            	   toastr.error('<strong>Error!</strong>');
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    $("#SubmitButtonRegisterContactP").click(function() {

    	var url = "../../../RegisterContactPServlet"; // the script where you handle the form input.
//    	if (document.getElementById("companyName").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("location").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("website").value == "") {
//			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Website is not selected !";
//			$("#alertMessage").removeClass("HideThisElement");
//		} else {
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#editContactPForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Registered New Client!');
						} else{

		                	   document.getElementById("editContactPForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#EditContactPerson').modal('hide');
								$('#datatables').DataTable().ajax.reload();
								toastr.success('New Contact Person Registered Successfully!');
						}
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    
    $("#SubmitButtonRegisterAddress").click(function() {

    	var url = "../../../RegisterAddressServlet"; // the script where you handle the form input.
//    	if (document.getElementById("companyName").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("location").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("contactNo").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("website").value == "") {
//			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Website is not selected !";
//			$("#alertMessage").removeClass("HideThisElement");
//		} else {
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#editAddressForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Registered New Address!');
						} else{
		                	   document.getElementById("editAddressForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#EditAddress').modal('hide');
								$('#datatablesAddress').DataTable().ajax.reload();
								toastr.success('New Address Registered Successfully!');
						}
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    function loadBlankform() {
    	document.getElementById("editContactPForm").reset();
    	if ($('#clientId').val()  !== "") {
    		$('#selectedClientIdCntctPmod').val($('#clientId').val());
    	}
    	else {
			console.log("Id not set");
		}
        var generator = new IDGenerator();
        var contactPId = generator.generate();
		$('#newContctPId').val(contactPId);
    	$("#SubmitButtonRegisterContactP").removeClass("HideThisElement");
    	$("#SubmitButtonUpdateContactP").addClass("HideThisElement");
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('#designationContactP').material_select('refresh');
    	document.querySelector('#EditContactPerson #NewElement-modal-title').innerHTML = 'New Contact Person Details';
    	$('#EditContactPerson').modal('show');
    }
    
    function loadBlankform1() {
    	document.getElementById("editAddressForm").reset();
    	if ($('#clientId').val()  !== "") {
    		$('#selectedClientIdAddressmod').val($('#clientId').val());
    	}
    	else {
			console.log("Id not set");
		}
        var generator = new IDGenerator();
        var addressId = generator.generate();
		$('#newAddressPId').val(addressId);
    	$("#SubmitButtonRegisterAddress").removeClass("HideThisElement");
    	$("#SubmitButtonUpdateAddress").addClass("HideThisElement");
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('#state').material_select('refresh');
    	document.querySelector('#EditAddress #Address-modal-title').innerHTML = 'New Address Details';
    	$('#EditAddress').modal('show');
    }
    
    $("#DeleteEmployeeConfirmedContactP").click(function() {
    	var DeleteEmpId = document.querySelector('#DeleteEmpId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteContactPerson?Id='+DeleteEmpId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Employee!');
					} else {
						$('#centralModalDangerDemo').modal('hide');
						$('#selectedEmployeeId').val('');
						$('#datatables').DataTable().ajax.reload();
						toastr.success('Contact Person Deleted Successfully!');
					}
            }
		
		})
		return false; // avoid to execute the actual submit of the form.
    });
 
    $("#DeleteEmployeeConfirmedAddress").click(function(){
    	var DeleteEmpId = document.querySelector('#DeleteEmpId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteAddress?Id='+DeleteEmpId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Employee!');
					} else {
						$('#centralModalDangerDemo').modal('hide');
						$('#selectedEmployeeId').val('');
						$('#datatablesAddress').DataTable().ajax.reload();
						toastr.success('Address Deleted Successfully!');
					}
            }
		})
		return false; // avoid to execute the actual submit of the form.
    });
    
    $(".row").on( 'click', '#EditCompanyBtn', function () {
		if ($('#clientId').val()  !== "") {
			$('#selectedClientIdClntmod').val($('#clientId').val());
		}
		else {
			console.log("Id not set");
		}
	    if (document.getElementById('companyNameCard').value  !== "") {
	        $('#companyName').val(document.getElementById('companyNameCard').value);
	        $('#companyNameLbl').addClass("active");
	       }
	    if (document.getElementById('industryCard').value  !== "") {
	        $('#industry').val(document.getElementById('industryCard').value);
	        $('#industryLbl').addClass("active");
	       }
	    if (document.getElementById('locationCard').value  !== "") {
	        $('#location').val(document.getElementById('locationCard').value);
	        $('#locationLbl').addClass("active");
	       }
	    if (document.getElementById('creditTimeCard').value  !== "") {
	        $('#creditTime').val(document.getElementById('creditTimeCard').value);
	        $('#creditTimeLbl').addClass("active");
	       }
	    if (document.getElementById('creditLimitCard').value  !== "") {
	        $('#creditLimit').val(document.getElementById('creditLimitCard').value);
	        $('#creditLimitLbl').addClass("active");
	       }
	     $("#SubmitButtonRegister").addClass("HideThisElement");
	     $("#SubmitButtonUpdate").removeClass("HideThisElement");
	    $('#EditClient').modal('show');
	});
});