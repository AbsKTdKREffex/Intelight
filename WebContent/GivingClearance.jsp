<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Giving Clearance</title>
    
    <link rel="shortcut icon" href="img/TitleImage.png">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Material Design Bootstrap -->
    <link rel="stylesheet" href="css/mdb.css">
    <!-- DataTables.net -->
    <link rel="stylesheet" type="text/css" href="js/vendor/datatables/css/dataTables.bootstrap4.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.4.0/css/buttons.dataTables.min.css" />
 
    <style>
		.companyLogo{
			width: 100pt;
			margin-left:5px;
			}
		td input {
			width: 80%;
		}
		#headerrow th, #filterrow th{
		text-align: center;
		}
		*{
			font-family: 'Montserrat', sans-serif;
		}
		.dataTables_filter {
		display: none; 
		}
		.delete{
            width: 80pt;
        }
        .HideThisElement{
  			display: none
		}
        $('.datepicker').pickadate({
  			editable: true
		})
		.dropDownPadding{
			padding-left: 5%
		}
		.fontSize{
			 font-size: 80% !important
		}
    </style>
    
    <style type="text/css">
    	.form-simple .font-small {
		  font-size: 0.8rem; }
		
		.form-simple .header {
		  border-top-left-radius: .3rem;
		  border-top-right-radius: .3rem; }
		
		.form-simple input[type=text]:focus:not([readonly]) {
		  border-bottom: 1px solid #ff3547;
		  -webkit-box-shadow: 0 1px 0 0 #ff3547;
		  box-shadow: 0 1px 0 0 #ff3547; }
		
		.form-simple input[type=text]:focus:not([readonly]) + label {
		  color: #4f4f4f; }
		
		.form-simple input[type=password]:focus:not([readonly]) {
		  border-bottom: 1px solid #ff3547;
		  -webkit-box-shadow: 0 1px 0 0 #ff3547;
		  box-shadow: 0 1px 0 0 #ff3547; }
		
		.form-simple input[type=password]:focus:not([readonly]) + label {
		  color: #4f4f4f; }
    </style>
</head>
<body class="fixed-sn white-skin">
	<%@ include file="Header.jsp" %>
    <main>
        <div class="container-fluid mb-5">
            <section id="EmployeeListTable" class="">
                <div class="row">
                    <div class="col-md-12">               
                        <div class="card">
                            <div class="card-body">
                            <div class="DataTable" >
                                <table id="datatables" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow">
                                            <th>Action</th>
											<th>Employee Name</th>
											<th>Department</th>
											<th>Designation</th>
											<th>User Id</th>
											<th>Mobile No</th>
											<th>Email ID</th>
											<th>Report To</th>
											<th>Status</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
	  										<th>Employee Name</th>
	  										<th>Department</th>
	  										<th>Designation</th>
	  										<th>User Id</th>
	  										<th>Mobile No</th>
	  										<th>Email ID</th>
	  										<th>Report To</th>
	  										<th>Status</th>
										</tr>
                                    </thead>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="CheckBoxForm" class="HideThisElement">
                <div class="row">
                    <div class="col-md-12">  
                        <div class="card">
                            <div class="card-body">
					        <h4 class="card-title"><i class="fas fa-unlock fa-1x"></i>&nbsp;&nbsp;&nbsp;Clearance</h4>
					        <br>
                            <form action="" id="assignPermissionForm" name="assignPermissionForm">
								<input type="hidden" id="employeeId" name="employeeId">
								<div id="divcontainingallval" style="padding-left: 2%;">
									<div class="row">
										<div class="col-lg-3 col-md-12 mb-r">
											<div class="form-group">
											    <input type="checkbox" id="adminDiv" value="11815511" disabled>
											    <label for="adminDiv" style="font-size: large;">Admin</label>
											</div>
											<div id="adminGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="employeeDiv" name="adminDiv" value="11225144">
												    <label for="employeeDiv" class="fontSize">Employees</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="hsnidDiv" name="adminDiv" value="71915977">
												    <label for="hsnidDiv" class="fontSize">HSN ID</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="legendDiv" name="adminDiv" value="03334141">
												    <label for="legendDiv" class="fontSize">Legends</label>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-12 mb-r">
											<div class="form-group">
											    <input type="checkbox" id="productDiv" value="71755707" disabled>
											    <label for="productDiv" style="font-size: large;">Product</label>
											</div>
											<div id="productGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="profileDiv" name="productDiv" value="15321553">
												    <label for="profileDiv" class="fontSize">Profiles</label>
												</div>
											</div>
											<div id="productGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="ledLightsDiv" name="productDiv" value="11527255">
												    <label for="ledLightsDiv" class="fontSize">LED Lights</label>
												</div>
											</div>
											<div id="productGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="ledStripsDiv" name="productDiv" value="21522278">
												    <label for="ledStripsDiv" class="fontSize">LED Strips</label>
												</div>
											</div>
											<div id="productGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="driversDiv" name="productDiv" value="21225521">
												    <label for="driversDiv" class="fontSize">Drivers</label>
												</div>
											</div>
											<div id="productGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="uploadImagesDiv" name="productDiv" value="57222444">
												    <label for="uploadImagesDiv" class="fontSize">Upload Images</label>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-12 mb-r">
											<div class="form-group">
											    <input type="checkbox" id="inventoryDiv" value="23513553" disabled>
											    <label for="inventoryDiv" style="font-size: large;">Inventory</label>
											</div>
											<div id="lmsGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="stockInDiv" name="inventoryDiv" value="55475567">
												    <label for="stockInDiv" class="fontSize">Stock In</label>
												</div>
											</div>
											<div id="lmsGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="stockOutDiv" name="inventoryDiv" value="58524545">
												    <label for="stockOutDiv" class="fontSize">Stock Out</label>
												</div>
											</div>
											<div id="lmsGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="availableStockDiv" name="inventoryDiv" value="22221552">
												    <label for="availableStockDiv" class="fontSize">Available Stock</label>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-12 mb-r">
											<div class="form-group">
											    <input type="checkbox" id="crmDiv" value="55758588" disabled>
											    <label for="crmDiv" style="font-size: large;">CRM</label>
											</div>
											<div id="orderGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="clientsDiv" name="crmDiv" value="41337755">
												    <label for="clientsDiv" class="fontSize">Clients</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="architectsDiv" name="crmDiv" value="65011111">
												    <label for="architectsDiv" class="fontSize">Architects</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="electriciansDiv" name="crmDiv" value="71252521">
												    <label for="electriciansDiv" class="fontSize">Electricians</label>
												</div>
											</div>
										</div>
									</div>
									
									<div class="row">
										<div class="col-lg-3 col-md-12 mb-r">
												<div class="form-group">
												    <input type="checkbox" id="projectsDiv" value="23251656" disabled>
												    <label for="projectsDiv" style="font-size: large;">Projects</label>
												</div>
											<div id="projectsGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="prjctDiv" name="projectsDiv" value="73232551">
												    <label for="prjctDiv" class="fontSize">Projects</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="newQuotationDiv" name="projectsDiv" value="29326683">
												    <label for="newQuotationDiv" class="fontSize">New Quotation</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="listQuotationDiv" name="projectsDiv" value="12227151">
												    <label for="listQuotationDiv" class="fontSize">List Quotation</label>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-12 mb-r">
											<div class="form-group">
											    <input type="checkbox" id="ordersDiv" value="23151777" disabled>
											    <label for="ordersDiv" style="font-size: large;">Orders</label>
											</div>
											<div id="ordersGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="newOrderTrayDiv" name="ordersDiv" value="50131821">
												    <label for="newOrderTrayDiv" class="fontSize">New Order</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="viewOrderDiv" name="ordersDiv" value="21551221">
												    <label for="viewOrderDiv" class="fontSize">View Order</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="orderStatusDiv" name="ordersDiv" value="57211771">
												    <label for="orderStatusDiv" class="fontSize">Order Status</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="completedOrdersDiv" name="ordersDiv" value="19559753">
												    <label for="completedOrdersDiv" class="fontSize">Completed Orders</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="pendingOrdersDiv" name="ordersDiv" value="31077515">
												    <label for="pendingOrdersDiv" class="fontSize">Pending Orders</label>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-12 mb-r">
											<div class="form-group">
											    <input type="checkbox" id="purchaseOrdersDiv" value="66115333" disabled>
											    <label for="purchaseOrdersDiv" style="font-size: large;">Purchase Orders</label>
											</div>
											<div id="purchaseOrdersGrp" style="padding-left: 20%;">
												<div class="form-group">
												    <input type="checkbox" id="purchaseOrderStatusDiv" name="purchaseOrdersDiv" value="53415353">
												    <label for="purchaseOrderStatusDiv" class="fontSize">Purchase Order Status</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="purchaseOrderDiv" name="purchaseOrdersDiv" value="57305223">
												    <label for="purchaseOrderDiv" class="fontSize">Purchase Order</label>
												</div>
												<div class="form-group">
												    <input type="checkbox" id="fulfillPurchaseOrderDiv" name="purchaseOrdersDiv" value="95952351">
												    <label for="fulfillPurchaseOrderDiv" class="fontSize">Fulfill Purchase Order</label>
												</div>
											</div>
										</div>
									</div>
										
			                        <div class="row">
		                                <div class="text-center mt-1-half">
		                                    <button id="Submit" class="btn btn-info mb-1">Submit</button>
	                                    	<button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
		                                </div>
	                                </div>
								</div>
							</form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <script type="text/javascript" src="JavaScripts/GivingClearance.js"></script>
    <script>
        $(document).ready(function() {
            $('#datatables').DataTable();
        });

        $(document).ready(function () {
            $('select[name="datatables_length"]').material_select();
        });
		
        $(document).ready(function () {
            $('.mdb-select').material_select();
        });

        $('.datepicker').pickadate();
    </script>
</body>
</html>