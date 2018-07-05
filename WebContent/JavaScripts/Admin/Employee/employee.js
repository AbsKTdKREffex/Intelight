$(document).ready(function(){
	var myString;
	validationData();
	report();
	var generator = new IDGenerator();
	
	function validationData() {
	$.ajax({
        type: "GET",
        url: "../../../GetEmployeeList",
        success: function(data)
        {
			myString = data;
        }
    });
	}
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
                text: 'New Employee',
                action: function ( e, dt, node, config ) {
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
		"ajax": "../../../GetEmployeeList2",
		"columns": [
        	 {
             	className: "center",
                 defaultContent: '<i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'+
                 '<i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
            { "data": "employeeName" },
            { "data": "department_text" },
            { "data": "designation_text" },
            { "data": "userId" },
            { "data": "mobileNo" },
            { "data": "emailId" },
            { "data": "reporttext" },
            { "data": "status_text" }
            
        ],
        columnDefs: [
            { width: '25pc', targets: 1 },
            { width: '30pc', targets: 2 }
        ],
        fixedColumns: true
        
    } );
	
    $('#datatables tbody').on( 'click', '.edit_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    		document.getElementById("newElementForm").reset();
    		document.querySelector('#selectedEmployeeId').value = data.employeeId;
    		document.querySelector('#NewElement-modal-title').innerHTML = 'Update Employee Details';
    		document.getElementById("statuscheckbox").disabled = false;
    		 if (data.firstName  !== "") {
    			 $('#firstName').val(data.firstName);
    			 $('#firstNameLbl').addClass("active");
    		 	}
    		 if (data.lastName  !== "") {
    			 $('#lastName').val(data.lastName);
    			 $('#lastNameLbl').addClass("active");
    		 	}
    		 if (data.mobileNo  !== "0" ) {
    			 $('#mobileno').val(data.mobileNo);
    			 $('#mobilenoLbl').addClass("active");
    		 	}
    		 if (data.altContactNo  !== "0") {
    			 $('#altContactNo').val(data.altContactNo);
    			 $('#altContactNoLbl').addClass("active");
    		 	}
    		  if (data.emailId  !== "") {
    			 $('#emailId').val(data.emailId);
    			 $('#emailIdLbl').addClass("active");
    		 	}
    		  if (data.location  !== "") {
     			 $('#location').val(data.location);
     			$('#locationLbl').addClass("active");
     		 	}
    		 if (data.userId  !== "") {
    			 $('#UserId').val(data.userId);
    			 $('#UserIdLbl').addClass("active");
    		 	}
    		 if (data.birthdaydate  !== "") {
    			 $('#birthDate').val(data.birthdaydate);
    			 $('#birthDate').pickadate('set').set('select', data.birthdaydate);
    		 	}
    		 if (data.joiningdate  !== "") {
    			 $('#joinDate').val(data.joiningdate);
    			 $('#joinDate').pickadate('set').set('select', data.joiningdate);
    		 	}
    		 
    		 if (data.reportTo  !== "") {
    			 $('#reportTo').val(data.reportTo).material_select("refresh");
    		 	}
    		  if (data.department  !== "") {
    			 $('#department').val(data.department).material_select("refresh");
    		 	}
    		  if (data.designation  !== "") {
    			 $('#designation').val(data.designation).material_select("refresh");
    		 	}
    		 if (data.status_text  == "Inactive") {
    			 $("#statuscheckbox").prop("checked", false);
    		 	}
    		 $("#SubmitButtonRegister").addClass("HideThisElement");
    		 $("#SubmitButtonUpdate").removeClass("HideThisElement");
    		 $('#RegisterNew').modal('show');
    } );
    
    $('#datatables tbody').on( 'click', '.select_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
        document.querySelector('#ResetPassEmpId').value = data.employeeId;
    	$('#centralModalWarningDemo').modal('show');
    } );
    
    $('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeleteEmpId').value = data.employeeId;
    	$('#centralModalDangerDemo').modal('show');
    });
    
    //for validating the mobile number 
    $('#RegisterNew').on( 'focusout', '#mobileno', function () {
    	var mobile=document.querySelector('#mobileno').value;
    	var selectedEmployeeId=document.querySelector('#selectedEmployeeId').value;
    		for(var i=0;i<myString.data.length;i++)
        	{
        		if(mobile==myString.data[i].mobileNo)
        		{
        			if(selectedEmployeeId != myString.data[i].employeeId || selectedEmployeeId == "")
    				{
	        			document.querySelector('#alertMessage').innerHTML = "<center><strong>Duplicate!</strong> The Number You Entered Is Already In Use By "+myString.data[i].employeeName+" !</center>";
	            		$("#alertMessage").removeClass("HideThisElement");
	            		$("#alertMessage").delay(5000).fadeOut(100);
	            		$("#SubmitButtonUpdate").addClass("disabled");
		        		$("#SubmitButtonUpdate").attr("disabled",true);
		        		$("#SubmitButtonRegister").addClass("disabled");
		        		$("#SubmitButtonRegister").attr("disabled",true);
	            		break;
    				}
        		}
        		else
    			{
        			$("#alertMessage").addClass("HideThisElement");
    				$("#SubmitButtonUpdate").removeClass("disabled");
    				$("#SubmitButtonUpdate").attr("disabled",false);
            		$("#SubmitButtonRegister").removeClass("disabled");
            		$("#SubmitButtonRegister").attr("disabled",false);
    			}
        	}
    });
    
    $('#RegisterNew').on( 'focusout', '#emailId', function () {
    	var email=document.querySelector('#emailId').value;
    	var selectedEmployeeId=document.querySelector('#selectedEmployeeId').value;
    	for(var i=0;i<myString.data.length;i++)
    	{
    		if(email==myString.data[i].emailId)
    		{
    			if(selectedEmployeeId != myString.data[i].employeeId || selectedEmployeeId == "")
				{
	    			document.querySelector('#alertMessage').innerHTML = "<strong>Duplicate!</strong> The Email Id You Entered Is Already In Use By "+myString.data[i].employeeName+" !";
	        		$("#alertMessage").removeClass("HideThisElement");
	        		$("#SubmitButtonUpdate").addClass("disabled");
	        		$("#SubmitButtonUpdate").attr("disabled",true);
	        		$("#SubmitButtonRegister").addClass("disabled");
	        		$("#SubmitButtonRegister").attr("disabled",true);
        		break;
				}
    		}
    		else
			{
    			$("#alertMessage").addClass("HideThisElement");
				$("#SubmitButtonUpdate").removeClass("disabled");
				$("#SubmitButtonUpdate").attr("disabled",false);
        		$("#SubmitButtonRegister").removeClass("disabled");
        		$("#SubmitButtonRegister").attr("disabled",false);
			}
    	}
    });
    
    $('#RegisterNew').on( 'focusout', '#UserId', function () {
    	var usrid=document.querySelector('#UserId').value;
    	var selectedEmployeeId=document.querySelector('#selectedEmployeeId').value;
    	for(var i=0;i<myString.data.length;i++)
    	{
    		if(usrid==myString.data[i].userId)
    		{
    			if(selectedEmployeeId != myString.data[i].employeeId || selectedEmployeeId == "")
				{
	    			document.querySelector('#alertMessage').innerHTML = "<strong>Duplicate!</strong> The User Id You Entered Is Already In Use By "+myString.data[i].employeeName+" !";
	        		$("#alertMessage").removeClass("HideThisElement");
	        		$("#SubmitButtonUpdate").addClass("disabled");
	        		$("#SubmitButtonUpdate").attr("disabled",true);
	        		$("#SubmitButtonRegister").addClass("disabled");
	        		$("#SubmitButtonRegister").attr("disabled",true);
	        		break;
				}
    		}
    		else
			{
    			$("#alertMessage").addClass("HideThisElement");
				$("#SubmitButtonUpdate").removeClass("disabled");
				$("#SubmitButtonUpdate").attr("disabled",false);
        		$("#SubmitButtonRegister").removeClass("disabled");
        		$("#SubmitButtonRegister").attr("disabled",false);
			}
    	}
    });
    
