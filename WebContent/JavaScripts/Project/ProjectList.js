$(document).ready(function(){
	var generator = new IDGenerator();
	
    var ourRequest1 = new XMLHttpRequest();
    var data1 = [];
    ourRequest1.open('GET', '../../../GetLegendList');
    ourRequest1.onload = function() {
      if (ourRequest1.status >= 200 && ourRequest1.status < 400) {
    	data1 = JSON.parse(ourRequest1.responseText);
        createHTML1(data1);
        createHTML2(data1);
        createHTML3(data1);
        createHTML4(data1);
        createHTML5(data1);
        createHTML6(data1);
        createHTML7(data1);
        createHTML8(data1);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest1.onerror = function() {
      console.log("Connection error");
    };
    
    ourRequest1.send();

    var ourRequest2 = new XMLHttpRequest();
    var data2 = [];
    ourRequest2.open('GET', '../../../GetStateList');
    ourRequest2.onload = function() {
      if (ourRequest2.status >= 200 && ourRequest2.status < 400) {
    	data2 = JSON.parse(ourRequest2.responseText);
        createHTML9(data2);
        createHTML10(data2);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest2.onerror = function() {
      console.log("Connection error");
    };

    ourRequest2.send();
    
	var passID=document.querySelector('#selectedProjectIdPassedValue').value
	
	if(passID!="null")
	{
    	$("#ProjectRegistrationForm").removeClass("HideThisElement");
    	$("#ProjectListTable").addClass("HideThisElement");

    	var getProjectDetails = new XMLHttpRequest();
    	getProjectDetails.open('GET','../../../GetProjectDetails?selectedProjectId='+passID);
    	getProjectDetails.onload = function() {
    		
    		if( getProjectDetails.status <= 200 && getProjectDetails.status <=400 ){
    			var projDetails = JSON.parse(getProjectDetails.responseText);
    			$('#selectedProjectId').val(passID);
    			$('#clientID').val(projDetails.data[0].clientId);
    			$('#clientName').val(projDetails.data[0].clientName);
    			$('#clientNameLbl').addClass("active");
    			$('#architectID').val(projDetails.data[0].architectCompanyId);
    			$('#architectCompany').val(projDetails.data[0].architectCompanyName);
    			$('#architectCompanyLbl').addClass("active");
    			$('#contactPersonID').val(projDetails.data[0].clientContactId);
    			$('#contactPerson').val(projDetails.data[0].conactPersonName);
    			$('#contactPersonLbl').addClass("active");
    			$('#acrhitectNameID').val(projDetails.data[0].architectId);
    			$('#acrhitectName').val(projDetails.data[0].architectName);
    			$('#acrhitectNameLbl').addClass("active");
    			$('#asstArchitectID').val(projDetails.data[0].assArchitectId);
    			$('#asstArchitect').val(projDetails.data[0].architectAssisName);
    			$('#asstArchitectLbl').addClass("active");
    			$('#projectName').val(projDetails.data[0].projectName);
    			$('#projectNameLbl').addClass("active");
    			$('#siteIncharge').val(projDetails.data[0].siteIncharge);
    			$('#siteInchargeLbl').addClass("active");
    			$('#siteInchargeNo').val(projDetails.data[0].siteInchargeNo);
    			$('#siteInchargeNoLbl').addClass("active");
    			$('#electrician').val(projDetails.data[0].electrician);
    			$('#electricianLbl').addClass("active");
    			$('#electricianNo').val(projDetails.data[0].electricianNo);
    			$('#electricianNoLbl').addClass("active");
    			$('#contractorElectrician').val(projDetails.data[0].contractorElectrician);
    			$('#contractorElectricianLbl').addClass("active");
    			$('#contractorElectricianNo').val(projDetails.data[0].contractorElectricianNo);
    			$('#contractorElectricianNoLbl').addClass("active");
    			$('#overallHeight').val(projDetails.data[0].overallHeight);
    			$('#overallHeightLbl').addClass("active");
    			$('#siteArea').val(projDetails.data[0].siteArea);
    			$('#siteAreaLbl').addClass("active");
    			$('#noOfRooms').val(projDetails.data[0].noOfRooms);
    			$('#noOfRoomsLbl').addClass("active");
    			$('#managerID').val(projDetails.data[0].projectManagerID);
    			$('#manager').val(projDetails.data[0].projectManagerName);
    			$('#managerLbl').addClass("active");
    			$('#siteTiming').val(projDetails.data[0].siteTiming);
    			$('#siteTimingLbl').addClass("active");
    			
                $('#category').val(projDetails.data[0].projcategory);
                $('#subCategory').val(projDetails.data[0].projsubcategory);
    			
    			$('#siteAddress').val(projDetails.data[0].siteAddress);
    			$('#siteAddressLbl').addClass("active");
        		$("#SubmitButtonRegister").addClass("HideThisElement");
        		$("#SubmitButtonUpdate").removeClass("HideThisElement");
        	
        		$('#category').material_select("refresh");
        		$('#subCategory').material_select("refresh");

            	architectListTable();
            	architectAssistListTable();
            	contactPersonTable();
        		
    		}else {
    				alert("Error");
    		}
    	};
		getProjectDetails.send();
	}
	else
	{
    	$("#ProjectRegistrationForm").addClass("HideThisElement");
    	$("#ProjectListTable").removeClass("HideThisElement");
	}
	
    $('#datatables thead #filterrow th').each( function () {
    	var title = $(this).text();
        $(this).html( '<input type="text" style="font-size: 80%;padding:auto;text-align:center;width:80%;" placeholder="Search '+title+'" />' );
    } );
	
    $("#datatables thead input").on('keyup change', function () {
        table.column($(this).parent().index() + ':visible')
            .search(this.value)
            .draw();
    });
    
	var table = $('#datatables').DataTable({
		dom: 'Bfrtip',
        buttons: [
            {
                text: 'New Project',
                action: function ( e, dt, node, config ) {
                	loadProjectRegistrationForm();
                }
            }
        ],
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
		"ajax": "../../../GetProjectList",
		"columns": [
        	 {
                 defaultContent: '<center><div class="fontElement"><i class="select_me fa fa-check fa-2x" id="select_me" aria-hidden="true"></i>'+
                 '<i class="edit_me fa fa-pencil-alt fa-2x" id="edit_me" aria-hidden="true"></i> ' +
                 '<i class="delete_me fa fa-trash-alt fa-2x HideThisElement" id="delete_me" aria-hidden="true"></i></div>'
             },
             { "data": "clientName" },
             { "data": "projectName" },
             { "data": "architectCompanyName" },
             { "data": "architectName" },
             { "data": "conactPersonName" },
             { "data": "siteInchargeNo" },
             { "data": "architectAssisName" }
        ],
        fixedColumns: true
    });
	
	$('#architectTableModal').on('shown.bs.modal', function (e) {
    	$('#architectTable').DataTable().destroy();
    	generateArchitectTable();
	})
	
	
    function generateArchitectTable() {
		$('#architectTable thead #filterrow th').each( function (index) {
//	    	var title = $(this).text();
			var title = $($('#architectTable thead #headerrow th')[index+1]).text();
	        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
	    });
		
	 // Apply the search
	    $("#architectTable thead input").on('keyup change', function () {
	    	architect.column($(this).parent().index() + ':visible')
	            .search(this.value)
	            .draw();
	    });
	    
		var architect = $('#architectTable').DataTable( {
			dom: 'Bfrtip',
	        buttons: [
	            {
	                text: 'New Company',
	                action: function ( dt, node, config ) {
	                	loadArchitectform();
	                }
	            }
	        ],
			"bLengthChange": false,
			"searching": true,
			"orderCellsTop": true ,
			"sScrollX": "100%",
	        "sScrollXInner": "100%",
	        "bScrollCollapse": true,
			"ajax": "../../../GetCompanyList",
			"columns": [
	        	 {
	                 defaultContent:'<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
	             },
	            { "data": "companyName" },
	            { "data": "location" },
	            { "data": "contactNo" },
	            { "data": "email" },
	            { "data": "website" },
	            { "data": "address" },
	            { "data": "source" }
	        ],
	        fixedColumns: true
	    } );
		
		$('#architectTable tbody').off('click');
		 
		$('#architectTable tbody').on( 'click', '.select_me', function () {
	    	var data = architect.row( $(this).parents('tr') ).data();
	    	$('#architectCompanyLbl').addClass("active");
	    	document.querySelector('#architectCompany').value = data.companyName;
	    	document.querySelector('#architectID').value = "";
	    	document.querySelector('#architectID').value = data.companyId;
	    	$('#architectTableModal').modal('hide');
	    	$('#architectListTable').DataTable().destroy();
	    	$('#architectAssistListTable').DataTable().destroy();
	    	architectListTable();
	    	architectAssistListTable();
	    });
	}
	
	function architectListTable(){
		$('#architectListTable thead #filterrow th').each( function () {
	    	var title = $(this).text();
	        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
	    });
		
	 // Apply the search
	    $("#architectListTable thead input").on('keyup change', function () {
	    	architectListtable.column($(this).parent().index() + ':visible')
	            .search(this.value)
	            .draw();
	    });
	    
		var architectListtable = $('#architectListTable').DataTable( {
			dom: 'Bfrtip',
	        buttons: [
	            {
	                text: 'New Architect',
	                action: function ( dt, node, config ) {
	                	loadArchitectListform();
	                }
	            }
	        ],
			"bLengthChange": false,
			"searching": true,
			"orderCellsTop": true ,
			"sScrollX": "100%",
	        "sScrollXInner": "100%",
	        "bScrollCollapse": true,
			"ajax": "../../../GetArcitectList?Id="+document.getElementById('architectID').value,
			"columns": [
	        	 {
	                 defaultContent:'<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
	             },
	            { "data": "name" },
	            { "data": "description_text" },
	            { "data": "contactNo" },
	            { "data": "altContactNo" },
	            { "data": "emailId" },
	            { "data": "location" }
	        ],
	    });
		
		$('#architectListTable tbody').off('click');

		$('#architectListTable tbody').on( 'click', '.select_me', function () {
			var data = architectListtable.row( $(this).parents('tr') ).data();
			$('#acrhitectNameLbl').addClass("active");
			document.querySelector('#acrhitectName').value = data.name;	
			document.querySelector('#acrhitectNameID').value = data.architectId;
			$('#ArchitectListModal').modal('hide');
		});
	}

	function architectAssistListTable(){
		$('#architectAssistListTable thead #filterrow th').each( function () {
	    	var title = $(this).text();
	        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
	    });
		
	    $("#architectAssistListTable thead input").on('keyup change', function () {
	    	architectAssistListtablevar.column($(this).parent().index() + ':visible')
	            .search(this.value)
	            .draw();
	    });
	    
		var architectAssistListtablevar = $('#architectAssistListTable').DataTable( {
			dom: 'Bfrtip',
	        buttons: [
	            {
	                text: 'New Architect Assist',
	                action: function ( dt, node, config ) {
	                	loadArchitectAssistListform();
	                }
	            }
	        ],
			"bLengthChange": false,
			"searching": true,
			"orderCellsTop": true ,
			"sScrollX": "100%",
	        "sScrollXInner": "100%",
	        "bScrollCollapse": true,
			"ajax": "../../../GetArcitectList?Id="+document.getElementById('architectID').value,
			"columns": [
	        	 {
	                 defaultContent:'<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
	             },
	            { "data": "name" },
	            { "data": "description_text" },
	            { "data": "contactNo" },
	            { "data": "altContactNo" },
	            { "data": "emailId" },
	            { "data": "location" }
	        ],
	    });
		
		$('#architectAssistListTable tbody').off('click');

		$('#architectAssistListTable tbody').on( 'click', '.select_me', function () {
			var data = architectAssistListtablevar.row( $(this).parents('tr') ).data();
			$('#asstArchitectLbl').addClass("active");
			document.querySelector('#asstArchitect').value = data.name;	
			document.querySelector('#asstArchitectID').value = data.architectId;
			$('#ArchitectAssistListModal').modal('hide');
		});
	}
	
function contactPersonTable(){
	$('#contactPTable thead #filterrow th').each( function () {
    	var title = $(this).text();
        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
    });
	
    $("#contactPTable thead input").on('keyup change', function () {
    	contactP.column($(this).parent().index() + ':visible')
            .search(this.value)
            .draw();
    });
    
	var contactP = $('#contactPTable').DataTable( {
		dom: 'Bfrtip',
        buttons: [
            {
                text: 'New Contact Person',
                action: function ( dt, node, config ) {
                	loadContactPform();
                }
            }
        ],
		"bLengthChange": false,
		"searching": true,
		"orderCellsTop": true ,
		"sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
        "ajax": "../../../GetContactPersonList?Id="+document.getElementById('clientID').value,
		"columns": [
        	 {
                 defaultContent:'<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
             },
            { "data": "name" },
            { "data": "designation_text" },
            { "data": "contactNo" },
            { "data": "altContactNo" },
            { "data": "emailId" },
            { "data": "location" }
        ],
    } );
	
	$('#contactPTable tbody').off('click');

	$('#contactPTable tbody').on( 'click', '.select_me', function () {
		var data = contactP.row( $(this).parents('tr') ).data();
		$('#contactPersonLbl').addClass("active");
		document.querySelector('#contactPerson').value = data.name;	
		document.querySelector('#contactPersonID').value = data.contactPersonId;
		$('#contactPerTableModal').modal('hide');
	});
}

    $('#datatables tbody').on( 'click', '.delete_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
			document.querySelector('#DeleteElementId').value = data.rowid;
    		$('#centralModalDangerDemo').modal('show');
    });
    
    $('#datatables tbody').on( 'click', '.select_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	if($('#checkValue').val()=="2")
    	{
    		window.location.href = '../Quotation/quotation.jsp?selectedProjectId='+data.rowid+'&s='+data.compState;
    	}
    	else if($('#checkValue').val()=="3")
    	{
    		window.location.href = '../Order/order.jsp?selectedProjectId='+data.rowid+'&s='+data.compState+'&cid='+data.clientId;
    	}
    	else if($('#checkValue').val()=="4")
    	{
    		window.location.href = '../Order/GenerateInvoice.jsp?selectedProjectId='+data.rowid;
    	}
    });

    $('#datatables tbody').on( 'click', '.edit_me', function () {
    	var data = table.row( $(this).parents('tr') ).data();
    	window.location.href = 'projectRoomsList.jsp?selectedProjectId='+data.rowid;
    });

    $('#clientTableModal').on('shown.bs.modal', function (e) {
    	$('#clientTable').DataTable().destroy();
    	generateClientTable();
	})
    	
    	function generateClientTable() {
//    	$('#clientTable').DataTable().destroy();
    	// Setup - add a text input to each footer cell
	    $('#clientTable thead #filterrow th').each( function () {
	    	var title = $(this).text();
	        $(this).html( '<input type="text" style="font-size: 80%;padding:auto;text-align:center;width:80%;" placeholder="Search '+title+'" />' );
	    } );
		
	    
	 // Apply the search
	    $("#clientTable thead input").on('keyup change', function () {
	    	client.column($(this).parent().index() + ':visible')
	            .search(this.value)
	            .draw();
	    });
	    
		var client = $('#clientTable').DataTable( {
			dom: 'Bfrtip',
	        buttons: [
	            {
	                text: 'New Client',
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
			"ajax": "../../../GetClientList",
			"columns": [
	       	 	{
	                defaultContent:'<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
	            },
	           { "data": "companyName" },
	           { "data": "industry" },
	           { "data": "location" }
	           
	       ]
	    } );
		
		$('#clientTable tbody').off('click');

		$('#clientTable tbody').on( 'click', '.select_me', function () {
	    	var data = client.row( $(this).parents('tr') ).data();
	    	$('#clientNameLbl').addClass("active");
	    	document.querySelector('#clientName').value = data.companyName;	
	    	document.querySelector('#clientID').value = data.clientId;
	    	$('#clientTableModal').modal('hide');
	    	$('#contactPTable').DataTable().destroy();
	    	contactPersonTable();
	    } );

		}
    	
		$('#managerListTable thead #filterrow th').each( function () {
	    	var title = $(this).text();
	        $(this).html( '<input type="text" style="font-size: 80%;padding:1%;text-align:center" placeholder="'+title+'" />' );
	    });
		
	    
	 // Apply the search
	    $("#managerListTable thead input").on('keyup change', function () {
	    	manager.column($(this).parent().index() + ':visible')
	            .search(this.value)
	            .draw();
	    });
	    
		var manager = $('#managerListTable').DataTable( {
			"bLengthChange": false,
			"searching": true,
			"orderCellsTop": true ,
			"sScrollX": "100%",
	        "sScrollXInner": "100%",
	        "bScrollCollapse": true,
			"ajax": "../../../GetEmployeeList",
			"columns": [
	        	 {
	                 defaultContent:'<center><i class="select_me fa fa-check fa-2x" aria-hidden="true"></i>'
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
		
		$('#managerListTable tbody').on( 'click', '.select_me', function () {
	    	var data = manager.row( $(this).parents('tr') ).data();
	    	$('#managerLbl').addClass("active");
	    	document.querySelector('#manager').value = data.employeeName;
	    	document.querySelector('#managerID').value = "";
	    	document.querySelector('#managerID').value = data.employeeId;
	    	$('#ManagerListModal').modal('hide');
	    });

		
	    // For Drop Downs
	    

	    function createHTML1(Data) {
	    	var options1;
	    	$('#designation').empty();
	        options1 = '<option value="">Designation</option>';
	        for (i = 0; i < Data.data.length; i++)
	        {
	        	if (Data.data[i].category == "Designation") {
	        		options1 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
	    		}
	        }
	         $('#designation').html(options1);
	         $('#designation').material_select('refresh');
	        }

	    function createHTML2(Data) {
	    	var options1;
	    	$('#source').empty();
	        options1 = '<option value="">Source</option>';
	        for (i = 0; i < Data.data.length; i++)
	        {
	        	if (Data.data[i].category == "Source") {
	        		options1 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
	    		}
	        }
	         $('#source').html(options1);
	         $('#source').material_select('refresh');
	        }


	   function createHTML3(Data) {
	   	var options2;
	    $('#designationArch').empty();
	       options2 = '<option value="">Designation</option>';
	       for (i = 0; i < Data.data.length; i++)
	       {
	       	if (Data.data[i].category == "Designation") {
	       		options2 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
	   		}
	       }
	       $('#designationArch').html(options2);
	       $('#designationArch').material_select('refresh');
	       
	   }
	        

	 	   function createHTML4(Data) {
	 	   	var options2;
	 	    $('#designationContactP').empty();
	 	       options2 = '<option value="">Designation</option>';
	 	       for (i = 0; i < Data.data.length; i++)
	 	       {
	 	       	if (Data.data[i].category == "Designation") {
	 	       		options2 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
	 	   		}
	 	       }
	 	       $('#designationContactP').html(options2);
	 	       $('#designationContactP').material_select('refresh');
	 	       
	 	   }

	 	   function createHTML5(Data) {
	 	   	var options2;
	 	    $('#designationArchList').empty();
	 	       options2 = '<option value="">Designation</option>';
	 	       for (i = 0; i < Data.data.length; i++)
	 	       {
	 	       	if (Data.data[i].category == "Designation") {
	 	       		options2 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
	 	   		}
	 	       }
	 	       $('#designationArchList').html(options2);
	 	       $('#designationArchList').material_select('refresh');
	 	       
	 	   }

	 	  
	 	   function createHTML6(Data) {
	 	   	var options2;
	 	    $('#assistDesignation').empty();
	 	       options2 = '<option value="">Designation</option>';
	 	       for (i = 0; i < Data.data.length; i++)
	 	       {
	 	       	if (Data.data[i].category == "Designation") {
	 	       		options2 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
	 	   		}
	 	       }
	 	       $('#assistDesignation').html(options2);
	 	       $('#assistDesignation').material_select('refresh');
	 	       
	 	   }
	 	  
	 	   function createHTML7(Data) {
	 	   	var options2;
	 	    $('#category').empty();
	 	       options2 = '<option value="">Category</option>';
	 	       for (i = 0; i < Data.data.length; i++)
	 	       {
	 	       	if (Data.data[i].category == "Project Category") {
	 	       		options2 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
	 	   		}
	 	       }
	 	       $('#category').html(options2);
	 	       $('#category').material_select('refresh');
	 	       
	 	   }
	 	   
	 	   function createHTML8(Data){
	 		  var options2;
		 	    $('#subCategory').empty();
		 	       options2 = '<option value="">Category</option>';
		 	       for (i = 0; i < Data.data.length; i++)
		 	       {
		 	       	if (Data.data[i].category == "Project Sub Category") {
		 	       		options2 += "<option value='" + Data.data[i].rowid + "'>" + Data.data[i].description + "</option>";
		 	   		}
		 	       }
		 	      $('#subCategory').html(options2);
		 	      $('#subCategory').material_select('refresh');
	 	   }

		    function createHTML9(petsData) {
		 	   var selectBox2 = document.getElementById("state");
		 	   var options2 = [];

		 	   $("#state option").each(function(index, option) {
		 	          $(option).remove();
		 	     });
		 	   
		 	      options2.push("<option value='' selected>Select State</option>");
		 	      options2.push("<optgroup label= 'Union Territory'>");
		 	      for (i = 0; i < petsData.data.length; i ++)
		 	      {
		 	       if (petsData.data[i].statetype === "Union Territory") {
		 	        options2.push("<option value='" + petsData.data[i].stateId + "'>" + petsData.data[i].state + "</option>");
		 	    }
		 	      }
		 	      options2.push("<optgroup label= 'State'>");
		 	      for (i = 0; i < petsData.data.length; i ++)
		 	      {
		 	       if (petsData.data[i].statetype === "State") {
		 	        options2.push("<option value='" + petsData.data[i].stateId + "'>" + petsData.data[i].state + "</option>");
		 	    }
		 	      }
		 	      $('#state').append(options2.join("")).material_select();
		 	      $('#state').material_select('enable');
		 	      $( "#state" ).material_select( "refresh" )
		 	  }
		    
		    function createHTML10(petsData) {
			 	   var selectBox2 = document.getElementById("stateArch");
			 	   var options2 = [];

			 	   $("#stateArch option").each(function(index, option) {
			 	          $(option).remove();
			 	     });
			 	   
			 	      options2.push("<option value='' selected>Select State</option>");
			 	      options2.push("<optgroup label= 'Union Territory'>");
			 	      for (i = 0; i < petsData.data.length; i ++)
			 	      {
			 	       if (petsData.data[i].statetype === "Union Territory") {
			 	        options2.push("<option value='" + petsData.data[i].stateId + "'>" + petsData.data[i].state + "</option>");
			 	    }
			 	      }
			 	      options2.push("<optgroup label= 'State'>");
			 	      for (i = 0; i < petsData.data.length; i ++)
			 	      {
			 	       if (petsData.data[i].statetype === "State") {
			 	        options2.push("<option value='" + petsData.data[i].stateId + "'>" + petsData.data[i].state + "</option>");
			 	    }
			 	      }
			 	      $('#stateArch').append(options2.join("")).material_select();
			 	      $('#stateArch').material_select('enable');
			 	      $( "#stateArch" ).material_select( "refresh" )
			 	  }

    $("#SubmitButtonRegister").click(function() {
    	var url = "../../../RegisterProject";
    	if (document.getElementById("selectedProjectId").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> selectedProjectId is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newElementForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   if (data == 0) {
		                   	$('#centralModalDangerDemo').modal('hide');
		                	toastr.error('Failed to Registered New Project !');
						} else {
							document.getElementById("newElementForm").reset();
							$("#alertMessage").addClass("HideThisElement");
							$("#errorMessage").addClass("HideThisElement");
							$('#RegisterNew').modal('hide');
							$('#datatables').DataTable().ajax.reload();
							unloadProjectRegistrationForm();
							toastr.success('New Project Registered Successfully !');
						}
	               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    
    $("#SubmitButtonRegisterClient").click(function() {
    	var url = "../../../RegisterClientServlet"; // the script where you handle the form input.
//    	if (document.getElementById("companyName").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("location").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("contactNo").value == "") {
//    		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//    		$("#alertMessage").removeClass("HideThisElement");
//		} else if (document.getElementById("website").value == "") {
//			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Website is not selected !";
//			$("#alertMessage").removeClass("HideThisElement");
//		} else {
	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newClientForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
							toastr.error('Failed to Registered New Client!');
						} else{

								$("#alertMessage").addClass("HideThisElement");
								$("#errorMessage").addClass("HideThisElement");
								$('#RegisterNewClient').modal('hide');
								$('#clientTableModal').modal('hide');
								document.querySelector('#clientID').value = document.querySelector('#newClientId').value ;
								document.querySelector('#clientName').value = document.querySelector('#newClientForm #companyName').value;
								$("#clientNameLbl").addClass("active");
								var name=document.querySelector('#newClientForm #firstName').value+" "+document.querySelector('#newClientForm #lastName').value;
								document.querySelector('#contactPerson').value = name;
								$("#contactPersonLbl").addClass("active");
								document.querySelector('#contactPersonID').value = document.querySelector('#newContactPersonId').value;
								document.getElementById("newClientForm").reset();
								$('#contactPerTableModal').modal('hide');
								$('#clientTable').DataTable().destroy();
								generateClientTable();
						    	$('#contactPTable').DataTable().destroy();
						    	contactPersonTable();
								toastr.success('New Architect Registered Successfully!');
						}
	               }
	    	});
//	    }
        return false; // avoid to execute the actual submit of the form.
    	});
    	
    	$("#SubmitButtonRegisterArch").click(function() {

        	var url = "../../../RegisterArchitectCompanyServlet"; // the script where you handle the form input.
//        	if (document.getElementById("companyName").value == "") {
//        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//        		$("#alertMessage").removeClass("HideThisElement");
//    		} else if (document.getElementById("location").value == "") {
//        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//        		$("#alertMessage").removeClass("HideThisElement");
//    		} else if (document.getElementById("contactNo").value == "") {
//        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//        		$("#alertMessage").removeClass("HideThisElement");
//    		} else if (document.getElementById("website").value == "") {
//    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Website is not selected !";
//    			$("#alertMessage").removeClass("HideThisElement");
//    		} else {
    	    	$.ajax({
    	               type: "POST",
    	               url: url,
    	               data: $("#newArchitectForm").serialize(), // serializes the form's elements.
    	               success: function(data)
    	               {
    	                   // show response from the servlet.
    	                   if (data == 0) {
    							toastr.error('Failed to Registered New Client!');
    						} else{
									console.log(data);
//    								console.log(data.data[0]);
//    								$('#architectID').val(data.data[0].architectCompany);
//    								$('#acrhitectNameID').val(data.data[0].architect);
//    								$('#asstArchitectID').val(data.data[0].architect);
    								$("#alertMessage").addClass("HideThisElement");
    								$("#errorMessage").addClass("HideThisElement");
    								$('#architectTableModal').modal('hide');
    								$('#RegisterNewArchitect').modal('hide');
    								$('#architectTable').DataTable().ajax.reload();
    								var name=document.querySelector('#newArchitectForm #firstName').value+" "+document.querySelector('#newArchitectForm #lastName').value;
    								document.querySelector('#acrhitectName').value = name;
    								document.querySelector('#asstArchitect').value = name;
    								$("#acrhitectNameLbl").addClass("active");
    								$("#asstArchitectLbl").addClass("active");
    								document.querySelector('#architectCompany').value = document.querySelector('#newArchitectForm #companyName').value;
    								$("#architectCompanyLbl").addClass("active");
    								document.querySelector('#architectID').value = document.querySelector('#newCompanyId').value;
    								document.querySelector('#acrhitectNameID').value = document.querySelector('#newArchitectId').value;
    								document.querySelector('#asstArchitectID').value = document.querySelector('#newArchitectId').value;
    								document.getElementById("newArchitectForm").reset();
    								$('#ArchitectListModal').modal('hide');
    						    	architectListTable();
    						    	architectAssistListTable();
    								toastr.success('New Architect Registered Successfully!');
    						}
    	               }
    	    	});
//    	    }
            return false; // avoid to execute the actual submit of the form.
        	});
    	
    	$("#SubmitButtonRegisterContactP").click(function() {
        	var url = "../../../RegisterContactPServlet"; // the script where you handle the form input.
//        	if (document.getElementById("companyName").value == "") {
//        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//        		$("#alertMessage").removeClass("HideThisElement");
//    		} else if (document.getElementById("location").value == "") {
//        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//        		$("#alertMessage").removeClass("HideThisElement");
//    		} else if (document.getElementById("contactNo").value == "") {
//        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//        		$("#alertMessage").removeClass("HideThisElement");
//    		} else if (document.getElementById("website").value == "") {
//    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Website is not selected !";
//    			$("#alertMessage").removeClass("HideThisElement");
//    		} else {
    	    	$.ajax({
    	               type: "POST",
    	               url: url,
    	               data: $("#editContactPForm").serialize(), // serializes the form's elements.
    	               success: function(data)
    	               {
    	                   // show response from the servlet.
    	                   if (data == 0) {
    							toastr.error('Failed to Registered New Client!');
    						} else{

    								$("#alertMessage").addClass("HideThisElement");
    								$("#errorMessage").addClass("HideThisElement");
    								$('#EditContactPerson').modal('hide');
    								$('#contactPTable').DataTable().ajax.reload();
    								var name=document.querySelector('#editContactPForm #firstName').value+" "+document.querySelector('#editContactPForm #lastName').value;
    								document.querySelector('#contactPerson').value = name;
    								$("#contactPersonLbl").addClass("active");
    								document.querySelector('#contactPersonID').value = data;
    								document.getElementById("editContactPForm").reset();
    								$('#contactPerTableModal').modal('hide');
    								toastr.success('New Contact Person Registered Successfully!');
    						}
    	               }
    	    	});
//    	    }
            return false; // avoid to execute the actual submit of the form.
        	});	
//    	SubmitButtonRegisterAssistArchitect
        	
        	$("#SubmitButtonRegisterArchitect").click(function() {

            	var url = "../../../RegisterArchitectServlet"; // the script where you handle the form input.
//            	if (document.getElementById("companyName").value == "") {
//            		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//            		$("#alertMessage").removeClass("HideThisElement");
//        		} else if (document.getElementById("location").value == "") {
//            		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//            		$("#alertMessage").removeClass("HideThisElement");
//        		} else if (document.getElementById("contactNo").value == "") {
//            		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//            		$("#alertMessage").removeClass("HideThisElement");
//        		} else if (document.getElementById("website").value == "") {
//        			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Website is not selected !";
//        			$("#alertMessage").removeClass("HideThisElement");
//        		} else {
        	    	$.ajax({
        	               type: "POST",
        	               url: url,
        	               data: $("#editArchitectListForm").serialize(), // serializes the form's elements.
        	               success: function(data)
        	               {
        	                   // show response from the servlet.
        	                   if (data == 0) {
        							toastr.error('Failed to Registered New Client!');
        						} else{
        								$("#alertMessage").addClass("HideThisElement");
        								$("#errorMessage").addClass("HideThisElement");
        								$('#EditArchitectList').modal('hide');
        								$('#architectListTable').DataTable().ajax.reload();
        								$('#architectAssistListTable').DataTable().ajax.reload();
        								var name=document.querySelector('#editArchitectListForm #firstName').value+" "+document.querySelector('#editArchitectListForm #lastName').value;
        								document.querySelector('#acrhitectName').value = name;
        								$("#acrhitectNameLbl").addClass("active");
        								document.querySelector('#acrhitectNameID').value = data;
        								document.getElementById("editArchitectListForm").reset();
        								$('#ArchitectListModal').modal('hide');
        								toastr.success('New Architect Registered Successfully!');
        								
        								

        						}
        	               }
        	    	});
//        	    }
                return false; // avoid to execute the actual submit of the form.
            	});	
        	
    	
    	$("#SubmitButtonRegisterAssistArchitect").click(function() {

        	var url = "../../../RegisterArchitectServlet"; // the script where you handle the form input.
//        	if (document.getElementById("companyName").value == "") {
//        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Company Name is mandatory !";
//        		$("#alertMessage").removeClass("HideThisElement");
//    		} else if (document.getElementById("location").value == "") {
//        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Client Location is mandatory !";
//        		$("#alertMessage").removeClass("HideThisElement");
//    		} else if (document.getElementById("contactNo").value == "") {
//        		document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Contact Number is mandatory !";
//        		$("#alertMessage").removeClass("HideThisElement");
//    		} else if (document.getElementById("website").value == "") {
//    			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> Website is not selected !";
//    			$("#alertMessage").removeClass("HideThisElement");
//    		} else {
    	    	$.ajax({
    	               type: "POST",
    	               url: url,
    	               data: $("#editAssistArchitectListForm").serialize(), // serializes the form's elements.
    	               success: function(data)
    	               {
    	                   // show response from the servlet.
    	                   if (data == 0) {
    							toastr.error('Failed to Registered New Client!');
    						} else{
    								$("#alertMessage").addClass("HideThisElement");
    								$("#errorMessage").addClass("HideThisElement");
    								$('#EditAssistArchitectList').modal('hide');
    								$('#architectListTable').DataTable().ajax.reload();
    								$('#architectAssistListTable').DataTable().ajax.reload();
    								var name=document.querySelector('#editAssistArchitectListForm #firstName').value+" "+document.querySelector('#editAssistArchitectListForm #lastName').value;
    								document.querySelector('#asstArchitect').value = name;
    								$("#asstArchitectLbl").addClass("active");
    								document.querySelector('#asstArchitectID').value = data;
    								document.getElementById("editAssistArchitectListForm").reset();
    								$('#ArchitectAssistListModal').modal('hide');
    								toastr.success('New Architect Registered Successfully!');
    						}
    	               }
    	    	});
//    	    }
            return false; // avoid to execute the actual submit of the form.
        	});	
    	
    $("#SubmitButtonUpdate").click(function() {
    	var url = "../../../UpdateProject";
    	if (document.getElementById("selectedProjectIdPassedValue").value ==  "") {
			document.querySelector('#alertMessage').innerHTML = "<strong>Warning!</strong> selectedProjectId is not selected !";
			$("#alertMessage").removeClass("HideThisElement");
		} else {

	    	$.ajax({
	               type: "POST",
	               url: url,
	               data: $("#newElementForm").serialize(), // serializes the form's elements.
	               success: function(data)
	               {
	                   // show response from the servlet.
	                   if (data == 0) {
		                	toastr.error('Failed to Update Project Details !');
						} else {
							window.location.href = 'projectRoomsList.jsp?selectedProjectId='+document.querySelector('#selectedProjectIdPassedValue').value;
							toastr.success('Project Details Updated Successfully !');
						}
	               }
	    	});
	    }
        return false; // avoid to execute the actual submit of the form.
    	});
	
    function loadProjectRegistrationForm() {
    	$('#selectedProjectId').val(generator.generate());
    	$("#ProjectRegistrationForm").removeClass("HideThisElement");
    	$("#ProjectListTable").addClass("HideThisElement");
	}
    
    function unloadProjectRegistrationForm() {
    	$('#selectedProjectId').val("");
    	$('#selectedProjectIdPassedValue').val(null);
    	$("#ProjectRegistrationForm").addClass("HideThisElement");
    	$("#ProjectListTable").removeClass("HideThisElement");
    	return false;
	}
    
    function loadBlankform() {
    	document.getElementById("newClientForm").reset();
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('#PriceTable input[type="text"]').val('');
    	$('#PriceTable input[type="number"]').val('');
    	$('.mdb-select').material_select('destroy');
    	$('.mdb-select').material_select();
//    	document.querySelector('#NewElement-modal-title').innerHTML = 'Register Project';
    	$('#newClientId').val(generator.generate());
    	$('#newContactPersonId').val(generator.generate());
    	$('#newClientAddressId').val(generator.generate());
    	$('#RegisterNewClient').modal('show');
    }
    
    function loadArchitectform(){
    	document.getElementById("newArchitectForm").reset();
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('.mdb-select').material_select('destroy');
    	$('.mdb-select').material_select();
    	document.querySelector('#NewElement-modal-title').innerHTML = 'Register New Architect';
    	$('#newArchitectId').val(generator.generate());
    	$('#newCompanyId').val(generator.generate());
    	$('#RegisterNewArchitect').modal('show');
    }
    
    function loadContactPform(){
    	document.getElementById("editContactPForm").reset();
    	if ($('#clientID').val()  !== "") {
    		$('#selectedClientIdCntctPmod').val($('#clientID').val());
    	}
    	else {
			console.log("Id not set");
		}
    	$('#newContctPId').val(generator.generate());
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('.mdb-select').material_select('destroy');
    	$('.mdb-select').material_select();
    	document.querySelector('#EditContactPerson #NewElement-modal-title').innerHTML = 'Register New Contact Person';
    	$('#EditContactPerson').modal('show');
    }
    
    function loadArchitectListform(){
    	document.getElementById("editArchitectListForm").reset();
    	if ($('#architectID').val()  !== "") {
    		$('#selectedArchitectListId').val($('#architectID').val());
    	}
    	else {
			console.log("Id not set");
		}
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('.mdb-select').material_select('destroy');
    	$('.mdb-select').material_select();
    	document.querySelector('#EditArchitectList #NewElement-modal-title').innerHTML = 'Register New Architect';
    	$('#newArchitectIdMod').val(generator.generate());
    	$('#EditArchitectList').modal('show');
    }
    
    
    function loadArchitectAssistListform(){
    	document.getElementById("editArchitectListForm").reset();
    	if ($('#architectID').val()  !== "") {
    		$('#selectedAssistArchitectListId').val($('#architectID').val());
    	}
    	else {
			console.log("Id not set");
		}
    	$("#alertMessage").addClass("HideThisElement");
    	$("#errorMessage").addClass("HideThisElement");
    	$('.mdb-select').material_select('destroy');
    	$('.mdb-select').material_select();
    	document.querySelector('#NewElement-modal-title').innerHTML = 'Register New Architect Assistance';
    	$('#newArchitectAssistIdMod').val(generator.generate());
    	$('#EditAssistArchitectList').modal('show');
    }
    
    
    function loadClientTable() {
    	$('#clientTableModal').modal('show');
	}
        $("#DeleteProductConfirmed").click(function() {

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
						$('#selectedEmployeeId').val('');
						$('#datatables').DataTable().ajax.reload();
						toastr.success('Project Deleted Successfully!');
					}
            }
		
		})
		return false; // avoid to execute the actual submit of the form.
    });
});