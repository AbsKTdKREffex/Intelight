<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Available Stock</title>
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
										  	<th>Sr No</th>
											<th>Product Description</th>
										  	<th>SKU ID</th>
										  	<th>Product Type</th>
										  	<th>Available Stock</th>
                                        </tr>
                                        <tr id="filterrow">
                                        	<td></td>
											<th>Product Description</th>
										  	<th>SKU ID</th>
										  	<th>Product Type</th>
										  	<th>Available Stock</th>
										</tr>
                                    </thead>
                                </table>
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
    <script type="text/javascript" src="../../../JavaScripts/Stock/AvailableStock.js"></script>
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