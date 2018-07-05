<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Project Details</title>
    
    <link rel="shortcut icon" href="../../../img/TitleImage.png">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../../css/bootstrap.min.css">
    <link rel="stylesheet" href="../../../css/mdb.css">
    <link rel="stylesheet" type="text/css" href="../../../js/vendor/datatables/css/dataTables.bootstrap4.min.css"/>
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.4.0/css/buttons.dataTables.min.css" />
 
    <link href="../../../css/style.css" rel="stylesheet">

</head>
<body class="fixed-sn white-skin">
	<!--Main Navigation-->
    <%@ include file="../../../Header.jsp" %>
    <!--Main Navigation-->


		<div class="modal fade" id="clientTableModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg cascading-modal" role="document" style="margin-top: 50px;">
				<!--Content-->
				<div class="modal-content">
					<!--Header-->
					<div class="modal-header light-blue darken-3 white-text">
						<i class="fa fa-user fa-2x"></i>
						<h4 class="" id="NewElement-modal-title">Electrician List</h4>
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
											<th>Electrician Name</th>
											<th>Designation</th>
											<th>Mobile No</th>
											<th>Alternate No</th>
											<th>Email ID</th>
											<th>Location</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
                                            <th>Electrician Name</th>
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
	
	
	<!--Main layout-->
    <main>
        <div class="container-fluid mb-5">
			
            <!--Section: Basic examples-->
            <section id="projectInformation" class="">

                <div class="row">
                    
                    <div class="col-md-12">
                                                
                        <div class="card">
                            <div class="card-body mx-4">
                            <!--Title-->
					        <h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Project Information</h4>
					        <br>
					        <input type="hidden" id="selectedProjectId" value="<%= request.getParameter("selectedProjectId")%>">
					        <!--First row-->
					        <div class="row">
			    					<!--First column-->
							        <div class="col-md-3">
							            <div class="md-form">
							                <i class="fa fa-pencil-alt prefix" id="editProject"></i>
							                <input type="text" id="clientName" name="clientName" class="form-control validate capitalizeText">
							                <label for="clientName" id="clientNameLbl" class="active" >Client Name</label>
							            </div>
							        </div>
							
							        <!--Second column-->
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="architectCompany" name="architectCompany" class="form-control validate capitalizeText">
							                <label for="architectCompany" id="architectCompanyLbl" class="active" >Architect Company</label>
							            </div>
							        </div>
							        <!--Third column-->
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="projectName" name="projectName" class="form-control validate capitalizeText">
							                <label for="projectName" id="projectNameLbl" class="active" >Project Name</label>
							            </div>
							        </div>
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="managerName" name="managerName" class="form-control validate capitalizeText">
							                <label for="managerName" id="managerNameLbl" class="active" >Manager Name</label>
							            </div>
							        </div>
			    				</div>
			    				<!--/.First row-->
			    				<!--Second row-->
			    				<div class="row">
			    					<!--First column-->
			    					<div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="contactPerson" name="contactPerson" class="form-control validate capitalizeText">
							                <label for="contactPerson" id="contactPersonLbl" class="active" >Contact Person</label>
							            </div>
							        </div>
							        
							        <!--Second column-->
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="acrhitectName" name="acrhitectName" class="form-control validate capitalizeText">
							                <label for="acrhitectName" id="acrhitectNameLbl" class="active" >Architect Name</label>
							            </div>
							        </div>
							        
							        <!--Third column-->
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="asstArchitect" name="asstArchitect" class="form-control validate capitalizeText">
							                <label for="asstArchitect" id="asstArchitectLbl" class="active" >Asst Architect</label>
							            </div>
							        </div>
							        
							        <!--Fourth column-->
							        <div class="col-md-3">
							            <div class="md-form">
							                <input type="text" id="siteIncharge" name="siteIncharge" class="form-control validate capitalizeText">
							                <label for="siteIncharge" id="siteInchargeLbl" class="active" >Site Incharge</label>
							            </div>
							        </div>
			    				</div>
			    				<!--/.Second row-->
                            	<hr>
                            	<!--Title-->
						        <h5 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Room Wise Requirements</h5>
						        <table id="datatables" class="table table-striped table-bordered nowrap">
                                    <thead>
                                        <tr id="headerrow" class="mdb-color darken-3 text-white" >
                                            <th>Action</th>
										  	<th>Room Name</th>
										  	<th>Size L/B/H</th>
										  	<th>Pics Taken?</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
										  	<th>Room Name</th>
										  	<th>Size L/B/H</th>
										  	<th>Pics Taken?</th>
										</tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <!--Section: Basic examples-->

			<section id="projectRoomDetails" class="HideThisElement">
				<div class="row">
                    
                    <div class="col-md-12">
                                                
                        <div class="card">
                            <div class="card-body">
                            <!--Title-->
					        <h4 class="card-title"><i class="fa fa-plus-circle mr-2" aria-hidden="true"></i> Room Information</h4>
					        <br>
                            <form id="newProjectRoomdetails" name="newProjectRoomdetails">
                            <input type="hidden" id="selectedRoomId" name="selectedRoomId">
                            <input type="hidden" id="selectedProjectIdforRoom" name="selectedProjectIdforRoom" value="<%= request.getParameter("selectedProjectId")%>">
							<div class="alert alert-warning HideThisElement"
								id="alertMessage" style="background-color: #ffbb33"></div>
							<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
							<div class="row">
								<div class="col-lg-6 col-md-12">
                                	<div class="md-form">
	                                	<input type="text" class="form-control capitalizeText" id="roomName" name="roomName">
	                                    <label id="roomNameLbl" for="roomName" class="">Room Name</label>
                                    </div>
                                	<div class="md-form">
                                    	<textarea class="md-textarea" id="lightPlacements" name="lightPlacements" style="height: 155px"></textarea>
                                        <label id="lightPlacementsLbl" for="lightPlacements" class="">Lights Required</label>
                                    </div>
                                </div>
                            	<div class="col-lg-6 col-md-12">
                                	<div class="md-form">
                                		<textarea class="md-textarea" id="measurementDetails" name="measurementDetails" style="height: 234px"></textarea>
                                    	<label id="measurementDetailsLbl" for="measurementDetails" class="">Detailed Measurements</label>
                                    </div>
                            	</div>
								<!-- <div class="col-lg-4 col-md-12">
                                	<div class="md-form">
										<div class="md-form">
                                        <i class="fa fa-search prefix" style="padding-top: 1%;" onclick="$('#clientTableModal').modal('show');"></i>
										<input type="hidden" class="form-control" id="electricianID" name="electricianID">
										<input type="text" class="form-control capitalizeText" id="electrician" name="electrician" disabled>
                                        <label id="electricianLbl" for="electrician" class="disabled">Electrician</label>
                                        </div>
                                	</div>
                            	</div> -->
							</div>
							
							<!-- <div class="row">
                            </div> -->
                            <div class="row">
                            	<div class="col-lg-5 col-md-12">
                                	<div class="md-form">
                                		<textarea class="md-textarea" id="recommendationsGiven" name="recommendationsGiven" style="height: 80px"></textarea>
                                    	<label id="recommendationsGivenLbl" for="recommendationsGiven" class="">Recommendations Given</label>
                                    </div>
                            	</div>
                            	<!-- <div class="col-lg-3 col-md-12">
                                	<div class="md-form">
                                    	<textarea class="md-textarea" id="samplesToBrought" name="samplesToBrought" style="height: 155px"></textarea>
                                        <label id="samplesToBroughtLbl" for="samplesToBrought" class="">Samples to be Brought</label>
                                    </div>
                            	</div>
                            	<div class="col-lg-3 col-md-12">
                                	<div class="md-form">
                                		<textarea class="md-textarea" id="samplesGiven" name="samplesGiven" style="height: 155px"></textarea>
                                    	<label id="samplesGivenLbl" for="samplesGiven" class="">Samples Given</label>
                                    </div>
                            	</div> -->
                            	<div class="col-lg-5 col-md-12">
                                	<div class="md-form">
                                		<textarea class="md-textarea" id="provisionForDrivers" name="provisionForDrivers" style="height: 80px"></textarea>
                                    	<label id="provisionForDriversLbl" for="provisionForDrivers" class="">Provision/ Ventilation for Drivers</label>
                                    </div>
                            	</div>
                            	<div class="col-lg-2 col-md-12">
                                	<div class="md-form">
                                    	<input type="text" class="form-control capitalizeText" id="sizeLBH" name="sizeLBH">
                                		<label id="sizeLBHLbl" for="sizeLBH" class="">Size (L/B/H)</label>
                                	</div>
                                    <div class="form-group">
									    <input type="checkbox" id="picsTaken" name="picsTaken">
									    <label for="picsTaken">Pics Taken?</label>
									</div>
                            	</div>
                            	
                            </div>
							
							
							<hr class="my-1">
							
							<div class="row">

								<div class="text-center mt-1-half">
									<button id="SubmitButtonRegisterRoomDetails" class="btn btn-primary waves-effect" data-dismiss="modal">Submit</button>
									<button id="SubmitButtonUpdateRoomDetails" class="btn btn-primary waves-effect HideThisElement" data-dismiss="modal">Update</button>
									<button type="button" class="btn btn-outline-primary waves-effect" onclick="unloadProjectRoomsForm();">Close</button>
								</div>
							</div>
					</form>
                            </div>
                        </div>

                    </div>

                </div>
			</section>

			<!-- Delete Employee Modal -->
			<!--Section: Modals-->
			<div class="modal fade" id="centralModalDangerDemo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			                    <div class="modal-dialog modal-notify modal-danger" role="document">
			                        <!--Content-->
			                        <div class="modal-content">
			                            <!--Header-->
			                            <div class="modal-header" style="background:#cc4141;">
			                                <p class="heading">Delete Room</p>
			
			                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                                    <span aria-hidden="true" class="white-text">&times;</span>
			                                </button>
			                            </div>
			
			                            <!--Body-->
			                            <div class="modal-body">
											<input type="hidden" id="DeleteElementId" name="DeleteElementId">
			                                <div class="row">
			                                    <div class="col-3">
			                                        <p></p>
			                                        <p class="text-center"><img class="warningImage" src="../../../img/deleteModel.png"></p>
			                                    </div>
			
			                                    <div class="col-9">
			                                        <br>
			                                        <p>Room will be deleted from system.</p>
			                                        <p>Click 'Confirm' to proceed, and 'Close' to cancel.</p>
			                                    </div>
			                                </div>
			                            </div>
			
			                            <!--Footer-->
			                            <div class="modal-footer justify-content-center">
			                                <a type="button" class="btn btn-primary-modal" id="DeleteRoomConfirmed" style="background:#cc4141;">Confirm</a>
			                                <a type="button" class="btn btn-outline-secondary-modal waves-effect" data-dismiss="modal">Close</a>
			                            </div>
			                        </div>
			                        <!--/.Content-->
			                    </div>
			                </div>
			<!--Section: Docs link-->
			            
            
        </div>
        
        
        
    </main>
    <!--Main layout-->

	<!-- SCRIPTS -->
    <!-- JQuery -->
    <!-- DataTables.net -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    <!--Custom scripts-->
    
    <script type="text/javascript" src="../../../JavaScripts/ProjectRoom/ProjectRoomsList.js"></script>
    
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
     	
        $('.datepicker').pickadate({
        	});
        
        $('.timepicker').pickatime({
            twelvehour: true
        });
       
        function unloadProjectRoomsForm() {
        	$("#projectRoomDetails").addClass("HideThisElement");
        	$("#projectInformation").removeClass("HideThisElement");
    	} 
    </script>
</body>
</html>