<%@page import="java.io.PrintWriter"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Projects</title>
    
    <link rel="shortcut icon" href="../../../img/TitleImage.png">
    
    <link rel="stylesheet" href="../../../css/font-awesome.min.css">
    <link rel="stylesheet" href="../../../css/bootstrap.min.css">
    <link rel="stylesheet" href="../../../css/mdb.css">
    <link rel="stylesheet" type="text/css" href="../../../js/vendor/datatables/css/dataTables.bootstrap4.min.css"/>
    <link rel="stylesheet" href="../../../css/buttons.dataTables.min.css">
    
    <link href="../../../css/style.css" rel="stylesheet">

	<style type="text/css">
		.hidefa{
		display:none !important;
		}
	</style>
	
 	
	<%String val= request.getParameter("val");
	
	if(val != null)
	{
		if(val.indexOf("1")>=0 || val.indexOf("2")>=0 || val.indexOf("3")>=0 || val.indexOf("4")>=0){
	%> 
		<style  type="text/css">
	      .fa-pencil:before,.fa-trash:before {
	       	content: "" !important;
	  		}
	     </style> 
	 <%}
	 else {%>
	     <style  type="text/css">
	  		 .fa-check:before {
	      	 content: "" !important;
	   }
	     </style>
	 <% } }
	else {
	 %>
	 <style  type="text/css">
	  		 #select_me {
  			display: none !important;
	   }
	     </style>
	 <% } 
	 %>
	
</head>
<body class="fixed-sn white-skin">

	<!--Main Navigation-->
    <%@ include file="../../../Header.jsp" %>
    <!--Main Navigation-->


	
	
	<!--Main layout-->
    <main>
        <div class="container-fluid mb-5">

            <!--Section: Basic examples-->
            <section id="ProjectListTable" class="">

                <div class="row">
                    
                    <div class="col-md-12">
                        <input type="hidden" id="selectedProjectIdPassedValue" value="<%= request.getParameter("selectedProjectId")%>">
                        <input type="hidden" id="checkValue" value="<%= request.getParameter("val")%>">
                        <div class="card">
                            <div class="card-body">
                                <table id="datatables" class="table table-striped table-bordered nowrap">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
										  	<th>Client</th>
										  	<th>Project Name</th>
										  	<th>Architect Company</th>
										  	<th>Architect</th>
										  	<th>Contact Person</th>
										  	<th>Contact No</th>
										  	<th>Assistance Architect</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
										  	<th>Client</th>
										  	<th>Project Name</th>
										  	<th>Architect Company</th>
										  	<th>Architect</th>
										  	<th>Contact Person</th>
										  	<th>Contact No</th>
										  	<th>Assistance Architect</th>
										</tr>
                                    </thead>
                                    
                                </table>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            

		<div class="modal fade" id="clientTableModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<!--Content-->
				<div class="modal-content">
					<!--Header-->
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">New Client Details</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<!--Body-->
					<div class="modal-body mb-0">
						<table id="clientTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
                                            <th>Company Name</th>
                                            <th>Industry</th>
                                            <th>Location</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
										  	<th>Company Name</th>
                                            <th>Industry</th>
                                            <th>Location</th>
										</tr>
                                    </thead>
                                    
                                </table>
                                <hr class="my-1">
							
							<div class="row">
								<div class="text-center mt-1-half">
									<button class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</button>
								</div>
							</div>
					</div>
					

				</div>
				<!--/.Content-->
			</div>
		</div>
		
		<div class="modal fade" id="architectTableModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<!--Content-->
				<div class="modal-content">
					<!--Header-->
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">Architect Company List</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<!--Body-->
					<div class="modal-body mb-0">
						<table id="architectTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
                                            <th>Company Name</th>
                                            <th>Location</th>
                                            <th>Mobile No</th>
                                            <th>Email ID</th>
                                            <th>Website</th>
                                            <th>Address</th>
                                            <th>Source</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
                                            <th>Company Name</th>
                                            <th>Location</th>
                                            <th>Mobile No</th>
                                            <th>Email ID</th>
                                            <th>Website</th>
                                            <th>Address</th>
                                            <th>Source</th>
										</tr>
                                    </thead>
                                    
                                </table>
                                <hr class="my-1">
							
							<div class="row">

								<div class="text-center mt-1-half">
									<button class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</button>
								</div>
							</div>
					</div>
					

				</div>
				<!--/.Content-->
			</div>
		</div>
		

