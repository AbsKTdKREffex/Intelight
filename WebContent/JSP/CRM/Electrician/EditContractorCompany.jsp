<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Contract Company Details</title>
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
		<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Contractor Company Information</h4>
		<hr class="my-2"><br>
		<input type="hidden" name="contractorCompanyId" id="contractorCompanyId" value="<%=request.getParameter("Id")%>">
		<div class="row">
		<!--First column-->
							        <div class="col-md-3">
							            <div class="md-form">
							                <i class="fa fa-pencil-alt prefix" id="editContractorCompanyBtn"></i>
							                <input type="text" id="companyNameCard" name="companyNameCard" class="form-control validate capitalizeText" disabled>
							                <label for="companyNameCard" id="companyNameCardLbl" class="active disabled">Contractor Company Name</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="contractorNameCard" name="contractorNameCard" class="form-control validate capitalizeText" disabled>
							                <label for="contractorNameCard" id="contractorNameCardLbl" class="active disabled" >Contractor Name</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="locationCard" name="locationCard" class="form-control validate capitalizeText" disabled>
							                <label for="locationCard" id="locationCardLbl" class="active disabled" >Contractor Location</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="hidden" id="altContactNumberCard" name="altContactNumberCard" class="form-control" disabled>
							                <input type="text" id="contactNumberCard" name="contactNumberCard" class="form-control" disabled>
							                <label for="contactNumberCard" id="contactNumberCardLbl" class="active disabled" >Contact Number</label>
							            </div>
							        </div>
		</div>
		<div class="row">
		<!--First column-->
							
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
							                <input type="text" id="typeCard" name="typeCard" class="form-control validate capitalizeText" disabled>
											<input type="hidden" name="typeId" id="typeId">
							                <label for="typeCard" id="typeLbl" class="active disabled" >Type</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="gstNoCard" name="gstNoCard" class="form-control validate capitalizeText" disabled>
							                <label for="gstNoCard" id="gstNoCardLbl" class="active disabled" >GST No</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="state_textCard" name="state_textCard" class="form-control validate capitalizeText" disabled>
											<input type="hidden" name="stateId" id="stateId">
							                <label for="stateCard" id="stateCardLbl" class="active disabled" >State</label>
							            </div>
							        </div>
		</div>
	</div>
	<div class="jumbotron">
		<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Staff Information</h4>
		<hr class="my-2">
		<table id="datatables"
			class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
			<thead>
				<tr id="headerrow">
					<th>Action</th>
					<th>Staff Name</th>
					<th>Mobile No</th>
					<th>Alternate No</th>
					<th>Location</th>
				</tr>
				<tr id="filterrow">
					<td></td>
					<th>Staff Name</th>
					<th>Mobile No</th>
					<th>Alternate No</th>
					<th>Location</th>
				</tr>
			</thead>
			<tbody id="example">
			</tbody>
		</table>
	</div>
	</main>
	<div class="modal fade" id="ContractorCompany" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
			<!--Content-->
			<div class="modal-content">

				<!--Header-->
				<div class="modal-header light-blue darken-3 white-text">
					<i class="fa fa-user-plus mr-1 fa-2x"></i>
					<h5 class="" id="NewElement-modal-title-Contractor-Company">New Contractor Company</h5>
					<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<!--Body-->
				<div class="modal-body mb-0">
					<form action="" id="contractorCompanyForm" name="contractorCompanyForm">
						<input type="hidden" name="selectedContractorCompanyIdContrctmod" id="selectedContractorCompanyIdContrctmod">
						<div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control capitalizeText" id="companyName" name="companyName">
                                            <label id="companyNameLbl" for="companyName" class="">Contractor Company Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control capitalizeText" id="contractorName" name="contractorName">
                                            <label id="contractorNameLbl" for="contractorName" class="">Contractor Name</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="text" class="form-control" id="location" name="location">
                                            <label id="locationLbl" for="location" class="">Location</label>
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
                                            <input type="text" class="form-control" id="altContactNo" name="altContactNo">
                                            <label id="altContactNoLbl" for="altContactNo" class="">Alternate Contact No</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                	<div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control" id="gstNo" name="gstNo">
                                            <label id="gstNoLbl" for="gstNo" class="">GST No</label>
                                        </div>
                                    </div>
                                	<div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control" id="email" name="email">
                                            <label id="emailLbl" for="email" class="">Email ID</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="md-form">
                                        <select class="mdb-select" id="state" name="state">
                                            <option value="" disabled selected>State</option>
                                        </select>
                                        <label>State</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="md-form">
                                        <select class="mdb-select" id="type" name="type">
                                            <option value="" disabled selected>Type</option>
                                        </select>
                                        <label>Type</label>
                                        </div>
                                    </div>
                                </div>
		                        <div class="row">
	                                <div class="text-center mt-1-half">
	                                    <button id="SubmitButtonUpdateContractor" class="btn btn-info waves-effect" data-dismiss="modal">Update</button>
	                                    <button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
	                                </div>
                                </div>
				</form>

			</div>
			<!--/.Content-->
		</div>
	</div>
	</div>
	
	
	<div class="modal fade" id="Staff" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
			<!--Content-->
			<div class="modal-content">

				<!--Header-->
				<div class="modal-header light-blue darken-3 white-text">
					<i class="fa fa-user-plus mr-1 fa-2x"></i>
					<h5 class="" id="NewElement-modal-title-Staff">New Staff</h5>
					<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<!--Body-->
				<div class="modal-body mb-0">
					<form action="" id="staffForm" name="staffForm">
						<div class="alert alert-warning HideThisElement" id="alertMessage"
							style="background-color: #ffbb33"></div>
						<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
						<input type="hidden" name="selectedContractorCompanyIdStaffmod" id="selectedContractorCompanyIdStaffmod">
						<input type="hidden" name="selectedStaffId" id="selectedStaffId">
						<!-- Grid row -->
						<div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control" id="name" name="name">
                                            <label id="nameLbl" for="name" class="">Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control capitalizeText" id="locationStaff" name="locationStaff">
                                            <label id="locationStaffLbl" for="locationStaff" class="">Location</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="number" class="form-control" id="contactNoStaff" name="contactNoStaff">
                                            <label id="contactNoStaffLbl" for="contactNoStaff" class="">Contact Number</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="number" class="form-control" id="altContactNoStaff" name="altContactNoStaff">
                                            <label id="altContactNoStaffLbl" for="altContactNoStaff" class="">Alt Contact No</label>
                                        </div>
                                    </div>
                                </div>
		                        <div class="row">

                                <div class="text-center mt-1-half">
                                    <button id="SubmitButtonRegisterStaff" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
                                    <button id="SubmitButtonUpdateStaff" class="btn btn-info waves-effect" data-dismiss="modal">Update</button>
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
					<p class="heading">Delete Staff</p>

					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true" class="white-text">&times;</span>
					</button>
				</div>

				<!--Body-->
				<div class="modal-body">
					<input type="hidden" id="DeleteContractorId" name="DeleteContractorId">
					<div class="row">
						<div class="col-3">
							<p></p>
							<p class="text-center">
								<img class="delete" src="../../../Images/deleteModel.png">
							</p>
						</div>

						<div class="col-9">
							<br>
							<p>Staff details will be deleted from system.</p>
							<p>Click 'Confirm' to proceed, and 'Close' to cancel.</p>
						</div>
					</div>
				</div>

				<!--Footer-->
				<div class="modal-footer justify-content-center">
					<a type="button" class="btn btn-primary-modal" id="DeleteContractorConfirmed" style="background: #cc4141;">Confirm</a>
					<a type="button" class="btn btn-outline-secondary-modal waves-effect" data-dismiss="modal">Close</a>
				</div>
			</div>
			<!--/.Content-->
		</div>
	</div>
	
	<script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>

	<script type="text/javascript" src="../../../JavaScripts/CRM/editContractorCompany.js"></script>
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