$(document).ready(function(){
	var generator = new IDGenerator();
	
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
                text: 'New Contractor',
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
		"ajax": "../../../GetElectricianCompanyList",
		"columns": [
        	 {
                 defaultContent: '<center><i class="edit_me fa fa-check fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
            { "data": "contractorCompanyName" },
            { "data": "contractorName" },
            { "data": "type_desc" },
            { "data": "location" },
            { "data": "contactNo" },
            { "data": "email" }
            
        ],
        fixedColumns: true
    } );
	
	$('#datatables tbody').on( 'click', '.edit_me', function () {
		var data = table.row( $(this).parents('tr') ).data();
		window.location = 'EditContractorCompany.jsp?Id=' + data.companyId;
    });
	
	$('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeleteElectricianId').value = data.companyId;
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
    
    var ourRequest1 = new XMLHttpRequest();
    var data1 = [];
    ourRequest1.open('GET', '../../../GetLegendList');
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

    function createHTML1(Data) {
    	var options1;
    	$('#type').empty();
        options1 = '<option value="">Type</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Contractor Category") {
        		options1 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
         $('#type').html(options1);
         $('#type').material_select('refresh');
        }


   var ourRequest2 = new XMLHttpRequest();
   var data2 = [];
   ourRequest2.open('GET', '../../../GetStateList');
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
   
   function createHTML3(petsData) {
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
   
  ourRequest2.send();
  
   
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
    
    $("#SubmitButtonRegister").click(function() {

    	var url = "../../../RegisterElectricianCompanyServlet"; // the script where you handle the form input.
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
	               data: $("#newElectricianForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Registered New Contractor!');
						} else{

		                	   document.getElementById("newElectricianForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#RegisterNewElectrician').modal('hide');
								$('#datatables').DataTable().ajax.reload();
//								validationData();
		                	   	//document.querySelector('#infoMessage').innerHTML = "New Client Registered Successfully !";
								//$('#infoModal').modal('show');
								toastr.success('New Contractor Registered Successfully!');
						}
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    function loadBlankform() {
    	document.getElementById("newElectricianForm").reset();
    	$("#SubmitButtonRegister").removeClass("HideThisElement");
    	$("#SubmitButtonUpdate").addClass("HideThisElement");
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('#newCompanyId').val(generator.generate());
    	$('#selectedElectricianId').val(generator.generate());
    	document.querySelector('#NewElement-modal-title').innerHTML = 'New Contractor Details';
    	$('#RegisterNewElectrician').modal('show');
    }
    
    $("#DeleteElectricianConfirmed").click(function() {

    	var DeleteCompId = document.querySelector('#DeleteElectricianId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteContractorCompany?DeleteCompId='+DeleteCompId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Contractor Company!');
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
						toastr.success('Contractor Company Deleted Successfully!');
					}
            }
		
		})
		return false; // avoid to execute the actual submit of the form.
    });
    
    
});