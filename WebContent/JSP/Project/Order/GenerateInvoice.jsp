<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Generate Invoice</title>

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
 
    <!-- Your custom styles (optional) -->
    <link href="../../../css/style.css" rel="stylesheet">

	<style type="text/css">
		.hidefa{
		display:none !important;
		}
	</style>
	
</head>
<body class="fixed-sn white-skin">

	<!--Main Navigation-->
    <%@ include file="../../../Header.jsp" %>
    <main>
        <div class="container-fluid mb-5">

            <!--Section: Basic examples-->
            <section id="ProjectListTable" class="">

                <div class="row">
                    
                    <div class="col-md-12">
                        <%-- <input type="hidden" id="selectedProjectIdPassedValue" value="<%= request.getParameter("selectedProjectId")%>"> --%>
                        <input type="hidden" id="projectId" value="<%= request.getParameter("selectedProjectId")%>">
                        <div class="card">
                            <div class="card-body">
                                <table id="datatables" class="table table-striped table-bordered nowrap">
                                    <thead>
                                        <tr>
                                            <th>Action</th>
										  	<th>Order Id</th>
										  	<th>Project Name</th>
										  	<th>Expected Delivery</th>
										  	<th>Delivery Address</th>
                                        </tr>
                                        <tr id="filterrow">
	  										<td></td>
										  	<th>Order Id</th>
										  	<th>Project Name</th>
										  	<th>Expected Delivery</th>
										  	<th>Delivery Address</th>
										</tr>
                                    </thead>
									<tbody id="orderTableBody">
									</tbody>
                                </table>
								<button type="button" id="AddOrder" class="btn btn-outline-primary waves-effect">Place Order</button>
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
									 		<th >Segment</th>
										    <th >Quantity</th>
									 		<th >Rate</th>
									 		<th >Amount</th>
									  	</tr>
									  	</thead>
									  	<tbody id="productTableBody">
									  	</tbody>
								  	</table>
									<input type="hidden" id="dealerState" name="dealerState">
								  	<button type="button" id="DeleteProduct" class="btn btn-primary waves-effect">Delete</button>
								  	<button type="button" id="AddOrder" class="btn btn-outline-primary waves-effect">Place Order</button>
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
    <!-- DataTables.net -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    <!--Custom scripts-->
    
    <script type="text/javascript" src="../../../JavaScripts/Order/GenerateInvoice.js"></script>
    
    <script>
        
        $(document).ready(function() {
            $('#datatables').DataTable();
        });
        // Material Select Initialization
        $(document).ready(function () {
            $('select[name="datatables_length"]').material_select();
        });
		
    </script>
</body>
</html>