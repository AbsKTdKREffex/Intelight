$(document).ready(function(){
//	var quotationData;
//	$.ajax({
//        type: "GET",
//        url: "../../../GetCompanyInfo",
//        success: function(data)
//        {
//        	companyData=data;
//        }
//	});
	$('#qdatatables thead #filterrow th').each( function () {
    	var title = $(this).text();
    	if(title!="")
        $(this).html( '<input type="text" style="font-size: 80%;padding:auto;text-align:center;width:80%;" placeholder="Search '+title+'" />' );
    } );
	
    
 // Apply the search
    $("#qdatatables thead input").on('keyup change', function () {
        table.column($(this).parent().index() + ':visible')
            .search(this.value)
            .draw();
    });
    
	var table = $('#qdatatables').DataTable({
		dom: 'Bfrtip',
		buttons: [
            {
                text: 'New Quotation',
                action: function ( e, dt, node, config ) {
                	loadBlankform();
                }
            }
        ],
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetQuotationList",
		"columns": [
			{
             	className: "center",
                 defaultContent: '<center><i class="select_me fa fa-eye fa-2x" aria-hidden="true"></i></center>'
             },
             { "data": "quotationId"},
             { "data": "projectName"},
             { "data": "clientCompany"},
             { "data": "ArchitectCompany"},
             { "data": "createdOn" }
            
        ],
        fixedColumns: true   
    });  
	
	$('#qdatatables tbody').on( 'click', '.select_me', function () {
    	var table1 = document.getElementById('qdatatables');
    	var data = table.row( $(this).parents('tr') ).data();
    	window.location.href = 'ViewQuotation.jsp?qid='+data.quotationId+'&rF='+data.revisedFrom;
	});
	
	function loadBlankform(){
		window.location.href = '../ProjectInfo/project.jsp?val=2';	
	}
});