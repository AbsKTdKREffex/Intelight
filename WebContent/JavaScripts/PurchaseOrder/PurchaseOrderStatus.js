
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
//    console.log($('#type').val());
	var table = $('#datatables').DataTable({
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetPurchaseOrderList?flag=forpurchaseorderstatus",
		"columns": [
	       	 {
	    		 defaultContent: '<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
	         },
	         { "data": "rowId" },
	         { "data": "companyName" },
	         { "data": "status_text" },
	         { "data": "formattedCreatedOn" }
        ],
        fixedColumns: true
    });
	
    $('#datatables tbody').on( 'click', '.select_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	$('#PurchaseOrder').val(data.rowId);
    	$("#POUpdateForm").removeClass("HideThisElement");
    	$("#PurchaseOrderList").addClass("HideThisElement");
    	$("#purchaseOrderTableBody tr").remove(); 
    	fillTheVendorDetails();
    });
    
    $("#Close").click(function() {
    	$("#POUpdateForm").addClass("HideThisElement");
    	$("#PurchaseOrderList").removeClass("HideThisElement");
    });
	
    function fillTheVendorDetails()
    {
        var getpurchaseOrderDetails = new XMLHttpRequest();
        console.log($("#PurchaseOrder").val());
        getpurchaseOrderDetails.open('GET', '../../../GetpurchaseOrderItemList?status=no&purchaseOrderId=' + $("#PurchaseOrder").val());
        getpurchaseOrderDetails.onload = function() {
        if (getpurchaseOrderDetails.status <= 200 && getpurchaseOrderDetails.status <= 400) {
                var purchaseOrder = JSON.parse(getpurchaseOrderDetails.responseText);
                total = purchaseOrder.data.length;
        	   	$('#purchaseOrderId').val(purchaseOrder.data[0].purchaseOrderId);
        		$("#purchaseOrderIdLbl").addClass("active");
                $('#selectedVendorId').val(purchaseOrder.data[0].vendorId);
                $('#vendorName').val(purchaseOrder.data[0].companyName);
        		$("#vendorNameLbl").addClass("active");
                $('#location').val(purchaseOrder.data[0].location);
        		$("#locationLbl").addClass("active");
                $('#contactPerson').val(purchaseOrder.data[0].contactPerson);
                $('#contactPersonLbl').addClass("active");
                $('#contactNo').val(purchaseOrder.data[0].contactNo);
                $('#contactNoLbl').addClass("active");
                $('#altContactNo').val(purchaseOrder.data[0].altContactNo);
                $('#altContactNoLbl').addClass("active");
                for (i = 0; i < total; i++) {
                    var table1 = document.getElementById('purchaseOrderTable');
                    var rowCount = table1.rows.length;
                    var id = rowCount - 1;

                    var newHtml = '<tr>' +
                    	'<td style="padding-top: 15px;text-align: center;padding-left: 18px;">' + purchaseOrder.data[i].i + '</td>' +
                        '<td style="padding-top: 15px"><center>' + purchaseOrder.data[i].product_desc + '</td>' +
                        '<td style="padding-top: 15px"><center>' + purchaseOrder.data[i].quantity + '</td>' +
                        '<td style="padding-top: 15px;text-align: center;">' + purchaseOrder.data[i].balancedQty + '</td>' +
                        '<td style="text-align: center">' + purchaseOrder.data[i].status_text + '</td>' +
                        '</tr>';
                    
                    document.querySelector('#purchaseOrderTableBody').insertAdjacentHTML('beforeend', newHtml);
                }
            }
        };
        getpurchaseOrderDetails.send();
    }
});