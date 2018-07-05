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
		$("#skuIdProfile").val("");
		$("#skuIdProfileLbl").removeClass("active")
		$('#generateSKUProfile').attr('disabled',false);
		$('#SubmitButtonRegisterProfile').attr('disabled',true);
		$('#SubmitButtonUpdateProfile').attr('disabled',true);
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
		document.getElementById("newProfileForm").reset();
//		document.querySelector('#selectedProductId').value = data.rowId;
		
        $("#alertMessage").addClass("HideThisElement");
        $("#errorMessage").addClass("HideThisElement");

        if (data.brand  !== "") {
            $('#brandProfile').val(data.brand).material_select("refresh");
        } 
        if (data.productName  !== "") {
            $('#productNameProfile').val(data.productName).material_select("refresh");
        }
        if (data.width !== "") {
            $('#widthProfile').val(data.width).material_select("refresh");
        }
        if (data.depth !== "") {
            $('#depthProfile').val(data.depth).material_select("refresh");
        }
        if (data.wattage !== "") {
            $('#wattageProfile').val(data.wattage).material_select("refresh");
        } 
        if (data.totalWattage !== "") {
            $('#totalWattageProfile').val(data.totalWattage).material_select("refresh");
        }
//		recessedSubTypeInSpotLight(data1);
        if (data.ledName !== "") {
            $('#ledNameProfile').val(data.ledName).material_select("refresh");
        }
        if (data.deepTop !== "") {
            $('#deepTopProfile').val(data.deepTop).material_select("refresh");
        }
        if (data.fixtureTypeProfile  !== "") {
            $('#fixtureType').val(data.fixtureType).material_select("refresh");
        } 
        if (data.mountingTypeProfile  !== "") {
            $('#mountingType').val(data.mountingType).material_select("refresh");
        } 
        if (data.trimProfile  !== "") {
            $('#trim').val(data.trim).material_select("refresh");
        }
        if (data.colorProfile  !== "") {
            $('#color').val(data.color).material_select("refresh");
        } 
        if (data.finishProfile  !== "") {
            $('#finish').val(data.finish).material_select("refresh");
        }
        if (data.finishTypeProfile  !== "") {
            $('#finishType').val(data.finishType).material_select("refresh");
        }
        if (data.diffuserProfile  !== "") {
            $('#diffuser').val(data.diffuser).material_select("refresh");
        }
        if (data.driverProfile  !== "") {
            $('#driver').val(data.driver).material_select("refresh");
        }
        if (data.driverDetailProfile  !== "") {
            $('#driverDetail').val(data.driverDetail).material_select("refresh");
        }
