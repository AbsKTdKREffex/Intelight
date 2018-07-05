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
    
	var table = $('#datatables').DataTable({
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetPurchaseOrderList?flag=forpurchasefullfillment&flag1=forpurchasefullfillment",
		"columns": [
        	 {
        		 defaultContent: '<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
             },
             { "data": "rowId" },
             { "data": "companyName" },
             { "data": "formattedCreatedOn" }
        ],
        fixedColumns: true
    });

    $('#datatables tbody').on( 'click', '.select_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	$('#PurchaseOrder').val(data.rowId);
    	$("#POUpdateForm").removeClass("HideThisElement");
    	$("#PurchaseOrderList").addClass("HideThisElement");
    	fillTheVendorDetails();
    });
	
    function fillTheVendorDetails()
    {
        var getpurchaseOrderDetails = new XMLHttpRequest();

        getpurchaseOrderDetails.open('GET', '../../../GetpurchaseOrderItemList?purchaseOrderId=' + $("#PurchaseOrder").val());
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
                    	'<td style="padding-top: 15px;text-align: center;padding-left: 18px;"><input type="checkbox" id="' + purchaseOrder.data[i].rowId + '" onclick="removeReadOnly(\'' + purchaseOrder.data[i].rowId + '\')"><label for="' + purchaseOrder.data[i].rowId + '"></label></td>' +
                        '<td style="padding-top: 15px"><center>' + purchaseOrder.data[i].product_desc + '</td>' +
                        '<td style="padding-top: 15px"><center>' + purchaseOrder.data[i].quantity + '</td>' +
                        '<td style="padding-top: 15px;text-align: center;">' + purchaseOrder.data[i].balancedQty + '</td>' +
                        '<td style="text-align: center"><input type="number" style="width:30px;" id="qty' + purchaseOrder.data[i].rowId + '" name="qty" onkeyup="checkqty(\'' + purchaseOrder.data[i].rowId + '\',\'' + purchaseOrder.data[i].balancedQty + '\')" ReadOnly></td>' +
                        '<td style="text-align: center"><input type="number" style="width:50px;" id="ItemRate' + purchaseOrder.data[i].rowId + '" name="rate" step="0.01" ReadOnly></td>' +
                        '<td><input type="hidden" id="poitemid" name="poitemid" value="' + purchaseOrder.data[i].rowId + '"></td>' +
                        '<td><input type="hidden" id="oldQty' + purchaseOrder.data[i].rowId + '" name="poitemid" value="' + purchaseOrder.data[i].quantity + '"></td>' +
                        '</tr>';
                    
                    document.querySelector('#purchaseOrderTableBody').insertAdjacentHTML('beforeend', newHtml);
                }
            }
        };
        getpurchaseOrderDetails.send();
    }
    
    $("#Submit").click(function() {
        var generator = new IDGenerator();
        var table1 = document.getElementById('purchaseOrderTable');
        var rowCount = table1.rows.length;
        var successStatus = true;
        for(i=1; i < rowCount;i++)
        {
            var otherData = "receiptNo="+$('#receiptNo').val()+"&purchaseOrderId="+$('#purchaseOrderId').val();
            var orderId = generator.generate();
        	var row = table1.rows[i];
			if($(row.cells[4].childNodes[0]).val()=="")
			{
				continue;
			}
        	var fullfilled = "";
        	var formData = "";
			if(parseInt($(row.cells[4].childNodes[0]).val())==parseInt($(row.cells[3]).html()))
			{
				fullfilled = "yes";
			}
			else
			{
				fullfilled = "no";
			}
			otherData+="&fullfilled="+fullfilled;
			for(var j=0; j<$(row.cells).length; j++){
				if(j==4)
				{
					var name = $($(row.cells[j]).html()).attr('name');
					formData+=name+"="+parseFloat($(row.cells[j].childNodes[0]).val())+"&";
				}
				else if(j==5)
				{
					var name = $($(row.cells[j]).html()).attr('name');
					formData+=name+"="+parseFloat($(row.cells[j].childNodes[0]).val())+"&";
				}
				else
				{
					var name=$($(row.cells[j]).html()).attr('name');
					formData+=name+"="+$($(row.cells[j]).html()).attr('value')+"&";
				}
			}
			formData+=otherData+"&orderfullfillmentId="+orderId;
			console.log(formData);
        $.ajax({
            type: "GET",
            url: "../../../RegisterPurchaseFullfillment",
            data: formData ,
            success: function(data) {
                if (data == 0) {
                    successStatus = false;
                    return;
                } else {
                    successStatus = true;
                }
            }
        });
        }
        if (successStatus) {
            toastr.success('Order Placed Successfully!');
            location.reload();
        } else {
            toastr.error('Failed to Place Order!');
        }
    });
});