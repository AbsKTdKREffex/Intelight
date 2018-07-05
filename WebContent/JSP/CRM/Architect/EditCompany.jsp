<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Architect Details</title>
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
		<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Architect Company Information</h4>
		<hr class="my-2"><br>
		<input type="hidden" name="companyId" id="companyId" value="<%=request.getParameter("Id")%>">
		<div class="row">
		<!--First column-->
							        <div class="col-md-6">
							            <div class="md-form">
							                <i class="fa fa-pencil-alt prefix" id="EditCompanyBtn"></i>
							                <input type="text" id="companyNameCard" name="companyNameCard" class="form-control validate capitalizeText" disabled>
							                <label for="companyNameCard" id="companyNameCardLbl" class="active disabled">Company Name</label>
							            </div>
							        </div>
							
							        <!--Second column-->
							        <div class="col-md-6">
							            <div class="md-form">
							                <input type="text" id="locationCard" name="locationCard" class="form-control validate capitalizeText" disabled>
							                <label for="locationCard" id="locationCardLbl" class="active disabled" >Location</label>
							            </div>
							        </div>
							        </div>
		<div class="row">
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="websiteCard" name="websiteCard" class="form-control validate capitalizeText" disabled>
							                <label for="websiteCard" id="websiteCardLbl" class="active disabled" >Website</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="contactNumberCard" name="contactNumberCard" class="form-control validate capitalizeText" disabled>
							                <label for="contactNumberCard" id="contactNumberCardLbl" class="active disabled" >Contact Number</label>
							            </div>
							        </div>
							        <!--Second column-->
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="emailCard" name="emailCard" class="form-control validate capitalizeText" disabled>
							                <label for="emailCard" id="emailCardLbl" class="active disabled" >Email</label>
							            </div>
							        </div>
							        <!--Third column-->
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="addressCard" name="addressCard" class="form-control validate capitalizeText" disabled>
							                <label for="addressCard" id="addressCardLbl" class="active disabled" >Address</label>
							            </div>
							        </div>
		</div>
		<div class="row">
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="sourceCard" name="sourceCard" class="form-control capitalizeText" disabled>
							                <label for="sourceCard" id="sourceCardLbl" class="active disabled" >Source</label>
							            </div>
							        </div>
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="state_textCard" name="state_textCard" class="form-control validate capitalizeText" disabled>
											<input type="hidden" name="stateId" id="stateId">
							                <label for="stateCard" id="stateCardLbl" class="active disabled" >State</label>
							            </div>
							        </div>
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="gstNoCard" name="gstNoCard" class="form-control validate" disabled>
							                <label for="gstNoCard" id="gstNoCardLbl" class="active disabled" >GST No</label>
							            </div>
							        </div>
		</div>
	</div>
	<div class="jumbotron">
		<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Architect Information</h4>
		<hr class="my-2">
		<table id="datatables" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
			<thead>
				<tr id="headerrow">
					<th>Action</th>
					<th>Architect Name</th>
					<th>Designation</th>
					<th>Mobile No</th>
					<th>Alternate No</th>
					<th>Email ID</th>
					<th>Location</th>
				</tr>
				<tr id="filterrow">
					<td></td>
					<th>Architect Name</th>
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
	</main>
	<div class="modal fade" id="EditCompany" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
					<form action="" id="editCompanyForm" name="editCompanyForm">
						<div class="alert alert-warning HideThisElement" id="alertMessage"
							style="background-color: #ffbb33"></div>
						<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
						<input type="hidden" name="selectedCompanyIdCompmod" id="selectedCompanyIdCompmod">
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
									<input type="text" class="form-control capitalizeText" id="location" name="location">
									<label id="locationLbl" for="location" class="">Location</label>
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
									<input type="number" class="form-control" id="contactNo" name="contactNo">
									<label id="contactNoLbl" for="contactNo" class="">Contact Number</label>
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
							<div class="col-md-12">
								<div class="md-form">
									<input type="text" class="form-control" id="address" name="address">
									<label id="addressLbl" for="address" class="">Address</label>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-4">
								<div class="md-form">
									<input type="text" class="form-control" id="gstNo" name="gstNo">
									<label id="gstNoLbl" for="gstNo" class="">GST No</label>
								</div>
							</div>
                            <div class="col-md-4">
                                <div class="md-form">
                                    <input type="text" class="form-control" id="source" name="source">
                                    <label id="sourceLbl" for="source" class="">Source</label>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="md-form" style="padding-top: 8px;">
                                <select class="mdb-select" id="state" name="state">
                                    <option value="" disabled selected>State</option>
                                </select>
                                <label style="padding-top: 5px;">State</label>
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
			<!--/.Content-->
		</div>
	</div>
	</div>
	
	
	<div class="modal fade" id="EditArchitect" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
			<div class="modal-content">
				<div class="modal-header light-blue darken-3 white-text">
					<i class="fa fa-user-plus mr-1 fa-2x"></i>
					<h5 class="" id="NewElement-modal-title-architect">New Architect</h5>
					<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body mb-0">
					<form action="" id="editArchitectForm" name="editArchitectForm">
						<div class="alert alert-warning HideThisElement" id="alertMessage"
							style="background-color: #ffbb33"></div>
						<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
						<input type="hidden" name="selectedCompanyIdArchmod" id="selectedCompanyIdArchmod">
						<input type="hidden" name="newArchitectIdMod" id="newArchitectIdMod">
						<!-- Grid row -->
						<div class="row">
							<div class="col-md-4">
								<div class="md-form">	
									<input type="text" class="form-control" id="firstName" name="firstName">
									<label id="firstNameLbl" for="firstName" class="">First name</label>
								</div>
							</div>
							<div class="col-md-4">
								<div class="md-form">
									<input type="text" class="form-control" id="lastName" name="lastName">
									<label id="lastNameLbl" for="lastName" class="">Last name</label>
								</div>
							</div>
							<div class="col-md-4">
								<div class="md-form">
									<input type="text" class="form-control capitalizeText" id="locationArch" name="locationArch">
									<label id="locationArchLbl" for="locationArch" class="">Location</label>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-4">
								<div class="md-form">
									<input type="number" class="form-control" id="contactNoArch" name="contactNoArch">
									<label id="contactNoArchLbl" for="contactNoArch" class="">Contact Number</label>
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
									<input type="text" class="form-control" id="emailIdArch" name="emailIdArch">
									<label id="emailIdArchLbl" for="emailIdArch" class="">Email ID</label>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-12">
								<div class="md-form">
									<input type="text" class="form-control" id="addressArch" name="addressArch">
									<label id="addressArchLbl" for="addressArch" class="">Address</label>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-lg-4 col-md-12">
								<div class="md-form">
									<select class="mdb-select" id="designation" name="designationArchList">
										<option value="" disabled selected>Designation</option>
									</select> <label>Designation</label>
								</div>
							</div>
						</div>
						<div class="row">

                                <div class="text-center mt-1-half">
                                    <button id="SubmitButtonRegisterArchitect" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
                                    <button id="SubmitButtonUpdateArchitect" class="btn btn-info waves-effect HideThisElement" data-dismiss="modal">Update</button>
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
					<p class="heading">Delete Architect</p>

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
							<p>Architect details will be deleted from system.</p>
							<p>Click 'Confirm' to proceed, and 'Close' to cancel.</p>
						</div>
					</div>
				</div>

				<!--Footer-->
				<div class="modal-footer justify-content-center">
					<a type="button" class="btn btn-primary-modal" id="DeleteEmployeeConfirmed" style="background: #cc4141;">Confirm</a>
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
	<script type="text/javascript" src="../../../JavaScripts/CRM/editCompany.js"></script>
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
    </script>
</body>
</html>