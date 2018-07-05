<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>List Quotation</title>

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
.logo{
	max-width: 40%;
}
label{
	font-size: 13px;
	margin-bottom: 0px !important;
}
#address{
    padding-left: 25%;
}
#pimg{
	text-align:center;
	width: 10%;
}
table.table td{
	padding-top:0px !important;
	padding-bottom:0px !important; 
	padding-left:10px !important;
}
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
th{
	font-weight: 700 !important;
}
td{
	font-weight: 400 !important;
}
</style>
</head>
<body class="fixed-sn white-skin">
<%@ include file="../../../Header.jsp" %>

 <section class="form-elegant" style="margin: 5% 12%" >
    <!--Form without header-->
    
     <div class="card">
     <div class="row">
	     <button class="btn btn-primary" style="margin-left: 85%;width: 11%;margin-top: 1%;" id="create_pdf">Print</button>
     </div>
     <div class="row">
     	 <h5 style="margin-left: 43%;font-weight: 500;">Quotation</h5>
     </div>
     <form class="form" style="max-width: none; width: 1005px; ">  
        <div class="card-body mx-4">
			<div class="col-md-12 row">
				<div class="col-md-6" id="clogo" style="padding-top: 2%;padding-left: 2%;background-repeat: no-repeat;">
                    <img src="../../../img/CompanyLogo.png" style="width: 310px;height: 150px;" class="CompanyLogo" alt="Company Logo">
				</div>
				<div class="col-md-6" id="address">
				<label id="cname"></label><br>
				<label id="caddr"></label><br>
				<label id="ccity"></label><br>
				<label id="ccontact"></label><label id="altcontactc"></label><br>
				<label id="cemail"></label> <br>
				</div>
			</div>
			<hr>
			<div class="col-md-12 row">
				<div class="col-md-6">
					To,<br>
					<label id="clientName"></label><br>
					<label id="projectName"></label><br>
					<!-- <label id="customerState"></label><br> -->
				</div>
				<div class="col-md-6" id="address">
				<label><B>Quotation Id : </B></label> <label id="qId"><%= request.getParameter("qid")%></label><br>
				<label><B>Date : </B></label> <label id="qDate"></label>
				</div>
			</div>
			<hr>
			<div class="col-md-12">
				<div class="DataTable">
					<input type="hidden" id="qid" name="qid" value="<%= request.getParameter("qid")%>">
					<input type="hidden" id="cid" name="cid">
					<input type="hidden" id="revisedFrom" name="revisedFrom" value="<%= request.getParameter("rF")%>">
					<!-- <input type="hidden" id="sameState" name="sameState"> -->
                    <table id="quotationdatatables" class="display compact table-bordered" cellspacing="0" width="103%">
                        <thead>
                            <tr id="headerrow" >
                                <th>SrNo</th>
                                <th>ProductInfo</th>
                                <th id="pimg">ProductImage</th>
                                <th>HSN</th>
                                <th>Quantity</th>
                                <th>Rate</th>
                                <th>Tax</th>
                                <th>Discount</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody id="quotationbody"></tbody>
                        <tfoot id="quotationfoot">
                        	<tr>
                        		<td colspan="8" style="text-align: right">Total Amount</td>
                        		<td id="totalamt" class='right'></td>
                        	</tr>
                        	<tr>
                        		<td colspan="8" style="text-align: right">Total Discount</td>
                        		<td id="totaldscnt" class='right'></td>
                        	</tr>
                        	<tr>
                        		<td colspan="8" style="text-align: right">Total Amount After Discount</td>
                        		<td id="totalamtaftrdsnct" class='right'></td>
                        	</tr>
                        </tfoot>
                    </table>
                </div>
			</div>
		</div>
		 </form>
     <div class="row">
	     <div class="col-md-3"></div>
	     <div class="col-md-6">
		     <center><button class="btn btn-primary" style="width: 23%;" id="revise">Revise</button>
		     <button class="btn btn-primary" style="width: 23%;" id="order">Order</button>
		     <button class="btn btn-primary" style="width: 23%; display:none;" id="">ABC</button>
	     </div>
	     <div class="col-md-3"></div>
	     
	     <!-- <button class="btn btn-primary"style="width: 11%;margin-top: 1%;" id="goToNew">Go To New</button> -->
     </div><br>
    </div>
