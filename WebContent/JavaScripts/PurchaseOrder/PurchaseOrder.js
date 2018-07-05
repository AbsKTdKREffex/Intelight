
$(document).ready(function(){
   	var generator = new IDGenerator();
	var deletedProductId=[];
	
	//later check this
    $('#UpdateProduct').addClass("hideButton");
    $("#viewQuotation").hide();

	if($('#PurchaseOrder').val() != "null")
	{
        var getPurchaseOrderDetails = new XMLHttpRequest();
        
        getPurchaseOrderDetails.open('GET', '../../../GetPurchaseOrderDetails?flag=fromEdit&selectedPurchaseOrderId=' + $("#PurchaseOrder").val());
        getPurchaseOrderDetails.onload = function() {
            if (getPurchaseOrderDetails.status <= 200 && getPurchaseOrderDetails.status <= 400) {
                var purchaseDetails = JSON.parse(getPurchaseOrderDetails.responseText);
                total = purchaseDetails.data.length;
        	   	$('#purchaseOrderId').val(purchaseDetails.data[0].purchaseOrderId);
        		$("#purchaseOrderIdLbl").addClass("active");
                $('#selectedVendorId').val(purchaseDetails.data[0].vendorId);
                $('#vendorName').val(purchaseDetails.data[0].companyName);
        		$("#vendorNameLbl").addClass("active");
                $('#location').val(purchaseDetails.data[0].location);
        		$("#locationLbl").addClass("active");
                $('#contactPerson').val(purchaseDetails.data[0].contactPerson);
                $('#contactPersonLbl').addClass("active");
                $('#contactNo').val(purchaseDetails.data[0].contactNo);
                $('#contactNoLbl').addClass("active");
                $('#altContactNo').val(purchaseDetails.data[0].altContactNo);
                $('#altContactNoLbl').addClass("active");
                for (i = 0; i < total; i++) {
                    var table1 = document.getElementById('productTable');
                    var rowCount = table1.rows.length;
                    var id = rowCount - 1;
                    var newHtml = 	'<tr>' +
				                        '<td style="padding-top: 15px;text-align: center;padding-left: 18px;"><input type="checkbox" id="' + purchaseDetails.data[i].productId + '" name="' + purchaseDetails.data[i].productId + '"><label for="' + purchaseDetails.data[i].productId + '"></label></td>' +
				                        '<td style="padding-top: 15px"><center>' + purchaseDetails.data[i].product_desc + '</td>' +
				                        '<td style="text-align: center"><input type="number" value=' + purchaseDetails.data[i].quantity + ' style="width:70px;" id="qty' + purchaseDetails.data[i].productId + '" name="qty""></td>' +
		                        	'</tr>';
                    document.querySelector('#productTableBody').insertAdjacentHTML('beforeend', newHtml);
                }
            }
        }
        
        getPurchaseOrderDetails.send();
        $("#Submit").addClass("hideButton");
        $("#Update").removeClass("hideButton");
	}
	else
	{
	   	$('#purchaseOrderId').val(generator.generate());
		$("#purchaseOrderIdLbl").addClass("active");
	}
            
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
                className: "center",
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
            var price = parseFloat(data.price).toFixed(2);
            var newHtml = '<tr>' +
                '<td style="padding-top: 15px;text-align: center;padding-left: 18px;"><input type="checkbox" id="' + data.productId + '" name="' + data.productId + '"><label for="' + data.productId + '"></label></td>' +
                '<td style="padding-top: 15px;text-align: center;">' + data.product_desc + '</td>' +
                '<td style="text-align: center"><input type="number" value=1 style="width:70px;" id="qty' + data.productId + '" name="qty"></td>' +
                '</tr>';
            document.querySelector('#productTableBody').insertAdjacentHTML('beforeend', newHtml);
        }
    });
    
    $('#vendorModal').on('shown.bs.modal', function (e) {
    	$('#vendorTable').DataTable().destroy();
    	vendorTable();
	})
    	
    function vendorTable() {
	    $('#vendorTable thead #filterrow th').each( function () {
	    	var title = $(this).text();
	        $(this).html( '<input type="text" style="font-size: 80%;padding:auto;text-align:center;width:80%;" placeholder="Search '+title+'" />' );
	    } );
		
	    $("#vendorTable thead input").on('keyup change', function () {
	    	vendor.column($(this).parent().index() + ':visible')
	            .search(this.value)
	            .draw();
	    });
	    
		var vendor = $('#vendorTable').DataTable( {
			dom: 'Bfrtip',
	        buttons: [
	            {
	                text: 'New Vendor',
	                action: function ( e, dt, node, config ) {
	                	loadBlankform1();
	                }
	            }
	        ],
			"bLengthChange": false,
			"searching": true,
			"orderCellsTop": true ,
			"sScrollX": "100%",
	        "sScrollXInner": "100%",
	        "bScrollCollapse": true,
			"ajax": "../../../GetVendorList",
			"columns": [
	       	 	{
	                defaultContent:'<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
	            },
	           { "data": "companyName" },
	           { "data": "location" },
	           { "data": "contactPerson" },
	           { "data": "contactNo" },
	           { "data": "altContactNo" },
	           { "data": "emailId" }
	       ]
	    });
		
		 $('#vendorTable tbody').off('click');
		 
		$('#vendorTable tbody').on( 'click', '.select_me', function () {
	    	var data = vendor.row( $(this).parents('tr') ).data();
			$('#vendorName').val(data.companyName);
			$("#vendorNameLbl").addClass("active");
			$('#location').val(data.location);
			$("#locationLbl").addClass("active");
			$('#contactPerson').val(data.contactPerson);
			$("#contactPersonLbl").addClass("active");
			$('#contactNo').val(data.contactNo);
			$("#contactNoLbl").addClass("active");
			$('#altContactNo').val(data.altContactNo);
			$("#altContactNoLbl").addClass("active");
			$('#vendorModal').modal('hide');
			$('#selectedVendorId').val(data.rowId);
			$('#gst').val(data.gstNo);
            $('#gstLbl').addClass("active");
	    });
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
 	   var selectBox2 = document.getElementById("state");
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
 	      $('#state').append(options2.join("")).material_select();
 	      $('#state').material_select('enable');
 	      $("#state" ).material_select( "refresh" )
 	  }
    
   ourRequest2.send();
   
		function loadBlankform1() {
		   	document.getElementById("newVendorForm").reset();
		   	$('#vendorId').val(generator.generate());
		   	$("#SubmitButtonRegister").removeClass("HideThisElement");
		   	$("#SubmitButtonUpdate").addClass("HideThisElement");
		   	$("#alertMessage").addClass("HideThisElement");
		   	$("#errorMessage").addClass("HideThisElement");
		   	document.querySelector('#NewElement-modal-title').innerHTML = 'New Vendor Details';
		   	$('#RegisterNewVendor').modal('show');
		}
		
		$("#SubmitButtonRegister").click(function() {
		   	var url = "../../../VendorRegisterServlet"; // the script where you handle the form input.
		   	if ($("#newVendorForm #companyName").val() == "") {
		   		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
		  		$("#alertMessage").removeClass("HideThisElement");
			}else if($("#newVendorForm #location").val() == ""){
				document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Location is mandatory !";
		  		$("#alertMessage").removeClass("HideThisElement");
			}else if($("#newVendorForm #location").val() == ""){
				document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
		  		$("#alertMessage").removeClass("HideThisElement");
			}else if($("#newVendorForm #contactPerson").val() == ""){
				document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Person Name is mandatory !";
		  		$("#alertMessage").removeClass("HideThisElement");
			}else if($("#newVendorForm #contactNo").val() == ""){
				document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Person Number is mandatory !";
		  		$("#alertMessage").removeClass("HideThisElement");
			}else if($("#newVendorForm #emailId").val() == ""){
				document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Person Email ID is mandatory !";
		  		$("#alertMessage").removeClass("HideThisElement");
			}else if($("#newVendorForm #gstNo").val() == ""){
				document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> GST Number is mandatory !";
		  		$("#alertMessage").removeClass("HideThisElement");
			}else if($("#newVendorForm #creditTime").val() == ""){
				document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Credit Time is mandatory !";
				$("#alertMessage").removeClass("HideThisElement");
			}else if($("#newVendorForm #state").val() == ""){
				document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> State is mandatory !";
		  		$("#alertMessage").removeClass("HideThisElement");
			} else {
		    	$.ajax({
		               type: "POST",
		               url: url,
		               data: $("#newVendorForm").serialize(), // serializes the form's elements.
		               success: function(data)
		               {
		                   if (data == 0) {
								toastr.error('Failed to Registered New Vendor!');
							} else{
								$('#vendorName').val($('#companyName').val());
								$("#vendorNameLbl").addClass("active");
								$('#location').val($('#newVendorForm #location').val());
								$("#locationLbl").addClass("active");
								$('#contactPerson').val($('#newVendorForm #contactPerson').val());
								$("#contactPersonLbl").addClass("active");
								$('#contactNo').val($('#newVendorForm #contactNo').val());
								$("#contactNoLbl").addClass("active");
								$('#altContactNo').val($('#newVendorForm #altContactNo').val());
								$("#altContactNoLbl").addClass("active");
								$('#selectedVendorId').val($('#vendorId').val());
			                	   document.getElementById("newVendorForm").reset();
									$("#alertMessage").addClass("HideThisElement");
									$("#errorMessage").addClass("HideThisElement");
									$('#vendorModal').modal('hide');
									$('#RegisterNewVendor').modal('hide');
							    	$('#vendorTable').DataTable().destroy();
									vendorTable();
									toastr.success('New Vendor Registered Successfully!');
							}
		               }
		    	});
		    }
	       return false; // avoid to execute the actual submit of the form.
	   	});

    $("#Submit").click(function() {
        var table1 = document.getElementById('productTable');
        var rowCount = table1.rows.length;
        var successStatus = true;
        var otherData = "purchaseOrderId="+$('#purchaseOrderId').val()+"&selectedVendorId="+$('#selectedVendorId').val();
        for(i=1; i < rowCount;i++)
        {
        	var row = table1.rows[i];
        	var formData = "";
			for(var j=0; j<$(row.cells).length; j++){
				if(j==0)
				{
					var name = "productId";
					formData+=name+"="+$($(row.cells[j]).html()).attr('name')+"&";
				}
				if(j==2)
				{
					var name = $($(row.cells[j]).html()).attr('name');
					formData+=name+"="+parseFloat($(row.cells[j].childNodes[0]).val())+"&purchaseOrderItemId="+generator.generate()+"&";
				}
			}
			formData+="count="+i+"&"+otherData;
			console.log(formData);
	        $.ajax({
	            type: "GET",
	            url: "../../../RegisterPurchaseOrder",
	            data: formData ,
	            success: function(data) {
	                if (data == 0) {
	                    successStatus = false;
	                    return;
	                } else {
	                    successStatus = true;
	                }
	            }
	        });
        }
        
        if (successStatus) {
            toastr.success('Purchase Order Placed Successfully!');
            window.location.href = 'ListPurchaseOrder.jsp';
        } else {
            toastr.error('Failed to Place Purchase Order!');
        }
    });
    
    $("#Update").click(function() {
            var table1 = document.getElementById('productTable');
            var rowCount = table1.rows.length;
            var successStatus = true;
            var otherData = "purchaseOrderId="+$('#purchaseOrderId').val()+"&selectedVendorId="+$('#selectedVendorId').val();
            for(i=1; i < rowCount;i++)
            {
            	var row = table1.rows[i];
            	var formData = "";
    			for(var j=0; j<$(row.cells).length; j++){
    				if(j==0)
    				{
    					var name = "productId";
    					formData+=name+"="+$($(row.cells[j]).html()).attr('name')+"&";
    				}
    				if(j==2)
    				{
    					var name = $($(row.cells[j]).html()).attr('name');
    					formData+=name+"="+parseFloat($(row.cells[j].childNodes[0]).val())+"&";
    				}
    			}
    			formData+="count="+i+"&"+otherData;
    			var deleteData="";
    			if(deletedProductId.length>0){
    				for(var d=0; d<deletedProductId.length;d++){
    					if(d==0)
    					{
    						deleteData+="&";
    					}
    					deleteData+="deleteid["+d+"]="+deletedProductId[d]+"&";
    				}deleteData+="deleteidCount="+deletedProductId.length;
    			}
    			formData+=deleteData;
    			console.log(formData);
    	        $.ajax({
    	            type: "GET",
    	            url: "../../../UpdatePurchaseOrder",
    	            data: formData ,
    	            success: function(data) {
    	                if (data == 0) {
    	                    successStatus = false;
    	                    return;
    	                } else {
    	                    successStatus = true;
    	                }
    	            }
    	        });
            }
            
            if (successStatus) {
                toastr.success('Purchase Order Updated Successfully!');
                window.location.href = 'ListPurchaseOrder.jsp';
            } else {
                toastr.error('Failed to Update Place Purchase Order!');
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
        			deletedProductId.push($($(row.cells[0]).html()).attr('name'));
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