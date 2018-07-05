<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Order Placing</title>
    
    <link rel="shortcut icon" href="../../../img/TitleImage.png">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="../../../css/bootstrap.min.css">
    <!-- Material Design Bootstrap -->
    <link rel="stylesheet" href="../../../css/mdb.css">
    <!-- DataTables.net -->
    <link rel="stylesheet" type="text/css" href="../../../js/vendor/datatables/css/dataTables.bootstrap4.min.css"/>
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.4.0/css/buttons.dataTables.min.css" />
 
    
    <style type="text/css">
    .dropdown-content{
		height: 144px !important;
	}
    .increaseWeight{
    	font-weight: 700 !important;
   	 	font-size: large;
	}
	#filterrow th {
	    padding: 0%;
	}
	th{
	  	padding:1%;
	}
	.hideElement{
    	display: none !important;
	}
	.right{
	 	text-align: right;
	}
	.righttxt{
		 text-align: right;
		 font-weight: 400;
	}
    </style>
    
	<script type="text/javascript">
	
		function RateChangeFunc(element)
		{
        	if ($(element).val() == "") {
        		$(element).val(parseFloat(0).toFixed(2));
        	} else {
        		$(element).val(parseFloat($(element).val()));
            	var productseg = $(element).attr('id');
            	var prodLength = productseg.length;
            	var product = productseg.substr(8,prodLength);

            	var table = document.getElementById('productTable');
            	var rowCount = table.rows.length;
            	
            	for(var i=1; i<rowCount; i++) {
            		var row = table.rows[i];
            		var a = $(row.cells[0]).html();
            		var idToCheck= $(a).attr('id');
            		if(idToCheck === product)
            		{
            			parseFloat($(row.cells[5].childNodes[0]).val()).toFixed(2);
            			$(row.cells[7]).html(parseFloat($(row.cells[5].childNodes[0]).val() * $(row.cells[6].childNodes[0]).val()).toFixed(2));
            		}
        		}
			
			}
		}
	
        function CheckInputStatusJob(element) {
        	if ($(element).val() == "") {
        		$(element).val(0);
        	} else {
        		$(element).val(parseFloat($(element).val()));
            	var productseg = $(element).attr('id');
            	var prodLength = productseg.length;
            	var product = productseg.substr(3,prodLength);
            	
            	var table = document.getElementById('productTable');
            	var rowCount = table.rows.length;

            	for(var i=1; i<rowCount; i++) {
            		var row = table.rows[i];
            		var a = $(row.cells[0]).html();
            		var idToCheck= $(a).attr('id');
            		if(idToCheck === product)
            		{
            			var qty = parseFloat($(row.cells[5].childNodes[0]).val());
                        amt = $(row.cells[6].childNodes[0]).val() * qty;		
                        $(row.cells[7]).html(amt.toFixed(2));
                        break;
                    }
            	}
               }
        	}
        
        function dropdwnChange(id,actId)
        {
        	var category = id.value;
        	var productseg = $(id).attr('id');
        	var prodLength = productseg.length;
        	var product = productseg.substr(3,prodLength);
			
        	var table = document.getElementById('productTable');
        	var rowCount = table.rows.length;
        	
        	for(var i=1; i<rowCount; i++) {
        		var row = table.rows[i];
        		var a = $(row.cells[0]).html();
        		var idToCheck= $(a).attr('id');

        		if(category == "other")
        		{
        			$('#ItemRate'+actId).removeAttr("ReadOnly");
        		}
        		else if(idToCheck==product)
        		{
        			var q = $(row.cells[5].childNodes[0]).val();
        			var getProductDetails = new XMLHttpRequest();
                	getProductDetails.open('GET','../../../GetSpecificProduct?ProductId='+product+'&categoryId='+category+'&qty='+q);
                	
                	getProductDetails.onload = function() {
                		if( getProductDetails.status <= 200 && getProductDetails.status <=400 ){
                			var priceDetails = JSON.parse(getProductDetails.responseText);
                			var rate1 = parseFloat(priceDetails.data[0].rate);
                			$(row.cells[6].childNodes[0]).prop("readonly",true);
                			$(row.cells[6].childNodes[0]).val(rate1.toFixed(2));
                	        var val = parseFloat($(row.cells[6].childNodes[0]).val() * $(row.cells[5].childNodes[0]).val());
                	        $(row.cells[7]).html(val.toFixed(2));
                	        var val1 = (parseFloat($(row.cells[6]).html()) * parseFloat(priceDetails.data[0].gst))/100;
                	        $(row.cells[8]).html(val1.toFixed(2));
		                    var val2 = parseFloat($(row.cells[7]).html()) + parseFloat($(row.cells[8]).html());
                	        $(row.cells[9]).html(val2.toFixed(2));
                		}
                	};
                	getProductDetails.send();

                	getProductDetails.onerror = function() {
                		console.log("error");
                	} 
                	break;
        		}
        		
        	}
        }
        
        function checkImage(id,img,imgName)
        {
        	if(img == "1")
        	{
        		$('#blah'+id+'').attr('src', '../../../files/'+imgName);
        	} else{
        		$('#blah'+id+'').attr('src', '../../../Images/upload.png');
        	}
        }

    </script>
