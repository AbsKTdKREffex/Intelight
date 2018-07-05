<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Client</title>
	<link rel="shortcut icon" href="../../../img/TitleImage.png">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="../../../css/bootstrap.min.css">
    <!-- Material Design Bootstrap -->
    <link rel="stylesheet" href="../../../css/mdb.css">
    <!-- DataTables.net -->
    <link rel="stylesheet" type="text/css" href="../../../js/vendor/datatables/css/dataTables.bootstrap4.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.4.0/css/buttons.dataTables.min.css" />
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
        <div class="container-fluid mb-5">
            <section>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                            <div class="DataTable" >
                                <table id="datatables" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow">
                                            <th>Action</th>
                                            <th>Company Name</th>
                                            <th>Industry</th>
                                            <th>Website</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
	  										<th>Company Name</th>
                                            <th>Industry</th>
                                            <th>Website</th>
										</tr>
                                    </thead>
                                    <tbody id="example">
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
</main>

<div class="modal fade" id="RegisterNewArchitect" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
                        <div class="modal-content">
                            <div class="modal-header light-blue darken-3 white-text">
                                <i class="fa fa-user-plus mr-1 fa-2x"></i><h5 class="" id="NewElement-modal-title">Register Architect</h5>
                                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body mb-0">
                               <form action="" id="newArchitectForm" name="newArchitectForm">
                               <div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
							   <div class="alert alert-danger HideThisElement" id="errorMessage"></div>
                               <!-- <input type="hidden" name="selectedArchitectId" id="selectedArchitectId" > -->
                               		<h5 class="card-title" style="color:#0277bd !important">Client Information</h5>
                               		<hr class="my-2"><br>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="hidden" class="form-control" id="newClientId" name="newClientId">
                                            <input type="text" class="form-control capitalizeText" id="companyName" name="companyName">
                                            <label id="companyNameLbl" for="companyName" class="">Company Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="text" class="form-control capitalizeText" id="industry" name="industry">
                                            <label id="industryLbl" for="industry" class="">Industry</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="text" class="form-control capitalizeText" id="location" name="location">
                                            <label id="locationLbl" for="location" class="">Location</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row center">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="text" class="form-control" id="creditTime" name="creditTime">
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
								<h5 class="card-title" style="color:#0277bd !important">Contact Person Information</h5>
                               	<hr class="my-2"><br>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="hidden" class="form-control" id="newContactPersonId" name="newContactPersonId">
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
                                        <select class="mdb-select" id="designation" name="designation">
                                            <option value="" disabled selected>Designation</option>
                                        </select>
                                        <label>Designation</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <h5 class="card-title" style="color:#0277bd !important">Client Address</h5>
                                <hr class="my-2"><br>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="hidden" class="form-control" id="newClientAddressId" name="newClientAddressId">
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
                                            <input type="text" class="form-control capitalizeText" id="gstNo" name="gstNo">
                                            <label id="gstNoLbl" for="gstNo" class="">GST No / Pan No</label>
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
	                                    <button id="SubmitButtonRegister" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
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
                        <div class="modal-content">
                            <div class="modal-header" style="background:#cc4141;">
                                <p class="heading">Delete Client</p>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" class="white-text">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
								<input type="hidden" id="DeleteEmpId" name="DeleteEmpId">
                                <div class="row">
                                    <div class="col-3">
                                        <p></p>
                                        <p class="text-center"><img class="delete" src="../../../Images/deleteModel.png"></p>
                                    </div>
                                    <div class="col-9">
                                        <br>
                                        <p>Client details will be deleted from system.</p>
        								<p>Click 'Confirm' to proceed, and 'Close' to cancel.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-center">
                                <a type="button" class="btn btn-primary-modal" id="DeleteEmployeeConfirmed" style="background:#cc4141;">Confirm</a>
                                <a type="button" class="btn btn-outline-secondary-modal waves-effect" data-dismiss="modal">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
                
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    
    <script type="text/javascript" src="../../../JavaScripts/Client/client.js"></script>
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
    </script>
</body>
</html>