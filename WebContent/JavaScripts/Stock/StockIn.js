$(document).ready(function() {
	var generator = new IDGenerator();
//	
//    $('#datatables thead #filterrow th').each(function() {
//        var title = $(this).text();
//        $(this).html('<input type="text" style="font-size: 80%;padding:auto;text-align:center;width:80%;" placeholder="Search ' + title + '" />');
//    });
//
//    // Apply the search
//    $("#datatables thead input").on('keyup change', function() {
//        table.column($(this).parent().index() + ':visible')
//            .search(this.value)
//            .draw();
//    });
//
//    var table = $('#datatables').DataTable({
//        "bLengthChange": false,
//        "searching": true,
//        "orderCellsTop": true,
//        "sScrollX": "100%",
//        "sScrollXInner": "100%",
//        "iDisplayLength": 5,
//        "bScrollCollapse": true,
//        "ajax": "../../../GetProductList",
//        "columns": [{
//                className: "center",
//                defaultContent: '<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i></center>'
//            },
//            { "data": "ProductDescription" },
//            { "data": "brand_desc" },
//            { "data": "productName_desc" },
//            { "data": "nature_desc" },
//            { "data": "driver_desc" }
//
//        ],
//        fixedColumns: true
//    });
//    $('#datatables tbody').on('click', '.select_me', function() {
//        var table1 = document.getElementById('productTable');
//        var rowCount = table1.rows.length;
//        var data = table.row($(this).parents('tr')).data();
//        var idExists = false;
//        for (var i = 1; i < rowCount; i++) {
//            var row = table1.rows[i];
//            var a = $(row.cells[0]).html();
//            var idToCheck = $(a).attr('id');
//            if (idToCheck == data.productId) {
//                idExists = true;
//                break;
//            }
//        }
//        if (idExists) {
//            toastr.error('Product Already Exists!');
//        } else {
//            var prodId = data.productId;
//            var imgUploaded = data.imgUploaded;
//            var uploadedImgName = data.uploadedImgName;
//            var id = rowCount - 1;
//            var taxPercentage;
//            if (parseInt($('#dealerState').val()) == parseInt($('#compState').val())) {
//                taxPercentage = data.Cgst + data.Sgst;
//            } else {
//                taxPercentage = data.Igst;
//            }
//            var price = parseFloat(data.price).toFixed(2);
//            var newHtml = '<tr>' +
//                '<td style="padding-top: 15px;text-align: center;padding-left: 18px;"><input type="checkbox" id="' + data.productId + '" name="' + data.productId + '"><label for="' + data.productId + '"></label></td>' +
//                '<td style="text-align: center;"><img id="blah' + data.productId + '" src="../../../Images/upload.png" alt="upload image" style="max-width: 60px;max-height: 60px;" ></td>' +
//                '<td style="padding-top: 15px"><center>' + data.ProductDescription + '</td>' +
//                '<td style="padding-top: 15px"><center>' + data.skuId.toUpperCase() + '</td>' +
//                '<td style="text-align: center"><input type="number" value = 1 style="width:55px;" id="qty" name="qty"></td>' +
//                '</tr>';
//            document.querySelector('#productTableBody').insertAdjacentHTML('beforeend', newHtml);
//
//            checkImage(data.productId, data.imgUploaded, data.uploadedImgName);
//        }
//    });

//    $("#AddOrder").click(function() {
//        var generator = new IDGenerator();
//        var table1 = document.getElementById('productTable');
//        var rowCount = table1.rows.length;
//        var successStatus = true;
//        var otherData = "vendorName="+$('#vendorName').val()+"&receiptNo="+$('#receiptNo').val();
//        for(i=1; i < rowCount;i++)
//        {
//            var stockId = generator.generate();
//        	var row = table1.rows[i];
//        	var formData = "";
//			for(var j=0; j<$(row.cells).length; j++){
//				if(j==0){
//					var name = $($(row.cells[j]).html()).attr('name');
//					formData+="productId="+name+"&";
//				}
//				if(j==4)
//				{
//					var name = $($(row.cells[j]).html()).attr('name');
//					formData+=name+"="+parseFloat($(row.cells[j].childNodes[0]).val())+"&";
//				}
//				var name=$($(row.cells[j]).html()).attr('name');
//				formData+=name+"="+$($(row.cells[j]).html()).attr('value')+"&";
//			}
//			formData+="stockId="+stockId+"&"+otherData;
//			
//        $.ajax({
//            type: "GET",
//            url: "../../../RegisterStockIn",
//            data: formData , // serializes the form's elements.
//            success: function(data) {
//                if (data == 0) {
//                    successStatus = false;
//                    return;
//                } else {
//                    successStatus = true;
//                }
//            }
//        })
//        }
//        if (successStatus) {
//          window.location="AvailableStock.jsp";
//            
//        } else {
//            toastr.error('Failed to Place Order!');
//        }
//    });
//    
//    $("#DeleteProduct").click(function() {
//        try {
//            var table = document.getElementById('productTableBody');
//            var rowCount = table.rows.length;
//            for (var i = 0; i < rowCount; i++) {
//                var row = table.rows[i];
//                var chkbox = row.cells[0].childNodes[0];
//                if (null != chkbox && true == chkbox.checked) {
//                    table.deleteRow(i);
//                    //        			calculateAmountPayable();
//                    rowCount--;
//                    i--;
//                }
//            }
//        } catch (e) {
//            alert(e);
//        }
//        return false; // avoid to execute the actual submit of the form.
//    });
    var getPurchaseOrderItemDetails = new XMLHttpRequest();

    getPurchaseOrderItemDetails.open('GET', '../../../GetPOFullfillmentList');
    getPurchaseOrderItemDetails.onload = function() {

        if (getPurchaseOrderItemDetails.status <= 200 && getPurchaseOrderItemDetails.status <= 400) {
            var purchaseOrderDetails = JSON.parse(getPurchaseOrderItemDetails.responseText);
            total = purchaseOrderDetails.data.length;
            if(total==0)
            {
            	document.getElementById('purchaseOrderItemTable').innerHTML = "No Data";
            	document.getElementById('productTitle').innerHTML = "";
            	$('#CompletedOrder').addClass('HideThisElement');
            }
            else
            {
	            for (i = 0; i < total; i++) {
	                var newHtml = '<tr>' +
	                    '<td style="padding-top: 15px;text-align: center;padding-left: 18px;"><input type="checkbox" id="' + purchaseOrderDetails.data[i].rowId + '" name="' + purchaseOrderDetails.data[i].rowId + '"><label for="' + purchaseOrderDetails.data[i].rowId + '"></label></td>' +
	                    '<td style="padding-top: 15px"><center>' + purchaseOrderDetails.data[i].formattedCreatedOn + '</td>' +
	                    '<td style="padding-top: 15px"><center>' + purchaseOrderDetails.data[i].product_desc + '</select></td>' +
	                    '<td style="text-align: center">' + purchaseOrderDetails.data[i].quantity + '</td>' +
	                    '<td style="padding-top: 15px"><center>' + purchaseOrderDetails.data[i].purchaseOrderId + '</td>' +
	                    '<td style="padding-top: 15px"><center>' + purchaseOrderDetails.data[i].vendorName + '</td>' +
	                    '<td><input type="hidden" name="vendorId" value="' + purchaseOrderDetails.data[i].vendorId + '"></td>' +
	                    '<td><input type="hidden" name="productId" value="' + purchaseOrderDetails.data[i].productId + '"></td>' +
	                    '</tr>';
	                document.querySelector('#purchaseOrderItemTableBody').insertAdjacentHTML('beforeend', newHtml);
	            }
            }
        }
    };
    getPurchaseOrderItemDetails.send();
    
    $("#CompletedOrder").click(function() {
            var table1 = document.getElementById('purchaseOrderItemTable');
            var rowCount = table1.rows.length;
            var successStatus = true;
            var orderId = $('#orderId').val();
            for (var i = 0; i < rowCount; i++) {
            var stockId = generator.generate();
            var row = table1.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                var formData = "";
        		for(var j=0; j<$(row.cells).length; j++){
        		if(j==0){
        			var name = $($(row.cells[j]).html()).attr('name');
        			formData+="rowId="+name+"&";
        		}
        		if(j==3)
        		{
        			var name = "qty";
        			formData+=name+"="+$(row.cells[j]).html()+"&";
        		}
        		if(j==6)
        		{
					var name=$($(row.cells[j]).html()).attr('name');
					formData+=name+"="+$($(row.cells[j]).html()).attr('value')+"&";
        		}
        		if(j==7)
        		{
					var name=$($(row.cells[j]).html()).attr('name');
					formData+=name+"="+$($(row.cells[j]).html()).attr('value')+"&";
        		}
        		}
        		formData+="stockId="+stockId;	
        		console.log(formData);
        		$.ajax({
        			type: "GET",
        			url: "../../../RegisterStockIn",
        			data: formData , // serializes the form's elements.
        			success: function(data) {
        				if (data == 0) {
        					successStatus = false;
        					return;
        				} else {
        					successStatus = true;
        				}
        			}
        		})
                }
            }
            if (successStatus) {
                window.location.replace('AvailableStock.jsp');
            } else {
                toastr.error('Failed to Place Order!');
            }
    });

//  $("#AddOrder").click(function() {
//  });
    
//	var generator = new IDGenerator();
//    var table1 = document.getElementById('orderItemTable');
//    var rowCount = table1.rows.length;
//    var successStatus = true;
//    var orderId = $('#orderId').val();
//    for (var i = 0; i < rowCount; i++) {
//    var stockId = generator.generate();
//    var row = table1.rows[i];
//    var chkbox = row.cells[0].childNodes[0];
//
//    if (null != chkbox && true == chkbox.checked) {
//
//    	var row = table1.rows[i];
//        var formData = "";
//		for(var j=0; j<$(row.cells).length; j++){
//		if(j==0){
//			var name = $($(row.cells[j]).html()).attr('name');
//			formData+="productId="+name+"&";
//		}
//		if(j==3)
//			{
//				var name = "qty";
//				formData+=name+"="+$(row.cells[j]).html()+"&";
//			}
//		}
//		formData+="stockId="+stockId+"&orderItemId="+orderId;
//			
//        $.ajax({
//            type: "GET",
//            url: "../../../RegisterStockOut",
//            data: formData , // serializes the form's elements.
//            success: function(data) {
//                if (data == 0) {
//                    successStatus = false;
//                    return;
//                } else {
//                    successStatus = true;
//                }
//            }
//        })
//        }
//    }
//    if (successStatus) {
//        toastr.success('Stock Entered Successfully!');
//        setTimeout();
//        location.reload();
//        var table = document.getElementById("orderItemTableBody");
//        var rowCount = table.rows.length;
//        var table = document.getElementById('productTableBody');
//        for (var i = 0; i < rowCount; i++) {
//            var row = table.rows[i];
//            var chkbox = row.cells[0].childNodes[0];

//            if (null != chkbox && true == chkbox.checked) {
//                table.deleteRow(i);
//                rowCount--;
//                i--;
//            }
//        }
//        
//        $("#order").removeClass("HideThisElement");
//    	$("#orderItem").addClass("HideThisElement");

        //orderList(orderId);
        
//    } else {
//        toastr.error('Failed to Place Order!');
//    }
});