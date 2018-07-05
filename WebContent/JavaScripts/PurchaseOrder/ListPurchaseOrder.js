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
                text: 'New Purchase',
                action: function ( e, dt, node, config ) {
                  window.location.href = 'PurchaseOrder.jsp';
                }
            }
        ],
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetPurchaseOrderList?flag=listpurchaseorder",
		"columns": [
        	 {
                 defaultContent:'<center><i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
             { "data": "rowId" },
             { "data": "companyName" },
             { "data": "status_text" },
             { "data": "formattedCreatedOn" }
            
        ],
        fixedColumns: true
    });

    $('#datatables tbody').on( 'click', '.edit_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
		window.location.href = 'PurchaseOrder.jsp?poid='+data.rowId;
    });
	
	$('#datatables tbody').on( 'click', '.delete_me', function () {
		var data = table.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeletePurchaseId').value = data.rowId;
    	$('#centralModalDangerDemo').modal('show');
	});
    
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
       return false; // avoid to execute the actual submit of the form.
   	});
    
    $("#DeletePOConfirmed").click(function() {

    	var DeletePurchaseId = document.querySelector('#DeletePurchaseId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeletePurchaseOrder?DeletePurchaseId='+DeletePurchaseId,
            success: function(data)
            {
                if (data == 0)
                {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Purchase Order!');
				}
                else
                {
					$('#centralModalDangerDemo').modal('hide');
					$('#datatables').DataTable().ajax.reload();
					toastr.success('Purchase Order Deleted Successfully!');
				}
            }
		})
		return false; // avoid to execute the actual submit of the form.
    });
});