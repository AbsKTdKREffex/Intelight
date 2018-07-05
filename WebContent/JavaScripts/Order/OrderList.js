
$(document).ready(function(){
    if ($('#oid').val() != "null") {
    	window.location.href = 'order.jsp?oid='+$('#oid').val();
    }
	
    $('#datatables thead #filterrow th').each( function () {
    	var title = $(this).text();
        $(this).html( '<input type="text" style="font-size: 80%;padding:auto;text-align:center;width:80%;" placeholder="Search '+title+'" />' );
    });
	
    $("#datatables thead input").on('keyup change', function () {
        table.column($(this).parent().index() + ':visible')
            .search(this.value)
            .draw();
    });
    
	var table = $('#datatables').DataTable( {
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetUniqueOrder",
		"columns": [
        	 {
                 defaultContent: '<center><div class="fontElement"><i class="select_me fa fa-check fa-2x" id="select_me" aria-hidden="true"></i>'
             },
             { "data": "rowId" },
             { "data": "clientName" },
             { "data": "expectedDeilvery" },
             { "data": "deliveryAddressId" }
            
        ],
        fixedColumns: true
        
    });
	
    $('#datatables tbody').on( 'click', '.select_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	window.location.href = 'order.jsp?oid='+data.rowId;
    });
});