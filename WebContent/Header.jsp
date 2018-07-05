<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html">
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    
    <link rel="shortcut icon" href="http://localhost:8080/intelight/img/TitleImage.png">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="http://localhost:8080/intelight/css/bootstrap.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <link rel="stylesheet" href="http://localhost:8080/intelight/css/mdb.css">

    <link href="http://localhost:8080/intelight/css/style.css" rel="stylesheet">
    
    <script type="text/javascript">
	function onloadBody() {
		$.ajax({
			url:"http://localhost:8080/intelight/CheckIsLogged",
			type:"GET",
			success:function(data){
				if(data.indexOf("0")>=0){
					 window.location.replace('http://localhost:8080/intelight/LogOut');		
				}
			},
			error:function(data){
				if(data.indexOf("0")>=0){
					 window.location.replace('http://localhost:8080/intelight/LogOut');		
				}
			}		
		}); 
	}
	setInterval(function(){
		$.ajax({
			url:"http://localhost:8080/intelight/CheckIsLogged",
			type:"GET",
			success:function(data){
				console.log(data);
				if(data == 0){
					alert("In If");
					 window.location.replace('http://localhost:8080/intelight/');
				}
				/* else if(data == 1)
				{
					alert("in else of suc");
				} */
			},
			error:function(data){
				 window.location.replace('http://localhost:8080/intelight/');	
			}		
		}); 
	}, 3600001);
</script>
    
</head>

