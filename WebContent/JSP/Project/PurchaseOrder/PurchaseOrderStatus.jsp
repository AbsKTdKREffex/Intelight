<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Purchase Order List</title>
	
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
 
    <!-- Your custom styles (optional) -->
    <link href="../../../css/style.css" rel="stylesheet">

	<style type="text/css">
		.hidefa{
		display:none !important;
		}
	</style>
	
</head>
<body class="fixed-sn white-skin">

    <%@ include file="../../../Header.jsp" %>
    <main>
    <section id="PurchaseOrderList" class="">
        <div class="container-fluid mb-5">
            <section id="ProjectListTable" class="">
                <div class="row">
                    <div class="col-md-12">
						<%-- <input type="hidden" id="type" value="<%= request.getParameter("type")%>"> --%>
                        <div class="card">
                            <div class="card-body">
                                <table id="datatables" class="table table-striped table-bordered nowrap">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
										  	<th>Order Id</th>
										  	<th>Company Name</th>
										  	<th>Order Status</th>
										  	<th>Expected Delivery</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
										  	<th>Order Id</th>
										  	<th>Company Name</th>
										  	<th>Order Status</th>
										  	<th>Expected Delivery</th>
										</tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     	</div>
     </section>
     
     <section id="POUpdateForm" class="HideThisElement">
        <div class="container-fluid mb-4">
            <section id="projectInformation" class="">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
	                            <div class="card-body mx-4">
						        <h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Vendor Information</h4>
						        <br>
						        <input type="hidden" id="PurchaseOrder" name="PurchaseOrder">
					        	<div class="row">
							        <div class="col-md-6">
							            <div class="md-form">
							                <input type="text" id="purchaseOrderId" name="purchaseOrderId" class="form-control" style="color:#2E2E2E;" ReadOnly>
							                <label for="" id="purchaseOrderIdLbl" class="active disabled" style="color:#2E2E2E;">Purchase Order Id</label>
							            </div>
							        </div>
							        <div class="col-md-6">
							            <div class="md-form">
	    									<input type="text" class="form-control capitalizeText" id="vendorName" name="vendorName" disabled>
	                                        <label id="vendorNameLbl" for="vendorName" class="disabled">Vendor Name</label>
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
		<div class="container-fluid mb-4">
            <!--Section: Basic examples-->
            <section>

			<div class="row">

				<div class="col-md-12">

					<div class="card">
	                    <div class="card-body mx-4">
						<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Product</h4>
						<!-- <input type="hidden" id="PurchaseOrder" name="PurchaseOrder"> -->
						<div class="card-body">
							<div id="OrderDetails" class="">
								<div class="FormDiv ">
								<form action="" class="form form-horizontal" name="newOrderForm" id="newOrderForm">
									<table id="purchaseOrderTable" class="table table-sm" style="width: 80%; margin: auto;margin-bottom: 2%" >
										<thead>
										<tr>
											<th style="text-align: center;">Select</th>
									 		<th >Product Info</th>
									 		<th >Quantity</th>
									 		<th >Balance Quantity</th>
										    <th >Status</th>
									  	</tr>
									  	</thead>
									  	<tbody id="purchaseOrderTableBody">
									  	</tbody>
								  	</table>
						        	<div class="row" style="text-align: left;">
								        <div class="col-md-2" style="text-align: left;">
										  	<button type="button" id="Close" class="btn btn-outline-primary waves-effect">Close</button>
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
    </section>
  	</main>
    <!-- DataTables.net -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    
    <script type="text/javascript" src="../../../JavaScripts/PurchaseOrder/PurchaseOrderStatus.js"></script>
    
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