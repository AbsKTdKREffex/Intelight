$(document).ready(function(){
	
    $('#datatables thead #filterrow th').each( function () {
    	var title = $(this).text();
        $(this).html( '<input type="text" style="font-size: 80%;padding:auto;text-align:center;width:80%;" placeholder="Search '+title+'" />' );
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
                text: 'New Vendor',
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
		"ajax": "../../../GetVendorList",
		"columns": [
        	 {
                 defaultContent:'<center><i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
             { "data": "companyName" },
             { "data": "location" },
             { "data": "contactPerson" },
             { "data": "contactNo" },
             { "data": "emailId" },
             { "data": "gstNo" }
            
        ],
        fixedColumns: true
    });

    $('#datatables tbody').on( 'click', '.edit_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    		document.getElementById("newVendorForm").reset();
    		document.querySelector('#vendorId').value = data.rowId;
    		document.querySelector('#NewElement-modal-title').innerHTML = 'Update HSN Details';
            $("#alertMessage").addClass("HideThisElement");
            $("#errorMessage").addClass("HideThisElement");
            if (data.companyName  !== "") {
   			 $('#companyName').val(data.companyName);
   			$('#companyNameLbl').addClass("active");
   		 	}
   		 if (data.location  !== "") {
   			 $('#location').val(data.location);
   			$('#locationLbl').addClass("active");
   		 	}
   		 if (data.contactPerson  !== "") {
   			 $('#contactPerson').val(data.contactPerson);
   			$('#contactPersonLbl').addClass("active");
   		 	}
   		 if (data.contactNo  !== "") {
   			 $('#contactNo').val(data.contactNo);
   			$('#contactNoLbl').addClass("active");
   		 	}
   		 if (data.altContactNo  !== "") {
   			 $('#altContactNo').val(data.altContactNo);
   			$('#altContactNoLbl').addClass("active");
   		 	}
   		 if (data.emailId  !== "") {
   			 $('#emailId').val(data.emailId);
   			$('#emailIdLbl').addClass("active");
   		 	}
   		 if (data.gstNo  !== "") {
   			 $('#gstNo').val(data.gstNo);
   			$('#gstNoLbl').addClass("active");
   		 	}
   		 if (data.website  !== "") {
   			 $('#website').val(data.website);
   			$('#websiteLbl').addClass("active");
   		 	}
   		 if (data.creditLimit  !== "") {
   			 $('#creditLimit').val(data.creditLimit);
   			$('#creditLimitLbl').addClass("active");
   		 	}
   		 if (data.creditTime  !== "") {
   			 $('#creditTime').val(data.creditTime);
   			$('#creditTimeLbl').addClass("active");
   		 	}
   		 if (data.address  !== "") {
   			 $('#address').val(data.address);
   			$('#addressLbl').addClass("active");
   		 	}
		 if (data.state  !== "") {
			 $('#state').val(data.state).material_select("refresh");
		 	}
         
         $("#SubmitButtonRegister").addClass("HideThisElement");
         $("#SubmitButtonUpdate").removeClass("HideThisElement");

        $('#RegisterNewVendor').modal('show');
    } );
    
    $('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeleteVendorId').value = data.rowId;
    	$('#centralModalDangerDemo').modal('show');
    });
    
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
   
   function loadBlankform() {
   	document.getElementById("newVendorForm").reset();
   	var generator = new IDGenerator();
   	$('#vendorId').val(generator.generate());
   	$("#SubmitButtonRegister").removeClass("HideThisElement");
   	$("#SubmitButtonUpdate").addClass("HideThisElement");
   	$("#alertMessage").addClass("HideThisElement");
   	$("#errorMessage").addClass("HideThisElement");
   	document.querySelector('#NewElement-modal-title').innerHTML = 'New Vendor Details';
   	$('#RegisterNewVendor').modal('show');
   }

   $("#SubmitButtonRegister").click(function() {
   	var url = "../../../VendorRegisterServlet"; // the script where you handle the form input.
//   	if (document.getElementById("hsnId").value == "") {
//   		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> HSN Id is mandatory !";
//   		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("sgst").value ==  "") {
//			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> SGST is mandatory !";
//		} else if (document.getElementById("cgst").value == "") {
//   		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> CGST is mandatory !";
//   		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("igst").value == "") {
//   		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> IGST is mandatory !";
//   		$("#alertMessage").removeClass("HideThisElement");
//		} else {
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newVendorForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   if (data == 0) {
							toastr.error('Failed to Registered New Vendor!');
						} else{

		                	   document.getElementById("newVendorForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#RegisterNewVendor').modal('hide');
								$('#datatables').DataTable().ajax.reload();
								toastr.success('New Vendor Registered Successfully!');
						}
	               }
	    	});
//	    }
       return false; // avoid to execute the actual submit of the form.
   	});
   
   $("#SubmitButtonUpdate").click(function() {
   	var url = "../../../VendorUpdateServlet"; // the script where you handle the form input.
//   	if (document.getElementById("hsnId").value == "") {
//   		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> HSN Id is mandatory !";
//   		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("sgst").value ==  "") {
//			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> SGST is mandatory !";
//		} else if (document.getElementById("cgst").value == "") {
//   		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> CGST is mandatory !";
//   		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("igst").value == "") {
//   		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> IGST is mandatory !";
//   		$("#alertMessage").removeClass("HideThisElement");
//		} else {
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newVendorForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('<strong>Error!</strong>');
						} else {
							document.getElementById("newVendorForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#RegisterNewVendor').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							toastr.success('Vendor Details Updated Successfully!');
						}
	               },
	               error: function () {
	            	   toastr.error('<strong>Error!</strong>');
	               }
	    	});
//	    }
       return false;
   	});
    
    $("#DeleteVendorConfirmed").click(function() {
    	var DeleteVendorId = document.querySelector('#DeleteVendorId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteVendor?DeleteVendorId='+DeleteVendorId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Vendor!');
					} else {
						$('#centralModalDangerDemo').modal('hide');
						$('#datatables').DataTable().ajax.reload();
						toastr.success('Vendor Deleted Successfully!');
					}
            }
		
		})
		return false; // avoid to execute the actual submit of the form.
    });
});