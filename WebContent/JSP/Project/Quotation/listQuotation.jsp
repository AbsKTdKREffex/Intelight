<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Quotation List</title>

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
    </style>
    <style type="text/css">
td.right {
	text-align: right;
	padding-right:10px !important;	
}
td.left {
	text-align: left;
	padding-left:10px !important;
}
td.center {
	text-align: center;
}
</style>
</head>
<body class="fixed-sn white-skin">
	<%@ include file="../../../Header.jsp" %>
	<main>
	<div class="container-fluid mb-5">
		<section>
			<div class="row">
				<div class="col-md-12">
					<div class="card">
					<input type="hidden" id="qcid" value="<%=request.getParameter("cid")==null? "": request.getParameter("cid")%>">
						<div class="card-body">
							<table id="qdatatables" class="table table-striped table-bordered nowrap">
								<thead>
									<tr id="headerrow"  class="mdb-color darken-3 text-white" >
										<th>Action</th>
										<th>Quotation Id</th>
										<th>Project Name</th>
										<th>Client Name</th>
										<th>Architect Company</th>
										<th>Quotation Date</th>
									</tr>
									<tr id="filterrow">
										<td></td>
										<th>Quotation Id</th>
										<th>Project Name</th>
										<th>Client Name</th>
										<th>Architect Company</th>
										<th>Quotation Date</th>
									</tr>
								</thead>
								<tbody></tbody>
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
	<script type="text/javascript" src="../../../JavaScripts/Quotation/quotationList.js"></script>
	<script>
        
        $(document).ready(function() {
            $('#datatables').DataTable();
        });
		
        
        // Material Select Initialization
        $(document).ready(function () {
            $('select[name="datatables_length"]').material_select();
        });
		
     	// Material Select Initialization
        $(document).ready(function () {
            $('.mdb-select').material_select();
        });
     	
    </script>
</body>
</html>