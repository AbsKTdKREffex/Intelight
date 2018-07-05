<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Purchase Order</title>
    
    <link rel="shortcut icon" href="../../../img/TitleImage.png">
    
    <!-- Font Awesome -->
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <link rel="stylesheet" href="../../../css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="../../../css/bootstrap.min.css">
    <!-- Material Design Bootstrap -->
    <link rel="stylesheet" href="../../../css/mdb.css">
    <!-- DataTables.net -->
    <link rel="stylesheet" type="text/css" href="../../../js/vendor/datatables/css/dataTables.bootstrap4.min.css"/>
    <!-- <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.4.0/css/buttons.dataTables.min.css" /> -->
    <link rel="stylesheet" href="../../../css/buttons.dataTables.min.css">
 
    <!-- Your custom styles (optional) -->
    <link href="../../../css/style.css" rel="stylesheet">
    
    <style type="text/css">
	    .hideButton{
			display: none !important;
		}
    </style>
</head>
<body class="fixed-sn white-skin">
    <%@ include file="../../../Header.jsp" %>
    <main>
    
        <div class="container-fluid mb-4">
            <section id="projectInformation" class="">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
	                            <div class="card-body mx-4">
						        <h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Vendor Information</h4>
						        <br>
						        <input type="hidden" id="PurchaseOrder" name="PurchaseOrder" value="<%= request.getParameter("poid")%>">
					        	<div class="row">
							        <div class="col-md-6">
							            <div class="md-form">
							                <input type="text" id="purchaseOrderId" name="purchaseOrderId" class="form-control" style="color:#2E2E2E;" ReadOnly>
							                <label for="" id="purchaseOrderIdLbl" class="active disabled" style="color:#2E2E2E;">Purchase Order Id</label>
							            </div>
							        </div>
							        <div class="col-md-6">
							            <div class="md-form">
	                                        <i class="fa fa-search prefix" onclick="$('#vendorModal').modal('show');"></i>
	                                        <input type="hidden" class="form-control" id="selectedVendorId" name="selectedVendorId">
	    									<input type="text" class="form-control capitalizeText" id="vendorName" name="vendorName" style="color:#2E2E2E;" disabled>
	                                        <label id="vendorNameLbl" for="vendorName" class="disabled" style="color:#2E2E2E;">Vendor Name</label>
							            </div>
							        </div>
			    				</div>
			    				
					        	<div class="row">
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="location" name="location" class="form-control" style="color:#2E2E2E;" ReadOnly>
							                <label for="location" id="locationLbl" class="active disabled" style="color:#2E2E2E;">Location</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="contactPerson" name="contactPerson" class="form-control" style="color:#2E2E2E;" ReadOnly>
							                <label for="contactPerson" id="contactPersonLbl" class="active disabled" style="color:#2E2E2E;">Contact Person</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="contactNo" name="contactNo" class="form-control" style="color:#2E2E2E;" ReadOnly>
							                <label for="contactNo" id="contactNoLbl" class="active disabled" style="color:#2E2E2E;">Contact No</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="altContactNo" name="altContactNo" class="form-control" style="color:#2E2E2E;" ReadOnly>
							                <label for="altContactNo" id="altContactNoLbl" class="active disabled" style="color:#2E2E2E;">Alternate Contact No</label>
							            </div>
							        </div>
			    				</div>
			    			</div>
			    		</div>
			    	</div>
			    </div>
			</section>
		</div>
		
		<div class="container-fluid mb-4" id="productInfo">
            <!--Section: Basic examples-->
            <section>

			<div class="row">

				<div class="col-md-12">

					<div class="card">
	                    <div class="card-body mx-4">
						<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Product Information</h4>
						<div class="card-body">
							<div class="DataTable">
								<table id="datatables"
									class="display compact table-bordered" cellspacing="0" width="100%">
									<thead>
										<tr id="headerrow">
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
		
		<div class="container-fluid mb-4">
            <!--Section: Basic examples-->
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
									<table id="productTable" class="table table-sm" style="width: 80%; margin: auto;margin-bottom: 2%" >
										<thead>
										<tr>
											<th >Select</th>
									 		<th >Product Info</th>
										    <th >Quantity</th>
									  	</tr>
									  	</thead>
									  	<tbody id="productTableBody">
									  	</tbody>
								  	</table>
						        	<div class="row" style="text-align: center;">
								        <div class="col-md-6" style="text-align: left;">
											<input type="hidden" id="dealerState" name="dealerState">
										  	<button type="button" id="DeleteProduct" class="btn btn-primary waves-effect">Delete</button>
										  	<button type="button" id="Submit" class="btn btn-outline-primary waves-effect">Submit</button>
										  	<button type="button" id="Update" class="btn btn-outline-primary waves-effect hideButton">Update</button>
											<!-- <a id="viewQuotation" class="btn btn-success waves-effect">View</a> -->
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
    
		<div class="modal fade" id="vendorModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<!--Content-->
				<div class="modal-content">
					<!--Header-->
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">New Vendor Name</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<!--Body-->
					<div class="modal-body mb-0">
						<table id="vendorTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
                                            <th>Company Name</th>
                                            <th>location</th>
                                            <th>Contact Person</th>
                                            <th>Contact No</th>
                                            <th>Alternate Contact No</th>
                                            <th>Email Id</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
                                            <th>Company Name</th>
                                            <th>location</th>
                                            <th>Contact Person</th>
                                            <th>Contact No</th>
                                            <th>Alternate Contact No</th>
                                            <th>Email Id</th>
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
				<!--/.Content-->
			</div>
		</div>