</head>
<body class="fixed-sn white-skin">
	<%@ include file="../../../Header.jsp" %>
	<main>
        <div class="container-fluid mb-4" id="projectInformation">
			
            <!--Section: Basic examples-->
            <section class="">

                <div class="row">
                    
                    <div class="col-md-12">
                                                
                        <div class="card">
	                            <div class="card-body mx-4">
	                            <!--Title-->
						        <h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Project Information</h4>
						        <br>
						        <input type="hidden" id="selectedProjectId" value="<%= request.getParameter("selectedProjectId")%>">
						        <input type="hidden" id="selectedQuotationId" value="<%= request.getParameter("qid")%>">
						        <input type="hidden" id="selectedClientId" value="<%= request.getParameter("cid")%>">
						        <input type="hidden" id="selectedProductId">
								<input type="hidden" id="compState" name="compState" value="<%= request.getParameter("s")%>">
					        	
					        	<div class="row">
			    					<!--First column-->
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="projectName" name="projectName" class="form-control validate capitalizeText" style="color:#2E2E2E;" disabled>
							                <label for="projectName" id="projectNameLbl" class="active disabled" style="color:#2E2E2E;">Project Name</label>
							            </div>
							        </div>
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="clientName" name="clientName" class="form-control validate capitalizeTex panelHeaderTitlet" style="color:#2E2E2E;" disabled>
							                <label for="clientName" id="clientNameLbl" class="active disabled" style="color:#2E2E2E;">Client Name</label>
							            </div>
							        </div>
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="architectCompany" name="architectCompany" class="form-control validate capitalizeText" style="color:#2E2E2E;" disabled>
							                <label for="architectCompany" id="architectCompanyLbl" class="active disabled" style="color:#2E2E2E;">Architect Company</label>
							            </div>
							        </div>
			    				</div>
			    			</div>
			    		</div>
			    	</div>
			    </div>
			</section>
		</div>
		
		
		<div class="container-fluid mb-4" id="otherInformation">
            <!--Section: Basic examples-->
            <section>

			<div class="row">

				<div class="col-md-12">

					<div class="card">
            <section class="">

                <div class="row">
                    
                    <div class="col-md-12">
                        <form id="otherInfo" name = "otherInfo">            
                        <div class="card">
                            <div class="card-body mx-4">
                            <!--Title-->
					        <h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Other Information</h4>
					        <br>
					        <%-- <input type="hidden" id="selectedProjectId" value="<%= request.getParameter("selectedProjectId")%>"> --%>
					        <!--First row-->
					        <div class="row">
							        <div class="col-md-3">
							            <div class="md-form">
							            	<i class="fa fa-search prefix" style="padding-top:4%" onclick="$('#contactPersonModal').modal('show');"></i>
							                <input type="text" id="contactPerson" name="contactPerson" class="form-control" disabled>
							                <input type="hidden" id="contactPersonId" name="contactPersonId" class="form-control" disabled>
							                <label for="contactPerson" id="contactPersonLbl" class="active disabled">Contact Person</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <!-- <i class="fa fa-pencil prefix" id="editProject"></i> -->
							                <input type="text" id="gstNo" name="gstNo" class="form-control" readOnly>
							                <label for="gstNo" id="gstNoLbl" class="active disabled" >GST No</label>
							            </div>
							        </div>
							
							        <!--Second column-->
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="hidden" id="stateId" name="stateId" class="form-control">
							                <input type="text" id="state" name="state" class="form-control validate" disabled>
							                <label for="state" id="stateLbl" class="active disabled">State</label>
							            </div>
							        </div>
                                    <div class="col-md-3">
                                        <div class="md-form">
                                            <input placeholder="Select date" type="text" id="expectedDelivery" name="expectedDelivery" class="form-control datepicker">
                                            <label id="expectedDeliveryLbl" for="expectedDelivery">Expected Delivery</label>
                                        </div>
                                    </div>
			    				</div>
						        <div class="row">
						        	<div class="col-md-4">
							            <div class="md-form">
								            <i class="fa fa-search prefix" id="billingsearch" style="padding-top:2%" onclick="$('#billingAddressModal').modal('show');"></i>
								            <input type="text" id="billingAddress" name="billingAddress" class="form-control" disabled>
							                <input type="hidden" id="billingAddressId" name="billingAddressId" class="form-control" disabled>
							                <label for="billingAddress" id="billingAddressLbl" class="disabled">Billing Address</label>
							            </div>
							        </div>
						        	<div class="col-md-4">
							            <div class="md-form">
								            <input type="text" id="deliveryAddress" name="deliveryAddress" class="form-control" readOnly>
							                <label for="deliveryAddress" id="deliveryAddressLbl" class="disabled">Delivery Address</label>
							            </div>
							        </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="md-form" style="padding-top: 5px;">
	                                        <select class="mdb-select" id="salesDept" name="salesDept">
	                                            <option value="" selected>Sales Department</option>
	                                        </select>
	                                        <label style="padding-top: 5px;">Sales Department</label>
                                        </div>
                                    </div>
						        </div>
			    				<div class="row">
						        	<div class="col-md-3">
							            <div class="md-form">
								            <i class="fa fa-search prefix" style="padding-top:4%" onclick="$('#salesPersonModal').modal('show');"></i>
								            <input type="text" id="salesPerson" name="salesPerson" class="form-control" disabled>
							                <input type="hidden" id="salesPersonId" name="salesPersonId" class="form-control" disabled>
							                <label for="salesPerson" id="salesPersonLbl" class="disabled">Sales Person</label>
							            </div>
							        </div>
                                    <!-- <div class="col-lg-4 col-md-6" style="padding-left: 63px;"> -->
                                    <div class="col-lg-3 col-md-3">
                                        <div class="md-form" style="padding-top: 6px;">
                                        <select class="mdb-select" id="modeOfPay" name="modeOfPay">
                                            <option value="" selected>Mode Of Payment</option>
                                        </select>
                                        <label style="padding-top: 5px;">Mode Of Payment</label>
                                        </div>
                                    </div>
							        
                                    <div class="col-lg-3 col-md-3">
                                        <div class="md-form" style="padding-top: 5px;">
	                                        <select class="mdb-select" id="invoiceType" name="invoiceType">
	                                            <option value="" disabled selected>Invoice Type</option>
	                                        </select>
	                                        <label style="padding-top: 5px;">Invoice Type</label>
                                        </div>
                                    </div>
							        
                                    <div class="col-lg-3 col-md-3">
                                        <div class="md-form" style="padding-top: 5px;">
	                                        <select class="mdb-select" id="priority" name="priority">
	                                            <option value="" disabled selected>Priority</option>
	                                        </select>
	                                        <label style="padding-top: 5px;">Priority</label>
                                        </div>
                                    </div>
			    				</div>
                            </div>
                        </div>
						</form>
                    </div>
                </div>
            </section>
					</div>
				</div>
			</div>
		</section>
		</div>
		
		<div class="container-fluid mb-4" id="productInfo">
            <section>
			<div class="row">
				<div class="col-md-12">
					<div class="card">
	                    <div class="card-body mx-4">
						        <div class="row">
							        <div class="col-md-8">
								        <h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Product Information</h4>
							        </div>
							        <div class="col-md-4" style="padding-left: 31%;">
							        	<i class="fa fa-minus mr-2" aria-hidden="true" id="show" onclick="showFunc()"></i>
							        </div>
						        </div>
					        	<div id="productDiv">
										<div class="DataTable">
											<table id="datatables" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
												<thead>
													<tr id="headerrow" class="mdb-color darken-1 text-white">
														<th>Action</th>
														<th>SKU Id</th>
														<th>Product Type</th>
														<th>Brand</th>
														<th>Description</th>
													</tr>
													<tr id="filterrow">
														<td></td>
														<th>SKU Id</th>
														<th>Product Type</th>
														<th>Brand</th>
														<th>Description</th>
													</tr>
												</thead>
											</table>
										</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
		
		<div class="modal fade" id="billingAddressModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<!--Content-->
				<div class="modal-content">
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">Select Address</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body mb-0">
						<table id="addressTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
                                            <th>Company Name</th>
                                            <th>location</th>
                                            <th>branchName</th>
                                            <th>address</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
										  	<th>Company Name</th>
                                            <th>location</th>
                                            <th>branchName</th>
                                            <th>address</th>
										</tr>
                                    </thead>
                                </table>
                                <hr class="my-1">
							
							<div class="row">
								<div class="text-center mt-1-half">
									<button class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</button>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="modal fade" id="salesPersonModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<div class="modal-content">
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">Select Sales Person</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body mb-0">
                                <table id="salesTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white">
                                            <th>Action</th>
											<th>Employee Name</th>
											<th>Department</th>
											<th>Designation</th>
											<th>Mobile No</th>
											<th>Email ID</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
	  										<th>Employee Name</th>
	  										<th>Department</th>
	  										<th>Designation</th>
	  										<th>Mobile No</th>
	  										<th>Email ID</th>
										</tr>
                                    </thead>
                                    <tbody id="example">
                                    </tbody>
                                </table>
                                <hr class="my-1">
							<div class="row">
								<div class="text-center mt-1-half">
									<button class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</button>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="modal fade" id="billingAddressModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<div class="modal-content">
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">Select Address</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body mb-0">
						<table id="addressTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
                                            <th>Company Name</th>
                                            <th>location</th>
                                            <th>branchName</th>
                                            <th>address</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
										  	<th>Company Name</th>
                                            <th>location</th>
                                            <th>branchName</th>
                                            <th>address</th>
										</tr>
                                    </thead>
                                </table>
                                <hr class="my-1">
							
							<div class="row">
								<div class="text-center mt-1-half">
									<button class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</button>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="modal fade" id="contactPersonModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<div class="modal-content">
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">Select Address</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body mb-0">
						<table id="contactPTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
											<th>Contact Person Name</th>
											<th>Designation</th>
											<th>Mobile No</th>
											<th>Alternate No</th>
											<th>Email ID</th>
											<th>Location</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
											<th>Contact Person Name</th>
											<th>Designation</th>
											<th>Mobile No</th>
											<th>Alternate No</th>
											<th>Email ID</th>
											<th>Location</th>
										</tr>
                                    </thead>
                                </table>
                                <hr class="my-1">
							
							<div class="row">
								<div class="text-center mt-1-half">
									<button class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</button>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="container-fluid mb-4" id="productList">
            <section>
			<div class="row">
				<div class="col-md-12">
					<div class="card">
	                    <div class="card-body mx-4">
						<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Product</h4>
						<div class="card-body">
							<div id="OrderDetails" class="">
								<div class="FormDiv ">
								<form action="" class="form form-horizontal" name="newOrderForm" id="newOrderForm">
									<table id="productTable" class="table table-sm" style="margin: auto;margin-bottom: 2%" >
										<thead>
										<tr class="mdb-color darken-1 text-white">
                                            <th >Select</th>
                                            <th >Image</th>
                                            <th >Product Info</th>
                                            <th >Available Quantity</th>
                                            <th >Segment</th>
                                        	<th >Quantity</th>
                                            <th >Rate</th>
                                            <th >Amount</th>
									 		<th >Discount</th>
									  	</tr>
									  	</thead>
									  	<tbody id="productTableBody">
									  	</tbody>
								  	</table>
						        	<div class="row" style="text-align: center;">
								        <div class="col-md-2">
								            <div class="md-form">
								                <input type="number" id="installation" name="installation" class="form-control" value=0>
								                <label for="installation" id="installationLbl" class="">Installation</label>
								            </div>
								        </div>
								        <div class="col-md-2">
								            <div class="md-form">
								                <input type="number" id="transportation" name="transportation" class="form-control" value=0>
								                <label for="transportation" id="transportationLbl" class="" style="font-size: 87%;">Transportation</label>
								            </div>
								        </div>
								        <div class="col-md-2">
								            <div class="md-form">
								                <input type="number" id="packaging" name="packaging" class="form-control" value=0>
								                <label for="packaging" id="packagingLbl" class="">Packaging</label>
								            </div>
								        </div>
								        <div class="col-md-6" style="text-align: left;">
											<input type="hidden" id="dealerState" name="dealerState">
										  	<button type="button" id="DeleteProduct" class="btn btn-primary waves-effect">Delete</button>
										  	<button type="button" id="AddOrder" class="btn btn-outline-primary waves-effect">Place Order</button>
								        </div>
				    				</div>
								</form>
								<br/></div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
		</section>
		</div>
		
