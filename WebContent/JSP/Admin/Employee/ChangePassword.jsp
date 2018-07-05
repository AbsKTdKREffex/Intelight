<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Change Password</title>
<!-- Font Awesome -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- Bootstrap core CSS -->
<link rel="stylesheet" href="../../../css/bootstrap.min.css">
<!-- Material Design Bootstrap -->
<link rel="stylesheet" href="../../../css/mdb.css">
<!-- DataTables.net -->
<link rel="stylesheet" type="text/css" href="../../../js/vendor/datatables/css/dataTables.bootstrap4.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.4.0/css/buttons.dataTables.min.css" />

 
    <!-- Your custom styles (optional) -->
    <style>
		.companyLogo{
			width: 100pt;
			margin-left:5px;
			}
		.edit_me,.select_me,.delete_me{
			width: 12pt;
			margin-right: 3%;
			cursor: pointer;
		}
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
        .HideThisElement{
  			display: none
		}
        $('.datepicker').pickadate({
  			editable: true
		})
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
    </style>
</head>
<body class="fixed-sn white-skin">
	<%@ include file="../../../Header.jsp" %>
	<main> <!--Section: Basic examples-->
	<div class="modal-dialog" id="ChangePassword">

		<!--Form without header-->
		<form action="" id="LogInForm" name="LogInForm">
			<p class="h5 text-center mb-4">Change Password</p>
			<input type="hidden" id="cuntPassSession" name="cuntPassSession" class="form-control" value="${password}">

			<div class="md-form">
				<input type="password" id="cruntPass" name="cruntPass" class="form-control">
				<label for="orangeForm-name">Current Password</label>
			</div>
			<div class="md-form">
				<input type="password" id="pass" name="pass" class="form-control" disabled> <label
					id="passLbl" name="passLbl" for="orangeForm-email" class="disabled">New Password</label>
			</div>

			<div class="md-form">
				<input type="password" id="cnfrmPass" name="cnfrmPass" class="form-control" disabled>
				<label id="cnfrmPassLbl" name="cnfrmPassLbl" for="orangeForm-pass" class="disabled">Confirm password</label>
			</div>

			<div class="text-center">
				<button class="btn btn-deep-orange" id="changeBtn" name="changeBtn" disabled>Change</button>
			</div>

		</form>
	</div>
	</main>
	<script type="text/javascript"
		src="../../../JavaScripts/Admin/Employee/ChangePassword.js"></script>
	<script>
	
		$(document).ready(function() {
			$('select[name="datatables_length"]').material_select();
		});

		$(document).ready(function() {
			$('.mdb-select').material_select();
		});

		$('.datepicker').pickadate();
		
	</script>
</body>
</html>