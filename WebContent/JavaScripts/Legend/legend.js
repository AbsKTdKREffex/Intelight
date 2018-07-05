/*
 For DataTable
 	
 
 Created By : Aditya
 Designation : Analyst (IT)
 Organization : Effex Business Solutions Pvt Ltd
 Date : 04 Jul 2017
 Version : 1.0
 */

$(document).ready(function(){
	dropdownFunction();
	var generator = new IDGenerator();
	
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
		dom: 'Bfrtip',
        buttons: [
            {
                text: 'New Legend',
                action: function ( dt, node, config ) {
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
		"ajax": "../../../GetLegendList",
		"columns": [
        	 {
                 defaultContent:'<center><i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
            { "data": "legendGroup" },
            { "data": "category" },
            { "data": "subCategory" },
            { "data": "description" }
        ]
        
    } );
	
    $('#datatables tbody').on( 'click', '.edit_me', function () {

    	var data = table.row( $(this).parents('tr') ).data();
    		document.getElementById("newClientForm").reset();
    		document.querySelector('#selectedLegendId').value = data.rowid;
    		document.querySelector('#NewElement-modal-title').innerHTML = 'Update Legend Details';
            $("#alertMessage").addClass("HideThisElement");
            $("#errorMessage").addClass("HideThisElement");
            if (data.legendGroup  !== "") {
            $('#legendGroupDD').val(data.legendGroup).material_select("refresh");
            $('#legendGroup').val(data.legendGroup);
    		$('#legendGroupLbl').addClass("active");
            $("#legendGroup").addClass("HideThisElement");
            $("#legendGroupLbl").addClass("HideThisElement");
   		 	}
   		 if (data.category  !== "") {
   			$('#categoryDD').val(data.category).material_select("refresh");
   			$('#category').val(data.category);
   			$('#categoryLbl').addClass("active");
            $("#category").addClass("HideThisElement");
            $("#categoryLbl").addClass("HideThisElement");
   		 	}
   		 if (data.subCategory  !== "") {
   			$('#subCategoryDD').val(data.subCategory).material_select("refresh");
   			$('#subCategory').val(data.subCategory);
   			$('#subCategoryLbl').addClass("active");
            $("#subCategory").addClass("HideThisElement");
            $("#subCategoryLbl").addClass("HideThisElement");
   		 	}
   		 if (data.description  !== "") {
   			$('#description').val(data.description);
   			$('#descriptionLbl').addClass("active");
   		 	}
   		 
         $("#SubmitButtonRegister").addClass("HideThisElement");
         $("#SubmitButtonUpdate").removeClass("HideThisElement");
        $('#RegisterNewClient').modal('show');
    } );
    
    $('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	document.querySelector('#DeleteEmpId').value = data.rowid;
    	$('#centralModalDangerDemo').modal('show');
    });
    
    function dropdownFunction(){
    var ourRequest1 = new XMLHttpRequest();
    var data1 = [];
    ourRequest1.open('GET', '../../../GetUniqueLegnds');
    ourRequest1.onload = function() {
      if (ourRequest1.status >= 200 && ourRequest1.status < 400) {
    	data1 = JSON.parse(ourRequest1.responseText);
        createHTML1(data1);
        createHTML2(data1);
        createHTML3(data1);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest1.onerror = function() {
      console.log("Connection error");
    };
    
    ourRequest1.send();

    function createHTML1(Data) {
    	var options1;
    	$('#legendGroupDD').empty();
        options1 = '<option value="" selected>Legend Group</option>'
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Legend Group") {
        		options1 += "<option value='" + Data.data[i].legendtype + "'>" + Data.data[i].legendtype + "</option>";
    		}
        }
        options1 += "<option value=Other>Other</option>";
        $('#legendGroupDD').html(options1);
        $('#legendGroupDD').material_select('refresh');
    }


    function createHTML2(Data) {
    	var options2;
    	$('#categoryDD').empty();
        options2 = '<option value="" selected>Category</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Category") {
        		options2 += "<option value='" + Data.data[i].legendtype + "'>" + Data.data[i].legendtype + "</option>";
    		}
        }
        options2 += "<option value=Other>Other</option>";
        $('#categoryDD').html(options2);
        $('#categoryDD').material_select('refresh');
    }
    
    
    function createHTML3(Data) {
    	var options2;
    	$('#subCategoryDD').empty();
        options2 = '<option value="" selected>Sub Category</option>';
        for (i = 0; i < Data.data.length; i++)
        {
        	if (Data.data[i].category == "Sub Category") {
        		options2 += "<option value='" + Data.data[i].legendtype + "'>" + Data.data[i].legendtype + "</option>";
    		}
        }
        options2 += "<option value=Other>Other</option>";
        $('#subCategoryDD').html(options2);
        $('#subCategoryDD').material_select('refresh');
    }
    }
    $("#legendGroupDD").change(function () {
        var val = this.value;
		$('#legendGroupLbl').addClass("active");
        if (val=="Other") {
        	$('#legendGroup').val("");
        	$("#legendGroup").removeClass("HideThisElement");
        	$("#legendGroupLbl").removeClass("HideThisElement");
        	$('#legendGroup').attr("placeholder","Other");
		}
        else
        {
        	$('#legendGroup').val(val);
        	$("#legendGroup").addClass("HideThisElement");
        	$("#legendGroupLbl").addClass("HideThisElement");
        }
    });
    
    $("#categoryDD").change(function () {
        var val = this.value;
		$('#categoryLbl').addClass("active");
        if (val=="Other") {
        	$('#category').val("");
        	$("#category").removeClass("HideThisElement");
        	$("#categoryLbl").removeClass("HideThisElement");
        	$('#category').attr("placeholder","Other");
		}
        else
        {
        	$('#category').val(val);
        	$("#category").addClass("HideThisElement");
        	$("#categoryLbl").addClass("HideThisElement");
        }
    });
    
    $("#subCategoryDD").change(function () {
        var val = this.value;
		$('#subCategoryLbl').addClass("active");
        if (val=="Other") {
        	$('#subCategory').val("");
        	$("#subCategory").removeClass("HideThisElement");
        	$("#subCategoryLbl").removeClass("HideThisElement");
        	$('#subCategory').attr("placeholder","Other");
		}
        else
        {
        	$('#subCategory').val(val);
        	$("#subCategory").addClass("HideThisElement");
        	$("#subCategoryLbl").addClass("HideThisElement");
        }
    });
    
    $("#SubmitButtonRegister").click(function() {
    	var url = "../../../LegendRegisterServlet"; // the script where you handle the form input.
    	if (document.getElementById("legendGroupDD").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Legend Group is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("categoryDD").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Category is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("subCategoryDD").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Sub Category is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("description").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Description is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newClientForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Add New Legend!');
						} else{

		                	   document.getElementById("newClientForm").reset();
								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#RegisterNewClient').modal('hide');
								$('#datatables').DataTable().ajax.reload();
								dropdownFunction();
								toastr.success('New Legend Registered Successfully!');
						}
	               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    $("#SubmitButtonUpdate").click(function() {

    	var url = "../../../LegendUpdateServlet"; // the script where you handle the form input.
    	if (document.getElementById("legendGroupDD").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Legend Group is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("categoryDD").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Category is mandatory !";
			$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("subCategoryDD").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Sub Category is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else if (document.getElementById("description").value == "") {
    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Description is mandatory !";
    		$("#alertMessage").removeClass("HideThisElement");
		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newClientForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('Failed to Update Legend!');
						} else {
							document.getElementById("newClientForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#RegisterNewClient').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							dropdownFunction();
							toastr.success('Legend Details Updated Successfully!');
						}
	               },
	               error: function () {
	            	   toastr.error('<strong>Error!</strong>');
	               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
    	});
	
    function loadBlankform() {
    	document.getElementById("newClientForm").reset();
    	$("#SubmitButtonRegister").removeClass("HideThisElement");
    	$("#SubmitButtonUpdate").addClass("HideThisElement");
    	$("#alertMessage").addClass("HideThisElement");
    	$("#alertMessage").addClass("HideThisElement");
    	$(".otherLegendElement").addClass("HideThisElement");
    	$('#legendGroupDD').material_select('refresh');
    	$('#categoryDD').material_select('refresh');
    	$('#legendGroupDD').material_select('refresh');
    	$('#selectedLegendId').val(generator.generate());
    	document.querySelector('#NewElement-modal-title').innerHTML = 'New Legend Details';
    	$('#RegisterNewClient').modal('show');
    }
    
    $("#DeleteEmployeeConfirmed").click(function() {

    	var DeleteEmpId = document.querySelector('#DeleteEmpId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteLegendServlet?DeleteEmpId='+DeleteEmpId,
            success: function(data)
            {
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Legend!');
					} else {
						$('#centralModalDangerDemo').modal('hide');
						$('#datatables').DataTable().ajax.reload();
						dropdownFunction();
						toastr.success('Legend Deleted Successfully!');
					}
            }
		
		})
		return false; // avoid to execute the actual submit of the form.
    });
    
    
});