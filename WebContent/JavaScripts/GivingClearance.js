$(document).ready(function(){

    $('#datatables thead #filterrow th').each( function () {
    	var title = $(this).text();
        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
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
		"ajax": "GetEmployeeList2",
		"columns": [
        	 {
                 defaultContent: '<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
             },
            { "data": "employeeName" },
            { "data": "department_text" },
            { "data": "designation_text" },
            { "data": "userId" },
            { "data": "mobileNo" },
            { "data": "emailId" },
            { "data": "reporttext" },
            { "data": "status_text" }
            
        ],
        columnDefs: [
            { width: '25pc', targets: 1 },
            { width: '30pc', targets: 2 }
        ],
        fixedColumns: true
        
    });
	
    $('#datatables tbody').on( 'click', '.select_me', function () {
    	var permissionsArr=[];
    	var data = table.row( $(this).parents('tr') ).data();
        $('#employeeId').val(data.employeeId);
        
    	if (data.permissions !== "") {
    	    $.each((data.permissions).split(","), function(i,e){ 
    	    	permissionsArr.push(e);
    	    });
    	}
    	
	   for(var i=0; i<permissionsArr.length; i++){
    	$('input[type=checkbox]').each(function () {
    		$(this).val() == permissionsArr[i] ? $(this).prop('checked', true):"";
    	});
	   }
	    $('#EmployeeListTable').addClass('HideThisElement');
	    $('#CheckBoxForm').removeClass('HideThisElement');
    });
   
	$("input:checkbox").on('click', function() {
		var $box = $(this);
		if ($box.is(":checked")) {
			var group = "input:checkbox[id='" + $box.attr("name") + "']";
			$(group).prop("checked", true);
		}
		else
		{
			var group = "input:checkbox[id='" + $box.attr("name") + "']";
			var names = "input:checkbox[name='" + $box.attr("name") + "']";
			$(group).prop("checked", false);
			$('input[type=checkbox]').each(function () {
			    if(this.checked)
		    	{
			    	var $box = $(this);
					var group = "input:checkbox[id='" + $box.attr("name") + "']";
					$(group).prop("checked", true);
		    	}
			});
		}
	});

   $("#Submit").click(function() {
   	var url = "EmployeeUpdateServlet";
   	var selectedValues=[];
   	var sList = "";
   	
	$('input[type=checkbox]').each(function () {
	    this.checked ? selectedValues.push($(this).val()):"";
	});
	
   var formData="selectedEmployeeId="+$('#employeeId').val();
   
   for(var i=0; i<selectedValues.length; i++){
   	formData+="&permission["+i+"]="+selectedValues[i];
   }
   
   formData+="&count="+selectedValues.length+"&flag=assigningPer";
       
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: formData,
	               success: function(data)
	               {
	                   if (data == 1) {
	                	   document.getElementById("assignPermissionForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#assignPermissionModel').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							$("#permission").material_select("refresh" );
							toastr.success('Permissions Registered Successfully!');
						    $('#EmployeeListTable').removeClass('HideThisElement');
						    $('#CheckBoxForm').addClass('HideThisElement');
						} else{
								toastr.error('Failed to Registered Permissions!');
						}
	               }
	    	});
       return false;
   	});
});