//		dimmSubTypeInSpotLight(data1);
        if (data.warrantyProfile  !== "") {
            $('#dimmSubType').val(data.warranty).material_select("refresh");
        }
        if (data.lengthProfile  !== "") {
            $('#IPRating').val(data.IPRating).material_select("refresh");
        }
        
        
        if (data.hsnIdProfile  !== "") {
            $('#hsnId').val(data.hsnId).material_select("refresh");
        }
        if (data.skuIdProfile  !== "") {
            $('#skuId').val(data.skuId);
            $('#skuIdLbl').addClass("active");
           }
        if (data.goldProfile  !== "") {
            $('#gold').val(data.gold);
            $('#goldLbl').addClass("active");
           }
        if (data.silverProfile  !== "") {
            $('#silver').val(data.silver);
            $('#silverLbl').addClass("active");
           }
        if (data.bronzeProfile  !== "") {
            $('#bronze').val(data.bronze);
            $('#bronzeLbl').addClass("active");
           }
        if (data.additionalInformation  !== "") {
            $('#additionalInformation').val(data.additionalInfo);
            $('#additionalInformationLbl').addClass("active");
           }
		 $('#generateSKUProfile').attr('disabled',false);
		 $('#SubmitButtonUpdateProfile').attr('disabled',false);
		 $("#SubmitButtonUpdateProfile").removeClass("HideThisElement");
		 $("#SubmitButtonRegisterProfile").addClass("HideThisElement");

		 $("#profileRegistrationForm").removeClass("HideThisElement");
		 $("#profileListTable").addClass("HideThisElement");
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
		brandInProfile(data1);
		productNameInProfile(data1);
		widthInProfile(data1);
		depthInProfile(data1);
		wattageInProfile(data1);
		totalWattageInProfile(data1);
		ledNameInProfile(data1);
		ledTypeInProfile(data1);
		deepTopInProfile(data1);
		fixtureTypeInProfile(data1);
		mountingTypeInProfile(data1);
		trimInProfile(data1);
		colorInProfile(data1);
		finishInProfile(data1);
		finishTypeInProfile(data1);
		diffuserInProfile(data1);
		driverInProfile(data1);
		driverDetailInProfile(data1);
		warrantyInProfile(data1);
		lengthInProfile(data1);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest1.onerror = function() {
      console.log("Connection error");
    };
	
    ourRequest1.send();
    
    function lengthInProfile(Data) {
    	var options1;
    	$('#lengthProfile').empty();
        options1 = '<option value="" selected>Length</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Length")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#lengthProfile').html(options1);
        $('#lengthProfile').material_select('refresh');
    }
    
    function warrantyInProfile(Data) {
    	var options1;
    	$('#warrantyProfile').empty();
        options1 = '<option value="" selected>Warranty</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Warranty")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#warrantyProfile').html(options1);
        $('#warrantyProfile').material_select('refresh');
    }
    
    function driverDetailInProfile(Data) {
    	var options1;
    	$('#driverDetailProfile').empty();
        options1 = '<option value="" selected>Driver Detail (TBD)</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Driver Detail (TBD)")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#driverDetailProfile').html(options1);
        $('#driverDetailProfile').material_select('refresh');
    }
    
    function driverInProfile(Data) {
    	var options1;
    	$('#driverProfile').empty();
        options1 = '<option value="" selected>Driver</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Driver")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#driverProfile').html(options1);
        $('#driverProfile').material_select('refresh');
    }
    
    function diffuserInProfile(Data) {
    	var options1;
    	$('#diffuserProfile').empty();
        options1 = '<option value="" selected>Diffuser</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Diffuser")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#diffuserProfile').html(options1);
        $('#diffuserProfile').material_select('refresh');
    }
    
    function finishTypeInProfile(Data) {
    	var options1;
    	$('#finishTypeProfile').empty();
        options1 = '<option value="" selected>Finish Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Finish Type")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#finishTypeProfile').html(options1);
        $('#finishTypeProfile').material_select('refresh');
    }
    
    function finishInProfile(Data) {
    	var options1;
    	$('#finishProfile').empty();
        options1 = '<option value="" selected>Finish</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Finish")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#finishProfile').html(options1);
        $('#finishProfile').material_select('refresh');
    }
    
    function colorInProfile(Data) {
    	var options1;
    	$('#colorProfile').empty();
        options1 = '<option value="" selected>Color</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Color")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#colorProfile').html(options1);
        $('#colorProfile').material_select('refresh');
    }
    
    function trimInProfile(Data) {
    	var options1;
    	$('#trimProfile').empty();
        options1 = '<option value="" selected>Trim/NonTrim</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Trim/NonTrim")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#trimProfile').html(options1);
        $('#trimProfile').material_select('refresh');
    }
    
    function mountingTypeInProfile(Data) {
    	var options1;
    	$('#mountingTypeProfile').empty();
        options1 = '<option value="" selected>Mounting Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Mounting Type")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#mountingTypeProfile').html(options1);
        $('#mountingTypeProfile').material_select('refresh');
    }
    
    function fixtureTypeInProfile(Data) {
    	var options1;
    	$('#fixtureTypeProfile').empty();
        options1 = '<option value="" selected>Fixture Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Fixture Type")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#fixtureTypeProfile').html(options1);
        $('#fixtureTypeProfile').material_select('refresh');
    }
    
    function deepTopInProfile(Data) {
    	var options1;
    	$('#deepTopProfile').empty();
        options1 = '<option value="" selected>Deep Top</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Deep Top")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#deepTopProfile').html(options1);
        $('#deepTopProfile').material_select('refresh');
    }
    
    function ledTypeInProfile(Data) {
    	var options1;
    	$('#ledTypeProfile').empty();
        options1 = '<option value="" selected>LED Type</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "LED Type")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#ledTypeProfile').html(options1);
        $('#ledTypeProfile').material_select('refresh');
    }
    
    function ledNameInProfile(Data) {
    	var options1;
    	$('#ledNameProfile').empty();
        options1 = '<option value="" selected>Led Name</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Led Name")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#ledNameProfile').html(options1);
        $('#ledNameProfile').material_select('refresh');
    }
    
    function totalWattageInProfile(Data) {
    	var options1;
    	$('#totalWattageProfile').empty();
        options1 = '<option value="" selected>Total Wattage</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Total Wattage")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#totalWattageProfile').html(options1);
        $('#totalWattageProfile').material_select('refresh');
    }
    
    function wattageInProfile(Data) {
    	var options1;
    	$('#wattageProfile').empty();
        options1 = '<option value="" selected>Wattage per foot</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Wattage per foot")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#wattageProfile').html(options1);
        $('#wattageProfile').material_select('refresh');
    }
    
    function depthInProfile(Data) {
    	var options1;
    	$('#depthProfile').empty();
        options1 = '<option value="" selected>Depth</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Depth")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#depthProfile').html(options1);
        $('#depthProfile').material_select('refresh');
    }
    
    function widthInProfile(Data) {
    	var options1;
    	$('#widthProfile').empty();
        options1 = '<option value="" selected>Width</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Width")
        	{
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#widthProfile').html(options1);
        $('#widthProfile').material_select('refresh');
    }
    
    function productNameInProfile(Data) {
    	var options1;
    	$('#productNameProfile').empty();
        options1 = '<option value="" selected>Product Names</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Product Name") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#productNameProfile').html(options1);
        $('#productNameProfile').material_select('refresh');
    }
    
    function brandInProfile(Data) {
    	var options1;
    	$('#brandProfile').empty();
        options1 = '<option value="" selected>Brands</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].subCategory == "50120000" && Data.data[i].category == "Brand") {
        		options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].description + "</option>";
    		}
        }
        options1 += notApplicable;
        $('#brandProfile').html(options1);
        $('#brandProfile').material_select('refresh');
    }
    
    $("#generateSKUProfile").click(function() {
    	var url = "../../../GenerateSKUServlet";

    	if (document.getElementById("brandProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Brand is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("productNameProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Product Name is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("widthProfile").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Width is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("depthProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Depth is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("wattageProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Wattage is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("totalWattageProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Total Wattage is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("ledNameProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> LED Name is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("ledTypeProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> LED Type is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("deepTopProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Deep Top is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("fixtureTypeProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Fixture Type is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("mountingTypeProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Mounting Type is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("trimProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Trim is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("colorProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Color is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("finishProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Finish is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("finishTypeProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Finish Type is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("diffuserProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Diffuser is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("driverProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Driver is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("driverDetailProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Driver Detail is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("warrantyProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Warranty is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("lengthProfile").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Length is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else {
	    	$.ajax({
	           type: "GET",
	           url: url,
	           data: $("#newProfileForm").serialize()+"&for=profile", // serializes the form's elements.
	           success: function(data)
	           {
	        	   console.log(data);
		        	if (data != 0)
		        	{
		        		$('#skuIdProfile').val(generator.generate());
		        		$('#skuIdProfileLbl').addClass('active');
		        		$('#generateSKUProfile').attr('disabled',true);
						$("#RegisterNewProfile #alertMessage").addClass("HideThisElement");
						$("#RegisterNewProfile #errorMessage").addClass("HideThisElement");
		        		$('#SubmitButtonRegisterProfile').attr('disabled',false);
		        		$('#SubmitButtonUpdateProfile').attr('disabled',false);
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
    
    $("#SubmitButtonRegisterProfile").click(function() {
    	var url = "../../../ProductRegisterServlet";
    	var data = "for=profile&"+$("#newProfileForm").serialize();
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
							document.getElementById("newProfileForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#generateSKUProfile').attr('disabled',false);
							$('#SubmitButtonRegisterProfile').attr('disabled',true);
					    	$("#SubmitButtonRegisterProfile").removeClass("HideThisElement");
					    	$("#SubmitButtonUpdateProfile").addClass("HideThisElement");
					    	$("#profileRegistrationForm").addClass("HideThisElement");
					    	$("#profileListTable").removeClass("HideThisElement");
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
    	document.getElementById("newProfileForm").reset();
    	$('.mdb-select').material_select("destroy");
    	$('.mdb-select').material_select();
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
		$('#generateSKUProfile').attr('disabled',false);
		$('#SubmitButtonRegisterProfile').attr('disabled',true);
    	$("#SubmitButtonRegisterProfile").removeClass("HideThisElement");
    	$("#SubmitButtonUpdateProfile").addClass("HideThisElement");
    	$("#profileRegistrationForm").removeClass("HideThisElement");
    	$("#profileListTable").addClass("HideThisElement");
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
    	$("#profileRegistrationForm").addClass("HideThisElement");
    	$("#profileListTable").removeClass("HideThisElement");
    });
});