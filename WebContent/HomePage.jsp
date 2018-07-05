<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    
    <title>Home</title>
    
    <link rel="shortcut icon" href="img/TitleImage.png">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Material Design Bootstrap -->
    <link rel="stylesheet" href="css/mdb.css">

    <!-- Your custom styles (optional) -->
    <!-- <link href="css/style.css" rel="stylesheet"> -->
    
</head>

<body class="fixed-sn white-skin">

    <!--Main Navigation-->
    <!--Main Navigation-->
	<%@ include file="Header.jsp" %>
    <!--Main layout-->
    <!-- <main>
        <div class="container-fluid">

            Section: Intro
            <section class="mt-lg-5">

                Grid row
                <div class="row">

                    Grid column
                    <div class="col-xl-3 col-md-6 mb-r">

                        Card
                        <div class="card card-cascade cascading-admin-card">

                            Card Data
                            <div class="admin-up">
                                <i class="fa fa-money success-color"></i>
                                <div class="data">
                                    <p>SALES</p>
                                    <h4>&#8377 2,000.00</h4>
                                </div>
                            </div>
                            /.Card Data

                            Card content
                            <div class="card-body">
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                Text
                                <p class="card-text">Better than last month (15%)</p>
                            </div>
                            /.Card content

                        </div>
                        /.Card

                    </div>
                    Grid column

                    
                </div>
                Grid row

            </section>
            Section: Intro

            <div style="height: 5px"></div>

            Section: Main panel
            <section class="mb-5">

                Card
                <div class="card card-cascade narrower">

                    Section: Chart
                    <section>

                        Grid row
                        <div class="row">

                            Grid column
                            <div class="col-xl-5 col-lg-12 mr-0">

                                Card image
                                <div class="view gradient-card-header blue-gradient">
                                    <h2 class="h2-responsive mb-0">Sales</h2>
                                </div>
                                /Card image

                                Card content
                                <div class="card-body pb-0">

                                    Panel data
                                    <div class="row card-body pt-3">

                                        First column
                                        <div class="col-md-6">

                                            Date select
                                            <p class="lead"><span class="badge info-color p-2">Data range</span></p>
                                            <select class="mdb-select colorful-select dropdown-info">
                                            <option value="" disabled selected>Choose time period</option>
                                            <option value="1">Today</option>
                                            <option value="2">Yesterday</option>
                                            <option value="3">Last 7 days</option>
                                            <option value="3">Last 30 days</option>
                                            <option value="3">Last week</option>
                                            <option value="3">Last month</option>
                                        </select>

                                            Date pickers
                                            <p class="lead mt-5"><span class="badge info-color p-2">Custom date</span></p>
                                            <br>
                                            <div class="md-form">
                                                <input placeholder="Selected date" type="text" id="from" class="form-control datepicker">
                                                <label for="date-picker-example">From</label>
                                            </div>
                                            <div class="md-form">
                                                <input placeholder="Selected date" type="text" id="to" class="form-control datepicker">
                                                <label for="date-picker-example">To</label>
                                            </div>

                                        </div>
                                        /First column

                                        Second column
                                        <div class="col-md-6 text-center">

                                            Summary
                                            <p>Total sales: <strong>&#8377 2,000.00</strong>
                                                <button type="button" class="btn btn-info btn-sm p-2" data-toggle="tooltip" data-placement="top" title="Total sales in the given period"><i class="fa fa-question"></i></button>
                                            </p>
                                            <p>Average sales: <strong>&#8377 100.00</strong>
                                                <button type="button" class="btn btn-info btn-sm p-2" data-toggle="tooltip" data-placement="top" title="Average daily sales in the given period"><i class="fa fa-question"></i></button>
                                            </p>

                                            Change chart
                                            <span class="min-chart my-4" id="chart-sales" data-percent="38"><span class="percent"></span></span>
                                            <h5>
                                                <span class="badge green p-2">Change <i class="fa fa-arrow-circle-up ml-1"></i></span>
                                                <button type="button" class="btn btn-info btn-sm p-2" data-toggle="tooltip" data-placement="top" title="Percentage change compared to the same period in the last year"><i class="fa fa-question"></i>
                                            </button>
                                            </h5>
                                        </div>
                                        /Second column

                                    </div>
                                    /Panel data

                                </div>
                                /.Card content

                            </div>
                            Grid column

                            Grid column
                            <div class="col-xl-7 col-lg-12 mb-r">

                                Card image
                                <div class="view gradient-card-header indigo">

                                    Chart
                                    <canvas id="lineChart" height="175"></canvas>

                                </div>
                                /Card image

                            </div>
                            Grid column

                        </div>
                        Grid row

                    </section>
                    Section: Chart
                    
                </div>
                /.Card

            </section>
            Section: Main panel

            Section: Cascading panels
            <section class="mb-3">

                Grid row
                <div class="row">

                    Grid column
                    <div class="col-lg-4 col-md-12 mb-r">


                        Card
                        <div class="card card-cascade narrower">

                            Card image
                            <div class="view gradient-card-header info-color">
                                <h4 class="mb-0">Things to improve</h4>
                            </div>
                            /Card image

                            Card content
                            <div class="card-body text-center">

                                <div class="list-group list-panel">
                                    <a href="#" class="list-group-item d-flex justify-content-between dark-grey-text">Issue 1 <i class="fa fa-wrench ml-auto" data-toggle="tooltip" data-placement="top" title="Click to fix"></i></a>
                                    <a href="#" class="list-group-item d-flex justify-content-between dark-grey-text">Issue 2<i class="fa fa-wrench ml-auto" data-toggle="tooltip" data-placement="top" title="Click to fix"></i></a>
                                    <a href="#" class="list-group-item d-flex justify-content-between dark-grey-text">Issue 3 <i class="fa fa-wrench ml-auto" data-toggle="tooltip" data-placement="top" title="Click to fix"></i></a>
                                    <a href="#" class="list-group-item d-flex justify-content-between dark-grey-text">Issue 4<i class="fa fa-wrench ml-auto" data-toggle="tooltip" data-placement="top" title="Click to fix"></i></a>
                                    <a href="#" class="list-group-item d-flex justify-content-between dark-grey-text">Issue 5 <i class="fa fa-wrench ml-auto" data-toggle="tooltip" data-placement="top" title="Click to fix"></i></a>
                                </div>

                            </div>
                            /.Card content

                        </div>
                        /.Card


                    </div>
                    Grid column

                    Grid column
                    <div class="col-lg-4 col-md-6 mb-r">

                        Card
                        <div class="card card-cascade narrower">

                            Card image
                            <div class="view gradient-card-header blue-gradient">
                                <h4 class="mb-0">Tasks to do</h4>
                            </div>
                            /Card image

                            Card content
                            <div class="card-body text-center">

                                <div class="list-group list-panel">
                                    <a id="task1" onclick="$(this).css('display', 'none');" class="list-group-item d-flex justify-content-between dark-grey-text">Task 1 <i class="fa fa-check ml-auto" data-toggle="tooltip" data-placement="top" title="Click to Mark Completed"></i></a>
                                    <a id="task2" onclick="$(this).css('display', 'none');" class="list-group-item d-flex justify-content-between dark-grey-text">Task 2<i class="fa fa-check ml-auto" data-toggle="tooltip" data-placement="top" title="Click to Mark Completed"></i></a>
                                    <a id="task3" onclick="$(this).css('display', 'none');" class="list-group-item d-flex justify-content-between dark-grey-text">Task 3 <i class="fa fa-check ml-auto" data-toggle="tooltip" data-placement="top" title="Click to Mark Completed"></i></a>
                                    <a id="task4" onclick="$(this).css('display', 'none');" class="list-group-item d-flex justify-content-between dark-grey-text">Task 4<i class="fa fa-check ml-auto" data-toggle="tooltip" data-placement="top" title="Click to Mark Completed"></i></a>
                                    <a id="task5" onclick="$(this).css('display', 'none');" class="list-group-item d-flex justify-content-between dark-grey-text">Task 5 <i class="fa fa-check ml-auto" data-toggle="tooltip" data-placement="top" title="Click to Mark Completed"></i></a>
                                </div>

                            </div>
                            /.Card content

                        </div>
                        /.Card

                    </div>
                    Grid column

                    Grid column
                    <div class="col-lg-4 col-md-6 mb-r">

                        Card
                        <div class="card card-cascade narrower">

                            Card image
                            <div class="view gradient-card-header indigo">
                                <h4 class="mb-0">Statistics</h4>
                            </div>
                            /Card image

                            Card content
                            <div class="card-body text-center">

                                <div class="list-group list-panel">
                                    <a href="#" class="list-group-item d-flex justify-content-between dark-grey-text">Observation 1 <i class="fa fa-info ml-auto" data-toggle="tooltip" data-placement="top" title="Click to see details"></i></a>
                                    <a href="#" class="list-group-item d-flex justify-content-between dark-grey-text">Observation 2<i class="fa fa-info ml-auto" data-toggle="tooltip" data-placement="top" title="Click to see details"></i></a>
                                    <a href="#" class="list-group-item d-flex justify-content-between dark-grey-text">Observation 3 <i class="fa fa-info ml-auto" data-toggle="tooltip" data-placement="top" title="Click to see details"></i></a>
                                    <a href="#" class="list-group-item d-flex justify-content-between dark-grey-text">Observation 4<i class="fa fa-info ml-auto" data-toggle="tooltip" data-placement="top" title="Click to see details"></i></a>
                                    <a href="#" class="list-group-item d-flex justify-content-between dark-grey-text">Observation 5 <i class="fa fa-info ml-auto" data-toggle="tooltip" data-placement="top" title="Click to see details"></i></a>
                                </div>

                            </div>
                            /.Card content

                        </div>
                        /.Card

                    </div>
                    Grid column

                </div>
                Grid row

            </section>
            Section: Cascading panels


        </div>
    </main>
    Main layout
 -->
    <!--Footer-->
    <footer class="page-footer center-on-small-only pt-0 mt-5">

        <!--Copyright-->
        <div class="footer-copyright">
            <div class="container-fluid">
                <!-- &copy; 2017 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a> -->

            </div>
        </div>
        <!--/.Copyright-->

    </footer>
    <!--/.Footer-->

    <script>
        // Data Picker Initialization
        $('.datepicker').pickadate();

        // Material Select Initialization
        $(document).ready(function () {
            $('.mdb-select').material_select();
        });

        // Tooltips Initialization
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    </script>

    <!-- Charts -->
    <!-- <script>
        // Small chart
        $(function () {
            $('.min-chart#chart-sales').easyPieChart({
                barColor: "#4caf50",
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        });
		
        
        var actualSale = [55, 49, 83, 87, 50, 53, 56];
        var targets = [65, 59, 80, 81, 56, 55, 40];
        var xAxisLables = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
        
        //Main chart
        var ctxL = document.getElementById("lineChart").getContext('2d');
        var myLineChart = new Chart(ctxL, {
            type: 'line',
            data: {
                labels: xAxisLables,
                datasets: [{
                    label: "Target",
                    fillColor: "rgba(255,0,0,0.2)",
                    borderColor: '#fffae6',
                    data: targets
                },{
					label: "Actual Sale",
                    fillColor: "#fff",
					backgroundColor: 'rgba(230, 255, 238, .3)',
					borderColor: '#b3ffcc',
					data: actualSale
				}]
            },
            
            options: {
                legend: {
					labels: {
						fontColor: "#fff",
					}
				},
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: true,
                            color: "rgba(255,255,255,.25)"
                        },
                        ticks: {
                        	label: "in Thousands",
                        	fontColor: "#fff",
                        },
                    }],
                    yAxes: [{
                        display: true,
                        
                        gridLines: {
                            display: true,
                            color: "rgba(255,255,255,.25)"
                        },
                        ticks: {
                        	beginAtZero:true,
                        	fontColor: "#fff",
                        },
                    }],
                }
            }
        });
    </script> -->

</body>

</html>