<body class="fixed-sn white-skin" onload="onloadBody();">
<header>

        <!-- Sidebar navigation -->
        <ul id="slide-out" class="side-nav fixed sn-bg-1 custom-scrollbar">
            <!-- Logo -->
            <li class="logo-sn waves-effect">
                <div class=" text-center">
                    <a href="http://localhost:8080/intelight/HomePage.jsp" class="pl-0"><img src="http://localhost:8080/intelight/img/CompanyLogo.png" class="CompanyLogo" alt="Company Logo"></a>
                </div>
            </li>
            <!--/. Logo -->

            <!--Search Form-->
            <!-- <li>
                <form class="search-form" role="search">
                    <div class="form-group waves-effect">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                </form>
            </li> -->
            <!--/.Search Form-->
            <!-- Side navigation links -->
            <li>
                <ul class="collapsible collapsible-accordion">
                    <!-- <li id="11815511" class=""><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-cogs"></i>&nbsp&nbsp&nbsp Admin<i class="fa fa-angle-down rotate-icon"></i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li id="11225144" class=""><a href="http://localhost:8080/intelight/JSP/Admin/Employee/Employee.jsp" class="waves-effect">Employees</a>
                                </li>
                                <li id="71915977" class=""><a href="http://localhost:8080/intelight/JSP/Admin/Hsn/Hsn.jsp" class="waves-effect">HSN ID</a>
                                </li>
                                <li id="03334141" class=""><a href="http://localhost:8080/intelight/JSP/Admin/Legend/legendEditor.jsp" class="waves-effect">Legends</a>
                                </li>
                                <li id="uacLink" class="HideThisElement"><a href="http://localhost:8080/intelight/GivingClearance.jsp" class="waves-effect">UAC</a>
                                </li>
                            </ul>
                        </div>
                    </li> -->
                    <li id="71755707" class=""><a class="collapsible-header waves-effect arrow-r"><i class="fab fa-product-hunt"></i>&nbsp&nbsp&nbsp Product<i class="fa fa-angle-down rotate-icon"></i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li id="15321553" class=""><a href="http://localhost:8080/intelight/JSP/Inventory/Product/Profile.jsp" class="waves-effect">Linear Profile</a>
                                </li>
                                <li id="11527255" class=""><a href="http://localhost:8080/intelight/JSP/Inventory/Product/SMPS.jsp" class="waves-effect">Power Supply (SMPS)</a>
                                </li>
                                <li id="21522278" class=""><a href="http://localhost:8080/intelight/JSP/Inventory/Product/LedStrips.jsp" class="waves-effect">Flexible Strip</a>
                                </li>
                                <li id="21225521" class=""><a href="http://localhost:8080/intelight/JSP/Inventory/Product/Drivers.jsp" class="waves-effect">Drivers</a>
                                </li>
                                <!-- <li id="57222444" class=""><a href="http://localhost:8080/intelight/JSP/Inventory/Product/ImageUpload.jsp" class="waves-effect">Upload Images</a>
                                </li> -->
                                <li id="" class=""><a href="http://localhost:8080/intelight/JSP/Inventory/Product/SpotLight.jsp" class="waves-effect">Spot Light</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- <li id="23513553" class=""><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-archive"></i>&nbsp&nbsp&nbsp Inventory<i class="fa fa-angle-down rotate-icon"></i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li id="55475567" class=""><a href="http://localhost:8080/intelight/JSP/Inventory/Stock/StockIn.jsp" class="waves-effect">Stock In</a>
                                </li>
                                <li id="58524545" class=""><a href="http://localhost:8080/intelight/JSP/Inventory/Stock/StockOut.jsp" class="waves-effect">Stock Out</a>
                                </li>
                                <li id="22221552" class=""><a href="http://localhost:8080/intelight/JSP/Inventory/Stock/AvailableStock.jsp" class="waves-effect">Available Stock</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li id="55758588" class=""><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-users"></i>&nbsp&nbsp&nbsp CRM<i class="fa fa-angle-down rotate-icon"></i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li id="41337755" class=""><a href="http://localhost:8080/intelight/JSP/CRM/Client/Client.jsp" class="waves-effect">Clients</a>
                                </li>
                                <li id="65011111" class=""><a href="http://localhost:8080/intelight/JSP/CRM/Architect/ArchitectCompany.jsp" class="waves-effect">Architects</a>
                                </li>
                                <li id="71252521" class=""><a href="http://localhost:8080/intelight/JSP/CRM/Electrician/Electrician.jsp" class="waves-effect">Contractors</a>
                                </li>
                                <li id="22219657" class=""><a href="http://localhost:8080/intelight/JSP/CRM/Vendor/ListVendor.jsp" class="waves-effect">Vendors</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li id="23251656" class=""><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-building"></i>&nbsp&nbsp&nbsp Projects<i class="fa fa-angle-down rotate-icon"></i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li id="73232551" class=""><a href="http://localhost:8080/intelight/JSP/Project/ProjectInfo/project.jsp" class="waves-effect">Projects</a>
                                </li>
                                <li id="29326683" class=""><a href="http://localhost:8080/intelight/JSP/Project/ProjectInfo/project.jsp?val=2" class="waves-effect">New Quotation</a>
                                </li>
                                <li id="12227151" class=""><a href="http://localhost:8080/intelight/JSP/Project/Quotation/listQuotation.jsp" class="waves-effect">List Quotation</a>
                                </li>
                                <li><a href="http://localhost:8080/intelight/JSP/Project/ProjectInfo/project.jsp?val=4" class="waves-effect">Generate Invoice</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li id="23151777" class=""><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-briefcase"></i>&nbsp&nbsp&nbsp Orders<i class="fa fa-angle-down rotate-icon"></i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li id="50131821" class=""><a href="http://localhost:8080/intelight/JSP/Project/ProjectInfo/project.jsp?val=3" class="waves-effect">New Order</a>
                                </li>
                                <li id="21551221" class=""><a href="http://localhost:8080/intelight/JSP/Project/Order/ListOrder.jsp" class="waves-effect">View Order</a>
                                </li>
                                <li id="57211771" class=""><a href="http://localhost:8080/intelight/JSP/Project/Order/OrderStatus.jsp" class="waves-effect">Order Status</a>
                                </li>
                                <li id="19559753" class=""><a href="http://localhost:8080/intelight/JSP/Project/Order/OrderStatus.jsp?type=comp" class="waves-effect">Completed Orders</a>
                                </li>
                                <li id="31077515" class=""><a href="http://localhost:8080/intelight/JSP/Project/Order/OrderStatus.jsp?type=pending" class="waves-effect">Pending Orders</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li id="66115333" class=""><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-shopping-cart"></i>&nbsp&nbsp&nbsp Purchase Orders<i class="fa fa-angle-down rotate-icon"></i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li id="53415353" class=""><a href="http://localhost:8080/intelight/JSP/Project/PurchaseOrder/PurchaseOrderStatus.jsp" class="waves-effect">Purchase Order Status</a>
                                </li>
                                <li id="57305223" class=""><a href="http://localhost:8080/intelight/JSP/Project/PurchaseOrder/ListPurchaseOrder.jsp" class="waves-effect">Purchase Order</a>
                                </li>
                                <li id="95952351" class=""><a href="http://localhost:8080/intelight/JSP/Project/PurchaseOrder/UpdatePurchase.jsp" class="waves-effect">Fulfill Purchase Order</a>
                                </li>
                            </ul>
                        </div>
                    </li> -->
                </ul>
            </li>
            <div class="sidenav-bg mask-strong"></div>
        </ul>
        
        <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav">
            <!-- SideNav slide-out button -->
            <div class="float-left">
                <a href="#" data-activates="slide-out" class="button-collapse black-text"><i class="fa fa-bars"></i></a>
            </div>
            <div class="breadcrumb-dn mr-auto">
                <p id="pageTitle" class="increaseWeight"></p>
            </div>

            <ul class="nav navbar-nav nav-flex-icons ml-auto">
                <!-- <li class="nav-item dropdown notifications-nav">
                    <a class="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <span class="badge red">3</span> <i class="fa fa-bell"></i>
                        <span class="d-none d-md-inline-block">Notifications</span>
                    </a>
                    <div class="dropdown-menu dropdown-info" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">
                            <i class="fa fa-money mr-2" aria-hidden="true"></i>
                            <span>New order received</span>
                            <span class="float-right"><i class="fa fa-clock-o" aria-hidden="true"></i> 13 min</span>
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fa fa-money mr-2" aria-hidden="true"></i>
                            <span>New order received</span>
                            <span class="float-right"><i class="fa fa-clock-o" aria-hidden="true"></i> 33 min</span>
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fa fa-line-chart mr-2" aria-hidden="true"></i>
                            <span>Your campaign is about to end</span>
                            <span class="float-right"><i class="fa fa-clock-o" aria-hidden="true"></i> 53 min</span>
                        </a>
                    </div>
                </li> -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle waves-effect" href="#" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-user"></i> <span class="clearfix d-none d-sm-inline-block">${userName}</span></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <input type="hidden" name="employeeId" id="employeeId" value="<%= session.getAttribute("userId") %>">
                        <input type="hidden" name="employeeDeptId" id="employeeDeptId" value="<%= session.getAttribute("Department") %>">
                        <a class="dropdown-item" href="#">My account</a>
                        <a class="dropdown-item" href="http://localhost:8080/intelight/JSP/Admin/Employee/ChangePassword.jsp">Change Password</a>
                        <a class="dropdown-item" href="http://localhost:8080/intelight/LogOut">Log Out</a>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
  
    <script src="http://localhost:8080/intelight/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="http://localhost:8080/intelight/js/popper.min.js"></script>
    <script type="text/javascript" src="http://localhost:8080/intelight/js/bootstrap.js"></script>
    <script type="text/javascript" src="http://localhost:8080/intelight/js/mdb.min.js"></script>
    
    <script type="text/javascript" src="http://localhost:8080/intelight/js/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="http://localhost:8080/intelight/js/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.4.0/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src="http://localhost:8080/intelight/JavaScripts/Header.js"></script>
    
    <script>
        $(".button-collapse").sideNav();

        var container = document.getElementById('slide-out');
        Ps.initialize(container, {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
	    
        function IDGenerator() {
     		 this.length = 8;
     		 this.timestamp = +new Date;
     		 
     		 var _getRandomInt = function( min, max ) {
     			return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
     		 }
     		 
     		 this.generate = function() {
     			 var ts = this.timestamp.toString();
     			 var parts = ts.split( "" ).reverse();
     			 var id = "";
     			 
     			 for( var i = 0; i < this.length; ++i ) {
     				var index = _getRandomInt( 0, parts.length - 1 );
     				id += parts[index];	 
     			 }
     			 return id;
     		 }
     	 }
    </script>
</body>
</html>