<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Vendor</title>
    
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
    
	<script type="text/javascript">
        function removeReadOnly(id)
        {
			$('#qty'+id).removeAttr("ReadOnly");
			$('#ItemRate'+id).removeAttr("ReadOnly");
        }

        function checkqty(id,qty)
        {
        	if(parseInt(qty)<parseInt($('#qty'+id).val()))
        	{
        		document.getElementById("maxqtyshow").innerHTML=qty;
            	$('#centralModalWarningDemo').modal('show');
        		$('#qty'+id).val(0);
        	}
        }
    </script>
</head>
<body class="fixed-sn white-skin">
    <%@ include file="../../../Header.jsp" %>
    <main>
    <section id="PurchaseOrderList" class="">
        <div class="container-fluid mb-5">
            <section id="PurchaseOrderListTable" class="">
                <div class="row">
                    <div class="col-md-12">
						<%-- <input type="hidden" id="oid" value="<%= request.getParameter("oid")%>"> --%>
                        <div class="card">
                            <div class="card-body">
                                <table id="datatables" class="table table-striped table-bordered nowrap">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
										  	<th>Purchase Order Id</th>
										  	<th>Company Name</th>
										  	<th>Created On</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
										  	<th>Purchase Order Id</th>
										  	<th>Vendor Id</th>
										  	<th>Created On</th>
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
	    									<input type="text" class="form-control capitalizeText" id="vendorName" name="vendorName" style="color:#2E2E2E;" disabled>
	                                        <label id="vendorNameLbl" for="vendorName" style="color:#2E2E2E;" class="disabled">Vendor Name</label>
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
						<div class="card-body">
							<div id="OrderDetails" class="">
								<div class="FormDiv ">
								<form action="" class="form form-horizontal" name="newOrderForm" id="newOrderForm">
									<table id="purchaseOrderTable" class="table table-sm" style="margin: auto;margin-bottom: 2%" >
										<thead>
										<tr>
											<th >Select</th>
									 		<th >Product Info</th>
									 		<th >Quantity</th>
									 		<th >Balance Quantity</th>
										    <th >Quantity</th>
									 		<th >Amount</th>
									  	</tr>
									  	</thead>
									  	<tbody id="purchaseOrderTableBody">
									  	</tbody>
								  	</table>
						        	<div class="row" style="text-align: left;">
								        <div class="col-md-2">
								            <div class="md-form">
								                <input type="text" id="receiptNo" name="receiptNo" class="form-control">
								                <label for="receiptNo" id="receiptNoLbl" class="" style="font-size: 87%;">Receipt No</label>
								            </div>
								        </div>
								        <div class="col-md-2" style="text-align: left;">
										  	<button type="button" id="Submit" class="btn btn-outline-primary waves-effect">Submit</button>
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
    
	<div class="modal fade" id="centralModalWarningDemo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	                    <div class="modal-dialog modal-notify modal-warning" role="document">
	                        <div class="modal-content">
	                            <div class="modal-header" style="background:#ffa500;">
	                                <p class="heading">Quantity Exceeded</p>
	                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                                    <span aria-hidden="true" class="white-text">&times;</span>
	                                </button>
	                            </div>
	                            <div class="modal-body">
	                                <input type="hidden" id="ResetPassEmpId" name="ResetPassEmpId">
	                                <div class="row">
	                                    <div class="col-3 text-center">
	                                        <img src="../../../Images/warningModel.png" alt="Warning"
	                                            class="img-fluid z-depth-1-half rounded-circle">
	                                        <div style="height: 10px"></div>
	                                    </div>
	                                    <div class="col-9">
	                                        <p>Quantity Exceeded</p>
	                                        <p>The maximum quantity you can input is</p>
	                                        <p id="maxqtyshow"></p>
	                                    </div>
	                                </div>
	                            </div>
	                            <div class="modal-footer justify-content-center">
	                                <a type="button" class="btn btn-outline-secondary-modal waves-effect" style="border: 1px solid #ffa500;" data-dismiss="modal">Close</a>
	                            </div>
	                        </div>
	                        <!--/.Content-->
	                    </div>
	</div>
  </main>

    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <!-- <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script> -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.buttons.min.js"></script>
    
    <script type="text/javascript" src="../../../JavaScripts/PurchaseOrder/UpdatePurchase.js"></script>
    <script>
        $(document).ready(function() {
            $('#datatables').DataTable();
        });
        
        $(document).ready(function () {
            $('select[name="datatables_length"]').material_select();
        });
     </script>
</body>
</html>