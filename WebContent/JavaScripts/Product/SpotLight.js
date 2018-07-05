$(document).ready(function(){
	var generator = new IDGenerator();
    var data1 = [];
    var notApplicable = "<option value='59125555'>NA</option>";
	
	if($('#Success').val()=="1")
	{
		toastr.success('Image Uploaded Successfully!');
	}
	else if($('#Success').val()=="0")
	{
    	toastr.error('Failed to Upload Image!');
	}
	
	$(".SKUGrp").change(function() {
		$("#skuIdSpotLight").val("");
		$("#skuIdSpotLightLbl").removeClass("active")
		$('#generateSKUSpotLight').attr('disabled',false);
		$('#SubmitButtonRegisterSpotLight').attr('disabled',true);
		$('#SubmitButtonUpdateSpotLight').attr('disabled',true);
		$("#alertMessage").addClass("HideThisElement");
		$("#errorMessage").addClass("HideThisElement");
	});
	
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
		dom: 'Bfrtip',
        buttons: [
            {
                text: 'New Product',
                action: function ( e, dt, node, config ) {
            		blankformForProduct();
                }
            }
        ],
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetSpotLightList",
		"columns": [
        	 {
                 defaultContent: '<center><i class="upload fa fa-image fa-2x" aria-hidden="true"></i>  '+
                 '<i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> ',"sWidth": "13%"
             },
             { "data": "rowId","sWidth": "10%"},
             { "data": "productDesc","sWidth": "60%"},
             { "data": "additionalInfo","sWidth": "17%"}
            
        ]
    });
	
    $('#datatables tbody').on( 'click', '.upload', function () {
    	var data = table.row( $(this).parents('tr') ).data();
        document.querySelector('#ProductId').value = data.productId;
    	if(data.imgUploaded == "1")
    	{
    		document.getElementById('NewElement-modal-title').innerHTML="Product Image";
    		document.getElementById('imgsnd').innerHTML = 'Replace';
    		$('#blah').attr('src', '../../../files/'+data.uploadedImgName);
    	} else{
    		document.getElementById('NewElement-modal-title').innerHTML="Add Product Image";
    		document.getElementById('imgsnd').innerHTML = 'Upload';
    		$('#imgsnd').removeClass('HideThisElement');
    		$('#choseFle').removeClass("disabled");
    		$('#blah').attr('src', '../../../Images/upload.png');
    	}
    	$('#AddNewImage').modal('show');
    });
	
    $('#datatables tbody').on( 'click', '.edit_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    		document.getElementById("newSpotLightForm").reset();
    		document.querySelector('#selectedProductId').value = data.productId;
    		
            $("#alertMessage").addClass("HideThisElement");
            $("#errorMessage").addClass("HideThisElement");
    		$("#panel7").addClass('show');
    		$("#panel7").addClass('active');
    		$("#tabProduct").addClass('active');
    		$("#tabInventory").removeClass('active');

            if (data.brand  !== "") {
                $('#brand').val(data.brand).material_select("refresh");
            } 
            if (data.wattage  !== "") {
                $('#wattage').val(data.wattage).material_select("refresh");
            }
            if (data.shape  !== "") {
                $('#shape').val(data.shape).material_select("refresh");
            }
            if (data.fixingType  !== "") {
                $('#fixingType').val(data.fixingType).material_select("refresh");
            }
            if (data.rimType  !== "") {
                $('#rimType').val(data.rimType).material_select("refresh");
            } 
            if (data.recessedType  !== "") {
                $('#recessedType').val(data.recessedType).material_select("refresh");
            }
    		recessedSubTypeInSpotLight(data1);
            if (data.recessedSubType  !== "") {
                $('#recessedSubType').val(data.recessedSubType).material_select("refresh");
            }
            if (data.nature  !== "") {
                $('#nature').val(data.nature).material_select("refresh");
            }
            if (data.finishType  !== "") {
                $('#finishType').val(data.finishType).material_select("refresh");
            } 
            if (data.finishColor  !== "") {
                $('#finishColor').val(data.finishColor).material_select("refresh");
            } 
            if (data.LEDChipBrand  !== "") {
                $('#LEDChipBrand').val(data.LEDChipBrand).material_select("refresh");
            }
            if (data.colorTemperature  !== "") {
                $('#colorTemperature').val(data.colorTemperature).material_select("refresh");
            } 
            if (data.beamAngle  !== "") {
                $('#beamAngle').val(data.beamAngle).material_select("refresh");
            }
            if (data.optics  !== "") {
                $('#optics').val(data.optics).material_select("refresh");
            }
            if (data.diffuser  !== "") {
                $('#diffuser').val(data.diffuser).material_select("refresh");
            }
            if (data.driver  !== "") {
                $('#driver').val(data.driver).material_select("refresh");
            }
            if (data.dimmType  !== "") {
                $('#dimmType').val(data.dimmType).material_select("refresh");
            }
    		dimmSubTypeInSpotLight(data1);
            if (data.dimmSubType  !== "") {
                $('#dimmSubType').val(data.dimmSubType).material_select("refresh");
            }
            if (data.IPRating  !== "") {
                $('#IPRating').val(data.IPRating).material_select("refresh");
            }
            if (data.size  !== "") {
                $('#size').val(data.size).material_select("refresh");
            }
            if (data.cutout  !== "") {
                $('#cutout').val(data.cutout).material_select("refresh");
            }
            if (data.CRI  !== "") {
                $('#CRI').val(data.CRI).material_select("refresh");
            }
            if (data.warranty  !== "") {
                $('#warranty').val(data.warranty).material_select("refresh");
            }
    		/*if($('#for').val()=="profile")
    		{
    		}
    		else if($('#for').val()=="ledLights")
    		{
    		}
    		else if($('#for').val()=="ledStrips")
    		{
    		}
    		else if($('#for').val()=="drivers")
    		{
    		}*/
            if (data.hsnId  !== "") {
                $('#hsnId').val(data.hsnId).material_select("refresh");
            }
            /*if (data.skuId  !== "") {
                $('#skuId').val(data.skuId);
                $('#skuIdLbl').addClass("active");
               }*/
            if (data.gold  !== "") {
                $('#gold').val(data.gold);
                $('#goldLbl').addClass("active");
               }
            if (data.silver  !== "") {
                $('#silver').val(data.silver);
                $('#silverLbl').addClass("active");
               }
            if (data.bronze  !== "") {
                $('#bronze').val(data.bronze);
                $('#bronzeLbl').addClass("active");
               }
            if (data.additionalInfo  !== "") {
                $('#additionalInformation').val(data.additionalInfo);
                $('#additionalInformationLbl').addClass("active");
               }
    		 $('#generateSKU').attr('disabled',false);
    		 $('#SubmitButtonUpdate').attr('disabled',false);
    		 $("#SubmitButtonRegister").addClass("HideThisElement");
    		 $("#SubmitButtonUpdate").removeClass("HideThisElement");
    		 $('#RegisterNewSpotLight').modal('show');
    });
    
    $('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
			document.querySelector('#DeleteProdId').value = data.productId;
    		$('#centralModalDangerDemo').modal('show');
    });
    
    var getServiceTax = new XMLHttpRequest();
    
    getServiceTax.open('GET', '../../../GetHsnList');
    getServiceTax.onload = function() {
        if (getServiceTax.status <= 200 && getServiceTax.status <= 400) {
        	var options1;
        	$('#hsnIdSpotLight').empty();
        	$('#hsnIdDriver').empty();
        	$('#hsnIdProfile').empty();
        	$('#hsnIdSMPS').empty();
        	$('#hsnIdStrips').empty();
            options1 = '<option value="" selected>HSNs</option>'
            var serviceTax = JSON.parse(getServiceTax.responseText);
            for (i = 0; i < serviceTax.data.length; i++)
            {
	            if(serviceTax.data[i].Hsnid!="SERVICETAX")
	            {
            		options1 += "<option value='" + serviceTax.data[i].rowId + "'>" + serviceTax.data[i].Hsnid + "</option>";
	            }
            }
            $('#hsnIdSpotLight').html(options1);
            $('#hsnIdDriver').html(options1);
            $('#hsnIdProfile').html(options1);
            $('#hsnIdSMPS').html(options1);
            $('#hsnIdStrips').html(options1);
            $('#hsnIdSpotLight').material_select('refresh');
            $('#hsnIdDriver').material_select('refresh');
            $('#hsnIdProfile').material_select('refresh');
            $('#hsnIdSMPS').material_select('refresh');
            $('#hsnIdStrips').material_select('refresh');
        } else {
            //to do on error while loading json page
        }
    };
    
    getServiceTax.send();
    
    var ourRequest1 = new XMLHttpRequest();
    ourRequest1.open('GET', '../../../GetProductLegendList');
    ourRequest1.onload = function() {
      if (ourRequest1.status >= 200 && ourRequest1.status < 400) {
    	data1 = JSON.parse(ourRequest1.responseText);
		brandInSpotLight(data1);
		wattageInSpotLight(data1);
		shapeInSpotLight(data1);
		fixingTypeInSpotLight(data1);
		rimTypeInSpotLight(data1);
		recessedTypeInSpotLight(data1);
		natureInSpotLight(data1);
		finishTypeInSpotLight(data1);
		finishColorInSpotLight(data1);
		LEDChipBrandInSpotLight(data1);
		colorTemperatureInSpotLight(data1);
		beamAngleInSpotLight(data1);
		opticsInSpotLight(data1);
		diffuserInSpotLight(data1);
		driverInSpotLight(data1);
		dimmTypeInSpotLight(data1);
		IPRatingInSpotLight(data1);
		sizeInSpotLight(data1);
		cutoutInSpotLight(data1);
		CRIInSpotLight(data1);
		warrantyInSpotLight(data1);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest1.onerror = function() {
      console.log("Connection error");
    };
	
    ourRequest1.send();

    $('#recessedType').change(function name() {
		recessedSubTypeInSpotLight(data1);
	});
    
    function recessedSubTypeInSpotLight(Data) {
    	var options1;
    	$('#recessedSubType').empty();
        options1 = '<option value="" selected>Recessed Sub Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == $('#recessedType').val()) {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#recessedSubType').html(options1);
        $('#recessedSubType').material_select('refresh');
    }

    $('#dimmType').change(function name() {
		dimmSubTypeInSpotLight(data1);
	});

    function dimmSubTypeInSpotLight(Data) {
    	var options1;
    	$('#dimmSubType').empty();
        options1 = '<option value="" selected>Dimm Sub Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == $('#dimmType').val()) {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#dimmSubType').html(options1);
        $('#dimmSubType').material_select('refresh');
    }
    
    function brandInSpotLight(Data) {
    	var options1;
    	$('#brand').empty();
        options1 = '<option value="" selected>Brand</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Brand") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#brand').html(options1);
        $('#brand').material_select('refresh');
    }
    
    $("#brand").change(function () {
    	productNameInSpotLight(data1);
    });
    
    function productNameInSpotLight(Data) {
    	var options1;
    	$('#productName').empty();
        options1 = '<option value="" selected>Product Name</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == $("#brand").val()) {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#productName').html(options1);
        $('#productName').material_select('refresh');
    }

    function wattageInSpotLight(Data) {
    	var options1;
    	$('#wattage').empty();
        options1 = '<option value="" selected>Wattage</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Wattage") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#wattage').html(options1);
        $('#wattage').material_select('refresh');
    }

    function shapeInSpotLight(Data) {
    	var options1;
    	$('#shape').empty();
        options1 = '<option value="" selected>Shape</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Shape") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#shape').html(options1);
        $('#shape').material_select('refresh');
    }
    
    function fixingTypeInSpotLight(Data) {
    	var options1;
    	$('#fixingType').empty();
        options1 = '<option value="" selected>Fixing Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Fixing Type") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#fixingType').html(options1);
        $('#fixingType').material_select('refresh');
    }

    function rimTypeInSpotLight(Data) {
    	var options1;
    	$('#rimType').empty();
        options1 = '<option value="" selected>Rim Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Rim Type") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#rimType').html(options1);
        $('#rimType').material_select('refresh');
    }
    
    function recessedTypeInSpotLight(Data) {
    	var options1;
    	$('#recessedType').empty();
        options1 = '<option value="" selected>Recessed Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Recessed Type") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#recessedType').html(options1);
        $('#recessedType').material_select('refresh');
    }

    function natureInSpotLight(Data) {
    	var options1;
    	$('#nature').empty();
        options1 = '<option value="" selected>Nature</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Nature") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#nature').html(options1);
        $('#nature').material_select('refresh');
    }

    function finishTypeInSpotLight(Data) {
    	var options1;
    	$('#finishType').empty();
        options1 = '<option value="" selected>Finish Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Finish Type") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#finishType').html(options1);
        $('#finishType').material_select('refresh');
    }
    
    function finishColorInSpotLight(Data) {
    	var options1;
    	$('#finishColor').empty();
        options1 = '<option value="" selected>Finish Color</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Finish Color") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#finishColor').html(options1);
        $('#finishColor').material_select('refresh');
    }

    function LEDChipBrandInSpotLight(Data) {
    	var options1;
    	$('#LEDChipBrand').empty();
        options1 = '<option value="" selected>LED Chip Brand</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "LED Chip Brand") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#LEDChipBrand').html(options1);
        $('#LEDChipBrand').material_select('refresh');
    }

    function colorTemperatureInSpotLight(Data) {
    	var options1;
    	$('#colorTemperature').empty();
        options1 = '<option value="" selected>Color Temperature</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Color Temperature") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#colorTemperature').html(options1);
        $('#colorTemperature').material_select('refresh');
    }
    
    function beamAngleInSpotLight(Data) {
    	var options1;
    	$('#beamAngle').empty();
        options1 = '<option value="" selected>Beam Angle</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Beam Angle") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#beamAngle').html(options1);
        $('#beamAngle').material_select('refresh');
    }

    function opticsInSpotLight(Data) {
    	var options1;
    	$('#optics').empty();
        options1 = '<option value="" selected>Optics</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Optics") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#optics').html(options1);
        $('#optics').material_select('refresh');
    }

    function diffuserInSpotLight(Data) {
    	var options1;
    	$('#diffuser').empty();
        options1 = '<option value="" selected>Diffuser</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Diffuser") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#diffuser').html(options1);
        $('#diffuser').material_select('refresh');
    }
    
    function driverInSpotLight(Data) {
    	var options1;
    	$('#driver').empty();
        options1 = '<option value="" selected>Driver</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Driver") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#driver').html(options1);
        $('#driver').material_select('refresh');
    }
    
    function dimmTypeInSpotLight(Data) {
    	var options1;
    	$('#dimmType').empty();
        options1 = '<option value="" selected>Dimm Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Dimm Type") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#dimmType').html(options1);
        $('#dimmType').material_select('refresh');
    }
    
    function IPRatingInSpotLight(Data) {
    	var options1;
    	$('#IPRating').empty();
        options1 = '<option value="" selected>IP Rating</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "IP Rating") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#IPRating').html(options1);
        $('#IPRating').material_select('refresh');
    }

    function sizeInSpotLight(Data) {
    	var options1;
    	$('#size').empty();
        options1 = '<option value="" selected>Size</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Size") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#size').html(options1);
        $('#size').material_select('refresh');
    }

    function cutoutInSpotLight(Data) {
    	var options1;
    	$('#cutout').empty();
        options1 = '<option value="" selected>Cutout</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Cutout") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#cutout').html(options1);
        $('#cutout').material_select('refresh');
    }
    
    function CRIInSpotLight(Data) {
    	var options1;
    	$('#CRI').empty();
        options1 = '<option value="" selected>CRI</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "CRI") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#CRI').html(options1);
        $('#CRI').material_select('refresh');
    }
    
    function warrantyInSpotLight(Data) {
    	var options1;
    	$('#warranty').empty();
        options1 = '<option value="" selected>Warranty</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50110000" && Data.data[i].category == "Warranty (In Months)") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#warranty').html(options1);
        $('warranty').material_select('refresh');
    }
    
    $("#generateSKUSpotLight").click(function() {
    	var url = "../../../GenerateSKUServlet";

    	if (document.getElementById("brand").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("productName").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Product Name is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("wattage").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Wattage is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("shape").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Shape is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("fixingType").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Fixing Type is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("rimType").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Rim Type is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("recessedType").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Recessed Type is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("recessedSubType").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Recessed SubType is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("nature").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Nature is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("finishType").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Finish Type is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("finishColor").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Finish Color is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("LEDChipBrand").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> LED Chip Brand is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("colorTemperature").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color Temperature is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("beamAngle").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Beam Angle is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("optics").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Optics is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("diffuser").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Diffuser is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("driver").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Driver is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("dimmType").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Dimm Type is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("dimmSubType").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Dimm SubType is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("IPRating").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> IP Rating is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("size").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Size is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("cutout").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Cutout is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("CRI").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> CRI is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("warranty").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Warranty is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else {
			
	    	$.ajax({
               type: "GET",
               url: url,
               data: $("#newSpotLightForm").serialize()+"&for=spotLight",
               success: function(data)
               {
//            	   console.log(data);
		        	if (data != 0)
		        	{
		        		$('#skuIdSpotLight').val(generator.generate());
		        		$('#skuIdSpotLightLbl').addClass('active');
		        		$('#generateSKUSpotLight').attr('disabled',true);
						$("#RegisterNewSpotLight #alertMessage").addClass("HideThisElement");
						$("#RegisterNewSpotLight #errorMessage").addClass("HideThisElement");
		        		$('#SubmitButtonRegisterSpotLight').attr('disabled',false);
		        		$('#SubmitButtonUpdateSpotLight').attr('disabled',false);
		    		}
		        	else
		        	{
	                	toastr.error('SKU Id already exists!');
		        	}
               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
	});
    
    $("#SubmitButtonRegisterSpotLight").click(function() {
    	var url = "../../../ProductRegisterServlet";
    	var data = "for=spotLight&"+$("#newSpotLightForm").serialize();
//    	var checked = false;
    	/*if (document.getElementById("hsnId").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> HSN Id is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("gold").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Gold Rate is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("silver").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Silver Rate is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("bronze").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Bronze Rate Type is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if($('#for').val() == "profile") {
        	if (document.getElementById("brandInProfileDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("typeInProfileDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Type is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("shapeInProfileDD").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Shape is mandatory !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("thicknessDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Thickness is mandatory !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else {
    			checked = true;
    		}
    	} else if($('#for').val() == "ledLights") {
        	if (document.getElementById("brandInLedLightsDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("productName").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Product Name is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("watt").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Watt is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("colorInLedLights").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("typeInLedProfileDD").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Type is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("shapeInLedProfileDD").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Shape is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("degree").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Degree is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("lamp").value == "") {
	    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Lamp is mandatory !";
	    		$("#alertMessage").removeClass("HideThisElement");
			} else if (document.getElementById("cutoutSize").value == "") {
	    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Cutout Size is mandatory !";
	    		$("#alertMessage").removeClass("HideThisElement");
			} else if (document.getElementById("dimensions").value == "") {
	    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Dimensions are mandatory !";
	    		$("#alertMessage").removeClass("HideThisElement");
			} else if (document.getElementById("driverDetails").value == "") {
	    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Driver Details are mandatory !";
	    		$("#alertMessage").removeClass("HideThisElement");
			} else {
    			checked = true;
    		}
    	} else if($('#for').val() == "ledStrips") {
    		if (document.getElementById("brandInLedStripsDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("series").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("noOfLeds").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Product Name is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("colorInLedStrips").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Watt is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("wattageInLedStrips").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else {
    			checked = true;
    		}
    	} else if($('#for').val() == "drivers") {
        	if (document.getElementById("brandInDriversDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("dimmable").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Product Name is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("typesOfDimmable").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Watt is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("volts").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("wattageInDrivers").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("ma").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else {
    			checked = true;
    		}
    	}
    	else{
			checked = false;
    	}
    	
    	if(checked)
    	{*/
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: data,
	               success: function(data)
	               {
	                   if (data == 0) {
		                	toastr.error('Failed to Registered New Product !');
						} else {
							document.getElementById("newSpotLightForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#generateSKUSpotLight').attr('disabled',false);
							$('#SubmitButtonRegisterSpotLight').attr('disabled',true);
					    	$("#SubmitButtonRegisterSpotLight").removeClass("HideThisElement");
					    	$("#SubmitButtonUpdateSpotLight").addClass("HideThisElement");
					    	$("#spotLightRegistrationForm").addClass("HideThisElement");
					    	$("#spotLightListTable").removeClass("HideThisElement");
							$('#datatables').DataTable().ajax.reload();
							toastr.success('New Product Registered Successfully !');
						}
	               }
	    	});
//    	}
        return false; // avoid to execute the actual submit of the form.
	});
    
    $("#SubmitButtonUpdate").click(function() {

    	var url = "../../../ProductUpdateServlet";
    	/*var checked = false;
    	if (document.getElementById("hsnId").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> HSN Id is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("gold").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Gold Rate is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("silver").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Silver Rate is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("bronze").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Bronze Rate Type is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if($('#for').val() == "profile") {
        	if (document.getElementById("brandInProfileDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("typeInProfileDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Type is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("shapeInProfileDD").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Shape is mandatory !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("thicknessDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Thickness is mandatory !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else {
    			checked = true;
    		}
    	} else if($('#for').val() == "ledLights") {
        	if (document.getElementById("brandInLedLightsDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("productName").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Product Name is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("watt").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Watt is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("colorInLedLights").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("typeInLedProfileDD").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Type is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("shapeInLedProfileDD").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Shape is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("degree").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Degree is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("lamp").value == "") {
	    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Lamp is mandatory !";
	    		$("#alertMessage").removeClass("HideThisElement");
			} else if (document.getElementById("cutoutSize").value == "") {
	    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Cutout Size is mandatory !";
	    		$("#alertMessage").removeClass("HideThisElement");
			} else if (document.getElementById("dimensions").value == "") {
	    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Dimensions are mandatory !";
	    		$("#alertMessage").removeClass("HideThisElement");
			} else if (document.getElementById("driverDetails").value == "") {
	    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Driver Details are mandatory !";
	    		$("#alertMessage").removeClass("HideThisElement");
			} else {
    			checked = true;
    		}
    	} else if($('#for').val() == "ledStrips") {
    		if (document.getElementById("brandInLedStripsDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("series").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("noOfLeds").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Product Name is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("colorInLedStrips").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Watt is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("wattageInLedStrips").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else {
    			checked = true;
    		}
    	} else if($('#for').val() == "drivers") {
        	if (document.getElementById("brandInDriversDD").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("dimmable").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Product Name is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("typesOfDimmable").value == "") {
        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Watt is not selected !";
        		$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("volts").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("wattageInDrivers").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else if (document.getElementById("ma").value ==  "") {
    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
    			$("#alertMessage").removeClass("HideThisElement");
    		} else {
    			checked = true;
    		}
    	}
    	else{
			checked = false;
    	}
    	
    	if(checked)
    	{*/
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newSpotLightForm").serialize(),
	               success: function(data)
	               {
	                   if (data == 0) {
		                	toastr.error('Failed to Update Product Details !');
						} else {
							document.getElementById("newSpotLightForm").reset();
							$("#panel7").addClass('show');
							$("#panel7").addClass('active');
							$("#tabProduct").addClass('active');
							$("#tabInventory").removeClass('active');
							$('#hsnIdDD').material_select('refresh');
							$('#typeDD').material_select('refresh');
							$('#brandDD').material_select('refresh');
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#RegisterNewSpotLight').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							toastr.success('Product Details Updated Successfully !');
						}
	               }
	    	});
//	    }
        return false;
	});
	
    function blankformForProduct() {
    	document.getElementById("newSpotLightForm").reset();
    	$('.mdb-select').material_select("destroy");
    	$('.mdb-select').material_select();
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
		$('#generateSKUSpotLight').attr('disabled',false);
		$('#SubmitButtonRegisterSpotLight').attr('disabled',true);
    	$("#SubmitButtonRegisterSpotLight").removeClass("HideThisElement");
    	$("#SubmitButtonUpdateSpotLight").addClass("HideThisElement");
    	$("#spotLightRegistrationForm").removeClass("HideThisElement");
    	$("#spotLightListTable").addClass("HideThisElement");
    }
    
    $("#DeleteProductConfirmed").click(function() {
    	var DeleteProdId = document.querySelector('#DeleteProdId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteProduct?DeleteProdId='+DeleteProdId,
            success: function(data)
            {
                // show response from the servlet.
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Employee!');
					} else {
						//document.getElementById("newSpotLightForm").reset();
						//$(".selectpicker").val('default');
						//$(".selectpicker").selectpicker("refresh");
						//$("#alertMessage").addClass("HideThisElement");
						//$("#errorMessage").addClass("HideThisElement");
						$('#centralModalDangerDemo').modal('hide');
						$('#selectedEmployeeId').val('');
						$('#datatables').DataTable().ajax.reload();
						toastr.success('Product Deleted Successfully!');
					}
            }
		
		})
		return false; // avoid to execute the actual submit of the form.
    });
    
    $("#closeBtn").click(function() {
    	$("#spotLightRegistrationForm").addClass("HideThisElement");
    	$("#spotLightListTable").removeClass("HideThisElement");
    });
});