<div class="modal fade" id="contactPerTableModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<!--Content-->
				<div class="modal-content">
					<!--Header-->
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">Contact Person List</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<!--Body-->
					<div class="modal-body mb-0">
						<table id="contactPTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
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
                                    
                                </table>
                                <hr class="my-1">
							
							<div class="row">

								<div class="text-center mt-1-half">
									<button class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</button>
								</div>
							</div>
					</div>
					

				</div>
				<!--/.Content-->
			</div>
		</div>
		
		
		<div class="modal fade" id="ArchitectListModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<!--Content-->
				<div class="modal-content">
					<!--Header-->
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">Architect List</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<!--Body-->
					<div class="modal-body mb-0">
						<table id="architectListTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
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
                                </table>
                                <hr class="my-1">
							
							<div class="row">

								<div class="text-center mt-1-half">
									<button class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</button>
								</div>
							</div>
					</div>
					

				</div>
				<!--/.Content-->
			</div>
		</div>
		
		
		
		<div class="modal fade" id="ArchitectAssistListModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<div class="modal-content">
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">Architect Assistance List</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body mb-0">
						<table id="architectAssistListTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
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
                                </table>
                                <hr class="my-1">
							
							<div class="row">

								<div class="text-center mt-1-half">
									<button class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</button>
								</div>
							</div>
					</div>
					

				</div>
				<!--/.Content-->
			</div>
		</div>
		
		<div class="modal fade" id="ManagerListModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<!--Content-->
				<div class="modal-content">
					<!--Header-->
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">Manager List</h4>
						<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<!--Body-->
					<div class="modal-body mb-0">
						<table id="managerListTable" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
											<th>Manager Name</th>
											<th>Designation</th>
											<th>Mobile No</th>
											<th>Alternate No</th>
											<th>Email ID</th>
											<th>Location</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
                                            <th>Manager Name</th>
											<th>Designation</th>
											<th>Mobile No</th>
											<th>Alternate No</th>
											<th>Email ID</th>
											<th>Location</th>
										</tr>
                                    </thead>
                                </table>
                                <hr class="my-1">
							
							<div class="row">

								<div class="text-center mt-1-half">
									<button class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</button>
								</div>
							</div>
					</div>
					

				</div>
				<!--/.Content-->
			</div>
		</div>
		
		
            <section id="ProjectRegistrationForm" class="HideThisElement">

                <div class="row">
                    
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                            <!--Title-->
					        <h4 class="card-title"><i class="fa fa-plus-circle mr-2" aria-hidden="true"></i> Project Registration</h4>
					        <br>
                            <form action="" id="newElementForm" name="newElementForm">
							<div class="alert alert-warning HideThisElement"
								id="alertMessage" style="background-color: #ffbb33"></div>
							<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
							<input type="hidden" name="selectedProjectId" id="selectedProjectId">
							<div class="row justify-content-md-center">
								<div class="col-lg-6 col-md-12">
                                 	<div class="md-form">
                                 	<i class="fa fa-search prefix" onclick="$('#clientTableModal').modal('show');"></i>
                                 	<input type="hidden" class="form-control" id="clientID" name="clientID">
									<input type="text" class="form-control capitalizeText" id="clientName" name="clientName" disabled>
                                    <label id="clientNameLbl" for="clientName" class="disabled">Client Name</label>
                                    </div>
                                 </div>
                                 <div class="col-lg-6 col-md-12">
                                 	<div class="md-form">
                                 	<i class="fa fa-search prefix" onclick="$('#architectTableModal').modal('show');"></i>
                                 	<input type="hidden" class="form-control" id="architectID" name="architectID">
									<input type="text" class="form-control capitalizeText" id="architectCompany" name="architectCompany" disabled>
                                    <label id="architectCompanyLbl" for="architectCompany" class="disabled">Architect Company</label>
                                    </div>
                                 </div>
							</div>
							
							<div class="row justify-content-md-center">
								<div class="col-lg-4 col-md-12">
									<div class="md-form">
									<i class="fa fa-search prefix" onclick="$('#contactPerTableModal').modal('show');"></i>
									<input type="hidden" class="form-control" id="contactPersonID" name="contactPersonID">
									<input type="text" class="form-control capitalizeText" id="contactPerson" name="contactPerson" disabled>
                                    <label id="contactPersonLbl" for="contactPerson" class="disabled">Contact Person</label>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12">
									<div class="md-form">
                                    <i class="fa fa-search prefix" onclick="$('#ArchitectListModal').modal('show');"></i>
									<input type="hidden" class="form-control" id="acrhitectNameID" name="acrhitectNameID">
									<input type="text" class="form-control capitalizeText" id="acrhitectName" name="acrhitectName" disabled>
                                    <label id="acrhitectNameLbl" for="acrhitectName" class="disabled">Architect Name</label>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12">
									<div class="md-form">
									<i class="fa fa-search prefix" onclick="$('#ArchitectAssistListModal').modal('show');"></i>
									<input type="hidden" class="form-control" id="asstArchitectID" name="asstArchitectID">
									<input type="text" class="form-control capitalizeText" id="asstArchitect" name="asstArchitect" disabled>
                                    <label id="asstArchitectLbl" for="asstArchitect" class="disabled">Asst Architect</label>
                                    </div>
                                </div>
							</div>
							
							<div class="row">
								 <div class="col-md-4">
                                     <div class="md-form">
                                         <input type="text" class="form-control capitalizeText" id="projectName" name="projectName">
                                         <label id="projectNameLbl" for="projectName" class="">Project Name</label>
                                     </div>
                                 </div>
                                 <div class="col-md-4">
                                     <div class="md-form">
                                         <input type="text" class="form-control capitalizeText" id="siteIncharge" name="siteIncharge">
                                         <label id="siteInchargeLbl" for="siteIncharge" class="">Site Incharge</label>
                                     </div>
                                 </div>
                                 <div class="col-md-4">
                                     <div class="md-form">
                                         <input type="number" class="form-control capitalizeText" id="siteInchargeNo" name="siteInchargeNo">
                                         <label id="siteInchargeNoLbl" for="siteInchargeNo" class="">Site Incharge No</label>
                                     </div>
                                 </div>
							</div>
							
							<div class="row">
								<div class="col-md-12">
                                    <div class="md-form">
                                        <textarea id="siteAddress" name="siteAddress" class="md-textarea"></textarea>
                                        <label id="siteAddressLbl" for="siteAddress" class="">Site Address</label>
                                    </div>
                                </div>
							</div>
							
							<div class="row">
                                <div class="col-md-3">
                                    <div class="md-form">
                                        <input type="text" class="form-control capitalizeText" id="electrician" name="electrician">
                                        <label id="electricianLbl" for="electrician" class="">Electrician Name</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="md-form">
                                        <input type="number" class="form-control" id="electricianNo" name="electricianNo">
                                        <label id="electricianNoLbl" for="electricianNo" class="">Electrician No</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="md-form">
                                        <input type="text" class="form-control capitalizeText" id="contractorElectrician" name="contractorElectrician">
                                        <label id="contractorElectricianLbl" for="contractorElectrician" class="">Contractor Electrician Name</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="md-form">
                                        <input type="number" class="form-control" id="contractorElectricianNo" name="contractorElectricianNo">
                                        <label id="contractorElectricianNoLbl" for="contractorElectricianNo" class="">Contractor Electrician No</label>
                                    </div>
                                </div>
							</div>
							
							<div class="row">
								<div class="col-md-3">
                                    <div class="md-form">
                                        <input type="text" class="form-control capitalizeText" id="overallHeight" name="overallHeight" >
                                        <label id="overallHeightLbl" for="overallHeight" class="">Overall Height</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="md-form">
                                        <input type="text" class="form-control capitalizeText" id="siteArea" name="siteArea">
                                        <label id="siteAreaLbl" for="siteArea" class="">Area (In Sq Ft)</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="md-form">
                                        <input type="text" class="form-control capitalizeText" id="noOfRooms" name="noOfRooms">
                                        <label id="noOfRoomsLbl" for="noOfRooms" class="">No of Rooms</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="md-form">
                                        <input type="text" class="form-control capitalizeText" id="siteTiming" name="siteTiming">
                                        <label id="siteTimingLbl" for="siteTiming" class="">Site Timing</label>
                                    </div>
                                </div>
							</div>
							
							<div class="row">
                                    <div class="col-lg-4 col-md-12">
    									<div class="md-form">
	    									<i class="fa fa-search prefix" onclick="$('#ManagerListModal').modal('show');" style="padding-top: 7px;"></i>
	    									<input type="hidden" class="form-control" id="managerID" name="managerID">
	    									<input type="text" class="form-control capitalizeText" id="manager" name="manager" disabled>
	                                        <label id="managerLbl" for="manager" class="disabled">Manager</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12">
                                        <div class="md-form" style="padding-top: 5px;">
                                        <select class="mdb-select" id="category" name="category">
                                            <option value="" disabled selected>Category</option>
                                        </select>
                                        <label style="padding-top: 5px;">Category</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12">
                                        <div class="md-form" class="md-form" style="padding-top: 5px;">
                                        <select class="mdb-select" id="subCategory" name="subCategory">
                                            <option value="" disabled selected>Sub Category</option>
                                        </select>
                                        <label style="padding-top: 5px;">Sub Category</label>
                                        </div>
                                    </div>
                            </div>
							<hr class="my-1">
							
							<div class="row">

								<div class="text-center mt-1-half">
									<button id="SubmitButtonRegister" class="btn btn-primary waves-effect" data-dismiss="modal">Submit</button>
									<button id="SubmitButtonUpdate" class="btn btn-primary waves-effect HideThisElement" data-dismiss="modal">Update</button>
									<a href="project.jsp" class="btn btn-outline-primary waves-effect" >Close</a>
								</div>
							</div>
					</form>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <!--Section: Basic examples-->


