$(document).ready(function(){
	var generator = new IDGenerator();	
	var myString;
	
	$.ajax({
        type: "GET",
        url: "../../../GetHsnList",
        success: function(data)
        {
			myString = data;
        }
    });

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
                text: 'New HSN',
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
		"ajax": "../../../GetHsnList",
		"columns": [
        	 {
                 defaultContent:'<center><i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
            { "data": "Hsnid" },
            { "data": "Sgstper" },
            { "data": "Cgstper" },
            { "data": "Igstper" }
            
        ],
        fixedColumns: true
    } );
	
    $('#datatables tbody').on( 'click', '.edit_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    		document.getElementById("newClientForm").reset();
    		document.querySelector('#selectedHsnRowId').value = data.rowId;
    		document.querySelector('#NewElement-modal-title').innerHTML = 'Update HSN Details';
            $("#alertMessage").addClass("HideThisElement");
            $("#errorMessage").addClass("HideThisElement");
            if (data.Hsnid  !== "") {
   			 $('#hsnId').val(data.Hsnid);
   			$('#hsnIdLbl').addClass("active");
   		 	}
   		 if (data.Sgst  !== "") {
   			 $('#sgst').val(data.Sgst);
   			$('#sgstLbl').addClass("active");
   		 	}
   		 if (data.Cgst  !== "") {
   			 $('#cgst').val(data.Cgst);
   			$('#cgstLbl').addClass("active");
   		 	}
   		 if (data.Igst  !== "") {
   			 $('#igst').val(data.Igst);
   			$('#igstLbl').addClass("active");
   		 	}
   		 if (data.Ugst  !== "") {
   			 $('#ugst').val(data.Ugst);
   			$('#ugstLbl').addClass("active");
   		 	}
         
         $("#SubmitButtonRegister").addClass("HideThisElement");
         $("#SubmitButtonUpdate").removeClass("HideThisElement");

        $('#RegisterNewClient').modal('show');
    } );
    
    $('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeleteEmpId').value = data.rowId;
    	$('#centralModalDangerDemo').modal('show');
    });
    
    $('#RegisterNewClient').on( 'focusout', '#hsnId', function () {
    	var hsnId=document.querySelector('#hsnId').value;
    	for(var i=0;i<myString.data.length;i++)
    	{
    		if(hsnId==myString.data[i].Hsnid)
    		{
    			document.querySelector('#alertMessage').innerHTML = "<strong>Duplicate!</strong> The HSN Id You Entered Is Already In Use By "+myString.data[i].employeeName+" !";
        		$("#alertMessage").removeClass("HideThisElement");
        		break;
    		}
    	}
    });
    
    $("#SubmitButtonRegister").click(function() {
    	var url = "../../../HsnRegisterServlet"; // the script where you handle the form input.
    	if (document.getElementById("hsnId").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> HSN Id is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("sgst").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> SGST is mandatory !";
		} else if (document.getElementById("cgst").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> CGST is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("igst").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> IGST is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newClientForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   if (data == 0) {
							toastr.error('Failed to Registered New HSN!');
						} else{

		                	   document.getElementById("newClientForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#RegisterNewClient').modal('hide');
								$('#datatables').DataTable().ajax.reload();
								toastr.success('New HSN Registered Successfully!');
						}
	               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    $("#SubmitButtonUpdate").click(function() {
    	var url = "../../../HsnUpdateServlet"; // the script where you handle the form input.
    	if (document.getElementById("hsnId").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> HSN Id is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("sgst").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> SGST is mandatory !";
		} else if (document.getElementById("cgst").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> CGST is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("igst").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> IGST is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else {
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newClientForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('<strong>Error!</strong>');
						} else {
							document.getElementById("newClientForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#RegisterNewClient').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							toastr.success('HSN Details Updated Successfully!');
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
    	document.getElementById("newClientForm").reset();
    	$('#selectedHsnRowId').val(generator.generate());
    	$("#SubmitButtonRegister").removeClass("HideThisElement");
    	$("#SubmitButtonUpdate").addClass("HideThisElement");
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	document.querySelector('#NewElement-modal-title').innerHTML = 'New HSN Details';
    	$('#RegisterNewClient').modal('show');
    }
    
    $("#DeleteEmployeeConfirmed").click(function() {
    	var DeleteEmpId = document.querySelector('#DeleteEmpId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteHsn?DeleteEmpId='+DeleteEmpId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete HSN!');
					} else {
						$('#centralModalDangerDemo').modal('hide');
						$('#datatables').DataTable().ajax.reload();
						toastr.success('HSN Deleted Successfully!');
					}
            }
		
		})
		return false; // avoid to execute the actual submit of the form.
    });
});