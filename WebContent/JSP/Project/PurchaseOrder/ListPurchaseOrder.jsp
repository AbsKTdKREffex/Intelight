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
    <style>
		.delete{
            width: 80pt;
        }
    </style>
</head>
<body class="fixed-sn white-skin">
    <%@ include file="../../../Header.jsp" %>
    <main>
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
										  	<th>Status</th>
										  	<th>Created On</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
										  	<th>Purchase Order Id</th>
										  	<th>Vendor Id</th>
										  	<th>Status</th>
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
     
<div class="modal fade" id="RegisterNewPurchaseOrder" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
                        <!--Content-->
                        <div class="modal-content">

                            <!--Header-->
                            <div class="modal-header light-blue darken-3 white-text">
                                <i class="fa fa-user-plus mr-1 fa-2x"></i><h5 class="" id="NewElement-modal-title">Register Purchase Order</h5>
                                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <!--Body-->
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
                                            <input type="text" class="form-control" id="emailId" name="emailId">
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
                
                <div class="modal fade" id="centralModalDangerDemo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-notify modal-danger" role="document">
                        <!--Content-->
                        <div class="modal-content">
                            <!--Header-->
                            <div class="modal-header" style="background:#cc4141;">
                                <p class="heading">Delete Vendor</p>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" class="white-text">&times;</span>
                                </button>
                            </div>

                            <!--Body-->
                            <div class="modal-body">
								<input type="hidden" id="DeletePurchaseId" name="DeletePurchaseId">
                                <div class="row">
                                    <div class="col-3">
                                        <p></p>
                                        <p class="text-center"><img class="delete" src="../../../Images/deleteModel.png"></p>
                                    </div>

                                    <div class="col-9">
                                        <br>
                                        <p>HSN details will be deleted from system.</p>
        								<p>Click 'Confirm' to proceed, and 'Close' to cancel.</p>
                                    </div>
                                </div>
                            </div>

                            <!--Footer-->
                            <div class="modal-footer justify-content-center">
                                <a type="button" class="btn btn-primary-modal" id="DeletePOConfirmed" style="background:#cc4141;">Confirm</a>
                                <a type="button" class="btn btn-outline-secondary-modal waves-effect" data-dismiss="modal">Close</a>
                            </div>
                        </div>
                        <!--/.Content-->
                    </div>
                </div>
     
  </main>

    <!-- DataTables.net -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <!-- <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script> -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.buttons.min.js"></script>
    <!--Custom scripts-->
    
    <script type="text/javascript" src="../../../JavaScripts/PurchaseOrder/ListPurchaseOrder.js"></script>
    
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