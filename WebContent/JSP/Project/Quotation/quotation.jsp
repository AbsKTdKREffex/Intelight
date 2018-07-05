<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Quotation</title>
    
    <link rel="shortcut icon" href="../../../img/TitleImage.png">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../../css/bootstrap.min.css">
    <link rel="stylesheet" href="../../../css/mdb.css">
    <link rel="stylesheet" type="text/css" href="../../../js/vendor/datatables/css/dataTables.bootstrap4.min.css"/>
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.4.0/css/buttons.dataTables.min.css" />
 
    
    <style type="text/css">
    .dropdown-content{
		height: 144px !important;
	}
    .hideButton{
		display: none !important;
	}
    .increaseWeight{
    	font-weight: 700 !important;
   	 	font-size: large;
	}
	#filterrow th {
	    padding: 0%;
	}
	th{
	  	padding:1%;
	}
	.hideElement{
    	display: none !important;
	}
	.right{
	 	text-align: right;
	}
	.righttxt{
		 text-align: right;
		 font-weight: 400;
	}
    </style>
    
	<script type="text/javascript">
	
		function RateChangeFunc(element)
		{
        	if ($(element).val() == "") {
        		$(element).val(parseFloat(0).toFixed(2));
        	} else {
        		$(element).val(parseFloat($(element).val()));
            	var productseg = $(element).attr('id');
            	var prodLength = productseg.length;
            	var product = productseg.substr(8,prodLength);

            	var table = document.getElementById('productTable');
            	var rowCount = table.rows.length;
            	
            	for(var i=1; i<rowCount; i++) {
            		var row = table.rows[i];
            		var a = $(row.cells[0]).html();
            		var idToCheck= $(a).attr('id');
            		if(idToCheck === product)
            		{
            			parseFloat($(row.cells[5].childNodes[0]).val()).toFixed(2);
            			$(row.cells[7]).html(parseFloat($(row.cells[5].childNodes[0]).val() * $(row.cells[6].childNodes[0]).val()).toFixed(2));
            		}
        		}
			
			}
		}
	
        function CheckInputStatusJob(element) {
        	if ($(element).val() == "") {
        		$(element).val(0);
        	} else {
        		$(element).val(parseFloat($(element).val()));
            	var productseg = $(element).attr('id');
            	var prodLength = productseg.length;
            	var product = productseg.substr(3,prodLength);
            	
            	var table = document.getElementById('productTable');
            	var rowCount = table.rows.length;

            	for(var i=1; i<rowCount; i++) {
            		var row = table.rows[i];
            		var a = $(row.cells[0]).html();
            		var idToCheck= $(a).attr('id');
            		if(idToCheck === product)
            		{
            			var qty = parseFloat($(row.cells[5].childNodes[0]).val());
                        amt = $(row.cells[6].childNodes[0]).val() * qty;		
                        $(row.cells[7]).html(amt.toFixed(2));
                        break;
                    }
            	}
               }
        	}
        
        function dropdwnChange(id,actId)
        {
        	var category = id.value;
        	var productseg = $(id).attr('id');
        	var prodLength = productseg.length;
        	var product = productseg.substr(3,prodLength);
			
        	var table = document.getElementById('productTable');
        	var rowCount = table.rows.length;
        	
        	for(var i=1; i<rowCount; i++) {
        		var row = table.rows[i];
        		var a = $(row.cells[0]).html();
        		var idToCheck= $(a).attr('id');

        		if(category == "other")
        		{
        			$('#ItemRate'+actId).removeAttr("ReadOnly");
        		}
        		else if(idToCheck==product)
        		{
        			var q = $(row.cells[5].childNodes[0]).val();
        			var getProductDetails = new XMLHttpRequest();
                	getProductDetails.open('GET','../../../GetSpecificProduct?ProductId='+product+'&categoryId='+category+'&qty='+q);
                	
                	getProductDetails.onload = function() {
                		if( getProductDetails.status <= 200 && getProductDetails.status <=400 ){
                			var priceDetails = JSON.parse(getProductDetails.responseText);
                			var rate1 = parseFloat(priceDetails.data[0].rate);
                			$(row.cells[6].childNodes[0]).prop("readonly",true);
                			$(row.cells[6].childNodes[0]).val(rate1.toFixed(2));
                	        var val = parseFloat($(row.cells[6].childNodes[0]).val() * $(row.cells[5].childNodes[0]).val());
                	        $(row.cells[7]).html(val.toFixed(2));
                	        var val1 = (parseFloat($(row.cells[7]).html()) * parseFloat(priceDetails.data[0].gst))/100;
                	        $(row.cells[8]).html(val1.toFixed(2));
		                    val2 = parseFloat($(row.cells[7]).html()) + parseFloat($(row.cells[8]).html());
                	        $(row.cells[9]).html(val2.toFixed(2));
                	        /* calculateAmountPayable(); */
                		}
                	};
                	getProductDetails.send();

                	getProductDetails.onerror = function() {
                		console.log("error");
                	} 
                	break;
        		}
        		
        	}
        }
        
        function checkImage(id,img,imgName)
        {
        	if(img == "1")
        	{
        		$('#blah'+id+'').attr('src', '../../../files/'+imgName);
        	} else{
        		$('#blah'+id+'').attr('src', '../../../Images/upload.png');
        	}
        }
        
        function showImg(img,imgName)
        {
        	if(img == "1")
        	{
        		$('#imgToShow').attr('src', '../../../files/'+imgName);
       		 	$('#AddNewImage').modal('show');
        	}
        }
        
        function clicked(msg)
        {
        	console.log(msg);
        }

    </script>