<div class="modal fade" id="RegisterNewVendor" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
                        <div class="modal-content">
                            <div class="modal-header light-blue darken-3 white-text">
                                <i class="fa fa-user-plus mr-1 fa-2x"></i><h5 class="" id="NewElement-modal-title">Register Vendor</h5>
                                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body mb-0">
                               <form action="" id="newVendorForm" name="newVendorForm">
                               <div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
							   <div class="alert alert-danger HideThisElement" id="errorMessage"></div>
                               <input type="hidden" name="vendorId" id="vendorId" >
                               <input type="hidden" name="newArchitectCompanyId" id="newArchitectCompanyId" >
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control capitalizeText" id="companyName" name="companyName">
                                            <label id="companyNameLbl" for="companyName" class="">Company Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control capitalizeText" id="location" name="location">
                                            <label id="locationLbl" for="location" class="">Location</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="text" class="form-control capitalizeText" id="contactPerson" name="contactPerson">
                                            <label id="contactPersonLbl" for="contactPerson" class="">Contact Person</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="number" class="form-control" id="contactNo" name="contactNo">
                                            <label id="contactNoLbl" for="contactNo" class="">Contact Number</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="number" class="form-control" id="altContactNo" name="altContactNo">
                                            <label id="altContactNoLbl" for="altContactNo" class="">Alternate Contact Number</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="text" class="form-control" id="website" name="website">
                                            <label id="websiteLbl" for="website" class="">Website</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="text" class="form-control validate" id="emailId" name="emailId" pattern=".+@.+..+">
                                            <label id="emailIdLbl" for="emailId" class="">Email ID</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="text" class="form-control" id="gstNo" name="gstNo">
                                            <label id="gstNoLbl" for="gstNo" class="">GST No</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="number" class="form-control" id="creditTime" name="creditTime">
                                            <label id="creditTimeLbl" for="creditTime" class="">Credit Time</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="number" class="form-control" id="creditLimit" name="creditLimit">
                                            <label id="creditLimitLbl" for="creditLimit" class="">Credit Limit</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form" style="padding-top: 8px;">
                                        <select class="mdb-select" id="state" name="state">
                                            <option value="" disabled selected>State</option>
                                        </select>
                                        <label style="padding-top: 5px;">State</label>
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
	                                <div class="text-center mt-1-half">
	                                    <button id="SubmitButtonRegister" class="btn btn-info waves-effect" data-dismiss="modal">Submit <i class="fa fa-chcek ml-1"></i></button>
	                                    <button id="SubmitButtonUpdate" class="btn btn-info waves-effect HideThisElement" data-dismiss="modal">Update</button>
	                                    <button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
	                                </div>
                                </div>
                        </form>
                            </div>
                                
                        </div>
                    </div>
                </div> 
     
  </main>

    <!-- DataTables.net -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <!-- <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script> -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.buttons.min.js"></script>
    <!--Custom scripts-->
    
    <script type="text/javascript" src="../../../JavaScripts/PurchaseOrder/PurchaseOrder.js"></script>
    
    <script>
        
        $(document).ready(function() {
            $('#datatables').DataTable();
        });
        // Material Select Initialization
        $(document).ready(function () {
            $('select[name="datatables_length"]').material_select();
        });
     </script>
</body>
</html>