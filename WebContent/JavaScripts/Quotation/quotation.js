var boolfrprdct = true;
var total;
var tax = 0;

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
                taxPercentage = parseInt(data.Cgst) + parseInt(data.Sgst);
            } else {
                taxPercentage = parseInt(data.Igst);
            }
            var price = parseFloat(data.bronze).toFixed(2);
            var newHtml = '<tr>' +
                '<td style="padding-top: 15px;text-align: center;padding-left: 18px;padding-bottom: 0%;"><input type="checkbox" id="' + data.productId + '" name="' + data.productId + '"><label for="' + data.productId + '"></label></td>' +
                '<td style="text-align: center;padding-bottom: 0%;padding-top: 5px;"><img id="blah' + data.productId + '" src="../../../Images/upload.png" alt="upload image" style="max-width: 60px;max-height: 60px;" onclick="showImg('+data.imgUploaded+',\''+ data.uploadedImgName+'\')"></td>' +
                '<td style="padding-top: 15px;text-align: center;padding-bottom: 0%;"><span id="productDesc'+data.productId+'">' + data.product_desc + '</span><i class="fa fa-pencil-alt fa-1x pull-right" aria-hidden="true" id="faEdit'+prodId+'" onclick=editProduct(\''+prodId+'\')></i><i class="fa fa-check fa-1x pull-right HideThisElement" aria-hidden="true" id="faSub'+prodId+'" onclick=submitProduct(\''+prodId+'\',\''+prodDesc+'\')></i></td>' +
                '<td style="padding-top: 15px;text-align: center;padding-bottom: 0%;">' + data.availableQty + '</td>' +
                '<td style="padding-top: 0px;padding-bottom: 0%;width: 100px;text-align: center;"><select class="mdb-select" id="seg' + data.productId + '" name="seg" onchange="dropdwnChange(this,\''+data.productId+'\')"></select></td>' +
                '<td style="text-align: center;padding-bottom: 0%;"><input type="number" value=1 style="width:50px;padding-top: 5%;" id="qty' + data.productId + '" name="qty" onkeyup="CheckInputStatusJob(this);"></td>' +
                '<td style="text-align: center;padding-bottom: 0%;"><input type="number" value=' + price + ' style="width:50px;padding-top: 5%;" id="ItemRate' + data.productId + '" name="rate" step="0.01" onkeyup="RateChangeFunc(this);" ReadOnly></td>' +
                '<td style="padding-top: 2%; text-align: center;padding-bottom: 0%;" id="ItemAmt' + rowCount + '">' + price + '</td>' +
                '<td style="display:none;"></td>'+
                '<td style="display:none;"></td>'+
                '<td style="display:none;"><input type="hidden" id="hsn' + id + '" name="hsn" value="' + data.hsnId + '"></td>' +
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

    var ourRequest1 = new XMLHttpRequest();
    var datanew1 = [];
    ourRequest1.open('GET', '../../../GetLegendList');
    ourRequest1.onload = function() {
        if (ourRequest1.status >= 200 && ourRequest1.status < 400) {
        	datanew1 = JSON.parse(ourRequest1.responseText);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    };

    ourRequest1.onerror = function() {
        console.log("Connection error");
    };
    ourRequest1.send();
}

