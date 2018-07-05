$(document).ready(function(){
	var generator = new IDGenerator();
    function cardDataRefresh(){
    	
    	var ourRequest1 = new XMLHttpRequest();
        var data1 = [];
        var companyId=document.getElementById('companyId').value;
        ourRequest1.open('GET', '../../../GetSpecificArchitectList?companyId='+companyId);
        
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
    	$('#stateId').val(Data.data[0].state);
        document.getElementById('companyNameCard').value = Data.data[0].companyName;
        $("#companyNameCardLbl").addClass("active");
        document.getElementById('locationCard').value = Data.data[0].location;
        $("#locationCardLbl").addClass("active");
        document.getElementById('websiteCard').value = Data.data[0].website;
        $("#websiteCardLbl").addClass("active");
        document.getElementById('contactNumberCard').value = Data.data[0].contactNo;
        $("#contactNumberCardLbl").addClass("active");
        document.getElementById('emailCard').value = Data.data[0].email;
        $("#emailCardLbl").addClass("active");
        document.getElementById('addressCard').value = Data.data[0].address;
        $("#addressCardLbl").addClass("active");
        document.getElementById('sourceCard').value = Data.data[0].source;
        $("#sourceCardLbl").addClass("active");
        document.getElementById('state_textCard').value = Data.data[0].state_text;
        $("#stateCardLbl").addClass("active");
        document.getElementById('gstNoCard').value = Data.data[0].gstNo;
        $("#gstNoCardLbl").addClass("active");
        
        }
    
    var ourRequest2 = new XMLHttpRequest();
    var data2 = [];
    ourRequest2.open('GET', '../../../GetLegendList');
    ourRequest2.onload = function() {
      if (ourRequest2.status >= 200 && ourRequest2.status < 400) {
    	data2 = JSON.parse(ourRequest2.responseText);
//        createHTML2(data2);
        createHTML3(data2);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest2.onerror = function() {
      console.log("Connection error");
    };
    
    ourRequest2.send();

    /*function createHTML2(Data) {
//    	var options3;
    	$('#source').empty();
        options3 = '<option value="" selected>Source</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Source") {
        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
        $('#source').html(options3);
        $('#source').material_select('refresh');
    }*/
    
    function createHTML3(Data) {
//    	var options3;
    	$('#designation').empty();
        options3 = '<option value="" selected>Designation</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Designation") {
        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
        $('#designation').html(options3);
        $('#designation').material_select('refresh');
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
   
    $('#datatables thead #filterrow th').each( function () {
    	var title = $(this).text();
        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
    });
	
    $("#datatables thead input").on('keyup change', function () {
        table.column($(this).parent().index() + ':visible')
            .search(this.value)
            .draw();
    });
    
	var table = $('#datatables').DataTable( {
		dom: 'Bfrtip',
        buttons: [
            {
                text: 'New Architect',
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
		"ajax": "../../../GetArcitectList?Id="+document.getElementById('companyId').value,
		"columns": [
        	 {
             	className: "center",
                 defaultContent:'<i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
            { "data": "name" },
            { "data": "description_text" },
            { "data": "contactNo" },
            { "data": "altContactNo" },
            { "data": "emailId" },
            { "data": "location" }
            
        ],
    } );
	
	$(".row").on( 'click', '#EditCompanyBtn', function () {
			document.querySelector('#NewElement-modal-title').innerHTML = "Edit Architect Details";
    	if ($('#companyId').val()  !== "") {
    		$('#selectedCompanyIdCompmod').val($('#companyId').val());
    	}
    	else {
			console.log("Id not set");
		}
    	$('#state').val($('#stateId').val()).material_select("refresh");
        if (document.getElementById('sourceCard').value  !== "") {
            $('#source').val(document.getElementById('sourceCard').value);
            $('#sourceLbl').addClass("active");
           }
        if (document.getElementById('companyNameCard').value  !== "") {
            $('#companyName').val(document.getElementById('companyNameCard').value);
            $('#companyNameLbl').addClass("active");
           }
        if (document.getElementById('locationCard').value  !== "") {
            $('#location').val(document.getElementById('locationCard').value);
            $('#locationLbl').addClass("active");
           }
        if (document.getElementById('websiteCard').value  !== "") {
            $('#website').val(document.getElementById('websiteCard').value);
            $('#websiteLbl').addClass("active");
           }
        if (document.getElementById('contactNumberCard').value  !== "") {
            $('#contactNo').val(document.getElementById('contactNumberCard').value);
            $('#contactNoLbl').addClass("active");
           }
        if (document.getElementById('emailCard').value  !== "") {
            $('#emailId').val(document.getElementById('emailCard').value);
            $('#emailIdLbl').addClass("active");
           }
        if (document.getElementById('addressCard').value  !== "") {
            $('#address').val(document.getElementById('addressCard').value);
            $('#addressLbl').addClass("active");
           }
        if (document.getElementById('gstNoCard').value  !== "") {
            $('#gstNo').val(document.getElementById('gstNoCard').value);
            $('#gstNoLbl').addClass("active");
           }
	     $("#SubmitButtonRegister").addClass("HideThisElement");
	     $("#SubmitButtonUpdate").removeClass("HideThisElement");
 		document.querySelector('#EditCompany #NewElement-modal-title').innerHTML = "Update Architect Company";
	     
	    $('#EditCompany').modal('show');
    });
	
    $('#datatables tbody').on( 'click', '.edit_me', function () {

    	var data = table.row( $(this).parents('tr') ).data();
    	console.log(data);
    		document.getElementById("editArchitectForm").reset();
//    		document.querySelector('#selectedArchitectId').value = data.architectId;
    		document.querySelector('#NewElement-modal-title-architect').innerHTML = 'Update Architect Details';
            $("#alertMessage").addClass("HideThisElement");
            $("#errorMessage").addClass("HideThisElement");
            if (data.architectId  !== "") {
        		$('#newArchitectIdMod').val(data.architectId);
        	}
            if (data.designation  !== "") {
                $('#designation').val(data.designation).material_select("refresh");
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
                $('#locationArch').val(data.location);
                $('#locationArchLbl').addClass("active");
               }
            if (data.contactNo  !== "") {
                $('#contactNoArch').val(data.contactNo);
                $('#contactNoArchLbl').addClass("active");
               }
            if (data.altContactNo  !== "") {
                $('#altContactNo').val(data.altContactNo);
                $('#altContactNoLbl').addClass("active");
               }
            if (data.emailId  !== "") {
                $('#emailIdArch').val(data.emailId);
                $('#emailIdArchLbl').addClass("active");
               }
         if (data.address  !== "") {
             $('#addressArch').val(data.address);
             $('#addressArchLbl').addClass("active");
            }
         if (data.gstNo  !== "") {
             $('#gstNo').val(data.gstNo);
             $('#gstNoLbl').addClass("active");
            }
         $("#SubmitButtonRegisterArchitect").addClass("HideThisElement");
         $("#SubmitButtonUpdateArchitect").removeClass("HideThisElement");
        $('#EditArchitect').modal('show');
    });
    
	$('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeleteEmpId').value = data.architectId;
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

    	var url = "../../../ArchitectCompanyUpdateServlet"; // the script where you handle the form input.
    	if (document.getElementById("source").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Source is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("location").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("contactNo").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("source").value == "placeholder") {
//			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Source is not selected !";
//    		$("#alertMessage").removeClass("HideThisElement");
		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#editCompanyForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('<strong>Error!</strong>');
						} else {
							document.getElementById("editCompanyForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#EditCompany').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							cardDataRefresh();
//							validationData();
							toastr.success('Company Details Updated Successfully!');
						}
	               },
	               error: function () {
	            	   toastr.error('<strong>Error!</strong>');
	               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
    	});
	
	$("#SubmitButtonUpdateArchitect").click(function() {

    	var url = "../../../ArchitectUpdateServlet"; // the script where you handle the form input.
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
	               data: $("#editArchitectForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('<strong>Error!</strong>');
						} else {
							document.getElementById("editCompanyForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#EditArchitect').modal('hide');
							$('#datatables').DataTable().ajax.reload();
//							cardDataRefresh();
//							validationData();
							toastr.success('Architect Details Updated Successfully!');
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
    
    $("#SubmitButtonRegisterArchitect").click(function() {

    	var url = "../../../RegisterArchitectServlet"; // the script where you handle the form input.
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
	               data: $("#editArchitectForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Registered New Client!');
						} else{

		                	   document.getElementById("editArchitectForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#EditArchitect').modal('hide');
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
    
    
    function loadBlankform() {
    	document.getElementById("editArchitectForm").reset();
    	if ($('#companyId').val()  !== "") {
    		$('#selectedCompanyIdArchmod').val($('#companyId').val());
    	}
    	else {
			console.log("Id not set");
		}
    	$("#SubmitButtonRegisterArchitect").removeClass("HideThisElement");
    	$("#SubmitButtonUpdateArchitect").addClass("HideThisElement");
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('#designation').material_select('refresh');
    	document.querySelector('#NewElement-modal-title-architect').innerHTML = 'New Architect Details';
    	$('#newArchitectIdMod').val(generator.generate());
    	$('#EditArchitect').modal('show');
    }
    
    $("#DeleteEmployeeConfirmed").click(function() {

    	var DeleteEmpId = document.querySelector('#DeleteEmpId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteArchitect?Id='+DeleteEmpId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Employee!');
					} else {
						$('#centralModalDangerDemo').modal('hide');
						$('#selectedEmployeeId').val('');
						$('#datatables').DataTable().ajax.reload();
//						validationData();
						toastr.success('Architect Deleted Successfully!');
					}
            }
		
		})
		return false; // avoid to execute the actual submit of the form.
    });
    
    
});