<div class="modal fade" id="RegisterNewClient" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
                        <!--Content-->
                        <div class="modal-content">

                            <!--Header-->
                            <div class="modal-header light-blue darken-3 white-text">
                                <i class="fa fa-user-plus mr-1 fa-2x"></i><h5 class="" id="NewElement-modal-title">Register Client</h5>
                                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <!--Body-->
                            <div class="modal-body mb-0">
                               <form action="" id="newClientForm" name="newClientForm">
                               <div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
							   <div class="alert alert-danger HideThisElement" id="errorMessage"></div>
                               <input type="hidden" name="selectedClientId" id="selectedClientId" >
                               <input type="hidden" name="newClientId" id="newClientId" >
                               		<!-- Grid row -->
                               		<h4 class="card-title" style="color:#0277bd !important">Client Information</h4>
                               		<hr class="my-2">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
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
                                            <input type="text" class="form-control" id="website" name="website">
                                            <label id="websiteLbl" for="website" class="">Website</label>
                                        </div>
                                    </div>
                                </div>
								<h4 class="card-title" style="color:#0277bd !important">Contact Person Information</h4>
								<input type="hidden" name="newContactPersonId" id="newContactPersonId" >
                               	<hr class="my-2">
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
                                            <input type="number" class="form-control" id="contactNoCP" name="contactNoCP">
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
                                
                                <h4 class="card-title" style="color:#0277bd !important">Client Address</h4>
								<input type="hidden" name="newClientAddressId" id="newClientAddressId" >
                                <hr class="my-2">
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
                                            <input type="text" class="form-control" id="gstNo" name="gstNo">
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
                                    <button id="SubmitButtonRegisterClient" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
                                    <button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            
                        </form>
                            </div>    
                        </div>
                        <!--/.Content-->
                    </div>
                </div>


