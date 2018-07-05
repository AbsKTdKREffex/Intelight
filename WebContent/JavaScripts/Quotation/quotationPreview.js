
$(document).ready(function(){
	var total;
	var getProjectDetails = new XMLHttpRequest();
	getProjectDetails.open('GET','../../../GetQuotationDetails?selectedQuotationId='+$('#selectedQuotationId').val());

	getProjectDetails.onload = function() {
		
		if( getProjectDetails.status <= 200 && getProjectDetails.status <=400 ){
			var projDetails = JSON.parse(getProjectDetails.responseText);

			$('#quotationId').val(projDetails.data[0].quotationId);
			$('#quotationIdLbl').addClass("active");
			$('#createdDate').val(projDetails.data[0].createdDate);
			$('#createdDateLbl').addClass("active");
			$('#projectName').val(projDetails.data[0].projectName);
			$('#projectNameLbl').addClass("active");
			
			for(i=0;i<projDetails.data.length;i++)
			{
				var table1 = document.getElementById('productTable');
				var amount = projDetails.data[i].quantity * projDetails.data[i].rate;
				var taxAmount = amount * 0.1;
				var totalAmount = taxAmount + amount;
				var newHtml = '<tr>'+
				'<td style="padding-top: 15px; text-align: center;">'+projDetails.data[i].description+'</td>'+
				'<td style="text-align: center">'+projDetails.data[i].quantity+'</td>'+
				'<td style="padding-top: 15px; text-align: center;">'+projDetails.data[i].rate+'</td>'+
				'<td style="padding-top: 15px; text-align: center;">'+amount+'</td>'+
				'<td style="padding-top: 15px; text-align: center;">'+taxAmount+'</td>'+
				'<td style="padding-top: 15px; text-align: center;">'+totalAmount+'</td>'+
				'</tr>';
				document.querySelector('#productTableBody').insertAdjacentHTML('beforeend', newHtml);
				}
			calculateAmountPayable();
			
			}else {
			//to do on error while loading json page
		}
	};
	getProjectDetails.send();
	
	var table = $('#datatables').DataTable({
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetProductList",
		"columns": [
        	 {
             	className: "center",
                 defaultContent: '<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i></center>'
             },
             { "data": "brand_desc" },
             { "data": "productName" },
             { "data": "nature" },
             { "data": "driver" }
            
        ],
        fixedColumns: true 
    });
	
});