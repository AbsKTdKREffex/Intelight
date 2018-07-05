
$(document).ready(function(){
	if($('#Success').val()=="1")
	{
		toastr.success( $('#FileName').val()+' Uploaded Successfully!');
	}
	else if ($('#Success').val()=="0") {
		toastr.error('Failed to Uploade Image!');
	}
	
	// for DataTable
	
	// Setup - add a text input to each footer cell
    $('#datatables thead #filterrow th').each( function () {
    	var title = $(this).text();
        $(this).html( '<input type="text" style="font-size: 80%;padding:auto;text-align:center;width:80%;" placeholder="Search '+title+'" />' );
    } );
	
    
 // Apply the search
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
		"ajax": "../../../GetNullImgList",
		"columns": [
        	 {
                 defaultContent: '<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
             },
             { "data": "brand_desc" },
             { "data": "productName" },
             { "data": "nature" },
             { "data": "driver" }
            
        ],
        fixedColumns: true
        
    } );
	
    $('#datatables tbody').on( 'click', '.select_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
        document.querySelector('#ProductId').value = data.productId;
    	$('#AddNewImage').modal('show');
    } );
});
	