<div class="modal fade" id="RegisterNewArchitect" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 35px;">
                        <!--Content-->
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
                               <input type="hidden" name="selectedArchitectId" id="selectedArchitectId" >
                               <input type="hidden" name="newArchitectCompanyId" id="newCompanyId" >
                               		<h4 class="card-title">Company Information</h4>
                               		<hr class="my-2">
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
                                    <div class="col-lg-4 col-md-6">
                                        <div class="md-form" style="padding-top: 8px;">
                                        <select class="mdb-select" id="source" name="source">
                                            <option value="" disabled selected>Source</option>
                                        </select>
                                        <label style="padding-top: 5px;">Source</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-4 col-md-6">
                                        <div class="md-form" style="padding-top: 8px;">
                                        <select class="mdb-select" id="stateArch" name="state">
                                            <option value="" disabled selected>State</option>
                                        </select>
                                        <label style="padding-top: 5px;">State</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <input type="text" class="form-control" id="gstNoArch" name="gstNo">
                                            <label id="gstNoArchLbl" for="gstNoArch" class="">GST No</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <h4 class="card-title">Architect Information</h4>
                               <input type="hidden" name="newArchitectId" id="newArchitectId" >
                                <hr class="my-2">
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
                                            <input type="text" class="form-control" id="locationArch" name="locationArch">
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
                                        <select class="mdb-select" id="designationArch" name="designationArch">
                                            <option value="" disabled selected>Designation</option>
                                        </select>
                                        <label>Designation</label>
                                        </div>
                                    </div>
                                </div>
                                
		                        <div class="row">

                                <div class="text-center mt-1-half">
                                    <button id="SubmitButtonRegisterArch" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
                                    <button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                        </form>
                            </div>
                        </div>
                    </div>
                </div>


