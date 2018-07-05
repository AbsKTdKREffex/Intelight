<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Update Stock</title>
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
    
	<script type="text/javascript">
		function checkBoxEvent(element,qty,availQty)
		{
            if (null != element && true == element.checked) {
            	if(parseInt(availQty)>=parseInt(qty))
            	{
            		$('#CompletedOrder').attr("disabled",false);
            	}
            	else
            	{
            		$('#CompletedOrder').attr("disabled",true);
            	}
			}
		}
    </script>
</head>
<body class="fixed-sn white-skin">
	<%@ include file="../../../Header.jsp" %>
<main>
        <div class="container-fluid mb-5" id="order">
            <section>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <table id="datatables" class="table table-striped table-bordered nowrap">
                                    <thead>
                                        <tr id="headerrow"  class="mdb-color darken-3 text-white" >
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
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     	</div>
     	
		<div class="container-fluid mb-4 HideThisElement" id="orderItem">
          <section>
			<div class="row">
				<div class="col-md-12">

					<div class="card">
	                    <div class="card-body mx-4">
						<h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Product</h4>
						<div class="card-body">
							<div id="OrderDetails" class="">
								<div class="FormDiv ">
								<form action="" class="form form-horizontal" name="orderItemForm" id="orderItemForm">
                        			<input type="hidden" id="orderId" name="orderId">
									<table id="orderItemTable" class="table table-sm" style="width: 80%; margin: auto;margin-bottom: 2%" >
										<thead>
										<tr>
											<th >Select</th>
									 		<th >Product</th>
									 		<th >SKU ID</th>
									 		<th >Quantity</th>
										    <th >Available Stock</th>
									  	</tr>
									  	</thead>
									  	<tbody id="orderItemTableBody">
									  	</tbody>
								  	</table>
								  	<button type="button" id="CompletedOrder" class="btn btn-outline-primary waves-effect" disabled>Completed</button>
								  	<a href="StockOut.jsp" class="btn btn-outline-primary waves-effect">Close</a>
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
    <script type="text/javascript" src="../../../JavaScripts/Stock/StockOut.js"></script>
    <script type="text/javascript">
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