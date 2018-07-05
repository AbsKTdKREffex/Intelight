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
		$("#skuIdSMPS").val("");
		$("#skuIdSMPSLbl").removeClass("active")
		$('#generateSKUSMPS').attr('disabled',false);
		$('#SubmitButtonRegisterSMPS').attr('disabled',true);
		$('#SubmitButtonUpdateSMPS').attr('disabled',true);
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
		"ajax": "../../../GetSMPSList",
		"columns": [
        	 {
                 defaultContent: '<center><i class="upload fa fa-image fa-2x" aria-hidden="true"></i>  '+
                 '<i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> ',"sWidth": "13%"
             },
             { "data": "rowId","sWidth": "7%"},
             { "data": "productDesc","sWidth": "60%"},
             { "data": "additionalInfo","sWidth": "20%"}
            
        ],
        fixedColumns: true
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
		brandSMPS(data1);
		voltageSMPS(data1);
		wattageSMPS(data1);
		AMPRSMPS(data1);
		IPSMPS(data1);
		warrantySMPS(data1);
		dimmTypeSMPS(data1);
		casingSMPS(data1);
		sizeSMPS(data1);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest1.onerror = function() {
      console.log("Connection error");
    };
	
    ourRequest1.send();
    
    function voltageSMPS(Data) {
    	var options1;
    	$('#voltageSMPS').empty();
        options1 = '<option value="" selected>Voltage</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50150000" && Data.data[i].category == "Voltage")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#voltageSMPS').html(options1);
        $('#voltageSMPS').material_select('refresh');
    }
    
    function wattageSMPS(Data) {
    	var options1;
    	$('#wattageSMPS').empty();
        options1 = '<option value="" selected>Wattage</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50150000" && Data.data[i].category == "Wattage")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#wattageSMPS').html(options1);
        $('#wattageSMPS').material_select('refresh');
    }
    
    function AMPRSMPS(Data) {
    	var options1;
    	$('#AMPRSMPS').empty();
        options1 = '<option value="" selected>AMPR</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50150000" && Data.data[i].category == "AMPR")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#AMPRSMPS').html(options1);
        $('#AMPRSMPS').material_select('refresh');
    }
    
    function IPSMPS(Data) {
    	var options1;
    	$('#IPSMPS').empty();
        options1 = '<option value="" selected>IP</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50150000" && Data.data[i].category == "IP")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#IPSMPS').html(options1);
        $('#IPSMPS').material_select('refresh');
    }
    
    function warrantySMPS(Data) {
    	var options1;
    	$('#warrantySMPS').empty();
        options1 = '<option value="" selected>Warranty</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50150000" && Data.data[i].category == "Warranty")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#warrantySMPS').html(options1);
        $('#warrantySMPS').material_select('refresh');
    }
    
    function dimmTypeSMPS(Data) {
    	var options1;
    	$('#dimmTypeSMPS').empty();
        options1 = '<option value="" selected>Dimm Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50150000" && Data.data[i].category == "Dimm Type")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#dimmTypeSMPS').html(options1);
        $('#dimmTypeSMPS').material_select('refresh');
    }
    
    $("#dimmTypeSMPS").change(function () {
    	dimmSubTypeSMPS(data1);
    });
    
    function dimmSubTypeSMPS(Data) {
    	var options1;
    	$('#dimmSubTypeSMPS').empty();
        options1 = '<option value="" selected>Dimm Sub Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == $('#dimmTypeSMPS').val())
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#dimmSubTypeSMPS').html(options1);
        $('#dimmSubTypeSMPS').material_select('refresh');
    }
    
    function casingSMPS(Data) {
    	var options1;
    	$('#sizeSMPS').empty();
        options1 = '<option value="" selected>Casings</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50150000" && Data.data[i].category == "Casing")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#casingSMPS').html(options1);
        $('#casingSMPS').material_select('refresh');
    }
    
    function sizeSMPS(Data) {
    	var options1;
    	$('#sizeSMPS').empty();
        options1 = '<option value="" selected>Sizes</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50150000" && Data.data[i].category == "Size")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#sizeSMPS').html(options1);
        $('#sizeSMPS').material_select('refresh');
    }
    
    function brandSMPS(Data) {
    	var options1;
    	$('#brandSMPS').empty();
        options1 = '<option value="" selected>Brands</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50150000" && Data.data[i].category == "Brand")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#brandSMPS').html(options1);
        $('#brandSMPS').material_select('refresh');
    }
    
    $("#generateSKUSMPS").click(function() {
    	var url = "../../../GenerateSKUServlet";

    	if (document.getElementById("brandSMPS").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("voltageSMPS").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Voltage is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("wattageSMPS").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Wattage is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("AMPRSMPS").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> AMPR is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("IPSMPS").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> IP is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("warrantySMPS").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Warranty is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("sizeSMPS").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Size is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("dimmTypeSMPS").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Dimm Type is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("dimmSubTypeSMPS").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Dimm Sub Type is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("casingSMPS").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Casing is not selected !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else {
	    	$.ajax({
	           type: "GET",
	           url: url,
	           data: $("#newSMPSForm").serialize()+"&for=SMPS", // serializes the form's elements.
	           success: function(data)
	           {
	        	   console.log(data);
		        	if (data != 0)
		        	{
		        		$('#skuIdSMPS').val(generator.generate());
		        		$('#skuIdSMPSLbl').addClass('active');
		        		$('#generateSKUSMPS').attr('disabled',true);
						$("#RegisterNewSMPS #alertMessage").addClass("HideThisElement");
						$("#RegisterNewSMPS #errorMessage").addClass("HideThisElement");
		        		$('#SubmitButtonRegisterSMPS').attr('disabled',false);
		        		$('#SubmitButtonUpdateSMPS').attr('disabled',false);
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
    
    $("#SubmitButtonRegisterSMPS").click(function() {
    	var url = "../../../ProductRegisterServlet";
    	var data = "for=SMPS&"+$("#newSMPSForm").serialize();
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
							document.getElementById("newSMPSForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#generateSKUSMPS').attr('disabled',false);
							$('#SubmitButtonRegisterSMPS').attr('disabled',true);
					    	$("#SubmitButtonRegisterSMPS").removeClass("HideThisElement");
					    	$("#SubmitButtonUpdateSMPS").addClass("HideThisElement");
					    	$("#SMPSRegistrationForm").addClass("HideThisElement");
					    	$("#SMPSListTable").removeClass("HideThisElement");
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
    	document.getElementById("newSMPSForm").reset();
    	$('.mdb-select').material_select("destroy");
    	$('.mdb-select').material_select();
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
		$('#generateSKUSMPS').attr('disabled',false);
		$('#SubmitButtonRegisterSMPS').attr('disabled',true);
    	$("#SubmitButtonRegisterSMPS").removeClass("HideThisElement");
    	$("#SubmitButtonUpdateSMPS").addClass("HideThisElement");
    	$("#SMPSRegistrationForm").removeClass("HideThisElement");
    	$("#SMPSListTable").addClass("HideThisElement");
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
    	$("#SMPSRegistrationForm").addClass("HideThisElement");
    	$("#SMPSListTable").removeClass("HideThisElement");
    });
});