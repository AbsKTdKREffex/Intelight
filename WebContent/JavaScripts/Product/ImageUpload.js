$(document).ready(function(){
	var generator = new IDGenerator();
	
	if($('#Success').val()=="1")
	{
		toastr.success('Image Uploaded Successfully!');
	}
	else if($('#Success').val()=="0")
	{
    	toastr.error('Failed to Upload Image!');
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
		"ajax": "../../../GetProductList?for=imgUpload",
		"columns": [
        	 {
                 defaultContent: '<center><i class="upload fa fa-image fa-2x" aria-hidden="true"></i>'
             },
             { "data": "skuId" },
             { "data": "brand_desc" },
             { "data": "product_desc" }
            
        ],
        fixedColumns: true
    });
	
    $('#datatables tbody').on( 'click', '.upload', function () {
    	var data = table.row( $(this).parents('tr') ).data();
        document.querySelector('#ProductId').value = data.productId;
    	if(data.imgUploaded == "1")
    	{
    		document.getElementById('NewElement-modal-title').innerHTML="Product Image";
    		document.getElementById('imgsnd').innerHTML = 'Replace';
    		$('#blah').attr('src', '../../../files/'+data.uploadedImgName);
    	} else{
    		document.getElementById('NewElement-modal-title').innerHTML="Add Product Image";
    		document.getElementById('imgsnd').innerHTML = 'Upload';
    		$('#imgsnd').removeClass('HideThisElement');
    		$('#choseFle').removeClass("disabled");
    		$('#blah').attr('src', '../../../Images/upload.png');
    	}
    	$('#AddNewImage').modal('show');
    });
});