<div class="modal fade" id="RegisterNewAddress" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
                        <!--Content-->
                        <div class="modal-content">

                            <!--Header-->
                            <div class="modal-header light-blue darken-3 white-text">
                                <i class="fa fa-user-plus mr-1 fa-2x"></i><h5 class="" id="NewElement-modal-title">New Address</h5>
                                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <!--Body-->
                            <div class="modal-body mb-0">
                               <form action="" id="newAddressForm" name="newAddressForm">
                               <div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
							   <div class="alert alert-danger HideThisElement" id="errorMessage"></div>
                               <input type="hidden" name="selectedClientIdAddressmod" id="selectedClientIdAddressmod" >
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control capitalizeText" id="locationAdd" name="locationAdd">
                                            <label id="locationAddLbl" for="locationAdd" class="">Location</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="number" class="form-control" id="contactNoAdd" name="contactNoAdd">
                                            <label id="contactNoAddLbl" for="contactNoAdd" class="">Contact Number</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control" id="branchName" name="branchName">
                                            <label id="branchNameLbl" for="branchName" class="">Branch name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control form-input-capital" id="gstNo" name="gstNo">
                                            <label id="gstNoLbl" for="gstNo" class="">GST No</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                	<div class="col-md-12">
                                        <div class="md-form">
                                            <input type="text" class="form-control" id="address" name="address">
                                            <label id="addressLbl" for="address" class="">Address</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="md-form" style="padding-top: 8px;">
                                        <select class="mdb-select" id="stateDD" name="state">
                                            <option value="" disabled selected>State</option>
                                        </select>
                                        <label style="padding-top: 5px;">State</label>
                                        </div>
                                    </div>
                                	<div class="col-md-6">
                                        <div class="md-form">
                                            <input type="number" class="form-control" id="pincode" name="pincode">
                                            <label id="pincodeLbl" for="pincode" class="">Pincode</label>
                                        </div>
                                    </div>
                                </div>
						<div class="row">

                                <div class="text-center mt-1-half">
                                    <button id="SubmitButtonRegisterAddress" class="btn btn-info waves-effect" data-dismiss="modal">Submit <i class="fa fa-chcek ml-1"></i></button>
                                    <button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
                                </div>
                        </div>
                        </form>
                            </div>
                        </div>
                        <!--/.Content-->
                    </div>
                </div>
                
                
    <div class="modal fade" id="EditContactPerson" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg cascading-modal" role="document"
			style="margin-top: 35px;">
			<!--Content-->
			<div class="modal-content">

				<!--Header-->
				<div class="modal-header light-blue darken-3 white-text">
					<i class="fa fa-user-plus mr-1 fa-2x"></i>
					<h5 class="" id="NewElement-modal-title">New Contact Person</h5>
					<button type="button" class="close waves-effect waves-light"
						data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<!--Body-->
				<div class="modal-body mb-0">
					<form action="" id="editContactPForm" name="editContactPForm">
						<div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
						<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
						<input type="hidden" name="selectedClientIdCntctPmod" id="selectedClientIdCntctPmod">
						<input type="hidden" name="selectedContctPId" id="selectedContctPId">
						<!-- Grid row -->
						<div class="row">
                             <div class="col-md-4">
                                 <div class="md-form">
                                     <input type="text" class="form-control capitalizeText" id="firstName" name="firstName">
                                     <label id="firstNameLbl" for="firstName" class="">First Name</label>
                                 </div>
                             </div>
                             <div class="col-md-4">
                                 <div class="md-form">
                                     <input type="text" class="form-control capitalizeText" id="lastName" name="lastName">
                                     <label id="lastNameLbl" for="lastName" class="">Last Name</label>
                                 </div>
                             </div>
                             <div class="col-md-4">
                                 <div class="md-form">
                                     <input type="text" class="form-control capitalizeText" id="locationcontct" name="locationcontct">
                                     <label id="locationcontctLbl" for="locationcontct" class="">location</label>
                                 </div>
                             </div>
                         </div>
                         
                         <div class="row">
                             <div class="col-md-4">
                                 <div class="md-form">
                                     <input type="number" class="form-control capitalizeText" id="contactNoCP" name="contactNoCP">
                                     <label id="contactNoCPLbl" for="contactNoCP" class="">Contact Number</label>
                                 </div>
                             </div>
                             <div class="col-md-4">
                                 <div class="md-form">
                                     <input type="number" class="form-control" id="altContactNo" name="altContactNo">
                                     <label id="altContactNoLbl" for="altContactNo" class="">Alt Contact No</label>
                                 </div>
                             </div>
                             <div class="col-md-4">
                                 <div class="md-form">
                                     <input type="text" class="form-control" id="emailId" name="emailId">
                                     <label id="emailIdLbl" for="emailId" class="">Email ID</label>
                                 </div>
                             </div>
                         </div>

                         <div class="row">
                             <div class="col-lg-4 col-md-12">
                                 <div class="md-form">
                                 <select class="mdb-select" id="designationContactP" name="designationContactP">
                                     <option value="" disabled selected>Designation</option>
                                 </select>
                                 <label>Designation</label>
                                 </div>
                             </div>
                         </div>
                         
						<div class="row">
							<div class="text-center mt-1-half">
								<button id="SubmitButtonRegisterContactP" class="btn btn-info waves-effect" data-dismiss="modal">Submit <i class="fa fa-chcek ml-1"></i></button>
								<button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
							</div>
						</div>
				</form>
			</div>
		</div>
	</div>
	</div>	
		
	<div class="container-fluid mb-4" id="successMessageOrder">
		<section>
			<div class="card">
				<div class="card-body">
					<div>
						<div class="col-md-12 row" style="padding-left: 5%;">
							<div class="col-sm-4 row">
								<input type="hidden" id="oid" value="<%= request.getParameter("oid")%>">
								<label class="control-label" for="email"><b>Order Id : </b></label>
								<p class="form-control-static" id="orderId1"></p>
							</div>
							<div class="col-sm-5 row">
								<label class="control-label" for="email">Client Name : </label>
								<p class="form-control-static" id="orderClientName1">Effex Business Solutions Pvt Ltd</p>
							</div>
							<div class="col-sm-4 row">
								<label class="control-label" for="email">Date: </label>
								<p class="form-control-static" id="orderDate1">someone@example.com</p>
							</div>
						</div>
						<div class="col-md-12 row" style="padding-left: 5%;">
							<table id="orderSummaryTable" class="table table-striped table-bordered wrap">
								<thead>
									<tr id="headerrow" class="mdb-color darken-3 text-white">
										<th>Sr No</th>
										<th>Product</th>
										<th>Quantity</th>
										<th>Rate</th>
										<th>Amount</th>
									</tr>
								</thead>
								<tbody id="orderSummaryBody"></tbody>					
								<tfoot id="orderSummaryFoot"></tfoot>					
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
		
	</main>
	
	<script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    <!--Custom scripts-->
    
    <script type="text/javascript" src="../../../JavaScripts/Order/order.js"></script>
    <script type="text/javascript">
        // popovers Initialization
        $(function () {
            $('[data-toggle="popover"]').popover()
        })

        $("#billingsearch").click(function() {
        	$('.delivery').addClass('hideElement');
        	$('.billing').removeClass('hideElement');
        });

        $("#deliverysearch").click(function() {
        	$('.billing').addClass('hideElement');
        	$('.delivery').removeClass('hideElement');
        });
        
        $('.datepicker').pickadate();
    </script>
</body>
</html>