</head>
<body class="fixed-sn white-skin">
	<%@ include file="../../../Header.jsp" %>
	<main>
        <div class="container-fluid mb-4">
            <section id="projectInformation" class="">
                <div class="row">
                    <div class="col-md-12">      
                        <div class="card">
	                            <div class="card-body mx-4">
						        <h4 class="card-title"><a class="card-link text-right" onclick="$('#ProjectInfo').modal('show');"><i class="fa fa-info mr-2" aria-hidden="true"></i></a> Project Information</h4>
						        <br>
						        <input type="hidden" id="selectedProjectId" value="<%= request.getParameter("selectedProjectId")%>">
						        <input type="hidden" id="selectedQuotationId" value="<%= request.getParameter("qid")%>">
						        <input type="hidden" id="selectedProductId">
								<input type="hidden" id="compState" name="compState" value="<%= request.getParameter("s")%>">
					        	
					        	<div class="row">
			    					<!--First column-->
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="projectName" name="projectName" class="form-control validate capitalizeText" style="color:#2E2E2E;" disabled>
							                <label for="projectName" id="projectNameLbl" class="active disabled" style="color:#2E2E2E;">Project Name</label>
							            </div>
							        </div>
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="clientName" name="clientName" class="form-control validate capitalizeTex panelHeaderTitlet" style="color:#2E2E2E;" disabled>
							                <label for="clientName" id="clientNameLbl" class="active disabled" style="color:#2E2E2E;">Client Name</label>
							            </div>
							        </div>
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="architectCompany" name="architectCompany" class="form-control validate capitalizeText" style="color:#2E2E2E;" disabled>
							                <label for="architectCompany" id="architectCompanyLbl" class="active disabled" style="color:#2E2E2E;">Architect Company</label>
							            </div>
							        </div>
			    				</div>
			    				
			    				<div class="row" id="roomCard">
				                </div>
			    			</div>
			    		</div>
			    	</div>
			    </div>
			</section>
		</div>
		
		<div class="container-fluid mb-4" id="productInfo">
            <section>
			<div class="row">
				<div class="col-md-12">
					<div class="card">
	                    <div class="card-body mx-4">
						        <div class="row">
							        <div class="col-md-8">
								        <h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Product Information</h4>
							        </div>
							        <div class="col-md-4" style="padding-left: 31%;">
							        	<i class="fa fa-minus mr-2" aria-hidden="true" id="show" onclick="showFunc()"></i>
							        </div>
						        </div>
					        	<div id="productDiv">
										<div class="DataTable">
											<table id="datatables" class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
												<thead>
													<tr id="headerrow" class="mdb-color darken-1 text-white">
														<th>Action</th>
														<th>SKU Id</th>
														<th>Product Type</th>
														<th>Brand</th>
														<th>Description</th>
													</tr>
													<tr id="filterrow">
														<td></td>
														<th>SKU Id</th>
														<th>Product Type</th>
														<th>Brand</th>
														<th>Description</th>
													</tr>
												</thead>
											</table>
										</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
		
		<div class="container-fluid mb-4">
            <section>
			<div class="row">
				<div class="col-md-12">
					<div class="card">
	                    <div class="card-body mx-4">
						<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Product</h4>
						<div class="card-body" style="padding: 0%;">
							<div id="OrderDetails" class="">
								<div class="FormDiv ">
								<form action="" class="form form-horizontal" name="newOrderForm" id="newOrderForm">
										<div class="DataTable">
											<table id="productTable" class="table table-sm" style="margin: auto;margin-bottom: 2%" cellspacing="0" width="100%">
												<thead>
												<tr class="mdb-color darken-1 text-white">
													<th >Select</th>
											 		<th >Image</th>
											 		<th >Product Info</th>
											 		<th >Available Quantity</th>
											 		<th >Segment</th>
												    <th >Quantity</th>
											 		<th >Rate</th>
											 		<th >Amount</th>
											 		<th >Discount</th>
											  	</tr>
											  	</thead>
											  	<tbody id="productTableBody">
											  	</tbody>
										  	</table>
										</div>
						        	<div class="row" style="text-align: center;">
				    					<!--First column-->
								        <div class="col-md-2">
								            <div class="md-form">
								                <input type="number" id="installation" name="installation" class="form-control" value=0>
								                <label for="installation" id="installationLbl" class="">Installation</label>
								            </div>
								        </div>
								        <div class="col-md-2">
								            <div class="md-form">
								                <input type="number" id="transportation" name="transportation" class="form-control" value=0>
								                <label for="transportation" id="transportationLbl" class="" style="font-size: 87%;">Transportation</label>
								            </div>
								        </div>
								        <div class="col-md-2">
								            <div class="md-form">
								                <input type="number" id="packaging" name="packaging" class="form-control" value=0>
								                <label for="packaging" id="packagingLbl" class="">Packaging</label>
								            </div>
								        </div>
								        <div class="col-md-6" style="text-align: left;">
											<input type="hidden" id="dealerState" name="dealerState">
										  	<button type="button" id="DeleteProduct" class="btn btn-primary waves-effect">Delete</button>
										  	<button type="button" id="AddProduct" class="btn btn-outline-primary waves-effect">Submit</button>
										  	<button type="button" id="UpdateProduct" class="btn btn-outline-primary waves-effect hideButton">Update</button>
								        </div>
				    				</div>
								</form>
								<br/></div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
		</section>
		</div>
		
		<div class="modal fade" id="ProjectInfo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-info" role="document">
                        <div class="modal-content">
                            <div class="modal-header light-blue darken-3 white-text">
                                <h4 class="" id="heading lead">Project Details</h4>
                                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text">&times;</span></button>
                            </div>
                            <div class="modal-body">
                               <form action="" id="newElementForm" name="newElementForm">
                                <div class="row justify-content-md-center">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Project Name</span>
                                            <p class="mainContent" id="projectNameMod">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Client Name</span>
                                            <p class="mainContent" id="clientNameMod">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Architect Company</span>
                                            <p class="mainContent" id="architectCompanyMod">
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Client Contact Person</span>
                                            <p class="mainContent" id="clientContactPMod">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Architect</span>
                                            <p class="mainContent" id="architectMod">
                                        </div>
                                    </div>
									<div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Assist Architect</span>
                                            <p class="mainContent" id="assistArchitectMod">
                                        </div>
			                        </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <span class="headerDetails">Site Incharge</span>
                                            <p class="mainContent" id="siteInchargeMod">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <span class="headerDetails">Site Incharge No</span>
                                            <p class="mainContent" id="siteInchargeNoMod">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Electrician</span>
                                            <p class="mainContent" id="electricianMod">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Electrician No</span>
                                            <p class="mainContent" id="electricianNoMod">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Manager</span>
                                            <p class="mainContent" id="managerMod">
                                        </div>
                                    </div>
                                 </div>
                                 
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Overall Height</span>
                                            <p class="mainContent" id="overallHeightMod">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Area</span>
                                            <p class="mainContent" id="areaMod">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">No Of Room</span>
                                            <p class="mainContent" id="noOfRoomMod">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <span class="headerDetails">Category</span>
                                            <p class="mainContent" id="categoryMod">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <span class="headerDetails">Sub Category</span>
                                            <p class="mainContent" id="subCategoryMod">
                                        </div>
                                    </div>
                                </div>
                                    
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form">
                                            <span class="headerDetails">Site Address</span>
                                            <p class="mainContent" id="siteAddressMod">
                                        </div>
                                    </div>
                                </div>
                        </form>
                    </div>
                                
                </div>
                
            </div>
       </div>
		
		<div class="modal fade" id="RegisterNew" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-info" role="document">
                        <!--Content-->
                        <div class="modal-content">

                            <!--Header-->
                            <div class="modal-header light-blue darken-3 white-text">
                                <h4 class="" id="heading lead">Room Details</h4>
                                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text">&times;</span></button>
                            </div>
                            <!--Body-->
                            <div class="modal-body">
                               <form action="" id="newElementForm" name="newElementForm">
                               		<!-- Grid row -->
                                <div class="row justify-content-md-center">
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <span class="headerDetails">Room name</span>
                                            <p class="mainContent" id="roomName">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form">
                                            <span class="headerDetails">Electrician name</span>
                                            <p class="mainContent" id="electricianName">
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Size</span>
                                            <p class="mainContent" id="size">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Ceiling Depth</span>
                                            <p class="mainContent" id="ceilingDepth">
                                        </div>
                                    </div>
									<div class="col-md-4">
                                        <div class="md-form">
                                            <span class="headerDetails">Pics Taken Table</span>
                                            <p class="mainContent" id="picsTakenTable">
                                        </div>
			                        </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form">
                                            <span class="headerDetails">Recommendations Given</span>
                                            <p class="mainContent" id="recommendationsGiven">
                                        </div>
                                    </div>
                                </div>
                                <!-- Grid row -->
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form">
                                            <span class="headerDetails">Light Placements</span>
                                            <p class="mainContent" id="lightPlacements">
                                        </div>
                                    </div>
                                 </div>
                                 
                                <div class="row">
									<div class="col-md-12">
                                        <div class="md-form">
                                            <span class="headerDetails">Measurement Details</span>
                                            <p class="mainContent" id="measurementDetails">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form">
                                            <span class="headerDetails">Samples To Brought</span>
                                            <p class="mainContent" id="samplesToBrought">
                                        </div>
                                    </div>
                                </div>
                                    
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form">
                                            <span class="headerDetails">Samples Given</span>
                                            <p class="mainContent" id="samplesGiven">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
									<div class="col-md-12">
                                        <div class="md-form">
                                            <span class="headerDetails">Provision For Drivers</span>
                                            <p class="mainContent" id="provisionForDrivers">
                                        </div>
			                        </div>
                                </div>
                        </form>
                    </div>
                                
                </div>
                
            </div>
       </div>
       
	<div class="modal fade" id="AddNewImage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog cascading-modal" role="document" style="margin-top: 35px;">
			<div class="modal-content">
				<div class="modal-header light-blue darken-3 white-text">
					<h4 class="" id="NewElement-modal-title" style="padding-left: 125px;">Product Image</h4>
					<button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<input type="hidden" id="Success" value="<%= request.getParameter("val")%>">
					<input type="hidden" id="FileName" value="<%= request.getParameter("fileName")%>">
					<form action = "../../../UploadImages" method = "post" enctype = "multipart/form-data" id="LogInForm">
						<input type="hidden" id="ProductId" name="ProductId">
						<!-- <div class="z-depth-1-half mb-4 mx-auto" style="margin-bottom: 0px;padding: 20px; !important"> -->
							<img id="imgToShow" class="d-flex avatar-2 mb-md-0 mb-3 mx-auto" src="../../../Images/upload.png" alt="upload image" style="width: 250px;">
						<!-- </div> -->
					</form>
				</div>    
			</div>
		</div>
	</div>
		
	</main>
	
	<!-- DataTables.net -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    <!--Custom scripts-->
    
    <script type="text/javascript" src="../../../JavaScripts/Quotation/quotation.js"></script>
    <script type="text/javascript">
        $(function () {
            $('[data-toggle="popover"]').popover()
        });
    </script>
</body>
</html>