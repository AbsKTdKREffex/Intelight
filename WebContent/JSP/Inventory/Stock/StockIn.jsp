<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Add Stock</title>
    
    <link rel="shortcut icon" href="../../../img/TitleImage.png">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="../../../css/bootstrap.min.css">
    <!-- Material Design Bootstrap -->
    <link rel="stylesheet" href="../../../css/mdb.css">
    <!-- DataTables.net -->
    <link rel="stylesheet" type="text/css" href="../../../js/vendor/datatables/css/dataTables.bootstrap4.min.css"/>
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.4.0/css/buttons.dataTables.min.css" />
 
    <style type="text/css">
    .dropdown-content{
		height: 144px !important;
	}
    .increaseWeight{
    	font-weight: 700 !important;
   	 	font-size: large;
	}
	/* #modeOfPay {
	    height: auto !important;
	} */
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
	
        
        function checkImage(id,img,imgName)
        {
        	if(img == "1")
        	{
        		$('#blah'+id+'').attr('src', '../../../files/'+imgName);
        	} else{
        		$('#blah'+id+'').attr('src', '../../../Images/upload.png');
        	}
        }

    </script>
</head>
<body class="fixed-sn white-skin">
	<%@ include file="../../../Header.jsp" %>
<main>
		<%-- <div class="container-fluid mb-4" id="Information">
            <!--Section: Basic examples-->
            <section>

			<div class="row">

				<div class="col-md-12">

					<div class="card">
            <section class="">

                <div class="row">
                    
                    <div class="col-md-12">
                        <form id="otherInfo" name = "otherInfo">            
                        <div class="card">
                            <div class="card-body mx-4">
                            <!--Title-->
					        <h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i>Enter Information</h4>
					        <br>
					        <input type="hidden" id="selectedProjectId" value="<%= request.getParameter("selectedProjectId")%>">
					        <div class="row">
							        <div class="col-md-6">
							            <div class="md-form">
							                <input type="text" id="vendorName" name="vendorName" class="form-control">
							                <label for="vendorName" id="vendorNameLbl" class="active">Vendor Name</label>
							            </div>
							        </div>
							        <div class="col-md-6">
							            <div class="md-form">
							                <input type="text" id="receiptNo" name="receiptNo" class="form-control">
							                <label for="receiptNo" id="receiptNoLbl" class="active">Receipt No</label>
							            </div>
							        </div>
			    				</div>
                            </div>
                        </div>
						</form>
                    </div>

                </div>

            </section>
					</div>
				</div>
			</div>
		</section>
		</div> 
		
		<div class="container-fluid mb-4" id="productInfo">
            <!--Section: Basic examples-->
            <section>

			<div class="row">

				<div class="col-md-12">

					<div class="card">
	                    <div class="card-body mx-4">
						<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Product Information</h4>
						<div class="card-body">
							<div class="DataTable">
								<table id="datatables"
									class="display compact table-bordered" cellspacing="0" width="100%">
									<thead>
										<tr id="headerrow">
											<th>Action</th>
											<th>Product Description</th>
											<th>Brand</th>
											<th>Product Name</th>
											<th>Nature</th>
											<th>Driver</th>
										</tr>
										<tr id="filterrow">
											<td></td>
											<th>Product Description</th>
											<th>Brand</th>
											<th>Product Name</th>
											<th>Nature</th>
											<th>Driver</th>
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
		
		<div class="container-fluid mb-4" id="productList">
            <!--Section: Basic examples-->
            <section>

			<div class="row">

				<div class="col-md-12">

					<div class="card">
	                    <div class="card-body mx-4">
						<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Product</h4>
						<div class="card-body">
							<div id="OrderDetails" class="">
								<div class="FormDiv ">
								<form action="" class="form form-horizontal" name="newOrderForm" id="newOrderForm">
									<table id="productTable" class="table table-sm" style="width: 80%; margin: auto;margin-bottom: 2%" >
										<thead>
										<tr>
											<th >Select</th>
									 		<th >Image</th>
									 		<th >Product Info</th>
									 		<th >SKU ID</th>
										    <th >Quantity</th>
									  	</tr>
									  	</thead>
									  	<tbody id="productTableBody">
									  	</tbody>
								  	</table>
								  	<button type="button" id="DeleteProduct" class="btn btn-primary waves-effect">Delete</button>
								  	<button type="button" id="AddOrder" class="btn btn-outline-primary waves-effect">Update Stock</button>
								</form>
								<br/></div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
		</section>
		</div>--%>
     	
		<div class="container-fluid mb-4">
          <section>
			<div class="row">
				<div class="col-md-12">

					<div class="card">
	                    <div class="card-body mx-4">
						<h4 class="card-title" id="productTitle"><i class="fa fa-info mr-2" aria-hidden="true"></i> Product</h4>
						<div class="card-body">
							<div id="OrderDetails" class="">
								<div class="FormDiv ">
								<form action="" class="form form-horizontal" name="purchaseOrderItemForm" id="purchaseOrderItemForm">
                        			<input type="hidden" id="purchaseOrderId" name="purchaseOrderId">
									<table id="purchaseOrderItemTable" class="table table-sm" style="width: 80%; margin: auto;margin-bottom: 2%" >
										<thead>
										<tr>
											<th >Select</th>
									 		<th >Created On</th>
									 		<th >Product Name</th>
									 		<th >Quantity</th>
									 		<th >Purchase Order Id</th>
										    <th >Vendor Name</th>
									  	</tr>
									  	</thead>
									  	<tbody id="purchaseOrderItemTableBody">
									  	</tbody>
								  	</table>
								  	<button type="button" id="CompletedOrder" class="btn btn-outline-primary waves-effect">Completed</button>
								  	<!-- <a href="StockOut.jsp" class="btn btn-outline-primary waves-effect">Close</a> -->
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
		
	</main>
	
	<script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    <!--Custom scripts-->
    
    <script type="text/javascript" src="../../../JavaScripts/Stock/StockIn.js"></script>
    <script type="text/javascript">
	    $('.datepicker').pickadate();
    </script>
</body>
</html>