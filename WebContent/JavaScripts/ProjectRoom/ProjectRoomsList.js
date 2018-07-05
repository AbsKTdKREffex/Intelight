$(document).ready(function(){
	var generator = new IDGenerator();
	
	$('#clientTable thead #filterrow th').each( function () {
    	var title = $(this).text();
        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
    });
	
    $("#clientTable thead input").on('keyup change', function () {
    	electrician.column($(this).parent().index() + ':visible')
            .search(this.value)
            .draw();
    });
    
	var electrician = $('#clientTable').DataTable( {
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetEmployeeList",
		"columns": [
        	 {
             	className: "center",
                 defaultContent:'<i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
             },
            { "data": "employeeName" },
            { "data": "designation_text" },
            { "data": "mobileNo" },
            { "data": "altContactNo" },
            { "data": "emailId" },
            { "data": "location" }
            
        ],
        fixedColumns: true
    } );
	
	$('#clientTable tbody').on( 'click', '.select_me', function () {
    	var data = electrician.row( $(this).parents('tr') ).data();
    	$('#electricianLbl').addClass("active");
    	document.querySelector('#electrician').value = data.employeeName;
    	document.querySelector('#electricianID').value = "";
    	document.querySelector('#electricianID').value = data.employeeId;
    	$('#clientTableModal').modal('hide');
    });
	
	var getProjectDetails = new XMLHttpRequest();
	getProjectDetails.open('GET','../../../GetProjectDetails?selectedProjectId='+$('#selectedProjectId').val());

	getProjectDetails.onload = function() {
		
		if( getProjectDetails.status <= 200 && getProjectDetails.status <=400 ){
			var projDetails = JSON.parse(getProjectDetails.responseText);
			
			$('#clientName').val(projDetails.data[0].clientName);
			$('#clientNameLbl').addClass("active");
			$('#architectCompany').val(projDetails.data[0].architectCompanyName);
			$('#architectCompanyLbl').addClass("active");
			$('#projectName').val(projDetails.data[0].projectName);
			$('#projectNameLbl').addClass("active");
			$('#contactPerson').val(projDetails.data[0].conactPersonName);
			$('#contactPersonLbl').addClass("active");
			$('#acrhitectName').val(projDetails.data[0].architectName);
			$('#acrhitectNameLbl').addClass("active");
			$('#asstArchitect').val(projDetails.data[0].architectAssisName);
			$('#asstArchitectLbl').addClass("active");
			$('#siteIncharge').val(projDetails.data[0].siteIncharge);
			$('#siteInchargeLbl').addClass("active");
			$('#managerName').val(projDetails.data[0].projectManagerName);
			$('#managerNameLbl').addClass("active");
			
			}else {
			//to do on error while loading json page
		}
	};

	getProjectDetails.onerror = function() {
		alert("Hi");
	}

	getProjectDetails.send();

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
                text: 'New Room',
                action: function ( e, dt, node, config ) {
                	loadProjectRoomsForm();
                }
            }
        ],
		"bLengthChange": false,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetProjectRoomList?selectedProjectId="+$('#selectedProjectId').val(),
		"columns": [
        	 {
                 defaultContent:'<center><i class="edit_me fa fa-pencil-alt fa-2x" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x" aria-hidden="true"></i> '
             },
             { "data": "roomName" },
             { "data": "sizeLBH" },
             { "data": "picsTakenTable"}
            
        ],
        fixedColumns: true
        
    } );
	
    $('#datatables tbody').on( 'click', '.edit_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	document.getElementById("newProjectRoomdetails").reset();
    		document.querySelector('#selectedRoomId').value = data.rowid;
    		$("#alertMessage").addClass("HideThisElement");
            $("#errorMessage").addClass("HideThisElement");
            if (data.roomName  !== "") {
                $('#roomName').val(data.roomName);
                $('#roomNameLbl').addClass("active");
               }
            if (data.electrician  !== "") {
                $('#electricianID').val(data.electrician);
               }
            if (data.electricianName  !== "") {
                $('#electrician').val(data.electricianName);
                $('#electricianLbl').addClass("active");
               }
            if (data.sizeLBH  !== "") {
                $('#sizeLBH').val(data.sizeLBH);
                $('#sizeLBHLbl').addClass("active");
               }
            if (data.ceilingdepth  !== "") {
                $('#ceilingdepth').val(data.ceilingdepth);
                $('#ceilingdepthLbl').addClass("active");
               }
            if (data.lightPlacements  !== "") {
                $('#lightPlacements').val(data.lightPlacements);
                $('#lightPlacementsLbl').addClass("active");
               }
            if (data.measurementDetails  !== "") {
                $('#measurementDetails').val(data.measurementDetails);
                $('#measurementDetailsLbl').addClass("active");
               }
            if (data.recommendationsGiven  !== "") {
                $('#recommendationsGiven').val(data.recommendationsGiven);
                $('#recommendationsGivenLbl').addClass("active");
               }
            if (data.samplesToBrought  !== "") {
                $('#samplesToBrought').val(data.samplesToBrought);
                $('#samplesToBroughtLbl').addClass("active");
               }
            if (data.samplesGiven  !== "") {
                $('#samplesGiven').val(data.samplesGiven);
                $('#samplesGivenLbl').addClass("active");
               }
            if (data.provisionForDrivers  !== "") {
                $('#provisionForDrivers').val(data.provisionForDrivers);
                $('#provisionForDriversLbl').addClass("active");
               }
            if (data.picsTaken  == 1) {
   			 $("#picsTaken").prop("checked", true);
   		 	} else {
   		 	$("#picsTaken").prop("checked", false);
			}
    		 $("#SubmitButtonRegisterRoomDetails").addClass("HideThisElement");
    		 $("#SubmitButtonUpdateRoomDetails").removeClass("HideThisElement");
    		 $("#projectRoomDetails").removeClass("HideThisElement");
         	 $("#projectInformation").addClass("HideThisElement");
    	
        
    } );
    
    $('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
			document.querySelector('#DeleteElementId').value = data.rowid;
    		$('#centralModalDangerDemo').modal('show');
    		$("#DeleteProjectConfirmed").hide();
    } );
    
    $('#datatables tbody').on( 'click', '.select_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
//			document.querySelector('#DeleteElementId').value = data.rowid;
//    		$('#centralModalDangerDemo').modal('show');
    		
    } );
    
    $(".row").on( 'click', '#editProject', function () {
    	var id = document.querySelector('#selectedProjectId').value
    	if(id){
    		window.location.href = 'project.jsp?selectedProjectId='+id;
    	}
    	else {
			alert("Error");
		}
    });
 
    // For Drop Downs
