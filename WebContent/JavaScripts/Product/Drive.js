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
		$("#skuIdDriver").val("");
		$("#skuIdDriverLbl").removeClass("active")
		$('#generateSKUDriver').attr('disabled',false);
		$('#SubmitButtonRegisterDriver').attr('disabled',true);
		$('#SubmitButtonUpdateDriver').attr('disabled',true);
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
		"ajax": "../../../GetProfileList",
		"columns": [
        	 {
                 defaultContent: '<center><i class="upload fa fa-image fa-2x" aria-hidden="true"></i>  '+
                 '<i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> ',"sWidth": "13%"
             },
             { "data": "rowId","sWidth": "7%"},
             { "data": "productDesc","sWidth": "60%"},
             { "data": "additionalInfo","sWidth": "20%"}
            
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
		brandDriver(data1);
		outputVoltageDriver(data1);
		outputWattageDriver(data1);
		mADriver(data1);
		typeDriver(data1);
		subTypeDriver(data1);
		IPDriver(data1);
		warrantyDriver(data1);
		vendorDriver(data1);
		ledWattageDriver(data1);
		dimensionDriver(data1);
		PFDriver(data1);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest1.onerror = function() {
      console.log("Connection error");
    };
	
    ourRequest1.send();
    
    function brandDriver(Data) {
    	var options1;
    	$('#brandDriver').empty();
        options1 = '<option value="" selected>Brand</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "Brand")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#brandDriver').html(options1);
        $('#brandDriver').material_select('refresh');
    }
    
    function outputVoltageDriver(Data) {
    	var options1;
    	$('#outputVoltageDriver').empty();
        options1 = '<option value="" selected>Output Voltage</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "Output Voltage")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#outputVoltageDriver').html(options1);
        $('#outputVoltageDriver').material_select('refresh');
    }
    
    function outputWattageDriver(Data) {
    	var options1;
    	$('#outputWattageDriver').empty();
        options1 = '<option value="" selected>Output Wattage</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "Output Wattage")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#outputWattageDriver').html(options1);
        $('#outputWattageDriver').material_select('refresh');
    }
    
    function mADriver(Data) {
    	var options1;
    	$('#mADriver').empty();
        options1 = '<option value="" selected>mA</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "mA")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#mADriver').html(options1);
        $('#mADriver').material_select('refresh');
    }
    
    function typeDriver(Data) {
    	var options1;
    	$('#typeDriver').empty();
        options1 = '<option value="" selected>Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "Type")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#typeDriver').html(options1);
        $('#typeDriver').material_select('refresh');
    }
    
    $("#typeDriver").change(function () {
    	subTypeDriver(data1);
    });
    
    function subTypeDriver(Data) {
    	var options1;
    	$('#subTypeDriver').empty();
        options1 = '<option value="" selected>Sub Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == $("#typeDriver").val())
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#subTypeDriver').html(options1);
        $('#subTypeDriver').material_select('refresh');
    }
    
    function IPDriver(Data) {
    	var options1;
    	$('#IPDriver').empty();
        options1 = '<option value="" selected>IP</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "IP")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#IPDriver').html(options1);
        $('#IPDriver').material_select('refresh');
    }
    
    function warrantyDriver(Data) {
    	var options1;
    	$('#warrantyDriver').empty();
        options1 = '<option value="" selected>Warranty</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "Warranty")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#warrantyDriver').html(options1);
        $('#warrantyDriver').material_select('refresh');
    }
    
    function vendorDriver(Data) {
    	var options1;
    	$('#vendorDriver').empty();
        options1 = '<option value="" selected>Vendor</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "Vendor")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#vendorDriver').html(options1);
        $('#vendorDriver').material_select('refresh');
    }
    
    function ledWattageDriver(Data) {
    	var options1;
    	$('#ledWattageDriver').empty();
        options1 = '<option value="" selected>LED Wattage</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "Led Wattage")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#ledWattageDriver').html(options1);
        $('#ledWattageDriver').material_select('refresh');
    }
    
    function dimensionDriver(Data) {
    	var options1;
    	$('#dimensionDriver').empty();
        options1 = '<option value="" selected>Dimension</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "Dimension")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#dimensionDriver').html(options1);
        $('#dimensionDriver').material_select('refresh');
    }
    
    function PFDriver(Data) {
    	var options1;
    	$('#PFDriver').empty();
        options1 = '<option value="" selected>PF</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50140000" && Data.data[i].category == "PF")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#PFDriver').html(options1);
        $('#PFDriver').material_select('refresh');
    }
    
    $("#generateSKUDriver").click(function() {
    	var url = "../../../GenerateSKUServlet";

    	if (document.getElementById("brandDriver").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("outputVoltageDriver").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Type is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("outputWattageDriver").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Shape is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("mADriver").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Thickness is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("typeDriver").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("subTypeDriver").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Product Name is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("IPDriver").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Watt is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("warrantyDriver").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("vendorDriver").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Type is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("ledWattageDriver").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Shape is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("dimensionDriver").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Degree is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("PFDriver").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else {
			
	    	$.ajax({
	           type: "GET",
	           url: url,
	           data: $("#newDriverForm").serialize()+"&for=drivers",
	           success: function(data)
	           {
	//            	   console.log(data);
		        	if (data != 0)
		        	{
		        		$('#skuIdDriver').val(generator.generate());
		        		$('#skuIdDriverLbl').addClass('active');
		        		$('#generateSKUDriver').attr('disabled',true);
						$("#RegisterNewDriver #alertMessage").addClass("HideThisElement");
						$("#RegisterNewDriver #errorMessage").addClass("HideThisElement");
		        		$('#SubmitButtonRegisterDriver').attr('disabled',false);
		        		$('#SubmitButtonUpdateDriver').attr('disabled',false);
		    		}
		        	else
		        	{
	                	toastr.error('SKU Id already exists!');
		        	}
	           }
	    	});
		}
        return false;
	});
    
    $("#SubmitButtonRegisterDriver").click(function() {
    	var url = "../../../ProductRegisterServlet";
    	var data = "for=drivers&"+$("#newDriverForm").serialize();
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
							document.getElementById("newDriverForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#generateSKUDriver').attr('disabled',false);
							$('#SubmitButtonRegisterDriver').attr('disabled',true);
					    	$("#SubmitButtonRegisterDriver").removeClass("HideThisElement");
					    	$("#SubmitButtonUpdateDriver").addClass("HideThisElement");
					    	$("#driverRegistrationForm").addClass("HideThisElement");
					    	$("#driverListTable").removeClass("HideThisElement");
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
    	document.getElementById("newDriverForm").reset();
    	$('.mdb-select').material_select("destroy");
    	$('.mdb-select').material_select();
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
		$('#generateSKUDriver').attr('disabled',false);
		$('#SubmitButtonRegisterDriver').attr('disabled',true);
    	$("#SubmitButtonRegisterDriver").removeClass("HideThisElement");
    	$("#SubmitButtonUpdateDriver").addClass("HideThisElement");
    	$("#driverRegistrationForm").removeClass("HideThisElement");
    	$("#driverListTable").addClass("HideThisElement");
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
    	$("#driverRegistrationForm").addClass("HideThisElement");
    	$("#driverListTable").removeClass("HideThisElement");
    });
});