<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Legend Editor</title>
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
		 
		.col-centered{
		    float: none;
		    margin: 0 auto;
		}
		input[type=number]::-webkit-inner-spin-button,
		input[type=number]::-webkit-outer-spin-button { 
		  -webkit-appearance: none;
		  -moz-appearance: none;
		  appearance: none;
		  margin: 0; 
		}
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
	  										<th>Legend Group</th>
	  										<th>Category</th>
	  										<th>Sub Category</th>
	  										<th>Description</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
										  	<th>Legend Group</th>
	  										<th>Category</th>
	  										<th>Sub Category</th>
	  										<th>Description</th>
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
    <div class="modal fade" id="RegisterNewClient" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
                        <!--Content-->
                        <div class="modal-content">
                            <div class="modal-header light-blue darken-3 white-text">
                                <h5 class="" id="NewElement-modal-title">New Legend</h5>
                                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body mb-0">
                               <form action="" id="newClientForm" name="newClientForm">
                               <div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
							   <div class="alert alert-danger HideThisElement" id="errorMessage"></div>
                               <input type="hidden" name="selectedLegendId" id="selectedLegendId" >
                                <div class="row">
                                    <div class="col-md-6" style="text-align: center">
                                        <div class="md-form" style="padding-top: 8px;">
                                            <select class="mdb-select" id="legendGroupDD" name="legendGroupDD">
                                                <option value="" disabled selected>Legend Group</option>
                                            </select>
                                            <label style="padding-top: 2px;">Group</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control HideThisElement otherLegendElement  capitalizeText" id="legendGroup" name="legendGroup">
                                            <label id="legendGroupLbl" for="legendGroup" class="HideThisElement otherLegendElement">Legend Group</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form" style="padding-top: 8px;">
                                            <select class="mdb-select" id="categoryDD" name="categoryDD">
                                                <option value="" disabled selected>Category</option>
                                            </select>
                                            <label style="padding-top: 2px;">Category</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control HideThisElement otherLegendElement capitalizeText" id="category" name="category">
                                            <label id="categoryLbl" for="category" class="HideThisElement otherLegendElement">Category</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                	<div class="col-md-6" style="padding-top: 8px;">
                                        <div class="md-form">
                                            <select class="mdb-select" id="subCategoryDD" name="subCategoryDD">
                                                <option value="" disabled selected>Sub Category</option>
                                            </select>
                                            <label>Sub Category</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control HideThisElement otherLegendElement capitalizeText" id="subCategory" name="subCategory">
                                            <label id="subCategoryLbl" for="subCategory" class="HideThisElement otherLegendElement">Sub Category</label>
                                        </div>
                                    </div>
                                </div>
                                
		                        <div class="row">
		                        	<div class="col-md-6">
                                        <div class="md-form">
                                            <input type="text" class="form-control capitalizeText" id="description" name="description">
                                            <label id="descriptionLbl" for="description" class="">Description</label>
                                        </div>
                                    </div>
								</div>
								
								<div class="row">
	                                <div class="text-center mt-1-half">
	                                    <button id="SubmitButtonRegister" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
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
                            <div class="modal-header" style="background:#cc4141;">
                                <p class="heading">Delete Legend</p>
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
                                        <p>Legend details will be deleted from system.</p>
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
    
    <script type="text/javascript" src="../../../JavaScripts/Legend/legend.js"></script>
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