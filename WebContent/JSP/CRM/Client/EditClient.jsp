<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Client Details</title>
<link rel="shortcut icon" href="../../../img/TitleImage.png">
<!-- Font Awesome -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- Bootstrap core CSS -->
<link rel="stylesheet" href="../../../css/bootstrap.min.css">
<!-- Material Design Bootstrap -->
<link rel="stylesheet" href="../../../css/mdb.css">
<!-- DataTables.net -->
<link rel="stylesheet" type="text/css"
	href="../../../js/vendor/datatables/css/dataTables.bootstrap4.min.css" />
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">
<link rel="stylesheet"
	href="https://cdn.datatables.net/buttons/1.4.0/css/buttons.dataTables.min.css" />
    <link rel="stylesheet" href="../../../css/style.css">


    <!-- Your custom styles (optional) -->
    <style>
		.companyLogo{
			width: 100pt;
			margin-left:5px;
			}
		.form-input-capital{
			text-transform: uppercase;
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
	<%@ include file="../../../Header.jsp" %>
	<main>
	<div class="jumbotron">
		<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Client Company Information</h4>
		<hr class="my-2"><br>
		<input type="hidden" name="clientId" id="clientId" value="<%=request.getParameter("Id")%>">
		<div class="row">
	        <div class="col-md-4">
	            <div class="md-form">
	                <i class="fa fa-pencil-alt prefix" id="EditCompanyBtn"></i>
	                <input type="text" id="companyNameCard" name="companyNameCard" class="form-control validate capitalizeText" style="color:#2E2E2E;" disabled>
	                <label for="companyNameCard" id="companyNameCardLbl" class="active disabled" style="color:#2E2E2E;">Company Name</label>
	            </div>
	        </div>
	        <div class="col-md-4">
	            <div class="md-form">
	                <input type="text" id="industryCard" name="industryCard" class="form-control validate capitalizeText" style="color:#2E2E2E;" disabled>
	                <label for="industryCard" id="industryCardLbl" class="active disabled" style="color:#2E2E2E;" >Industry</label>
	            </div>
	        </div>
	        <div class="col-md-4">
	            <div class="md-form">
	                <input type="text" id="locationCard" name="locationCard" class="form-control validate capitalizeText" style="color:#2E2E2E;" disabled>
	                <label for="locationCard" id="locationCardLbl" class="active disabled" style="color:#2E2E2E;" >Location</label>
	            </div>
	        </div>
		</div>
                                
        <div class="row" style="padding-left: 4%;">
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" class="form-control" id="creditTimeCard" name="creditTimeCard" style="color:#2E2E2E;" disabled>
                    <label id="creditTimeCardLbl" for="creditTimeCard" class="disabled" style="color:#2E2E2E;" >Credit Time</label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" class="form-control" id="creditLimitCard" name="creditLimitCard" style="color:#2E2E2E;" disabled>
                    <label id="creditLimitCardLbl" for="creditLimitCard" class="disabled" style="color:#2E2E2E;" >Credit Limit</label>
                </div>
            </div>
        </div>
	</div>
	<div class="jumbotron">
		<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Contact Person Information</h4>
		<hr class="my-2">
		<table id="datatables"
			class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
			<thead>
				<tr id="headerrow">
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
			<tbody id="example">
			</tbody>
		</table>
	</div>
	<div class="jumbotron">
		<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Address Information</h4>
		<hr class="my-2">
		<table id="datatablesAddress"
			class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
			<thead>
				<tr id="headerrowAddress">
					<th>Action</th>
					<th>Branch Name</th>
					<th>Contact Number</th>
					<th>GST No</th>
					<th>Location</th>
				</tr>
				<tr id="filterrowAddress">
					<td></td>
					<th>Branch Name</th>
					<th>Contact Number</th>
					<th>GST No</th>
					<th>Location</th>
				</tr>
			</thead>
			<tbody id="exampleAddress">
			</tbody>
		</table>
	</div>
	</main>
	<div class="modal fade" id="EditClient" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
			<!--Content-->
			<div class="modal-content">

				<!--Header-->
				<div class="modal-header light-blue darken-3 white-text">
					<i class="fa fa-user-plus mr-1 fa-2x"></i>
					<h5 class="" id="NewElement-modal-title">Edit Company</h5>
					<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<!--Body-->
				<div class="modal-body mb-0">
					<form action="" id="editClientForm" name="editClientForm">
						<div class="alert alert-warning HideThisElement" id="alertMessage"
							style="background-color: #ffbb33"></div>
						<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
						<input type="hidden" name="selectedClientIdClntmod" id="selectedClientIdClntmod">
						<!-- Grid row -->
						<div class="row">
							<div class="col-md-6">
								<div class="md-form">
									<input type="text" class="form-control capitalizeText"
										id="companyName" name="companyName"> <label
										id="companyNameLbl" for="companyName" class="">Company Name</label>
								</div>
							</div>
							<div class="col-md-6">
								<div class="md-form">
									<input type="text" class="form-control capitalizeText" id="industry" name="industry">
									<label id="industryLbl" for="industry" class="">Industry</label>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-8">
								<div class="md-form">
									<input type="text" class="form-control capitalizeText" id="location" name="location">
									<label id="locationLbl" for="location" class="">Location</label>
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
									<input type="text" class="form-control" id="creditLimit" name="creditLimit">
									<label id="creditLimitLbl" for="creditLimit" class="">Credit Limit</label>
								</div>
							</div>
						</div>
						
						<div class="row">
                                <div class="text-center mt-1-half">
                                    <button id="SubmitButtonUpdate" class="btn btn-info waves-effect HideThisElement" data-dismiss="modal">Update</button>
                                    <button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
                                </div>
                        </div>
				</form>

			</div>
			<!--/.Content-->
		</div>
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
						<input type="hidden" name="newContctPId" id="newContctPId">
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
                                    <button id="SubmitButtonRegisterContactP" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
                                    <button id="SubmitButtonUpdateContactP" class="btn btn-info waves-effect HideThisElement" data-dismiss="modal">Update</button>
                                    <button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
                                </div>
                        </div>
				</form>

			</div>
			<!--/.Content-->
		</div>
	</div>
	</div>
	
	
	<div class="modal fade" id="EditAddress" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
			<!--Content-->
			<div class="modal-content">

				<!--Header-->
				<div class="modal-header light-blue darken-3 white-text">
					<i class="fa fa-user-plus mr-1 fa-2x"></i>
					<h5 class="" id="Address-modal-title">New Address</h5>
					<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<!--Body-->
				<div class="modal-body mb-0">
					<form action="" id="editAddressForm" name="editAddressForm">
						<div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
						<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
						<input type="hidden" name="selectedClientIdAddressmod" id="selectedClientIdAddressmod">
						<input type="hidden" name="selectedAddressId" id="selectedAddressId">
						<input type="hidden" name="newAddressPId" id="newAddressPId">
						<!-- Grid row -->
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
                                        <select class="mdb-select" id="state" name="state">
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
                                    <button id="SubmitButtonRegisterAddress" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
                                    <button id="SubmitButtonUpdateAddress" class="btn btn-info waves-effect HideThisElement" data-dismiss="modal">Update</button>
                                    <button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
                                </div>
                        </div>
				</form>

			</div>
			<!--/.Content-->
		</div>
	</div>
	</div>
	
	<!-- Delete Customer Modal -->
	<!--Section: Modals-->
	<div class="modal fade" id="centralModalDangerDemo" tabindex="-1"
		role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-notify modal-danger" role="document">
			<!--Content-->
			<div class="modal-content">
				<!--Header-->
				<div class="modal-header" style="background: #cc4141;">
					<p class="heading">Delete</p>

					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true" class="white-text">&times;</span>
					</button>
				</div>

				<!--Body-->
				<div class="modal-body">
					<input type="hidden" id="DeleteEmpId" name="DeleteEmpId">
					<div class="row">
						<div class="col-3">
							<p></p>
							<p class="text-center">
								<img class="delete" src="../../../Images/deleteModel.png">
							</p>
						</div>

						<div class="col-9">
							<br>
							<p id="deletePara">Architect details will be deleted from system.</p>
							<p>Click 'Confirm' to proceed, and 'Close' to cancel.</p>
						</div>
					</div>
				</div>

				<!--Footer-->
				<div class="modal-footer justify-content-center">
					<a type="button" class="btn btn-primary-modal" id="DeleteEmployeeConfirmedContactP" style="background: #cc4141;">Confirm</a>
					<a type="button" class="btn btn-primary-modal" id="DeleteEmployeeConfirmedAddress" style="background: #cc4141;">Confirm</a>
					<a type="button" class="btn btn-outline-secondary-modal waves-effect" data-dismiss="modal">Close</a>
				</div>
			</div>
			<!--/.Content-->
		</div>
	</div>
	<!--Section: Docs link-->
	<!-- SCRIPTS -->
	<!-- JQuery -->
	<!-- DataTables.net -->
	<script type="text/javascript"
		src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript"
		src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
	<script type="text/javascript"
		src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>

	<!-- datatable data javascript -->
	<script type="text/javascript" src="../../../JavaScripts/Client/editClient.js"></script>
	<!--Custom scripts-->
	<script>
        $(document).ready(function() {
            $('#datatables').DataTable();
        });

        // Material Select Initialization
        $(document).ready(function () {
            $('select[name="datatables_length"]').material_select();
        });
		
        $(document).ready(function () {
            $('.mdb-select').material_select();
        });
        
    	
	/* 	$("#EditCompanyBtn").click(function() {
			console.log("Hi");
    	if ($('#clientId').val()  !== "") {
    		$('#selectedClientIdClntmod').val($('#clientId').val());
    	}
    	else {
			console.log("Id not set");
		}
        if (document.getElementById('companyNameCard').value  !== "") {
            $('#companyName').val(document.getElementById('companyNameCard').value);
            $('#companyNameLbl').addClass("active");
           }
        if (document.getElementById('industryCard').value  !== "") {
            $('#industry').val(document.getElementById('industryCard').value);
            $('#industryLbl').addClass("active");
           }
        if (document.getElementById('websiteCard').value  !== "") {
            $('#website').val(document.getElementById('websiteCard').value);
            $('#websiteLbl').addClass("active");
           }
	     $("#SubmitButtonRegister").addClass("HideThisElement");
	     $("#SubmitButtonUpdate").removeClass("HideThisElement");
	    $('#EditClient').modal('show');
    }); */
    </script>
</body>
</html>