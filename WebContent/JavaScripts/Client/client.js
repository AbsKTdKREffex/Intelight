$(document).ready(function(){
	var generator = new IDGenerator();
//	validationData();
//	var myString;
//	function validationData() {
//		$.ajax({
//	        type: "GET",
//	        url: "../../GetArchitectList",
//	        success: function(data)
//	        {
//				myString = data;
//	        }
//	    });
//	}
	
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
                text: 'New Client',
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
		"ajax": "../../../GetClientList",
		"columns": [
        	 {
                 defaultContent: '<center><i class="edit_me fa fa-check fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
            { "data": "companyName" },
            { "data": "industry" },
            { "data": "location" }
            
        ]
    } );
	
	$('#datatables tbody').on( 'click', '.edit_me', function () {
		var data = table.row( $(this).parents('tr') ).data();
		window.location = 'EditClient.jsp?Id=' + data.clientId;
    });
	
	
	$('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeleteEmpId').value = data.clientId;
    	$('#centralModalDangerDemo').modal('show');
    });
	
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
    	$('#designation').empty();
        options1 = '<option value="">Designation</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Designation") {
        		options1 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
         $('#designation').html(options1);
         $('#designation').material_select('refresh');
        }

	    var ourRequest2 = new XMLHttpRequest();
	    var data2 = [];
	    ourRequest2.open('GET', '../../../GetStateList');
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

	    function createHTML2(petsData) {
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
	  
    $("#SubmitButtonRegister").click(function() {
    	var url = "../../../RegisterClientServlet"; // the script where you handle the form input.
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
	               data: $("#newArchitectForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Registered New Client!');
						} else{

		                	   document.getElementById("newArchitectForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#RegisterNewArchitect').modal('hide');
								$('#datatables').DataTable().ajax.reload();
								toastr.success('New Client Registered Successfully!');
						}
	               }
	    	});
//	    }
        return false;
    	});
    
    function loadBlankform() {
    	document.getElementById("newArchitectForm").reset();
        var clientId = generator.generate();
        var contctpId = generator.generate();
        var addressId = generator.generate();
        $('#newClientId').val(clientId);
        $('#newContactPersonId').val(contctpId);
        $('#newClientAddressId').val(addressId);
    	$("#SubmitButtonRegister").removeClass("HideThisElement");
    	$("#SubmitButtonUpdate").addClass("HideThisElement");
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	document.querySelector('#NewElement-modal-title').innerHTML = 'New Client Details';
    	$('#RegisterNewArchitect').modal('show');
    }
    
    $("#DeleteEmployeeConfirmed").click(function() {
    	var DeleteEmpId = document.querySelector('#DeleteEmpId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteClient?DeleteEmpId='+DeleteEmpId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Employee!');
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
						toastr.success('Client Deleted Successfully!');
					}
            }
		
		})
		return false; // avoid to execute the actual submit of the form.
    });
});