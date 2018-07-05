
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
    
//	var table = $('#datatables').DataTable( {
//		dom: 'Bfrtip',
//        buttons: [
//            {
//                text: 'New Order',
//                action: function ( e, dt, node, config ) {
//                	loadProjectRegistrationForm();
//                }
//            }
//        ],
//		"bLengthChange": false,
//		"searching": true,
//		"orderCellsTop": true ,
//		"sScrollX": "100%",
//        "sScrollXInner": "100%",
//        "bScrollCollapse": true,
//		"ajax": "../../../GetProjectSpecificOrder?projectid="+$('#projectId').val(),
//		"columns": [
//        	 {
//                 defaultContent: '<center><fieldset class="form-group"><input type="checkbox" id="checkbox1" checked="checked"></fieldset>'
//             },
//             { "data": "rowId" },
//             { "data": "clientName" },
//             { "data": "expectedDeilvery" },
//             { "data": "deliveryAddressId" }
//            
//        ],
//        fixedColumns: true
//    });
	
    var getQuotationDetails = new XMLHttpRequest();
    getQuotationDetails.open('GET', '../../../GetProjectSpecificOrder?projectid='+$('#projectId').val());
    getQuotationDetails.onload = function() {

                if (getQuotationDetails.status <= 200 && getQuotationDetails.status <= 400) {
                    var projDetails = JSON.parse(getQuotationDetails.responseText);
                    $('#contactPersonId').val(projDetails.data[0].clientContactId);
                    $('#contactPerson').val(projDetails.data[0].contactPersonName);
            		$("#contactPersonLbl").addClass("active");
                    $('#deliveryAddress').val(projDetails.data[0].siteAddress);
            		$("#deliveryAddressLbl").addClass("active");
                    total = projDetails.data.length;
                    for (i = 0; i < total; i++) {
                        var table1 = document.getElementById('productTable');
                        var rowCount = table1.rows.length;
                        var id = rowCount - 1;
//                        var productInfo = projDetails.data[i].productName + " " + projDetails.data[i].brand_desc;
                        var taxPercentage;
                        var price = parseFloat(projDetails.data[i].price).toFixed(2);
                                if (projDetails.data[i].isSameState) {
                                    taxPercentage = parseFloat(projDetails.data[i].Cgst) + parseFloat(projDetails.data[i].Sgst);
                                } else {
                                    taxPercentage = parseFloat(projDetails.data[i].Igst);
                                }

                        var newHtml = '<tr>' +
                            '<td style="padding-top: 15px;text-align: center;padding-left: 18px;"><input type="checkbox" id="' + projDetails.data[i].productId + '" name="' + projDetails.data[i].productId + '"><label for="' + projDetails.data[i].productId + '"></label></td>' +
                            '<td style="text-align: center;"><img id="blah' + projDetails.data[i].productId + '" src="../../../Images/upload.png" alt="upload image" style="max-width: 60px;max-height: 60px;" ></td>' +
                            '<td style="padding-top: 15px"><center>' + projDetails.data[i].description + '</td>' +
                            '<td style="padding-top: 0px;width: 100px;"><center><select class="mdb-select" id="seg' + projDetails.data[i].productId + '" name="seg" onchange="dropdwnChange(this)"></select></td>' +
                            '<td style="text-align: center"><input type="number" value=1 style="width:30px;" id="qty' + projDetails.data[i].productId + '" name="qty" onkeyup="CheckInputStatusJob(this);"></td>' +
                            '<td style="text-align: center"><input type="number" value=' + price + ' style="width:50px;" id="ItemRate' + projDetails.data[i].productId + '" name="rate" step="0.01" onkeyup="RateChangeFunc(this);" ReadOnly></td>' +
                            '<td style="padding-top: 15px; text-align: center;" id="ItemAmt' + rowCount + '">' + price + '</td>' +
                            '<td style="display: none;"><input type="hidden" id="hsn' + id + '" name="hsn" value="' + projDetails.data[i].hsnId + '"></td>' +
                            '<td style="display: none;"><input type="hidden" id="cgst' + id + '" name="cgst" value="' + projDetails.data[i].Cgst + '"></td>' +
                            '<td style="display: none;"><input type="hidden" id="sgst' + id + '" name="sgst" value="' + projDetails.data[i].Sgst + '"></td>' +
                            '<td style="display: none;"><input type="hidden" id="igst' + id + '" name="igst" value="' + projDetails.data[i].Cgst + '"></td>' +
                            '<td style="display: none;"><input type="hidden" id="prod' + id + '" name="prod" value="' + projDetails.data[i].productId + '"></td>' +
                            '<td style="display: none;"><input type="hidden" id="tax' + id + '" name="tax" value="' + taxPercentage + '"></td>' +
                            '</tr>';
                        document.querySelector('#productTableBody').insertAdjacentHTML('beforeend', newHtml);

                        $('#seg' + projDetails.data[i].productId).material_select();
                        dropdown(projDetails.data[i].productId);
//                        console.log(projDetails.data[i].productId);
                        checkImage(projDetails.data[i].productId, projDetails.data[i].imgUploaded, projDetails.data[i].imgName);

                    }
                    
                } else {
                    //to do on error while loading json page
                }
            };
            getQuotationDetails.send();
        
    $('#datatables tbody').on( 'click', '.select_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	window.location.href = 'order.jsp?oid='+data.rowId;
    });
});