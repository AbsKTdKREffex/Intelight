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
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetUniqueOrder?type="+'pending',
		"columns": [
        	 {
                 defaultContent: '<center><div class="fontElement"><i class="select_me fa fa-check fa-2x" id="select_me" aria-hidden="true"></i>'
             },
             { "data": "rowId" },
             { "data": "clientName" },
             { "data": "expectedDeilvery" },
             { "data": "deliveryAddressId" }
            
        ],
        fixedColumns: true
        
    });
	
    $('#datatables tbody').on( 'click', '.select_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	$('#orderId').val(data.rowId);	
    	//orderList($('#orderId').val());
    	$("#order").addClass("HideThisElement");
    	$("#orderItem").removeClass("HideThisElement");
    	orderList($('#orderId').val());
    });
    
    $("#CompletedOrder").click(function() {
        	var generator = new IDGenerator();
            var table1 = document.getElementById('orderItemTable');
            var rowCount = table1.rows.length;
            var successStatus = true;
            var orderId = $('#orderId').val();
            for (var i = 0; i < rowCount; i++) {
	            var stockId = generator.generate();
	            var row = table1.rows[i];
	            var chkbox = row.cells[0].childNodes[0];
	
	            if (null != chkbox && true == chkbox.checked) {
	
	            	var row = table1.rows[i];
	                var formData = "";
	        		for(var j=0; j<$(row.cells).length; j++){
	        		if(j==0){
	        			var name = $($(row.cells[j]).html()).attr('name');
	        			formData+="productId="+name+"&";
	        		}
	        		if(j==3)
	        			{
	        				var name = "qty";
	        				formData+=name+"="+$(row.cells[j]).html()+"&";
	        			}
	        		}
	        		formData+="stockId="+stockId+"&orderItemId="+orderId;
	        			
	                $.ajax({
	                    type: "GET",
	                    url: "../../../RegisterStockOut",
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
                toastr.success('Stock Entered Successfully!');
//                setTimeout();
                location.reload();
//                var table = document.getElementById("orderItemTableBody");
//                var rowCount = table.rows.length;
                

//                var table = document.getElementById('productTableBody');
//                for (var i = 0; i < rowCount; i++) {
//                    var row = table.rows[i];
//                    var chkbox = row.cells[0].childNodes[0];

//                    if (null != chkbox && true == chkbox.checked) {
//                        table.deleteRow(i);
//                        rowCount--;
//                        i--;
//                    }
//                }
//                
//                $("#order").removeClass("HideThisElement");
//            	$("#orderItem").addClass("HideThisElement");

                //orderList(orderId);
                
            } else {
                toastr.error('Failed to Place Order!');
            }
    });
    
    
    function orderList(id)
    {
    	var newHtml ="";
        var getOrderItemDetails = new XMLHttpRequest();
        
        getOrderItemDetails.open('GET', '../../../GetOrderList?oid='+id+'&type=pending');
        getOrderItemDetails.onload = function() {

            if (getOrderItemDetails.status <= 200 && getOrderItemDetails.status <= 400) {
                var orderItem = JSON.parse(getOrderItemDetails.responseText);
                total = orderItem.data.length;
                for (i = 0; i < total; i++) {
                    /*var table1 = document.getElementById('orderItemTable');
                    var rowCount = table1.rows.length;
                    var id = rowCount - 1;
    */				
                	console.log(orderItem.data[i]);
                    newHtml = '<tr>' +
                        '<td style="padding-top: 15px;text-align: center;padding-left: 18px;"><input type="checkbox" id="' + orderItem.data[i].rowId + '" name="' + orderItem.data[i].productId + '" onchange="checkBoxEvent(this,\''+orderItem.data[i].quantity+'\',\''+orderItem.data[i].availableQty+'\');"><label for="' + orderItem.data[i].rowId + '"></label></td>' +
                        '<td style="padding-top: 15px"><center>' + orderItem.data[i].product_desc + '</td>' +
                        '<td style="padding-top: 15px"><center>' + (orderItem.data[i].skuId).toUpperCase() + '</td>' +
                        '<td style="text-align: center">' + orderItem.data[i].quantity + '</td>' +
                        '<td style="text-align: center">' + orderItem.data[i].availableQty + '</td>' +
                        '</tr>';
                    document.querySelector('#orderItemTableBody').insertAdjacentHTML('beforeend', newHtml);
                }
            }
        };
        getOrderItemDetails.send();
    }
});