</section>
<script type="text/javascript" src="../../../JavaScripts/Quotation/viewQuotation.js"></script>
<!-- <script type="text/javascript" src="../../../JavaScripts/moment.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"></script>

<script type="text/javascript" src="../../../js/vendor/datatables/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="../../../js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
<script>
        
        $(document).ready(function() {
            $('#datatables').DataTable();
        });
		
        $(document).ready(function () {
            $('select[name="datatables_length"]').material_select();
        });
		
        $(document).ready(function () {
            $('.mdb-select').material_select();
        });
     	
    </script>
    <script>  
    (function () {  
        var  
         form = $('.form'),  
         cache_width = form.width(),  
         a4 = [595.28, 841.89]; // for a4 size paper width and height  
        
        $('#create_pdf').on('click', function () {  
            $('body').scrollTop(0);  
            createPDF();  
        });
        //create pdf  
        function createPDF() {  
            getCanvas().then(function (canvas) {  
                var  
                 img = canvas.toDataURL("image/png"),  
                 doc = new jsPDF({  
                     unit: 'px',  
                     format: 'a4'  
                 });  
                doc.addImage(img, 'JPEG', 20, 20);  
                doc.save($('#qid').val()+'.pdf');  
                form.width(cache_width);  
            });  
        }  
  
        // create canvas object  
        function getCanvas() {  
            form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');  
            return html2canvas(form, {  
                imageTimeout: 2000,  
                removeContainer: true  
            });  
        }  
  
    }());  
</script>  
<script>
    (function ($) {  
        $.fn.html2canvas = function (options) {  
            var date = new Date(),  
            $message = null,  
            timeoutTimer = false,  
            timer = date.getTime();  
            html2canvas.logging = options && options.logging;  
            html2canvas.Preload(this[0], $.extend({  
                complete: function (images) {  
                    var queue = html2canvas.Parse(this[0], images, options),  
                    $canvas = $(html2canvas.Renderer(queue, options)),  
                    finishTime = new Date();  
  
                    $canvas.css({ position: 'absolute', left: 0, top: 0 }).appendTo(document.body);  
                    $canvas.siblings().toggle();  
  
                    $(window).click(function () {  
                        if (!$canvas.is(':visible')) {  
                            $canvas.toggle().siblings().toggle();  
                            throwMessage("Canvas Render visible");  
                        } else {  
                            $canvas.siblings().toggle();  
                            $canvas.toggle();  
                            throwMessage("Canvas Render hidden");  
                        }  
                    });  
                    throwMessage('Screenshot created in ' + ((finishTime.getTime() - timer) / 1000) + " seconds<br />", 4000);  
                }  
            }, options));  
  
            function throwMessage(msg, duration) {  
                window.clearTimeout(timeoutTimer);  
                timeoutTimer = window.setTimeout(function () {  
                    $message.fadeOut(function () {  
                        $message.remove();  
                    });  
                }, duration || 2000);  
                if ($message)  
                    $message.remove();  
                $message = $('<div ></div>').html(msg).css({  
                    margin: 0,  
                    padding: 10,  
                    background: "#000",  
                    opacity: 0.7,  
                    position: "fixed",  
                    top: 10,  
                    right: 10,  
                    fontFamily: 'Tahoma',  
                    color: '#fff',  
                    fontSize: 12,  
                    borderRadius: 12,  
                    width: 'auto',  
                    height: 'auto',  
                    textAlign: 'center',  
                    textDecoration: 'none'  
                }).hide().fadeIn().appendTo('body');  
            }  
        };  
    })(jQuery);  
  
</script>
</body>
</html>