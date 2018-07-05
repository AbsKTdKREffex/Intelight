<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Electrician</title>
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
                            <div class="DataTable">
                                <table id="datatables" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow">
                                            <th>Action</th>
                                            <th>Company Name</th>
                                            <th>Contractor Name</th>
                                            <th>Type</th>
                                            <th>Location</th>
                                            <th>Contact No</th>
                                            <th>Email ID</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
	  										<th>Company Name</th>
                                            <th>Contractor Name</th>
                                            <th>Type</th>
                                            <th>Location</th>
                                            <th>Contact No</th>
                                            <th>Email ID</th>
										</tr>
                                    </thead>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>

<div class="modal fade" id="RegisterNewElectrician" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
                        <div class="modal-content">
                            <div class="modal-header light-blue darken-3 white-text">
                                <i class="fa fa-user-plus mr-1 fa-2x"></i><h5 class="" id="NewElement-modal-title">Register Electrician</h5>
                                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body mb-0">
                               <form action="" id="newElectricianForm" name="newElectricianForm">
                               <div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
							   <div class="alert alert-danger HideThisElement" id="errorMessage"></div>
                               <input type="hidden" name="newCompanyId" id="newCompanyId">
                               <input type="hidden" name="selectedElectricianId" id="selectedElectricianId">
                               		<h5 class="card-title" style="color:#0277bd !important">Contractor Details</h5>
                               		<hr class="my-2"><br>
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
                                
                                <h5 class="card-title" style="color:#0277bd !important">Staff Details</h5>
                                <hr class="my-2"><br>
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
								<p class="heading">Delete Electrician</p>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" class="white-text">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
								<input type="hidden" id="DeleteElectricianId" name="DeleteElectricianId">
                                <div class="row">
                                    <div class="col-3">
                                        <p></p>
                                        <p class="text-center"><img class="delete" src="../../../Images/deleteModel.png"></p>
                                    </div>
                                    <div class="col-9">
                                        <br>
                                        <p>Electrician details will be deleted from system.</p>
        								<p>Click 'Confirm' to proceed, and 'Close' to cancel.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-center">
                                <a type="button" class="btn btn-primary-modal" id="DeleteElectricianConfirmed" style="background:#cc4141;">Confirm</a>
                                <a type="button" class="btn btn-outline-secondary-modal waves-effect" data-dismiss="modal">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
                
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    
    <script type="text/javascript" src="../../../JavaScripts/CRM/electrician.js"></script>
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