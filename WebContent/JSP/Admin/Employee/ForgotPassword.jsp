<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Forgot Password</title>
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
		  
		.picker__box select {
			 display: initial  !important;
		}
    </style>
</head>
<body class="fixed-sn white-skin">
	<%-- <%@ include file="../../../Header.jsp" %> --%>
	<main>
    <section id="GetInfoForm">
		<div class="modal-dialog" id="ChangePassword" class="">
				<p class="h5 text-center mb-4">Forgot Password</p>
				<div class="md-form">
					<input type="text" id="contactNo" name="contactNo" class="form-control">
					<label for="orangeForm-name">Contact Number</label>
				</div>
				<div class="md-form">
					<input type="text" id="email" name="email" class="form-control">
					<label id="passLbl" name="passLbl" for="orangeForm-email" class="disabled">Email ID</label>
				</div>
	
               <div class="mx-auto">
                   <div class="md-form">
                       <input placeholder="Select date" type="text" id="birthDate" name="birthDate" class="form-control datepicker">
                       <label id="birthDateLbl" for="birthDate">Select BirthDate</label>
                   </div>
               </div>
	
				<div class="md-form">
					<input type="text" id="userId" name="userId" class="form-control">
					<label id="userIdLbl" name="userIdLbl" for="userId" class="disabled">User ID</label>
				</div>
	
				<div class="text-center">
					<button class="btn btn-deep-orange" id="submitBtn" name="submitBtn">Submit</button>
					<button class="btn btn-deep-orange" id="closeBtn" name="closeBtn">Close</button>
				</div>
		</div>
	</section>
	
    <section id="ChangePasswordForm" class="HideThisElement">
		<div class="modal-dialog" id="ChangePassword">
			<form action="" id="LogInForm" name="LogInForm">
				<p class="h5 text-center mb-4">Enter New Password</p>
				<input type="hidden" id="employeeId" name="employeeId" class="form-control">
				<div class="md-form">
					<input type="password" id="pass" name="pass" class="form-control" >
					<label id="passLbl" name="passLbl" for="orangeForm-email" class="disabled">New Password</label>
				</div>
				<div class="md-form">
					<input type="password" id="cnfrmPass" name="cnfrmPass" class="form-control">
					<label id="cnfrmPassLbl" name="cnfrmPassLbl" for="orangeForm-pass" class="disabled">Confirm password</label>
				</div>
				<div class="text-center">
					<button class="btn btn-deep-orange" id="changePwdBtn" name="changePwdBtn">Submit</button>
				</div>
	
			</form>
		</div>
	</section>
	</main>
    <script src="../../../js/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="../../../js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="../../../js/bootstrap.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="../../../js/mdb.min.js"></script>
    
    <script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    
	<script type="text/javascript" src="../../../JavaScripts/Admin/Employee/ForgotPassword.js"></script>
	<script>
		$(document).ready(function() {
			$('select[name="datatables_length"]').material_select();
		});

		$(document).ready(function() {
			$('.mdb-select').material_select();
		});

		$('.datepicker').pickadate({
			  format: 'yyyy-mm-dd',
		});
	</script>
</body>
</html>