<div class="modal fade" id="EditContactPerson" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg cascading-modal" role="document"
			style="margin-top: 35px;">
			<div class="modal-content">
				<div class="modal-header light-blue darken-3 white-text">
					<i class="fa fa-user-plus mr-1 fa-2x"></i>
					<h5 class="" id="NewElement-modal-title">Edit Contact Person</h5>
					<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body mb-0">
					<form action="" id="editContactPForm" name="editContactPForm">
						<div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
						<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
						<input type="hidden" name="selectedClientIdCntctPmod" id="selectedClientIdCntctPmod">
						<input type="hidden" name="newContctPId" id="newContctPId">
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
                                     <input type="number" class="form-control" id="contactNoCP" name="contactNoCP">
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
                                <button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
                            </div>
                        </div>
				</form>
			</div>
		</div>
	</div>
	</div>

<div class="modal fade" id="EditArchitectList" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg cascading-modal" role="document"
			style="margin-top: 35px;">
			<div class="modal-content">
				<div class="modal-header light-blue darken-3 white-text">
					<i class="fa fa-user-plus mr-1 fa-2x"></i>
					<h5 class="" id="NewElement-modal-title">New Architect</h5>
					<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body mb-0">
					<form action="" id="editArchitectListForm" name="editArchitectListForm">
						<div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
						<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
						<input type="hidden" name="selectedArchitectCompId" id="selectedArchitectListId">
						<input type="hidden" name="newArchitectIdMod" id="newArchitectIdMod">
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
									<input type="text" class="form-control" id="locationArch" name="locationArch">
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
									<select class="mdb-select" id="designationArchList" name="designationArchList">
										<option value="" disabled selected>Designation</option>
									</select> <label>Designation</label>
								</div>
							</div>
						</div>
						
						<div class="row">
                                <div class="text-center mt-1-half">
                                    <button id="SubmitButtonRegisterArchitect" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
                                    <button class="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
                                </div>
                        </div>
				</form>
			</div>
		</div>
	</div>
</div>


<div class="modal fade" id="EditAssistArchitectList" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg cascading-modal" role="document"
			style="margin-top: 35px;">
			<div class="modal-content">
				<div class="modal-header light-blue darken-3 white-text">
					<i class="fa fa-user-plus mr-1 fa-2x"></i>
					<h5 class="" id="NewElement-modal-title">New Architect Assistance</h5>
					<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body mb-0">
					<form action="" id="editAssistArchitectListForm" name="editAssistArchitectListForm">
						<div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
						<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
						<input type="hidden" name="selectedArchitectCompId" id="selectedAssistArchitectListId">
						<input type="hidden" name="newArchitectIdMod" id="newArchitectAssistIdMod">
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
									<select class="mdb-select" id="assistDesignation" name="designationArchList">
										<option value="" disabled selected>Designation</option>
									</select> <label>Designation</label>
								</div>
							</div>
						</div>
						
						<div class="row">
                                <div class="text-center mt-1-half">
                                    <button id="SubmitButtonRegisterAssistArchitect" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
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
			                                <p class="heading">Delete Project</p>
			                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                                    <span aria-hidden="true" class="white-text">&times;</span>
			                                </button>
			                            </div>
			                            <div class="modal-body">
											<input type="hidden" id="DeleteElementId" name="DeleteElementId">
			                                <div class="row">
			                                    <div class="col-3">
			                                        <p></p>
			                                        <p class="text-center"><img class="warningImage" src="../../../img/deleteModel.png"></p>
			                                    </div>
			                                    <div class="col-9">
			                                        <br>
			                                        <p>Project will be deleted from system.</p>
			                                        <p>Click 'Confirm' to proceed, and 'Close' to cancel.</p>
			                                    </div>
			                                </div>
			                            </div>
			                            <div class="modal-footer justify-content-center">
			                                <a type="button" class="btn btn-primary-modal" id="DeleteProductConfirmed" style="background:#cc4141;">Confirm</a>
			                                <a type="button" class="btn btn-outline-secondary-modal waves-effect" data-dismiss="modal">Close</a>
			                            </div>
			                        </div>
			                    </div>
			                </div>
        </div>
    </main>
	
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <!-- <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script> -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.buttons.min.js"></script>
    
    <script type="text/javascript" src="../../../JavaScripts/Project/ProjectList.js"></script>
    
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