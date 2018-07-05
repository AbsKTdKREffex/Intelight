$(document).ready(function(){
//	validationData();
//	var myString;
//	function validationData() {
//		$.ajax({
//	        type: "GET",
//	        url: "../../../GetArchitectList",
//	        success: function(data)
//	        {
//				myString = data;
//	        }
//	    });
//	}
	
    
    function cardDataRefresh(){
    	
    	var ourRequest1 = new XMLHttpRequest();
        var data1 = [];
        var companyId=document.getElementById('contractorCompanyId').value;
        ourRequest1.open('GET', '../../../GetSpecificContractorCompanyList?companyId='+companyId);
        
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
//    	var options1;
//        for (i = 0; i < Data.data.length; i++)
//        {
//        	options1 +=  Data.data[i].rowid + ":" + Data.data[i].description ;
//        }
    	$('#typeId').val(Data.data[0].type);
    	$('#stateId').val(Data.data[0].state);
    	$('#altContactNumberCard').val(Data.data[0].altContactNo);
        document.getElementById('companyNameCard').value = Data.data[0].contractorCompanyName;
        $("#companyNameCardLbl").addClass("active");
        document.getElementById('contractorNameCard').value = Data.data[0].contractorName;
        $("#contractorNameCardLbl").addClass("active");
        document.getElementById('locationCard').value = Data.data[0].location;
        $("#locationCardLbl").addClass("active");
        document.getElementById('contactNumberCard').value = Data.data[0].contactNo;
        $("#contactNumberCardLbl").addClass("active");
        document.getElementById('emailCard').value = Data.data[0].email;
        $("#emailCardLbl").addClass("active");
        document.getElementById('typeCard').value = Data.data[0].type_text;
        $("#typeLbl").addClass("active");
        document.getElementById('gstNoCard').value = Data.data[0].gstNo;
        $("#gstNoCardLbl").addClass("active");
        document.getElementById('state_textCard').value = Data.data[0].state_text;
        $("#stateCardLbl").addClass("active");
        
        }
    
    var ourRequest2 = new XMLHttpRequest();
    var data2 = [];
    ourRequest2.open('GET', '../../../GetLegendList');
    ourRequest2.onload = function() {
      if (ourRequest2.status >= 200 && ourRequest2.status < 400) {
    	data2 = JSON.parse(ourRequest2.responseText);
        createHTML2(data2);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest2.onerror = function() {
      console.log("Connection error");
    };
    
    ourRequest2.send();

    function createHTML2(Data) {
//    	var options3;
    	$('#type').empty();
        options3 = '<option value="" selected>Type</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Contractor Category") {
        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
        $('#type').html(options3);
        $('#type').material_select('refresh');
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
   
    
	// for DataTable
	
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
    
    
    
	var table = $('#datatables').DataTable( {
		dom: 'Bfrtip',
        buttons: [
            {
                text: 'New Staff',
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
		"ajax": "../../../GetStaffList?Id="+document.getElementById('contractorCompanyId').value,
		"columns": [
        	 {
                 defaultContent:'<center><i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
            { "data": "staffName" },
            { "data": "contactNo" },
            { "data": "altContactNo" },
            { "data": "location" }
            
        ],
    } );
	
	$(".row").on( 'click', '#editContractorCompanyBtn', function () {
			document.querySelector('#NewElement-modal-title-Contractor-Company').innerHTML = "Edit Contractor Company Details";
			if ($('#contractorCompanyId').val()  !== "") {
	    		$('#selectedContractorCompanyIdContrctmod').val($('#contractorCompanyId').val());
	    	}
	    	else {
				console.log("Id not set");
			}
    	$('#type').val($('#typeId').val()).material_select("refresh");
    	$('#state').val($('#stateId').val()).material_select("refresh");
        if (document.getElementById('companyNameCard').value  !== "") {
            $('#companyName').val(document.getElementById('companyNameCard').value);
            $('#companyNameLbl').addClass("active");
           }
        if (document.getElementById('locationCard').value  !== "") {
            $('#location').val(document.getElementById('locationCard').value);
            $('#locationLbl').addClass("active");
           }
        if (document.getElementById('contractorNameCard').value  !== "") {
            $('#contractorName').val(document.getElementById('contractorNameCard').value);
            $('#contractorNameLbl').addClass("active");
           }
        if (document.getElementById('contactNumberCard').value  !== "") {
            $('#contactNo').val(document.getElementById('contactNumberCard').value);
            $('#contactNoLbl').addClass("active");
           }
        if (document.getElementById('altContactNumberCard').value  !== "") {
            $('#altContactNo').val(document.getElementById('altContactNumberCard').value);
            $('#altContactNoLbl').addClass("active");
           }
        if (document.getElementById('emailCard').value  !== "") {
            $('#email').val(document.getElementById('emailCard').value);
            $('#emailLbl').addClass("active");
           }
        if (document.getElementById('gstNoCard').value  !== "") {
            $('#gstNo').val(document.getElementById('gstNoCard').value);
            $('#gstNoLbl').addClass("active");
           }
	     
	    $('#ContractorCompany').modal('show');
    });
	
    $('#datatables tbody').on( 'click', '.edit_me', function () {

    	var data = table.row( $(this).parents('tr') ).data();
    		document.getElementById("staffForm").reset();
    		document.querySelector('#selectedStaffId').value = data.staffId;
    		document.querySelector('#NewElement-modal-title-Staff').innerHTML = 'Update Staff Details';
            $("#alertMessage").addClass("HideThisElement");
            $("#errorMessage").addClass("HideThisElement");
            if (data.staffName  !== "") {
                $('#name').val(data.staffName);
                $('#nameLbl').addClass("active");
               }
            if (data.location  !== "") {
                $('#locationStaff').val(data.location);
                $('#locationStaffLbl').addClass("active");
               }
            if (data.contactNo  !== "") {
                $('#contactNoStaff').val(data.contactNo);
                $('#contactNoStaffLbl').addClass("active");
               }
            if (data.altContactNo  !== "") {
                $('#altContactNoStaff').val(data.altContactNo);
                $('#altContactNoStaffLbl').addClass("active");
               }
         $("#SubmitButtonRegisterStaff").addClass("HideThisElement");
         $("#SubmitButtonUpdateStaff").removeClass("HideThisElement");
        $('#Staff').modal('show');
    });
    
	$('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeleteContractorId').value = data.staffId;
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
    
	$("#SubmitButtonUpdateContractor").click(function() {

    	var url = "../../../ContractorCompanyUpdateServlet"; // the script where you handle the form input.
//    	if (document.getElementById("source").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Source is mandatory !";
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
	               data: $("#contractorCompanyForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('<strong>Error!</strong>');
						} else {
							document.getElementById("contractorCompanyForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#ContractorCompany').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							cardDataRefresh();
							toastr.success('Company Details Updated Successfully!');
						}
	               },
	               error: function () {
	            	   toastr.error('<strong>Error!</strong>');
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
	
	$("#SubmitButtonUpdateStaff").click(function() {

    	var url = "../../../StaffUpdateServlet"; // the script where you handle the form input.
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
	               data: $("#staffForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('<strong>Error!</strong>');
						} else {
							document.getElementById("staffForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#Staff').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							toastr.success('Staff Details Updated Successfully!');
						}
	               },
	               error: function () {
	            	   toastr.error('<strong>Error!</strong>');
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
	
	
    $("#SubmitButtonRegister").click(function() {

    	var url = "../../../RegisterServlet"; // the script where you handle the form input.
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
	               data: $("#editCompanyForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Registered New Client!');
						} else{

		                	   document.getElementById("editCompanyForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#RegisterNewArchitect').modal('hide');
								$('#datatables').DataTable().ajax.reload();
//								validationData();
		                	   	//document.querySelector('#infoMessage').innerHTML = "New Client Registered Successfully !";
								//$('#infoModal').modal('show');
								toastr.success('New Architect Registered Successfully!');
						}
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    $("#SubmitButtonRegisterStaff").click(function() {

    	var url = "../../../RegisterStaffServlet"; // the script where you handle the form input.
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
	               data: $("#staffForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Registered New Staff!');
						} else{

		                	   document.getElementById("staffForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#Staff').modal('hide');
								$('#datatables').DataTable().ajax.reload();
//								validationData();
		                	   	//document.querySelector('#infoMessage').innerHTML = "New Client Registered Successfully !";
								//$('#infoModal').modal('show');
								toastr.success('New Staff Registered Successfully!');
						}
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    
    function loadBlankform() {
    	document.getElementById("staffForm").reset();
    	if ($('#contractorCompanyId').val()  !== "") {
    		$('#selectedContractorCompanyIdStaffmod').val($('#contractorCompanyId').val());
    	}
    	else {
			console.log("Id not set");
		}
    	$("#SubmitButtonRegisterStaff").removeClass("HideThisElement");
    	$("#SubmitButtonUpdateStaff").addClass("HideThisElement");
//    	$("#statuscheckbox").attr("disabled",true);
//    	$("#checkboxlbl").addClass("disabled");
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
//        $('#customerSegment').material_select('refresh');
//        $('#industryType').material_select('refresh');
    	document.querySelector('#NewElement-modal-title-Staff').innerHTML = 'New Staff';
    	$('#Staff').modal('show');
    }
    
    $("#DeleteContractorConfirmed").click(function() {

    	var DeleteEmpId = document.querySelector('#DeleteContractorId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteStaff?Id='+DeleteEmpId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Staff!');
					} else {
						//document.getElementById("newElementForm").reset();
						//$(".selectpicker").val('default');
						//$(".selectpicker").selectpicker("refresh");
						//$("#alertMessage").addClass("HideThisElement");
						//$("#errorMessage").addClass("HideThisElement");centralModalDangerDemo
						$('#centralModalDangerDemo').modal('hide');
						$('#selectedEmployeeId').val('');
						$('#datatables').DataTable().ajax.reload();
//						validationData();
						toastr.success('Staff Deleted Successfully!');
					}
            }
		
		})
		return false; // avoid to execute the actual submit of the form.
    });
    
    
});