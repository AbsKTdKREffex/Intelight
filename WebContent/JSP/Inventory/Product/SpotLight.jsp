<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Spot Light</title>
<link rel="shortcut icon" href="../../../img/TitleImage.png">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../../../css/bootstrap.min.css">
<link rel="stylesheet" href="../../../css/mdb.css">

<link rel="stylesheet" type="text/css" href="../../../js/vendor/datatables/css/dataTables.bootstrap4.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.4.0/css/buttons.dataTables.min.css" />
<link rel="stylesheet" href="../../../css/style.css">

	<style>
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
			<section id="spotLightListTable" class="">
				<div class="row">
					<input type="hidden" name="selectedProductId" id="selectedProductId">
					<div class="col-md-12">
						<div class="card">
							<div class="card-body">
								<div class="DataTable">
									<table id="datatables" class="table table-striped table-bordered" cellspacing="0" width="100%">
										<thead>
											<tr id="headerrow">
												<th>Action</th>
												<th>Product Id</th>
												<th>SKU Id</th>
												<th>Additional Info</th>
											</tr>
											<tr id="filterrow">
												<td></td>
												<th>Product Id</th>
												<th>SKU Id</th>
												<th>Additional Info</th>
											</tr>
										</thead>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section id="spotLightRegistrationForm" class="HideThisElement">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                            <!--Title-->
					        <h4 class="card-title"><i class="fa fa-plus-circle mr-2" aria-hidden="true"></i> Spot Light Registration</h4>
                            <form action="" id="newSpotLightForm" name="newSpotLightForm">
							<div class="alert alert-warning HideThisElement" id="alertMessage" style="background-color: #ffbb33"></div>
							<div class="alert alert-danger HideThisElement" id="errorMessage"></div>
					        <br>
							<input type="hidden" name="selectedProductId" id="selectedProductId">
										<div class="row">
											<div class="col-lg-3 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="brand" name="brand">
														<option value="" disabled selected>Brand</option>
													</select>
													<label>Brand</label>
												</div>
											</div>
											<div class="col-lg-3 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="productName" name="productName">
													</select>
													<label>Product Name</label>
												</div>
											</div>
											<div class="col-lg-3 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="wattage" name="wattage">
														<option value="" disabled selected>Wattage</option>
													</select>
													<label>Wattage</label>
												</div>
											</div>
											<div class="col-lg-3 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="shape" name="shape">
														<option value="" disabled selected>Shape</option>
													</select> <label>Shape</label>
												</div>
											</div>
										</div>
										
										<div class="row">
											<div class="col-lg-3 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="fixingType" name="fixingType">
														<option value="" disabled selected>Fixing Type</option>
													</select>
													<label>Fixing Type</label>
												</div>
											</div>
											<div class="col-lg-3 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="rimType" name="rimType">
														<option value="" disabled selected>Rim Type</option>
													</select>
													<label>Rim Type</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="recessedType" name="recessedType">
														<option value="" disabled selected>Recessed Type</option>
													</select>
													<label>Recessed Type</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="recessedSubType" name="recessedSubType">
														<option value="" disabled selected>Recessed Sub Type</option>
													</select>
													<label>Recessed Sub Type</label>
												</div>
											</div>
                                    	</div>
	                                    	
										<div class="row">
											<div class="col-md-3">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="nature" name="nature">
														<option value="" disabled selected>Nature</option>
													</select>
													<label>Nature</label>
												</div>
											</div>
											<div class="col-lg-3 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="finishType" name="finishType">
														<option value="" disabled selected>Finish Type</option>
													</select>
													<label>Finish Type</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="finishColor" name="finishColor">
														<option value="" disabled selected>Finish Color</option>
													</select>
													<label>Finish Color</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="LEDChipBrand" name="LEDChipBrand">
														<option value="" disabled selected>LED Chip Brand</option>
													</select>
													<label>LED Chip Brand</label>
												</div>
											</div>
                                    	</div>
	                                    	
										<div class="row justify-content-md-center">
											<div class="col-lg-4 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="colorTemperature" name="colorTemperature">
														<option value="" disabled selected>Color Temperature</option>
													</select>
													<label>Color Temperature</label>
												</div>
											</div>
											<div class="col-lg-4 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="beamAngle" name="beamAngle">
														<option value="" disabled selected>Beam Angle</option>
													</select>
													<label>Beam Angle</label>
												</div>
											</div>
											<div class="col-lg-4 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="optics" name="optics">
														<option value="" disabled selected>Optics</option>
													</select>
													<label>Optics</label>
												</div>
											</div>
										</div>
											
										<div class="row justify-content-md-center">
											<div class="col-lg-4 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="diffuser" name="diffuser">
														<option value="" disabled selected>Diffuser</option>
													</select>
													<label>Diffuser</label>
												</div>
											</div>
											<div class="col-lg-4 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="driver" name="driver">
														<option value="" disabled selected>Driver</option>
													</select>
													<label>Driver</label>
												</div>
											</div>
											<div class="col-lg-4 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="dimmType" name="dimmType">
														<option value="" disabled selected>Dimm Type</option>
													</select> <label>Dimm Type</label>
												</div>
											</div>
										</div>
											
	                                   	<div class="row">
											<div class="col-lg-4 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="dimmSubType" name="dimmSubType">
														<option value="" disabled selected>Dimm Sub Type</option>
													</select> <label>Dimm Sub Type</label>
												</div>
											</div>
											<div class="col-md-4">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="IPRating" name="IPRating">
														<option value="" disabled selected>IP Rating</option>
													</select>
													<label>IP Rating</label>
												</div>
											</div>
											<div class="col-md-4">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="size" name="size">
														<option value="" disabled selected>Size</option>
													</select>
													<label>Size</label>
												</div>
											</div>
	                                   	</div>
		                                   	
	                                   	<div class="row">
											<div class="col-lg-4 col-md-12">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="cutout" name="cutout">
														<option value="" disabled selected>Cutout</option>
													</select>
													<label>Cutout</label>
												</div>
											</div>
											<div class="col-md-4">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="CRI" name="CRI">
														<option value="" disabled selected>CRI</option>
													</select>
													<label>CRI</label>
												</div>
											</div>
											<div class="col-md-4">
												<div class="md-form">
													<select class="mdb-select SKUGrp" id="warranty" name="warranty">
														<option value="" disabled selected>Warranty</option>
													</select>
													<label>Warranty (In Months)</label>
												</div>
											</div>
	                                   	</div>
		                                   	
										<div class="row">
											<div class="col-md-6">
												<div class="md-form" style="padding-top: 8px;">
													<select class="mdb-select" id="hsnIdSpotLight" name="hsnId">
													</select>
													<label style="padding-top: 2px;">HSN Id</label>
												</div>
											</div>
											<div class="col-md-6">
												<div class="md-form">
													<input type="text" class="form-control" id="skuIdSpotLight" name="skuId" style="color:#2E2E2E;" readonly>
													<label id="skuIdSpotLightLbl" for="skuIdSpotLight" style="color:#2E2E2E;" class="disabled">SKU Id</label>
												</div>
											</div>
										</div>
										
										<div class="row">
											<div class="col-md-4">
												<div class="md-form">
													<input type="number" class="form-control form-input-capital" id="goldSpotLight" name="gold">
													<label id="goldSpotLightLbl" for="goldSpotLight" class="">Gold</label>
												</div>
											</div>
											<div class="col-md-4">
												<div class="md-form">
													<input type="number" class="form-control form-input-capital" id="silverSpotLight" name="silver">
													<label id="silverSpotLightLbl" for="silverSpotLight" class="">Silver</label>
												</div>
											</div>
											<div class="col-md-4">
												<div class="md-form">
													<input type="number" class="form-control form-input-capital" id="bronzeSpotLight" name="bronze">
													<label id="bronzeSpotLightLbl" for="bronzeSpotLight" class="">Bronze</label>
												</div>
											</div>
										</div>
										
										<div class="row">
											<div class="col-md-12 center md-form">
												<textarea id="additionalInformationSpotLight" name="additionalInformation" class="md-textarea"></textarea>
												<label for="additionalInformationSpotLight" id="additionalInformationSpotLightLbl" style="padding-left: 2%;">Additional Information</label>
											</div>
										</div>
							
										<hr class="my-1">
										<div class="row">
											<div class="text-center mt-1-half">
												<button id="generateSKUSpotLight" class="btn btn-info waves-effect" data-dismiss="modal">Generate SKU</button>
												<button id="SubmitButtonRegisterSpotLight" class="btn btn-info waves-effect" data-dismiss="modal">Submit</button>
												<button id="SubmitButtonUpdateSpotLight" class="btn btn-info waves-effect HideThisElement" data-dismiss="modal" disabled>Update</button>
												<button type="button" id="closeBtn" class="btn btn-outline-info waves-effect">Close</button>
											</div>
										</div>
								</form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
		</div>
	</main>
	
	<div class="modal fade" id="centralModalDangerDemo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-notify modal-danger" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background:#cc4141;">
                    <p class="heading">Delete Product</p>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="white-text">&times;</span>
                        </button>
                </div>
                <div class="modal-body">
        			<input type="hidden" id="DeleteProdId" name="DeleteProdId">
        			<div class="row">
                        <div class="col-3">
                            <p class="text-center"><img class="delete" src="../../../Images/deleteModel.png"></p>
                        </div>

                        <div class="col-9">
                            <br>
						    <p>Product will be deleted from system.</p>
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
    
    
	<div class="modal fade" id="AddNewImage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog cascading-modal" role="document" style="margin-top: 35px;">
			<div class="modal-content">
				<div class="modal-header light-blue darken-3 white-text">
					<h4 class="" id="NewElement-modal-title" style="padding-left: 125px;">Add Product Image</h4>
					<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<input type="hidden" id="Success" value="<%= request.getParameter("val")%>">
					<input type="hidden" id="FileName" value="<%= request.getParameter("fileName")%>">
					<form action = "../../../UploadImages?for=<%= request.getParameter("for")%>" method = "post" enctype = "multipart/form-data" id="LogInForm">
						<input type="hidden" id="ProductId" name="ProductId">
						<div class="z-depth-1-half mb-4 mx-auto" style="margin-bottom: 0px;padding: 20px; !important">
							<img id="blah" class="d-flex avatar-2 mb-md-0 mb-3 mx-auto" src="../../../Images/upload.png" alt="upload image" style="width: 250px;">
						</div>
						<div class="d-flex justify-content-center">
							<div class="btn light-blue darken-3 btn-rounded file-field" id="choseFle">
								<span>Choose file</span>
								<input type="file" name = "file" id="imgInp">
							</div>
							<div class="text-center">
								<button class="btn btn-rounded light-blue darken-3" type="submit" id="imgsnd" disabled>Upload</button>
							</div>
						</div>
					</form>
				</div>    
			</div>
		</div>
	</div>
    
	<script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>

	<script type="text/javascript" src="../../../JavaScripts/Product/SpotLight.js"></script>
	<script>

		$(document).ready(function() {
			$('#datatables').DataTable();
		});

		$(document).ready(function() {
			$('select[name="datatables_length"]').material_select();
		});

		$(document).ready(function() {
			$('.mdb-select').material_select();
		});

	    function readURL(input) {

	    	  if (input.files && input.files[0]) {
	    	    var reader = new FileReader();

	    	    reader.onload = function(e) {
	    	      $('#blah').attr('src', e.target.result);
	    	    }

	    	    reader.readAsDataURL(input.files[0]);
	    	    $('#imgsnd').attr('disabled',false);
	    	  }
	    	}

	    $("#imgInp").change(function() {
	    	  readURL(this);
	    });
	</script>
</body>
</html>