//    
//    var ourRequest1 = new XMLHttpRequest();
//    var data1 = [];
//    ourRequest1.open('GET', '../../../../GetLegndsList');
//    ourRequest1.onload = function() {
//      if (ourRequest1.status >= 200 && ourRequest1.status < 400) {
//    	data1 = JSON.parse(ourRequest1.responseText);
//        createHTML1(data1);
//        createHTML2(data1);
//      } else {
//        console.log("We connected to the server, but it returned an error.");
//      }
//    };
//
//    ourRequest1.onerror = function() {
//      console.log("Connection error");
//    };
//
//
//    ourRequest1.send();
//
//    function createHTML1(Data) {
//    	var options1;
//    	$('#subCategory').empty();
//        options1 = '<option value="" selected>Select Sub Category</option>'
//        for (i = 0; i < Data.data.length; i++)
//        {
//        	if (Data.data[i].subcategory == "Product Sub Category") {
//        		options1 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
//    		}
//        }
//        $('#subCategory').html(options1);
//        $('#subCategory').material_select('refresh');
//    }
//
//
//    function createHTML2(Data) {
//    	var options2;
//    	$('#category').empty();
//        options2 = '<option value="" selected>Select Category</option>';
//        for (i = 0; i < Data.data.length; i++)
//        {
//        	if (Data.data[i].subcategory == "Product Category") {
//        		options2 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
//    		}
//        }
//        $('#category').html(options2);
//        $('#category').material_select('refresh');
//    }
//    
//    var ourRequest4 = new XMLHttpRequest();
//    var data4 = [];
//    ourRequest4.open('GET', '../../../../GetHSINIDList');
//    ourRequest4.onload = function() {
//      if (ourRequest4.status >= 200 && ourRequest4.status < 400) {
//    	data4 = JSON.parse(ourRequest4.responseText);
//        createHTML4(data4);
//      } else {
//        console.log("We connected to the server, but it returned an error.");
//      }
//    };
//
//    ourRequest4.onerror = function() {
//      console.log("Connection error");
//    };
//
//
//    ourRequest4.send();
//
//    function createHTML4(Data) {
//    	var options1;
//    	$('#hsnId').empty();
//        options1 = '<option value="" selected>Select HSN ID</option>'
//        for (i = 0; i < Data.data.length; i++)
//        {
//        	options1 += "<option value='" + Data.data[i].rowId + "'>" + Data.data[i].Hsnid + "</option>";
//        }
//         $('#hsnId').html(options1);
//         $('#hsnId').material_select('refresh');
//        }
//    
    
    $("#SubmitButtonRegisterRoomDetails").click(function() {
    	var url = "../../../RegisterProjectRoomDetails"; // the script where you handle the form input.
    	if (document.getElementById("roomName").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Room Name Cannot be left blank !";
			$("#alertMessage").removeClass("HideThisElement");
		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newProjectRoomdetails").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
		                   	$('#centralModalDangerDemo').modal('hide');
		                	toastr.error('Failed to capture Room Details !');
						} else {
							document.getElementById("newProjectRoomdetails").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$("#projectRoomDetails").addClass("HideThisElement");
							$("#projectInformation").removeClass("HideThisElement");
							$('#datatables').DataTable().ajax.reload();
							toastr.success('New Room Details Captured Successfully !');
						}
	               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    $("#SubmitButtonUpdateRoomDetails").click(function() {

    	var url = "../../../UpdateProjectRoomDetails"; // the script where you handle the form input.
    	if (document.getElementById("roomName").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Room Name Cannot be left blank !";
			$("#alertMessage").removeClass("HideThisElement");
		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newProjectRoomdetails").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
	                	   toastr.error('Failed to update Room Details !');
						} else {
							document.getElementById("newProjectRoomdetails").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$("#projectRoomDetails").addClass("HideThisElement");
							$("#projectInformation").removeClass("HideThisElement");
							$('#datatables').DataTable().ajax.reload();
							toastr.success('New Room Details updated Successfully !');
						}
	               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
    	});
	
    function loadProjectRoomsForm() {
    	document.getElementById("newProjectRoomdetails").reset();
    	$('#selectedRoomId').val(generator.generate());
    	$("#SubmitButtonRegisterRoomDetails").removeClass("HideThisElement");
    	$("#SubmitButtonUpdateRoomDetails").addClass("HideThisElement");
    	$("#projectRoomDetails").removeClass("HideThisElement");
    	$("#projectInformation").addClass("HideThisElement");
	}
    
    
    
    function loadBlankform() {
    	document.getElementById("newElementForm").reset();
    	$("#SubmitButtonRegister").removeClass("HideThisElement");
    	$("#SubmitButtonUpdate").addClass("HideThisElement");
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('#PriceTable input[type="text"]').val('');
    	$('#PriceTable input[type="number"]').val('');
    	$('.mdb-select').material_select('destroy');
    	$('.mdb-select').material_select();
    	document.querySelector('#NewElement-modal-title').innerHTML = 'Register Project';
    	$('#selectedProjectId').val(generator.generate());
    	$('#RegisterNew').modal('show');
    }
    
    
        $("#DeleteProjectConfirmed").click(function() {

    	var DeleteElementId = document.querySelector('#DeleteElementId').value;
    	$.ajax({
            type: "GET",
            url: '../../../DeleteProject?DeleteElementId='+DeleteElementId,
            success: function(data)
            {
                // show response from the servlet.
                if (data == 0) {
                	$('#centralModalDangerDemo').modal('hide');
                	toastr.error('Failed to Delete Project!');
					} else {
						$('#centralModalDangerDemo').modal('hide');
						$('#datatables').DataTable().ajax.reload();
						toastr.success('Project Deleted Successfully!');
					}
	            }
			
			})
			return false; // avoid to execute the actual submit of the form.
	    });
	        
        $("#DeleteRoomConfirmed").click(function() {

        	var DeleteElementId = document.querySelector('#DeleteElementId').value;
        	$.ajax({
                type: "GET",
                url: '../../../DeleteProjectRoom?DeleteElementId='+DeleteElementId,
                success: function(data)
                {
                    // show response from the servlet.
                    if (data == 0) {
                    	$('#centralModalDangerDemo').modal('hide');
                    	toastr.error('Failed to Delete Room!');
    					} else {
    						$('#centralModalDangerDemo').modal('hide');
    						$('#datatables').DataTable().ajax.reload();
    						toastr.success('Room Deleted Successfully!');
    					}
                }
    		
    		})
    		return false; // avoid to execute the actual submit of the form.
        });
    
    

    });