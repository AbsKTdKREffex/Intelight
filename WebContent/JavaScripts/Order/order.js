var boolfrprdct = true;
var total;
var tax = 0;
var datanew1 = [];

function showFunc()
{
	if(boolfrprdct)
	{
    	$('#productDiv').addClass('HideThisElement');
		$('#show').removeClass('fa-minus');
		$('#show').addClass('fa-plus');
		boolfrprdct = false;
	}
	else
	{
		$('#productDiv').removeClass('HideThisElement');
		$('#show').addClass('fa-minus');
		$('#show').removeClass('fa-plus');
		boolfrprdct = true;
		$('#datatables').DataTable().destroy();
	    fillProductData();
	}
}

function fillProductData()
{
    $('#datatables thead #filterrow th').each(function() {
        var title = $(this).text();
        $(this).html('<input type="text" style="font-size: 80%;padding:auto;text-align:center;width:80%;" placeholder="Search ' + title + '" />');
    });

    $("#datatables thead input").on('keyup change', function() {
        table.column($(this).parent().index() + ':visible')
            .search(this.value)
            .draw();
    });

    var table = $('#datatables').DataTable({
        "bLengthChange": false,
        "searching": true,
        "orderCellsTop": true,
        "sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
        "iDisplayLength": 5,
        "ajax": "../../../GetProductList",
        "columns": [{
                defaultContent: '<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i></center>'
            },
            { "data": "skuId" },
            { "data": "productType" },
            { "data": "brand_desc" },
            { "data": "product_desc" }

        ],
        fixedColumns: true
    });
    
    $('#datatables tbody').on('click', '.select_me', function() {
        var table1 = document.getElementById('productTable');
        var rowCount = table1.rows.length;
        var data = table.row($(this).parents('tr')).data();
        var idExists = false;
        for (var i = 1; i < rowCount; i++) {
            var row = table1.rows[i];
            var a = $(row.cells[0]).html();
            var idToCheck = $(a).attr('id');
            if (idToCheck == data.productId) {
                idExists = true;
                break;
            }
        }
        if (idExists) {
            toastr.error('Product Already Exists!');
        } else {
        var prodId = data.productId;
        var prodDesc = encodeURI(data.product_desc);
        var imgUploaded = data.imgUploaded;
        var uploadedImgName = data.uploadedImgName;
        var id = rowCount - 1;
        var taxPercentage;
        if (parseInt($('#dealerState').val()) == parseInt($('#compState').val())) {
            taxPercentage = data.Cgst + data.Sgst;
        } else {
            taxPercentage = data.Igst;
        }
        var price = parseFloat(data.bronze).toFixed(2);
//        console.log(data);
        var newHtml = '<tr>' +
            '<td style="padding-top: 15px;text-align: center;padding-left: 18px;"><input type="checkbox" id="' + data.productId + '" name="' + data.productId + '"><label for="' + data.productId + '"></label></td>' +
            '<td style="text-align: center;padding-top: 0%;"><img id="blah' + data.productId + '" src="../../../Images/upload.png" alt="upload image" style="max-width: 60px;max-height: 60px;" ></td>' +
            '<td style="padding-top: 15px;text-align: center;padding-bottom: 0%;"><span id="productDesc'+data.productId+'">' + data.product_desc + '</span><i class="fa fa-pencil-alt fa-1x pull-right" aria-hidden="true" id="faEdit'+prodId+'" onclick=editProduct(\''+prodId+'\')></i><i class="fa fa-check fa-1x pull-right HideThisElement" aria-hidden="true" id="faSub'+prodId+'" onclick=submitProduct(\''+prodId+'\',\''+prodDesc+'\')></i></td>' +
            '<td style="padding-top: 15px"><center>' + data.availableQty + '</td>' +
            '<td style="padding-top: 0px;width: 100px;"><center><select class="mdb-select" id="seg' + data.productId + '" name="seg" onchange="dropdwnChange(this,\''+data.productId+'\')"></select></td>' +
            '<td style="text-align: center;width:7%;"><input type="number" value=1 id="qty' + data.productId + '" name="qty" onkeyup="CheckInputStatusJob(this);"></td>' +
            '<td style="text-align: center"><input type="number" value=' + data.rate + ' style="width:50px;" id="ItemRate' + data.productId + '" name="rate" step="0.01" onkeyup="RateChangeFunc(this);" ReadOnly></td>' +
            '<td style="padding-top: 15px; text-align: center;" id="ItemAmt' + rowCount + '">' + price + '</td>' +
            '<td style="display: none;"></td>'+
            '<td style="display: none;"></td>'+
            '<td style="display:none;"><input type="hidden" id="hsn' + id + '" name="hsn" value="' + data.hsnId + '"></td>' +
            '<td style="display:none;"><input type="hidden" id="cgst' + id + '" name="cgst" value="' + data.Cgst + '"></td>' +
            '<td style="display:none;"><input type="hidden" id="sgst' + id + '" name="sgst" value="' + data.Sgst + '"></td>' +
            '<td style="display:none;"><input type="hidden" id="igst' + id + '" name="igst" value="' + data.Igst + '"></td>' +
            '<td style="display:none;"><input type="hidden" id="prod' + id + '" name="prod" value="' + data.productId + '"></td>' +
            '<td style="display:none;"><input type="hidden" id="tax' + id + '" name="tax" value="' + taxPercentage + '"></td>' +
            '<td style="display:none;"><input type="hidden" id="taxforchrges' + id + '" name="taxforchrges" value="' + tax + '"></td>' +
            '<td style="display:none;"><input type="hidden" id="additionalInfo' + data.productId + '" name="additionalInfo"></td>' +
            '<td style="text-align: center;padding-bottom: 0%;"><input type="number" value=0 min=0 max=100 style="width:50px;padding-top: 5%;" id="discount' + data.productId + '" name="discount"></td>' +
            '</tr>';
        document.querySelector('#productTableBody').insertAdjacentHTML('beforeend', newHtml);

        $('#seg' + data.productId).material_select();
        dropdwn(data.productId);
        checkImage(data.productId, data.imgUploaded, data.uploadedImgName);
    }
    });

    function dropdwn(id) {
        createHTML1(datanew1, id);
    }

    function createHTML1(Data, id) {
        var options1;
        $('#seg' + id).empty();
        for (i = 0; i < Data.data.length; i++) {
            if (Data.data[i].subCategory == "Customer Segment") {
                if (Data.data[i].description == "Bronze") {
                    options1 += "<option value='" + Data.data[i].rowid + "' selected>" + Data.data[i].description + "</option>";
                } else {
                    options1 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
                }
            }
        }
        options1 += "<option value='other'>Other</option>";
        $('#seg' + id).html(options1);
        $('#seg' + id).material_select('refresh');
    }
}

