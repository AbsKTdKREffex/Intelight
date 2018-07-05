<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>View Products</title>
	
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
	
    <style type="text/css">
    	.right
    	{
    		text-align: right;
    	}
    	.center
    	{
    		text-align: center;
    	}
    </style>
</head>
<body class="fixed-sn white-skin">
    <%@ include file="../../../Header.jsp" %>
<main>
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
                       			<input type="hidden" id="orderId" name="orderId" value="<%=request.getParameter("oid")%>">
                       			<input type="hidden" id="type" value="<%=request.getParameter("type")%>">
								<table id="orderItemTable" class="table table-sm" style="width: 80%; margin: auto;margin-bottom: 2%" >
									<thead>
									<tr>
										<th >Sr No</th> 
								 		<th >Product</th>
								 		<th >Quantity</th>
								 		<th >Balance Quantity</th>
										<th >Status</th> 
								  	</tr>
								  	</thead>
								  	<tbody id="orderItemTableBody">
								  	</tbody>
							  	</table>
<!-- 							  	<button type="button" id="CompletedOrder" class="btn btn-outline-primary waves-effect">Completed</button>
 -->							  <!-- 	<a href="StockOut.jsp" class="btn btn-outline-primary waves-effect">Close</a> -->
							</form>
							<br/></div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	</section>
</main>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    <!--Custom scripts-->
    
    <script type="text/javascript" src="../../../JavaScripts/Order/ViewProducts.js"></script>
    
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