<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Quotation Preview</title>
    
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
		height: 108px !important;
	}
    </style>
    <script type="text/javascript">

    function calculateAmountPayable() {
    	
    	var table = document.getElementById('productTable');
    	var rowCount = table.rows.length;
    	var amt = 0;
    	var taxamt = 0;
    	var amtPayable = 0;
    	
    	for(var i=1; i<rowCount-1; i++) {
    		var row = table.rows[i];

    		amt += parseFloat($(row.cells[3]).html());
    		taxamt += parseFloat($(row.cells[4]).html());
    	}
    	amtPayable = amt + taxamt;
    	$('#orderTotalAmount').html(amt.toFixed(2));
    	$('#orderAmountPayable').html(amtPayable.toFixed(2));
    	$('#orderTaxAmount').html(taxamt.toFixed(2));
    }
    </script>
</head>
<body class="fixed-sn white-skin">
<%@ include file="../../../Header.jsp" %>
	<main>
        <div class="container-fluid mb-4">
			
            <!--Section: Basic examples-->
            <section id="projectInformation" class="">

                <div class="row">
                    
                    <div class="col-md-12">
                                                
                        <div class="card">
	                            <div class="card-body mx-4">
	                            <!--Title-->
						        <h4 class="card-title"><i class="fa fa-info mr-2" aria-hidden="true"></i> Quotation Information</h4>
						        <br>
						        <%-- <input type="hidden" id="selectedProjectId" value="<%= request.getParameter("selectedProjectId")%>"> --%>
						        <input type="hidden" id="selectedQuotationId" value="22558572">
					        	
					        	<div class="row">
			    					<!--First column-->
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="quotationId" name="quotationId" class="form-control validate capitalizeText" style="color:#2E2E2E;" disabled>
							                <label for="quotationId" id="quotationIdLbl" class="active disabled" style="color:#2E2E2E;">Quotation Id</label>
							            </div>
							        </div>
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="createdDate" name="createdDate" class="form-control validate capitalizeTex panelHeaderTitlet" style="color:#2E2E2E;" disabled>
							                <label for="createdDate" id="createdDateLbl" class="active disabled" style="color:#2E2E2E;">Created Date</label>
							            </div>
							        </div>
							        <div class="col-md-4">
							            <div class="md-form">
							                <input type="text" id="projectName" name="projectName" class="form-control validate capitalizeText" style="color:#2E2E2E;" disabled>
							                <label for="projectName" id="projectNameLbl" class="active disabled" style="color:#2E2E2E;">Project Name</label>
							            </div>
							        </div>
			    				</div>
			    				
			    				<div class="card-body">
								<div id="OrderDetails" class="">
								<div class="FormDiv ">
								<form action="" class="form form-horizontal" name="newOrderForm" id="newOrderForm">
									<table id="productTable" class="table">
										<thead>
										<tr>
									 		<th style="width: 20%;">Product Info</th>
										    <th >Quantity</th>
									 		<th >Rate</th>
									 		<th >Amount</th>
										    <th >Tax</th>
										    <th >Total</th>
									  	</tr>
									  	</thead>
									  	<tbody id="productTableBody">
									  	</tbody>
									  	<tfoot id="productTableFoot">
									  	<tr>
											<td style="text-align: center">Grand Total</td>
									 		<td></td>
									 		<td></td>
									 		<td id="orderTotalAmount" style="text-align: center"></td>
										    <td id="orderTaxAmount" style="text-align: center"></td>
										    <th id="orderAmountPayable" style="text-align: center"></th>
										</tr>
									  	</tfoot>
								  	</table>
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
		
		<div class="container-fluid mb-4">
            <!--Section: Basic examples-->
            <section>

			
		</section>
		</div>
	</main>
	<!-- DataTables.net -->
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    <!--Custom scripts-->
    <script type="text/javascript" src="../../../JavaScripts/Quotation/quotationPreview.js"></script>
</body>
</html>