$(document).ready(function() {
	fillProductData();
    var generator = new IDGenerator();
    
    if ($('#selectedProjectId').val() == "null" && $('#selectedQuotationId').val() == "null" && $('#oid').val() == "null") {
        window.location.href = '../ProjectInfo/project.jsp?val=2';
    }
    $("#viewQuotation").hide();
    
    $('#installation').change(function() {
    	if($("#installation").val()=="")
    	{
    		$("#installation").val(0);
    	}
    });

    $('#transportation').change(function() {
    	if($("#transportation").val()=="")
    	{
    		$("#transportation").val(0);
    	}
    });

    $('#packaging').change(function() {
    	if($("#packaging").val()=="")
    	{
    		$("#packaging").val(0);
    	}
    });
    
    var getServiceTax = new XMLHttpRequest();
    
    getServiceTax.open('GET', '../../../GetHsnList');
    getServiceTax.onload = function() {
        if (getServiceTax.status <= 200 && getServiceTax.status <= 400) {
            var serviceTax = JSON.parse(getServiceTax.responseText);
            for (i = 0; i < serviceTax.data.length; i++)
            {
	            if(serviceTax.data[i].Hsnid=="SERVICETAX")
	            {
	                tax = serviceTax.data[i].Igst;
	            }
            }
        } else {
            //to do on error while loading json page
        }
    };
    
    getServiceTax.send();
	$("#successMessageOrder").addClass("HideThisElement");
    
	$('#contactPersonModal').on('shown.bs.modal', function (e) {
    	$('#contactPTable').DataTable().destroy();
    	generateContactPersonTable();
	})
	
	function generateContactPersonTable()
	{
	    $('#contactPTable thead #filterrow th').each(function() {
	        var title = $(this).text();
	        $(this).html('<input type="text" style="font-size: 80%;text-align:center;width:80%;" placeholder="Search ' + title + '" />');
	    });

	    // Apply the search
	    $("#contactPTable thead input").on('keyup change', function() {
	        table.column($(this).parent().index() + ':visible')
	            .search(this.value)
	            .draw();
	    });

	    var contactptable = $('#contactPTable').DataTable({
			dom: 'Bfrtip',
	        buttons: [
	            {
	                text: 'New Contact Person',
	                action: function ( e, dt, node, config ) {
	                	loadcontactpersonform();
	                }
	            }
	        ],
	        "bLengthChange": false,
	        "searching": true,
	        "orderCellsTop": true,
	        "sScrollX": "100%",
	        "sScrollXInner": "100%",
	        "bScrollCollapse": true,
	        "iDisplayLength": 5,
	        "ajax": "../../../GetContactPersonList?Id="+$('#selectedClientId').val(),
	        "columns": [{
	                className: "center",
	                defaultContent: '<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i></center>'
	            },
	            { "data": "name" },
	            { "data": "designation_text" },
	            { "data": "contactNo" },
	            { "data": "altContactNo" },
	            { "data": "emailId" },
	            { "data": "location" }

	        ],
	        fixedColumns: true
	    });
	    
		$('#contactPTable tbody').on( 'click', '.select_me', function () {
	    	var data = contactptable.row( $(this).parents('tr') ).data();
			$('#contactPerson').val(data.name);
			$("#contactPersonLbl").addClass("active");
			$('#contactPersonModal').modal('hide');
			$('#contactPersonId').val(data.clientId);
	    });
	}

	generateContactPersonTable();
	
    function showOrder()
	{
	    document.getElementById("orderId1").innerHTML = $('#oid').val();
    	var sum=0;
    	var sirNo=0;
    	var totalchrg = 0;
    	var igsttax = 0;
    	var cgsttax = 0;
    	var sgsttax = 0;
    	var taxDetailsArr=[];
    	var taxArr = [];
    	var ArrayAmount=[];
    	var foottbl = "";
    	var totalAmountPTax = 0;
    	var serviceTaxTotal =0;
//    	var isSameState = "";
        $.ajax({
            type: "GET",
            url: "../../../GetOrderList?oid="+$('#oid').val(),
            success: function(data) {
                if (data == 0) {
                	alert("No data");
                } else {
//                	console.log(data);
        			for(var i=0;i<data.data.length;i++){
        				sirNo = i+1;
                        var prdctDesc = "";
		        		if(data.data[i].additionalInfo == "")
		        		{
		        			prdctDesc = data.data[i].product_desc;
		        		}
		        		else
		        		{
		        			prdctDesc = data.data[i].product_desc +" ("+data.data[i].additionalInfo+")";
		        		}
        				var frmtbl='<tr>'+
        				'<td>'+sirNo+'</td>'+
        				'<td>'+prdctDesc+'</td>'+
        				'<td class="right">'+data.data[i].quantity+'</td>'+
        				'<td class="right">'+data.data[i].rate+'</td>'+
        				'<td class="right">'+parseFloat((data.data[i].quantity*data.data[i].rate)).toFixed(2)+'</td>'+
        			   '</tr>';
        				$("#orderClientName1").text(data.data[i].clientName);
        				document.querySelector('#orderSummaryBody').insertAdjacentHTML('beforeend', frmtbl);
        				$("#orderDate1").text(data.data[i].formattedCreatedOn);
        				
        				sum = sum+parseFloat((data.data[i].quantity*data.data[i].rate));
        				
            		    /*if(data.data[i].state_check == "different")
            		    {
            		    	isSameState = true;
            		    	igsttax = data.data[i].igst;
            		    }
            		    else
            		    {
            		    	isSameState = false;
            		    	cgsttax = data.data[i].cgst;
            		    	sgsttax = data.data[i].sgst;
            		    }*/
        		    	igsttax = data.data[i].igst;
        				taxDetailsArr.push({tax:data.data[i].tax, name:data.data[i].HsnName,cgst:data.data[i].cgst, sgst:data.data[i].sgst,igst:data.data[i].igst});
        				taxDetailsArr.push({tax:data.data[i].serviceTax, name:"serviceTax"});
        				taxArr.push(data.data[i].tax,data.data[i].serviceTax);
                		totalAmountPTax+=parseFloat(data.data[i].amount);
        			}
        			foottbl +='<tr>'+
        			'<td colspan="4" class="righttxt">Total Amount</td>'+
        			'<td class="right">'+sum.toFixed(2)+'</td>'+
        		    '</tr>';


                	var uniqueTax = taxDetailsArr.filter(function(itm, i, a) {
                	    return i == taxArr.indexOf(itm.tax);
                	});
//                	console.log(uniqueTax);
                	
                	var objAmount=[];
                	//finding the total amount according to the unique tax & storing it in associative array objamount
            		for(var i=0; i<uniqueTax.length;i++){
            			for(var j=0; j<data.data.length;j++){
            				if(uniqueTax[i].tax==data.data[j].tax){ 
//            					console.log("1");
            					if (objAmount[uniqueTax[i].tax]){
            						objAmount[uniqueTax[i].tax] = parseFloat(objAmount[uniqueTax[i].tax])+data.data[j].amount; 
            					}
            					else{
            						objAmount[uniqueTax[i].tax] = data.data[j].amount; 
            					}
            				}
            			}
            		}
            		
            		//for cleaning objAmount array and pushing valid values in arrayAmount
            		objAmount.forEach(function(element, index) {
            		    if(element != undefined || index  != undefined){
                		    ArrayAmount.push({index,element});
            		    }
            		});

            		for(var k=0;k<=ArrayAmount.length;k++){
            			if(ArrayAmount[k]!=undefined){
            				if(data.data[0].serviceTax==ArrayAmount[k].index){
            	    			ArrayAmount[k].element=ArrayAmount[k].element+parseFloat(data.data[0].installationChrg)+parseFloat(data.data[0].transportationChrg)+parseFloat(data.data[0].packagingChrg);
            	    			break;
            				}
            			}else{
            				ArrayAmount.push({index:data.data[0].serviceTax,element:parseFloat(data.data[0].installationChrg)+parseFloat(data.data[0].transportationChrg)+parseFloat(data.data[0].packagingChrg)});
            				break;
        	    		}
            		}
            		totalchrg = parseFloat(data.data[0].installationChrg)+parseFloat(data.data[0].transportationChrg)+parseFloat(data.data[0].packagingChrg);
            		totalAmountPTax+=parseFloat(totalchrg);
            		
        			foottbl +=	"<tr>"+
					                "<td colspan='4' class='righttxt'>"+"Installation Charges</td>"+
					                "<td class='right'>"+parseInt(data.data[0].installationChrg).toFixed(2)+"</td>"+
				                "</tr>"+
				                "<tr>"+
					                "<td colspan='4' class='righttxt'>"+"Transportation Charges</td>"+
					                "<td class='right'>"+parseInt(data.data[0].transportationChrg).toFixed(2)+"</td>"+
				                "</tr>"+
				                "<tr>"+
					                "<td colspan='4' class='righttxt'>"+"Packaging Charges</td>"+
					                "<td class='right'>"+parseInt(data.data[0].packagingChrg).toFixed(2)+"</td>"+
				                "</tr>";

        			for(var i=0;i<ArrayAmount.length;i++){
        				var taxCalc=0;
        				taxCalc = parseFloat(ArrayAmount[i].element)*parseFloat(ArrayAmount[i].index)/100;
        				foottbl +="<tr>"+
        							"<td colspan='4' class='righttxt'>"+"GST("+ArrayAmount[i].index+"%)</td>"+
        			                "<td class='right'>"+taxCalc.toFixed(2)+"</td>"+
        			               "</tr>";
        				serviceTaxTotal= serviceTaxTotal+taxCalc;
//        	    		console.log(taxCalc);
        			}
//            		console.log(serviceTaxTotal);
            		    foottbl +=
            			'<td colspan="4" class="righttxt">Total Payable Amount</td>'+
//            			'<td class="right">'+(parseFloat(sum) + (sum*cgsttax/100) + (sum*sgsttax/100)).toFixed(2)+'</td>'+
            			'<td class="right">'+Math.round((totalAmountPTax)+parseFloat(serviceTaxTotal)).toFixed(2)+'</td>'+
            			'</tr>';
            		    
    				document.querySelector('#orderSummaryFoot').insertAdjacentHTML('beforeend', foottbl);
        		}
            }
        });
    	$("#projectInformation").addClass("HideThisElement");
    	$("#otherInformation").addClass("HideThisElement");
    	$("#productInfo").addClass("HideThisElement");
    	$("#productList").addClass("HideThisElement");
    	$("#successMessageOrder").removeClass("HideThisElement");
	}
    
	if($('#oid').val() != "null")
	{
		showOrder();
	}
    // Get Project Details
	else if ($('#selectedProjectId').val() != "null") {
        var getProjectDetails = new XMLHttpRequest();
        getProjectDetails.open('GET', '../../../GetProjectDetails?selectedProjectId=' + $('#selectedProjectId').val());
        getProjectDetails.onload = function() {
            if (getProjectDetails.status <= 200 && getProjectDetails.status <= 400) {
                var projDetails = JSON.parse(getProjectDetails.responseText);

                $('#clientName').val(projDetails.data[0].clientName);
                $('#compState').val(projDetails.data[0].compState);
                $('#clientNameLbl').addClass("active");
                $('#architectCompany').val(projDetails.data[0].architectCompanyName);
                $('#architectCompanyLbl').addClass("active");
                $('#projectName').val(projDetails.data[0].projectName);
                $('#projectNameLbl').addClass("active");
                $('#contactPersonId').val(projDetails.data[0].clientContactId);
                $('#contactPerson').val(projDetails.data[0].conactPersonName);
        		$("#contactPersonLbl").addClass("active");
                $('#deliveryAddress').val(projDetails.data[0].projectName);
                $('#deliveryAddressLbl').addClass("active");
            } else {
            	
            }
        };
        getProjectDetails.send();
    } else if ($('#selectedQuotationId').val() != "null") {
    	document.getElementById("pageTitle").innerHTML = "Quotation Id: "+$('#selectedQuotationId').val();
        var getQuotationStatus = new XMLHttpRequest();
        var getProjectDetails = new XMLHttpRequest();
        var getQuotationDetails = new XMLHttpRequest();
        getQuotationStatus.open('GET', '../../../GetQuotationStatus?qid=' + $("#selectedQuotationId").val());

        getQuotationStatus.onload = function() {

            if (getQuotationStatus.status <= 200 && getQuotationStatus.status <= 400) {
                var projDetails = JSON.parse(getQuotationStatus.responseText);
                $('#selectedProjectId').val(projDetails.data[0].projectId);

                getProjectDetails.open('GET', '../../../GetProjectDetails?selectedProjectId=' + projDetails.data[0].projectId);
                getProjectDetails.onload = function() {

                    if (getProjectDetails.status <= 200 && getProjectDetails.status <= 400) {
                        var projDetails = JSON.parse(getProjectDetails.responseText);

                        $('#clientName').val(projDetails.data[0].clientName);
                        $('#compState').val(projDetails.data[0].compState);
                        $('#clientNameLbl').addClass("active");
                        $('#architectCompany').val(projDetails.data[0].architectCompanyName);
                        $('#architectCompanyLbl').addClass("active");
                        $('#projectName').val(projDetails.data[0].projectName);
                        $('#projectNameLbl').addClass("active");
                    } else {
                        //to do on error while loading json page
                    }
                };
                getProjectDetails.send();

                getQuotationDetails.open('GET', '../../../GetQuotationDetails?selectedQuotationId=' + $("#selectedQuotationId").val());
                getQuotationDetails.onload = function() {

                    if (getQuotationDetails.status <= 200 && getQuotationDetails.status <= 400) {
                        var projDetails = JSON.parse(getQuotationDetails.responseText);
                        $('#contactPersonId').val(projDetails.data[0].clientContactId);
                        $('#contactPerson').val(projDetails.data[0].contactPersonName);
                		$("#contactPersonLbl").addClass("active");
                        $('#deliveryAddress').val(projDetails.data[0].siteAddress);
                		$("#deliveryAddressLbl").addClass("active");
                        total = projDetails.data.length;
                        $('#installation').val(projDetails.data[0].installationChrg);
                        $('#installationLbl').addClass("active");
                        $('#transportation').val(projDetails.data[0].transportationChrg);
                        $('#transportationLbl').addClass("active");
                        $('#packaging').val(projDetails.data[0].packagingChrg);
                        $('#packagingLbl').addClass("active");
                        for (i = 0; i < total; i++) {
                            var table1 = document.getElementById('productTable');
                            var rowCount = table1.rows.length;
                            var id = rowCount - 1;
//                            var productInfo = projDetails.data[i].productName + " " + projDetails.data[i].brand_desc;
                            var taxPercentage;
                            var price = parseFloat(projDetails.data[i].price).toFixed(2);
                                    if (projDetails.data[i].isSameState) {
                                        taxPercentage = parseFloat(projDetails.data[i].Cgst) + parseFloat(projDetails.data[i].Sgst);
                                    } else {
                                        taxPercentage = parseFloat(projDetails.data[i].Igst);
                                    }
                                    
                            var prdctDesc = "";
			        		if(projDetails.data[i].additionalInfo == "")
			        		{
			        			prdctDesc = projDetails.data[i].description;
			        		}
			        		else
			        		{
			        			prdctDesc = projDetails.data[i].description +" ("+projDetails.data[i].additionalInfo+")";
			        		}

                            var newHtml = '<tr>' +
                                '<td style="padding-top: 15px;text-align: center;padding-left: 18px;"><input type="checkbox" id="' + projDetails.data[i].productId + '" name="' + projDetails.data[i].productId + '"><label for="' + projDetails.data[i].productId + '"></label></td>' +
                                '<td style="text-align: center;"><img id="blah' + projDetails.data[i].productId + '" src="../../../Images/upload.png" alt="upload image" style="max-width: 60px;max-height: 60px;" ></td>' +
                                '<td style="padding-top: 15px;text-align: center;padding-bottom: 0%;"><span id="productDesc'+projDetails.data[i].productId+'">' + prdctDesc + '</span><i class="fa fa-pencil-alt fa-1x pull-right" aria-hidden="true" id="faEdit'+projDetails.data[i].productId+'" onclick=editProduct(\''+projDetails.data[i].productId+'\')></i><i class="fa fa-check fa-1x pull-right HideThisElement" aria-hidden="true" id="faSub'+projDetails.data[i].productId+'" onclick=submitProduct(\''+projDetails.data[i].productId+'\',\''+encodeURI(projDetails.data[i].description)+'\')></i></td>' +
                                '<td style="padding-top: 15px"><center>' + projDetails.data[i].availableQty + '</td>' +
                                '<td style="padding-top: 0px;width: 100px;"><center><select class="mdb-select" id="seg' + projDetails.data[i].productId + '" name="seg" onchange="dropdwnChange(this,\''+projDetails.data[i].productId+'\')"></select></td>' +
                                '<td style="text-align: center;width:7%;"><input type="number" value=' + projDetails.data[i].quantity + ' style="width:30px;" id="qty' + projDetails.data[i].productId + '" name="qty" onkeyup="CheckInputStatusJob(this);"></td>' +
                                '<td style="text-align: center"><input type="number" value=' + projDetails.data[i].rate + ' style="width:50px;" id="ItemRate' + projDetails.data[i].productId + '" name="rate" step="0.01" onkeyup="RateChangeFunc(this);" ReadOnly></td>' +
                                '<td style="padding-top: 15px; text-align: center;" id="ItemAmt' + rowCount + '">' + parseFloat(projDetails.data[i].quantity*projDetails.data[i].rate).toFixed(2) + '</td>' +
                                '<td style="display: none;"></td>'+
                                '<td style="display: none;"></td>'+
                                '<td style="display:none;"><input type="hidden" id="hsn' + id + '" name="hsn" value="' + projDetails.data[i].hsnId + '"></td>' +
                                '<td style="display:none;"><input type="hidden" id="cgst' + id + '" name="cgst" value="' + projDetails.data[i].Cgst + '"></td>' +
                                '<td style="display:none;"><input type="hidden" id="sgst' + id + '" name="sgst" value="' + projDetails.data[i].Sgst + '"></td>' +
                                '<td style="display:none;"><input type="hidden" id="igst' + id + '" name="igst" value="' + projDetails.data[i].Igst + '"></td>' +
                                '<td style="display:none;"><input type="hidden" id="prod' + id + '" name="prod" value="' + projDetails.data[i].productId + '"></td>' +
                                '<td style="display:none;"><input type="hidden" id="tax' + id + '" name="tax" value="' + taxPercentage + '"></td>' +
                                '<td style="display:none;"><input type="hidden" id="taxforchrges' + id + '" name="taxforchrges" value="' + projDetails.data[i].serviceTax + '"></td>' +
                                '<td style="display:none;"><input type="hidden" id="additionalInfo' + projDetails.data[i].productId + '" name="additionalInfo" value="' + projDetails.data[i].additionalInfo + '"></td>' +
                                '<td style="text-align: center;padding-bottom: 0%;"><input type="number" value=' + projDetails.data[i].discount + ' min=0 max=100 style="width:50px;padding-top: 5%;" id="discount' + projDetails.data[i].productId + '" name="discount"></td>' +
                                '</tr>';
                            document.querySelector('#productTableBody').insertAdjacentHTML('beforeend', newHtml);

//                            $('#seg' + projDetails.data[i].productId).material_select();
                            dropdown(projDetails.data[i].productId,projDetails.data[i].segment);
                            checkImage(projDetails.data[i].productId, projDetails.data[i].imgUploaded, projDetails.data[i].imgName);
                    		if(projDetails.data[i].segment == "other")
                    		{
                    			$('#ItemRate'+projDetails.data[i].productId).removeAttr("ReadOnly");
                    		}
                        }

                        function dropdown(id,segment) {
                            var drpdown = new XMLHttpRequest();
                            var newdata1 = [];
                            drpdown.open('GET', '../../../GetLegendList');
                            drpdown.onload = function() {
                                if (drpdown.status >= 200 && drpdown.status < 400) {
                                    createHTMLinQua(JSON.parse(drpdown.responseText), id, segment);
                                } else {
                                    console.log("We connected to the server, but it returned an error.");
                                }
                            };
                            drpdown.onerror = function() {
                                console.log("Connection error");
                            };
                            drpdown.send();
                            
                        }

                        function createHTMLinQua(Data, id,segment) {
                            var options1;
                            $('#seg' + id).empty();
                            for (i = 0; i < Data.data.length; i++) {
                                if (Data.data[i].subCategory == "Customer Segment") {
                                    options1 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
                                }
                            }
                            options1 += "<option value='other'>Other</option>";
                            $('#seg' + id).html(options1);
                            $('#seg' + id).material_select('refresh');
                        	$('#seg' + id).val(segment).material_select("refresh");
                        }
                    } else {
                        //to do on error while loading json page
                    }
                };
                getQuotationDetails.send();
            } else {
                //to do on error while loading json page
            }
        };
        getQuotationStatus.send();
    }
	
    $('#billingAddressModal').on('shown.bs.modal', function (e) {
    	$('#addressTable').DataTable().destroy();
    	addressList();
	})

	function addressList()
    {
        $('#addressTable thead #filterrow th').each(function() {
            var title = $(this).text();
            $(this).html('<input type="text" style="font-size: 80%;text-align:center;width:80%;" placeholder="Search ' + title + '" />');
        });

        // Apply the search
        $("#addressTable thead input").on('keyup change', function() {
            table.column($(this).parent().index() + ':visible')
                .search(this.value)
                .draw();
        });

        var addresstable = $('#addressTable').DataTable({
    		dom: 'Bfrtip',
            buttons: [
                {
                    text: 'New Address',
                    action: function ( e, dt, node, config ) {
                    	loadBlankform();
                    }
                }
            ],
            "bLengthChange": false,
            "searching": true,
            "orderCellsTop": true,
            "sScrollX": "100%",
            "sScrollXInner": "100%",
            "bScrollCollapse": true,
            "iDisplayLength": 5,
            "ajax": "../../../GetAddressList?Id="+$('#selectedClientId').val(),
            "columns": [{
                    className: "center",
                    defaultContent: '<center><i class="fa fa-check fa-2x select_me" aria-hidden="true"></i></center>'
                }, {
                    "data": "companyName"
                }, {
                    "data": "location"
                }, {
                    "data": "branchName"
                }, {
                    "data": "address"
                }

            ]
        });
        
    	$('#addressTable tbody').on( 'click', '.select_me', function () {
        	var data = addresstable.row( $(this).parents('tr') ).data();
    		$('#billingAddress').val(data.address+", "+data.location);
    		$("#billingAddressLbl").addClass("active");
    		$('#gstNo').val(data.gstNo);
    		$("#gstNoLbl").addClass("active");
    		$('#stateId').val(data.state);
    		$('#state').val(data.state_text);
    		$("#stateLbl").addClass("active");
    		$('#billingAddressModal').modal('hide');
    		$('#billingAddressId').val(data.addressId);
        });

    	$('#addressTable tbody').on( 'click', '.delivery', function () {
        	var data = addresstable.row( $(this).parents('tr') ).data();
    		$('#deliveryAddress').val(data.address+", "+data.location);
    		$("#deliveryAddressLbl").addClass("active");
    		$('#billingAddressModal').modal('hide');
    		$('#deliveryAddressId').val(data.addressId);
        });
    }
    
    $('#salesPersonModal').on('shown.bs.modal', function (e) {
    	$('#salesTable').DataTable().destroy();
    	salesPersonList();
	})

	function salesPersonList()
    {
        $('#salesTable thead #filterrow th').each( function () {
        	var title = $(this).text();
            $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
        });
    	
        $("#salesTable thead input").on('keyup change', function () {
            table.column($(this).parent().index() + ':visible')
                .search(this.value)
                .draw();
        });
        
    	var salestable = $('#salesTable').DataTable( {
    		"bLengthChange": false,
    		"searching": true,
    		"orderCellsTop": true ,
    		"sScrollX": "100%",
            "sScrollXInner": "100%",
            "bScrollCollapse": true,
    		"ajax": "../../../GetEmployeeList2",
    		"columns": [
            	 {
                     defaultContent: '<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
                 },
                { "data": "employeeName" },
                { "data": "department_text" },
                { "data": "designation_text" },
                { "data": "mobileNo" },
                { "data": "emailId" }
                
            ]            
        } );
        
    	$('#salesTable tbody').on( 'click', '.select_me', function () {
        	var data = salestable.row( $(this).parents('tr') ).data();
    		$('#salesPerson').val(data.employeeName);
    		$("#salesPersonLbl").addClass("active");
    		$('#salesPersonModal').modal('hide');
    		$('#salesPersonId').val(data.employeeId);
        });
    }
    
    var getSelfCompDetails = new XMLHttpRequest();
    getSelfCompDetails.open('GET', '../../../GetCompanyInfo');

    getSelfCompDetails.onload = function() {

        if (getSelfCompDetails.status <= 200 && getSelfCompDetails.status <= 400) {
            var selfCompDetails = JSON.parse(getSelfCompDetails.responseText);
//            console.log(selfCompDetails);
            $('#dealerState').val(selfCompDetails.data[0].state);
        } else {
            //to do on error while loading json page
        }
    };
    getSelfCompDetails.send();

    var ourRequest1 = new XMLHttpRequest();
    ourRequest1.open('GET', '../../../GetLegendList');
    ourRequest1.onload = function() {
        if (ourRequest1.status >= 200 && ourRequest1.status < 400) {
        	datanew1 = JSON.parse(ourRequest1.responseText);
            createHTML3(datanew1);
            createHTML4(datanew1);
            createHTML5(datanew1);
            createHTML6(datanew1);
            createHTML7(datanew1);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    };

    ourRequest1.onerror = function() {
        console.log("Connection error");
    };
    ourRequest1.send();

    function createHTML3(Data) {
//    	var options3;
    	$('#designationContactP').empty();
        options3 = '<option value="" selected>Designation</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Designation") {
        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
        $('#designationContactP').html(options3);
        $('#designationContactP').material_select('refresh');
    }
    
    function createHTML4(Data) {
//    	var options3;
    	$('#modeOfPay').empty();
        options3 = '<option value="" selected>Mode Of Payment</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Payment Category") {
        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
        $('#modeOfPay').html(options3);
        $('#modeOfPay').material_select('refresh');
    }
    
    function createHTML5(Data) {
//    	var options3;
    	$('#invoiceType').empty();
        options3 = '<option value="" selected>Invoice Type</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Invoice Category") {
        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
        $('#invoiceType').html(options3);
        $('#invoiceType').material_select('refresh');
    }
    
    function createHTML6(Data) {
//    	var options3;
    	$('#salesDept').empty();
        options3 = '<option value="" selected>Sales Department</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Department") {
        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
        $('#salesDept').html(options3);
        $('#salesDept').material_select('refresh');
    }
    
    function createHTML7(Data) {
//    	var options3;
    	$('#priority').empty();
        options3 = '<option value="" selected>Priority</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Priority Category") {
        		options3 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
    		}
        }
        $('#priority').html(options3);
        $('#priority').material_select('refresh');
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
 	   var selectBox2 = document.getElementById("stateDD");
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
 	      $('#stateDD').append(options2.join("")).material_select();
 	      $('#stateDD').material_select('enable');
 	      $( "#stateDD" ).material_select( "refresh" )
 	  }
    
   ourRequest2.send();
   
    function loadBlankform() {
    	document.getElementById("newAddressForm").reset();
    	$("#selectedClientIdAddressmod").val($("#selectedClientId").val());
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('#RegisterNewAddress').modal('show');
    }

    function loadcontactpersonform() {
    	document.getElementById("editContactPForm").reset();
    	if ($('#selectedClientId').val()  !== "") {
    		$('#selectedClientIdCntctPmod').val($('#selectedClientId').val());
    	}
    	else {
			console.log("Id not set");
		}
//    	$("#statuscheckbox").attr("disabled",true);
//    	$("#checkboxlbl").addClass("disabled");
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('#designationContactP').material_select('refresh');
//        $('#customerSegment').material_select('refresh');
//        $('#industryType').material_select('refresh');
    	document.querySelector('#EditContactPerson #NewElement-modal-title').innerHTML = 'New Contact Person Details';
    	$('#EditContactPerson').modal('show');
    }
    
    $("#SubmitButtonRegisterAddress").click(function() {

    	var url = "../../../RegisterAddressServlet"; // the script where you handle the form input.
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
	               data: $("#newAddressForm").serialize()+"&newAddressPId="+generator.generate(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Registered New Address!');
						} else{
								var adddress = document.getElementById("address").value +", "+document.getElementById("locationAdd").value;
								$('#billingAddress').val(adddress);
								$("#billingAddressLbl").addClass("active");
								$('#deliveryAddress').val(adddress);
								$("#deliveryAddressLbl").addClass("active");
								$('#billingAddressId').val(data);
								$('#deliveryAddressId').val(data);
								document.getElementById("newAddressForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#RegisterNewAddress').modal('hide');
								$('#billingAddressModal').modal('hide');
								$('#addressTable').DataTable().ajax.reload();
								toastr.success('New Address Registered Successfully!');
						}
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    $("#SubmitButtonRegisterContactP").click(function() {
    	var url = "../../../RegisterContactPServlet"; // the script where you handle the form input.
//    	if (document.getElementById("companyName").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("location").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("website").value == "") {
//			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Website is not selected !";
//			$("#alertMessage").removeClass("HideThisElement");
//		} else {
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#editContactPForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Registered New Client!');
						} else{
								var name = document.getElementById("firstName").value +" "+document.getElementById("lastName").value;
								$('#contactPerson').val(name);
								$("#contactPersonLbl").addClass("active");
		                	   	document.getElementById("editContactPForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#EditContactPerson').modal('hide');
								$('#contactPersonModal').modal('hide');
								$('#contactPersonId').val(data);
								$('#contactPTable').DataTable().ajax.reload();
//								validationData();
		                	   	//document.querySelector('#infoMessage').innerHTML = "New Client Registered Successfully !";
								//$('#infoModal').modal('show');
								toastr.success('New Contact Person Registered Successfully!');
						}
	               }
	    	});
//	    }
        return false;
    	});

    $("#AddOrder").click(function() {
        var table1 = document.getElementById('productTable');
        var rowCount = table1.rows.length;
        var successStatus = true;
        var orderId = generator.generate();
        var otherData = "contactPersonId="+$('#contactPersonId').val()+"&gstNo="+$('#gstNo').val()+"&stateId="+$('#stateId').val()+"&expectedDelivery="+$('#expectedDelivery').val()+"&billingAddressId="+$('#billingAddressId').val()+"&deliveryAddress="+$('#deliveryAddress').val()+"&salesDept="+$('#salesDept').val()+"&salesPersonId="+$('#salesPersonId').val()+"&modeOfPay="+$('#modeOfPay').val()+"&invoiceType="+$('#invoiceType').val()+"&priority="+$('#priority').val();
        for(i=1; i < rowCount;i++)
        {
        	var row = table1.rows[i];
        	var formData = "";
			for(var j=0; j<$(row.cells).length; j++){
				if(j==0)
				{
					var name = $($(row.cells[j]).html()).attr('name');
					formData+="seg="+document.getElementById('seg'+name).value+"&";
				}
				else if(j==5)
				{
					var name = $($(row.cells[j]).html()).attr('name');
					formData+=name+"="+parseFloat($(row.cells[j].childNodes[0]).val())+"&";
				}
				else if(j==6)
				{
					var name = $($(row.cells[j]).html()).attr('name');
					formData+=name+"="+parseFloat($(row.cells[j].childNodes[0]).val())+"&";
				}
				else if(j==18)
				{
					var name = $($(row.cells[j]).html()).attr('name');
					formData+=name+"="+parseFloat($(row.cells[j].childNodes[0]).val())+"&";
				}
				else
				{
					var name=$($(row.cells[j]).html()).attr('name');
					formData+=name+"="+$($(row.cells[j]).html()).attr('value')+"&orderItemId="+generator.generate()+"&";
				}
			}
			formData+="orderId="+orderId+"&installation="+$("#installation").val()+"&transportation="+$("#transportation").val()+"&packaging="+$("#packaging").val()+"&projectId=" + document.getElementById('selectedProjectId').value+"&quotationId=" + document.getElementById('selectedQuotationId').value+"&count="+i+"&"+otherData;
			console.log(formData);
	        $.ajax({
	            type: "GET",
	            url: "../../../RegisterOrder",
	            data: formData ,
	            success: function(data) {
	                if (data == 0) {
	                    successStatus = true;
	                } else {
	                    successStatus = false;
	                }
	            }
	        });
        }
        if (successStatus) {
            toastr.success('Order Placed Successfully!');
            window.location.href = 'ListOrder.jsp?oid='+orderId;
        } else {
            toastr.error('Failed to Place Order!');
        }
        return false;
    });
    
    
    $("#DeleteProduct").click(function() {
        try {
            var table = document.getElementById('productTableBody');
            var rowCount = table.rows.length;
            for (var i = 0; i < rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[0];

                if (null != chkbox && true == chkbox.checked) {
                    table.deleteRow(i);
                    //        			calculateAmountPayable();
                    rowCount--;
                    i--;
                }
            }
        } catch (e) {
            alert(e);
        }
        return false; // avoid to execute the actual submit of the form.
    });

});

function editProduct(id)
{
	$('#productDesc'+id).html("<input type='text' id='inputInfo"+id+"' style='width:88%;' maxlength='180' value="+$('#additionalInfo'+id).val()+">");
	$('#faEdit'+id).addClass('HideThisElement');
	$('#faSub'+id).removeClass('HideThisElement');
}

function submitProduct(id,desc)
{
	var descDec = decodeURI(desc);
	/*var res = "";
	
	if(descDec.includes("("))
	{
		res = descDec.split("(");
		res = res[1].split(")");
		res = res[0];
	}
	console.log(res);*/
	var inputtedInfo = $('#inputInfo'+id).val();
	/*if(additionalInfo == "")
	{
		
	}*/
	
	$('#additionalInfo'+id).val(inputtedInfo);
	if(inputtedInfo == "")
	{
		$('#productDesc'+id).html(descDec);
	}
	else
	{
		$('#productDesc'+id).html(descDec+" ("+inputtedInfo+")");
	}
	$('#faEdit'+id).removeClass('HideThisElement');
	$('#faSub'+id).addClass('HideThisElement');
}