$(document).ready(function() {
	fillProductData();
	var generator = new IDGenerator();
	
    if ($('#selectedProjectId').val() == "null" && $('#selectedQuotationId').val() == "null") {
        window.location.href = '../ProjectInfo/project.jsp?val=2';
    }
	
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
    
    /*$("#show").click(function() {
    	console.log('button clicked');
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
    	}
    });*/
    
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
    
    if ($('#selectedProjectId').val() != "null") {
    	$('#AddProduct').removeClass("hideButton");
        $('#UpdateProduct').addClass("hideButton");
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
                
                document.querySelector('#projectNameMod').innerHTML = projDetails.data[0].projectName;
                document.querySelector('#clientNameMod').innerHTML = projDetails.data[0].clientName;
                document.querySelector('#architectCompanyMod').innerHTML = projDetails.data[0].architectCompanyName;
                document.querySelector('#clientContactPMod').innerHTML = projDetails.data[0].conactPersonName;
                document.querySelector('#architectMod').innerHTML = projDetails.data[0].architectName;
                document.querySelector('#assistArchitectMod').innerHTML = projDetails.data[0].architectAssisName;
                document.querySelector('#siteInchargeMod').innerHTML = projDetails.data[0].siteIncharge;
                document.querySelector('#siteInchargeNoMod').innerHTML = projDetails.data[0].siteInchargeNo;
                document.querySelector('#electricianMod').innerHTML = projDetails.data[0].electrician;
                document.querySelector('#electricianNoMod').innerHTML = projDetails.data[0].electricianNo;
                document.querySelector('#managerMod').innerHTML = projDetails.data[0].projectManagerName;
                document.querySelector('#overallHeightMod').innerHTML = projDetails.data[0].overallHeight;
                document.querySelector('#areaMod').innerHTML = projDetails.data[0].siteArea;
                document.querySelector('#noOfRoomMod').innerHTML = projDetails.data[0].noOfRooms;
                document.querySelector('#categoryMod').innerHTML = projDetails.data[0].projcategory_Desc;
                document.querySelector('#subCategoryMod').innerHTML = projDetails.data[0].projsubcategory_Desc;
                document.querySelector('#siteAddressMod').innerHTML = projDetails.data[0].siteAddress;
                
            } else {
                //to do on error while loading json page
            }
        };
        getProjectDetails.send();
    } else if ($('#selectedQuotationId').val() != "null") {
    	$('#AddProduct').addClass("hideButton");
        $('#UpdateProduct').removeClass("hideButton");
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
                
                var getRoomDetails = new XMLHttpRequest();
                getRoomDetails.open('GET', '../../../ShortLightPlacementDetails?selectedProjectId=' + projDetails.data[0].projectId);

                getRoomDetails.onload = function() {
                    if (getRoomDetails.status <= 200 && getRoomDetails.status <= 400) {
                        var RoomDetails = JSON.parse(getRoomDetails.responseText);
                        if (RoomDetails) {
                            var container = document.getElementById("roomCard");
                            total = RoomDetails.data.length;
                            for (i = 0; i < total; i++) {
                                var html = '<div class="col-lg-3 col-md-12 mb-r">' +
			                                    '<div class="card card-body">' +
				                                    '<h5 class=""><span class="card-link text-left panelTitle">' + RoomDetails.data[i].roomName + '</span><a class="card-link text-right"><i class="fa fa-info showRoom" aria-hidden="true" id="' + RoomDetails.data[i].rowid + '" onclick="showRoom(\''+encodeURI(RoomDetails.data[i].roomName)+'\',\''+encodeURI(RoomDetails.data[i].electricianName)+'\',\''+encodeURI(RoomDetails.data[i].sizeLBH)+'\',\''+encodeURI(RoomDetails.data[i].ceilingdepth)+'\',\''+encodeURI(RoomDetails.data[i].recommendationsGiven)+'\',\''+encodeURI(RoomDetails.data[i].lightPlacements)+'\',\''+encodeURI(RoomDetails.data[i].measurementDetails)+'\',\''+encodeURI(RoomDetails.data[i].samplesToBrought)+'\',\''+encodeURI(RoomDetails.data[i].samplesGiven)+'\',\''+encodeURI(RoomDetails.data[i].provisionForDrivers)+'\',\''+encodeURI(RoomDetails.data[i].picsTakenTable)+'\')"></i></a></h5>' +
				                                    '<p class="card-text mt-3 mb-4">' + RoomDetails.data[i].shrt + ' ...</p>' +
				                                    '<span class="text-right" id="seeMore"><a tabindex="0" data-trigger="focus" role="button" data-toggle="popover" data-placement="top" data-content="' + RoomDetails.data[i].lightPlacements + '" class="popOver" id="' + i + '">See More</a></span>' +
			                                    '</div>'+
			                                '</div>';

                                container.insertAdjacentHTML('beforeend', html);
                            }

                            $(function() {
                                $('[data-toggle="popover"]').popover()
                            })
                        }

                    }
                };
                getRoomDetails.send();

                getRoomDetails.onerror = function() {
                    console.log("error");
                }

                getQuotationDetails.open('GET', '../../../GetQuotationDetails?selectedQuotationId=' + $("#selectedQuotationId").val());
                getQuotationDetails.onload = function() {

                    if (getQuotationDetails.status <= 200 && getQuotationDetails.status <= 400) {
                        var projDetails = JSON.parse(getQuotationDetails.responseText);
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
                            var taxPercentage;
                            var price = parseFloat(projDetails.data[i].price).toFixed(2);
                                    if (projDetails.data[i].isSameState) {
                                        taxPercentage = parseFloat(projDetails.data[i].Cgst) + parseFloat(projDetails.data[i].Sgst);
                                    } else {
                                        taxPercentage = parseFloat(projDetails.data[i].Igst);
                                    }
//                            console.log(i,projDetails.data[i]);
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
		                                '<td style="text-align: center;padding-top: 0%;"><img id="blah' + projDetails.data[i].productId + '" src="../../../Images/upload.png" alt="upload image" style="max-width:60px;max-height:60px;" onclick="showImg(\''+projDetails.data[i].imgUploaded+'\',\''+ projDetails.data[i].imgName+'\')"></td>' +
		                                '<td style="padding-top: 15px;text-align: center;padding-bottom: 0%;"><span id="productDesc'+projDetails.data[i].productId+'">' + prdctDesc + '</span><i class="fa fa-pencil-alt fa-1x pull-right" aria-hidden="true" id="faEdit'+projDetails.data[i].productId+'" onclick=editProduct(\''+projDetails.data[i].productId+'\')></i><i class="fa fa-check fa-1x pull-right HideThisElement" aria-hidden="true" id="faSub'+projDetails.data[i].productId+'" onclick=submitProduct(\''+projDetails.data[i].productId+'\',\''+encodeURI(projDetails.data[i].description)+'\')></i></td>' +
		                                '<td style="padding-top: 15px"><center>' + projDetails.data[i].availableQty + '</td>' +
		                                '<td style="padding-top: 0px;width: 100px;"><center><select class="mdb-select" id="seg' + projDetails.data[i].productId + '" name="seg" onchange="dropdwnChange(this,\''+projDetails.data[i].productId+'\')"></select></td>' +
		                                '<td style="text-align: center"><input type="number" value='+projDetails.data[i].quantity+' style="width: 50px;padding-top: 5%;" id="qty' + projDetails.data[i].productId + '" name="qty" onkeyup="CheckInputStatusJob(this);"></td>' +
		                                '<td style="text-align: center"><input type="number" value=' + parseFloat(projDetails.data[i].rate).toFixed(2) + ' style="width:50px;padding-top: 5%;" id="ItemRate' + projDetails.data[i].productId + '" name="rate" step="0.01" onkeyup="RateChangeFunc(this);" ReadOnly></td>' +
		                                '<td style="padding-top: 15px; text-align: center;" id="ItemAmt' + rowCount + '">' + parseFloat(projDetails.data[i].amount).toFixed(2) + '</td>' +
		                                '<td style="display:none"></td>'+
		                                '<td style="display:none"></td>'+
		                                '<td style="display:none"><input type="hidden" id="hsn' + id + '" name="hsn" value="' + projDetails.data[i].hsnId + '"></td>' +
		                                '<td style="display:none"><input type="hidden" id="prod' + id + '" name="prod" value="' + projDetails.data[i].productId + '"></td>' +
		                                '<td style="display:none"><input type="hidden" id="tax' + id + '" name="tax" value="' + taxPercentage + '"></td>' +
		                                '<td style="display:none"><input type="hidden" id="taxforchrges' + id + '" name="taxforchrges" value="' + projDetails.data[i].serviceTax + '"></td>' +
		                                '<td style="display:none;"><input type="hidden" id="additionalInfo' + projDetails.data[i].productId + '" name="additionalInfo" value="' + projDetails.data[i].additionalInfo + '"></td>' +
		                                '<td style="text-align: center;padding-bottom: 0%;"><input type="number" value=' + projDetails.data[i].discount + ' min=0 max=100 style="width:50px;padding-top: 5%;" id="discount' + projDetails.data[i].productId + '" name="discount"></td>' +
		                                '</tr>';
                            document.querySelector('#productTableBody').insertAdjacentHTML('beforeend', newHtml);
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

    var getRoomDetails = new XMLHttpRequest();
    getRoomDetails.open('GET', '../../../ShortLightPlacementDetails?selectedProjectId=' + $('#selectedProjectId').val());

    getRoomDetails.onload = function() {
        if (getRoomDetails.status <= 200 && getRoomDetails.status <= 400) {
            var RoomDetails = JSON.parse(getRoomDetails.responseText);
            if (RoomDetails) {
                var container = document.getElementById("roomCard");
                total = RoomDetails.data.length;
                for (i = 0; i < total; i++) {
                    var html = '<div class="col-lg-3 col-md-12 mb-r">' +
                        '<div class="card card-body">' +
                        '<h5 class=""><span class="card-link text-left panelTitle">' + RoomDetails.data[i].roomName + '</span><a class="card-link text-right"><i class="fa fa-info showRoom" aria-hidden="true" id="' + RoomDetails.data[i].rowid + '" onclick="showRoom(\''+encodeURI(RoomDetails.data[i].roomName)+'\',\''+encodeURI(RoomDetails.data[i].electricianName)+'\',\''+encodeURI(RoomDetails.data[i].sizeLBH)+'\',\''+encodeURI(RoomDetails.data[i].ceilingdepth)+'\',\''+encodeURI(RoomDetails.data[i].recommendationsGiven)+'\',\''+encodeURI(RoomDetails.data[i].lightPlacements)+'\',\''+encodeURI(RoomDetails.data[i].measurementDetails)+'\',\''+encodeURI(RoomDetails.data[i].samplesToBrought)+'\',\''+encodeURI(RoomDetails.data[i].samplesGiven)+'\',\''+encodeURI(RoomDetails.data[i].provisionForDrivers)+'\',\''+encodeURI(RoomDetails.data[i].picsTakenTable)+'\')"></i></a></h5>' +
                        '<p class="card-text mt-3 mb-4">' + RoomDetails.data[i].shrt + ' ...</p>' +
                        '<span class="text-right" id="seeMore"><a tabindex="0" data-trigger="focus" role="button" data-toggle="popover" data-placement="top" data-content="' + RoomDetails.data[i].lightPlacements + '" class="popOver" id="' + i + '">See More</a></span>' +
                        '</div></div>'

                    container.insertAdjacentHTML('beforeend', html);
                }

                $(function() {
                    $('[data-toggle="popover"]').popover()
                })
            }
        }
    };
    getRoomDetails.send();

    getRoomDetails.onerror = function() {
        console.log("error");
    }

    $("#AddProduct").click(function() {
        var table1 = document.getElementById('productTable');
        var rowCount = table1.rows.length;
        var qotatn = generator.generate();
        for(i=1; i < rowCount;i++)
        {
        	var row = table1.rows[i];
        	var formData = "";
			for(var j=0; j<$(row.cells).length; j++){
				if(j==0){
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
				else if(j==15)
				{
					var name = $($(row.cells[j]).html()).attr('name');
					formData+=name+"="+parseFloat($(row.cells[j].childNodes[0]).val())+"&";
				}
				else
				{
					var name=$($(row.cells[j]).html()).attr('name');
					formData+=name+"="+$($(row.cells[j]).html()).attr('value')+"&quotationItemId="+generator.generate()+"&";
				}
			}
			formData+="quotaionId="+qotatn+"&installation="+$("#installation").val()+"&transportation="+$("#transportation").val()+"&packaging="+$("#packaging").val()+"&projectId=" + document.getElementById('selectedProjectId').value+"&count="+i;
			console.log(formData);
	        $.ajax({
	            type: "GET",
	            url: "../../../RegisterQuotation",
	            data: formData,
	            success: function(data) {
	                console.log(parseInt(data));
	                if (data == 0) {
	                    toastr.error('Failed to Place Order!');
	                    return;
	                } else {
	                	window.location.replace('ViewQuotation.jsp?qid=' + parseInt(data));
	                }
	            }
	
	        });
        }
    });
    
    $("#UpdateProduct").click(function() {
        var table1 = document.getElementById('productTable');
        var rowCount = table1.rows.length;
        var qotatn = generator.generate();
        for(i=1; i < rowCount;i++)
        {
        	var row = table1.rows[i];
        	var formData = "";
        	
    			for(var j=0; j<$(row.cells).length; j++){
    				if(j==0){
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
    				else if(j==15)
    				{
    					var name = $($(row.cells[j]).html()).attr('name');
    					formData+=name+"="+parseFloat($(row.cells[j].childNodes[0]).val())+"&";
    				}
    				else {
	    				var name=$($(row.cells[j]).html()).attr('name');
	    				formData+=name+"="+$($(row.cells[j]).html()).attr('value')+"&quotationItemId="+generator.generate()+"&";
    				}
    			}
    			formData+="quotaionId="+qotatn+"&installation="+$("#installation").val()+"&transportation="+$("#transportation").val()+"&packaging="+$("#packaging").val()+"&projectId=" + document.getElementById('selectedProjectId').value+"&revisedFrom=" + document.getElementById('selectedQuotationId').value+"&count="+i;
    			
            $.ajax({
                type: "GET",
                url: "../../../UpdateQuotation",
                data: formData, // serializes the form's elements.
                success: function(data) {
                    if (data == 0) {
                        toastr.error('Failed to Place Order!');
                    } else {
                    	window.location.replace('ViewQuotation.jsp?qid=' + parseInt(data));
                    }
                }
            });
        }
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

function showRoom(roomName,electricianName,size,ceilingDepth,recommendationsGiven,lightPlacements,measurementDetails,samplesToBrought,samplesGiven,provisionForDrivers,picsTakenTable) {
    document.querySelector('#roomName').innerHTML = decodeURI(roomName);
    document.querySelector('#electricianName').innerHTML = decodeURI(electricianName);
    document.querySelector('#size').innerHTML = decodeURI(size);
    document.querySelector('#ceilingDepth').innerHTML = decodeURI(ceilingDepth);
    document.querySelector('#recommendationsGiven').innerHTML = decodeURI(recommendationsGiven);
    document.querySelector('#lightPlacements').innerHTML = decodeURI(lightPlacements);
    document.querySelector('#measurementDetails').innerHTML = decodeURI(measurementDetails);
    document.querySelector('#samplesToBrought').innerHTML = decodeURI(samplesToBrought);
    document.querySelector('#samplesGiven').innerHTML = decodeURI(samplesGiven);
    document.querySelector('#provisionForDrivers').innerHTML = decodeURI(provisionForDrivers);
    document.querySelector('#picsTakenTable').innerHTML = decodeURI(picsTakenTable);
    $('#RegisterNew').modal('show');
}

function editProduct(id)
{
	$('#productDesc'+id).html("<input type='text' id='inputInfo"+id+"' style='width:88%;' maxlength='180'>");
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
/*function showRoom(roomid) {
    var getRoomDetails = new XMLHttpRequest();
    getRoomDetails.open('GET', '../../../ShortLightPlacementDetails?selectedProjectId=' + $('#selectedProjectId').val());

    getRoomDetails.onload = function() {
        if (getRoomDetails.status <= 200 && getRoomDetails.status <= 400) {
            var RoomDetails = JSON.parse(getRoomDetails.responseText);
            if (RoomDetails) {
                var container = document.getElementById("roomCard");
                total = RoomDetails.data.length;
               
                    for (i = 0; i < total; i++) {
                        if (RoomDetails.data[i].rowid == roomid) {
                            document.querySelector('#roomName').innerHTML = RoomDetails.data[i].roomName;
                            document.querySelector('#electricianName').innerHTML = RoomDetails.data[i].electricianName;
                            document.querySelector('#size').innerHTML = RoomDetails.data[i].sizeLBH;
                            document.querySelector('#ceilingDepth').innerHTML = RoomDetails.data[i].ceilingdepth;
                            document.querySelector('#recommendationsGiven').innerHTML = RoomDetails.data[i].recommendationsGiven;
                            document.querySelector('#lightPlacements').innerHTML = RoomDetails.data[i].lightPlacements;
                            document.querySelector('#measurementDetails').innerHTML = RoomDetails.data[i].measurementDetails;
                            document.querySelector('#samplesToBrought').innerHTML = RoomDetails.data[i].samplesToBrought;
                            document.querySelector('#samplesGiven').innerHTML = RoomDetails.data[i].samplesGiven;
                            document.querySelector('#provisionForDrivers').innerHTML = RoomDetails.data[i].provisionForDrivers;
                            document.querySelector('#picsTakenTable').innerHTML = RoomDetails.data[i].picsTakenTable;
                            $('#RegisterNew').modal('show');
                        }
                    }

                $(function() {
                    $('[data-toggle="popover"]').popover()
                })
            }
        }
    };
    getRoomDetails.send();
}*/