//    $('#RegisterNew').on( 'focusin', '#mobileno', function () {
//	        
//    });
    
    // For Drop Downs
    
    var ourRequest1 = new XMLHttpRequest();
    var data1 = [];
    ourRequest1.open('GET', '../../../GetLegendList');
    ourRequest1.onload = function() {
      if (ourRequest1.status >= 200 && ourRequest1.status < 400) {
    	data1 = JSON.parse(ourRequest1.responseText);
        createHTML1(data1);
        createHTML3(data1);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest1.onerror = function() {
      console.log("Connection error");
    };


    ourRequest1.send();

    function createHTML1(Data) {
    	var options1;
    	$('#department').empty();
        options1 = '<option value="">Department select</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Department") {
        		options1 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
         $('#department').html(options1);
         $('#department').material_select('refresh');
        }
    
    function createHTML3(Data) {
    	var options3;
    	$('#designation').empty();
        options3 = '<option value="" selected>Designation select</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Designation") {
        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
        $('#designation').html(options3);
        $('#designation').material_select('refresh');
    }

    function report() {
    	var ourRequest11 = new XMLHttpRequest();
        var myString1 = [];
        ourRequest11.open('GET', '../../../GetEmployeeListForReport');
        ourRequest11.onload = function() {
        if (ourRequest11.status >= 200 && ourRequest11.status < 400) {
	    myString1 = JSON.parse(ourRequest11.responseText);
	    var options11;
      	$('#reportTo').empty();
          options11 = '<option value="" selected>Select Manager</option>'
          for (i = 0; i < myString1.data.length; i++)
          {
          		options11 += "<option value='" + myString1.data[i].employeeId + "'>" + myString1.data[i].employeeName + "</option>";
          }
           $('#reportTo').html(options11);
           $('#reportTo').material_select('refresh');
          } else {
            console.log("We connected to the server, but it returned an error.");
          }
        };

        ourRequest11.onerror = function() {
          console.log("Connection error");
        };
        ourRequest11.send();
        }

    $("#SubmitButtonRegister").click(function() {
    	var url = "../../../EmployeeRegisterServlet"; // the script where you handle the form input.
    	if (document.getElementById("firstName").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> First Name is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("lastName").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Last Name is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("department").value ==  "Department *") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Department is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("designation").value ==  "Designation *") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Designation is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("mobileno").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("location").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Location is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("UserId").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Unique User ID is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("birthDate").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Birthday Date is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("joinDate").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Joining Date is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else {
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newElementForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   if (data == 1) {
	                	   document.getElementById("newElementForm").reset();
							$(".selectpicker").val('default');
							$(".selectpicker").selectpicker("refresh");
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#RegisterNew').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							validationData();
							report();
							toastr.success('New Employee Registered Successfully!');
						} else{
								toastr.error('Failed to Registered New Employee!');
						}
	               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    $("#SubmitButtonUpdate").click(function() {
    	var url = "../../../EmployeeUpdateServlet"; // the script where you handle the form input.
    	if (document.getElementById("firstName").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> First Name is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("lastName").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Last Name is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("department").value ==  "placeholder") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Department is not selected !";
		} else if (document.getElementById("designation").value ==  "placeholder") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Designation is not selected !";
		} else if (document.getElementById("mobileno").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("emailId").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Email Id is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("location").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Location is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("UserId").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Unique User ID is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("birthDate").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Birthday Date is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("joinDate").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Joining Date is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newElementForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('<strong>Error!</strong>');
						} else {
							document.getElementById("newElementForm").reset();
							$(".selectpicker").val('default');
							$(".selectpicker").selectpicker("refresh");
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#RegisterNew').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							validationData();
							report();
							toastr.success('Employee Details Updated Successfully!');
						}
	               },
	               error: function () {
	            	   toastr.error('<strong>Error!</strong>');
	               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
    	});
	
    function loadBlankform() {
    	document.getElementById("newElementForm").reset();
    	$("#SubmitButtonRegister").removeClass("HideThisElement");
    	$("#SubmitButtonUpdate").addClass("HideThisElement");
    	$("#statuscheckbox").attr("disabled",true);
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	document.querySelector('#NewElement-modal-title').innerHTML = 'New Employee Details';
    	report();
    	$('#selectedEmployeeId').val(generator.generate());
    	$('#RegisterNew').modal('show');
    }
    
    $("#resetPasswordConfirmed").click(function() {
    	var ResetPassEmpId = document.querySelector('#ResetPassEmpId').value;
    	$.ajax({
            type: "GET",
            url: '../../../ResetPassword?ResetPassEmpId='+ResetPassEmpId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalWarningDemo').modal('hide');
                	toastr.error('Failed to Reset Password !');
				} else {
						$('#centralModalWarningDemo').modal('hide');
						toastr.success('Password Reset Successfully !');
					}
            }
		
		})
		return false;
    	});
    
    $("#DeleteEmployeeConfirmed").click(function() {
    	var DeleteEmpId = document.querySelector('#DeleteEmpId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteEmployee?DeleteEmpId='+DeleteEmpId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Employee!');
					} else {
						$('#centralModalDangerDemo').modal('hide');
						$('#selectedEmployeeId').val('');
						$('#datatables').DataTable().ajax.reload();
						validationData();
						report();
						toastr.success('Employee Deleted Successfully!');
					}
            }
		})
		return false; // avoid to execute the actual submit of the form.
    });
});