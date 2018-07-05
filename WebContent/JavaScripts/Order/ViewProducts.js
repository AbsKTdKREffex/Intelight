$(document).ready(function(){
    $('#orderItemTable thead #filterrow th').each( function () {
    	var title = $(this).text();
        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="Search '+title+'" />' );
    } );
	
    $("#orderItemTable thead input").on('keyup change', function () {
        table.column($(this).parent().index() + ':visible')
            .search(this.value)
            .draw();
    });
      
	var table = $('#orderItemTable').DataTable({
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetOrderList?oid="+$("#orderId").val()+'&type='+$("#type").val(),
		"columns": [
            { "data": "i" },
            { "data": "product_desc" },
            { "data": "quantity","sClass":"right" }, 
            { "data": "balanceQty" ,"sClass":"right"}, 
            { "data": "status_text","sClass":"center" }
        ],
        fixedColumns: true
    });
});