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
		$("#skuIdStrips").val("");
		$("#skuIdStripsLbl").removeClass("active");
		$('#generateSKUStrips').attr('disabled',false);
		$('#SubmitButtonRegisterStrips').attr('disabled',true);
		$('#SubmitButtonUpdateStrips').attr('disabled',true);
		$("#ledStripsRegistrationForm #alertMessage").addClass("HideThisElement");
		$("#ledStripsRegistrationForm #errorMessage").addClass("HideThisElement");
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
		"ajax": "../../../GetLedStripsList",
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
		brandStrips(data1);
		ledBrandStrips(data1);
		seriesStrips(data1);
		totalWattageStrips(data1);
		wattageStrips(data1);
		voltageStrips(data1);
		qualityStrips(data1);
		noOfLedStrips(data1);
		lumensStrips(data1);
		colourStrips(data1);
		widthStrips(data1);
		waterProofStrips(data1);
		CRIStrips(data1);
		warrantyStrips(data1);
		meterStrips(data1);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest1.onerror = function() {
      console.log("Connection error");
    };
	
    ourRequest1.send();
    
    function brandStrips(Data) {
    	var options1;
    	$('#brandStrips').empty();
        options1 = '<option value="" selected>Brand</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Strip Brand")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#brandStrips').html(options1);
        $('#brandStrips').material_select('refresh');
    }
    
    function ledBrandStrips(Data) {
    	var options1;
    	$('#LEDBrandStrips').empty();
        options1 = '<option value="" selected>LED Brand</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "LED Brand")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#LEDBrandStrips').html(options1);
        $('#LEDBrandStrips').material_select('refresh');
    }
    
    function seriesStrips(Data) {
    	var options1;
    	$('#seriesStrips').empty();
        options1 = '<option value="" selected>Series</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Series")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#seriesStrips').html(options1);
        $('#seriesStrips').material_select('refresh');
    }
    
    function totalWattageStrips(Data) {
    	var options1;
    	$('#totalWattageStrips').empty();
        options1 = '<option value="" selected>Total Wattage</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Total Wattage")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#totalWattageStrips').html(options1);
        $('#totalWattageStrips').material_select('refresh');
    }
    
    function wattageStrips(Data) {
    	var options1;
    	$('#wattageStrips').empty();
        options1 = '<option value="" selected>Wattage/MTR</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Wattage/MTR")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#wattageStrips').html(options1);
        $('#wattageStrips').material_select('refresh');
    }
    
    function voltageStrips(Data) {
    	var options1;
    	$('#voltageStrips').empty();
        options1 = '<option value="" selected>Voltage</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Voltage")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#voltageStrips').html(options1);
        $('#voltageStrips').material_select('refresh');
    }
    
    function qualityStrips(Data) {
    	var options1;
    	$('#qualityStrips').empty();
        options1 = '<option value="" selected>Quality</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Quality")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#qualityStrips').html(options1);
        $('#qualityStrips').material_select('refresh');
    }
    
    function noOfLedStrips(Data) {
    	var options1;
    	$('#noOfLEDStrips').empty();
        options1 = '<option value="" selected>No. of LEDs</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "No. of LED")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#noOfLEDStrips').html(options1);
        $('#noOfLEDStrips').material_select('refresh');
    }
    
    function lumensStrips(Data) {
    	var options1;
    	$('#lumensStrips').empty();
        options1 = '<option value="" selected>Lumens</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Lumens")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#lumensStrips').html(options1);
        $('#lumensStrips').material_select('refresh');
    }
    
    function colourStrips(Data) {
    	var options1;
    	$('#colourStrips').empty();
        options1 = '<option value="" selected>Colour</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Colour")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#colourStrips').html(options1);
        $('#colourStrips').material_select('refresh');
    }
    
    function widthStrips(Data) {
    	var options1;
    	$('#widthStrips').empty();
        options1 = '<option value="" selected>Width</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Width")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#widthStrips').html(options1);
        $('#widthStrips').material_select('refresh');
    }
    
    function waterProofStrips(Data) {
    	var options1;
    	$('#waterProofStrips').empty();
        options1 = '<option value="" selected>WaterProof/Non-Waterproof</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "WaterProof/Non-Waterproof")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#waterProofStrips').html(options1);
        $('#waterProofStrips').material_select('refresh');
    }
    
    $("#waterProofStrips").change(function () {
    	IPStrips(data1);
    });
    
    function IPStrips(Data) {
    	var options1;
    	$('#IPStrips').empty();
        options1 = '<option value="" selected>IP</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == $("#waterProofStrips").val())
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#IPStrips').html(options1);
        $('#IPStrips').material_select('refresh');
    }
    
    function CRIStrips(Data) {
    	var options1;
    	$('#CRIStrips').empty();
        options1 = '<option value="" selected>CRI</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "CRI")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#CRIStrips').html(options1);
        $('#CRIStrips').material_select('refresh');
    }
    
    function warrantyStrips(Data) {
    	var options1;
    	$('#warrantyStrips').empty();
        options1 = '<option value="" selected>Warranty</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Warranty")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#warrantyStrips').html(options1);
        $('#warrantyStrips').material_select('refresh');
    }
    
    function meterStrips(Data) {
    	var options1;
    	$('#meterStrips').empty();
        options1 = '<option value="" selected>Meter</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50130000" && Data.data[i].category == "Metre Per Roll")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#meterStrips').html(options1);
        $('#meterStrips').material_select('refresh');
    }
    
    $("#generateSKUStrips").click(function() {
    	var url = "../../../GenerateSKUServlet";

    	if (document.getElementById("brandStrips").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("LEDBrandStrips").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> LED Brand is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("seriesStrips").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Series is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("totalWattageStrips").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Total Wattage is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("wattageStrips").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Wattage is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("voltageStrips").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Voltage is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("qualityStrips").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Quality is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("noOfLEDStrips").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> No Of LED is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("colourStrips").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Colour is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("widthStrips").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Width is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("waterProofStrips").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Water Proof is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("IPStrips").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> IP is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("lumensStrips").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Lumens is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("CRIStrips").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> CRI is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("warrantyStrips").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Warranty is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("meterStrips").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Meter is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else {
	    	$.ajax({
	           type: "GET",
	           url: url,
	           data: $("#newStripsForm").serialize()+"&for=ledStrips", // serializes the form's elements.
	           success: function(data)
	           {
	        	   console.log(data);
		        	if (data != 0)
		        	{
		        		$('#skuIdStrips').val(generator.generate());
		        		$('#skuIdStripsLbl').addClass('active');
		        		$('#generateSKUStrips').attr('disabled',true);
						$("#RegisterNewStrips #alertMessage").addClass("HideThisElement");
						$("#RegisterNewStrips #errorMessage").addClass("HideThisElement");
		        		$('#SubmitButtonRegisterStrips').attr('disabled',false);
		        		$('#SubmitButtonUpdateStrips').attr('disabled',false);
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
    
    $("#SubmitButtonRegisterStrips").click(function() {
    	var url = "../../../ProductRegisterServlet";
    	var data = "for=ledStrips&"+$("#newStripsForm").serialize();
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
							document.getElementById("newStripsForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#generateSKUStrips').attr('disabled',false);
							$('#SubmitButtonRegisterStrips').attr('disabled',true);
					    	$("#SubmitButtonRegisterStrips").removeClass("HideThisElement");
					    	$("#SubmitButtonUpdateStrips").addClass("HideThisElement");
					    	$("#ledStripsRegistrationForm").addClass("HideThisElement");
					    	$("#ledStripsListTable").removeClass("HideThisElement");
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
    	document.getElementById("newStripsForm").reset();
    	$('.mdb-select').material_select("destroy");
    	$('.mdb-select').material_select();
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
		$('#generateSKUStrips').attr('disabled',false);
		$('#SubmitButtonRegisterStrips').attr('disabled',true);
    	$("#SubmitButtonRegisterStrips").removeClass("HideThisElement");
    	$("#SubmitButtonUpdateStrips").addClass("HideThisElement");
    	$("#ledStripsRegistrationForm").removeClass("HideThisElement");
    	$("#ledStripsListTable").addClass("HideThisElement");
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
    	$("#ledStripsRegistrationForm").addClass("HideThisElement");
    	$("#ledStripsListTable").removeClass("HideThisElement");
    });
});