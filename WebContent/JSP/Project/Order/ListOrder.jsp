<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Order List</title>
	
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
    <!--Main Navigation-->
	<!--Main layout-->
    <main>
        <div class="container-fluid mb-5">

            <!--Section: Basic examples-->
            <section id="ProjectListTable" class="">
                <div class="row">
                    <div class="col-md-12">
						<input type="hidden" id="oid" value="<%= request.getParameter("oid")%>">
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
  </main>
    <!-- DataTables.net -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    
    <script type="text/javascript" src="../../../JavaScripts/Order/OrderList.js"></script>
    
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