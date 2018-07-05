/*
 For basic page template
 	
 
 Created By : Aditya
 Designation : Analyst (IT)
 Organization : Effex Business Solutions Pvt Ltd
 Date : 27 Jun 2017
 Version : 1.0
 */

//Home menu click Event
$("#MenuHome").click(function() {
	$("#SubMenu1").addClass("HideThisArea");
	$("#SubMenu2").addClass("HideThisArea");
	$("#SubMenu3").addClass("HideThisArea");
	$("#SubMenu4").addClass("HideThisArea");
	$("#SubMenuUser").addClass("HideThisArea");
});


$("#Menu1").click(function() {
	document.getElementById('SubMenu1').classList.toggle("HideThisArea");
	$("#SubMenu2").addClass("HideThisArea");
	$("#SubMenu3").addClass("HideThisArea");
	$("#SubMenu4").addClass("HideThisArea");
	$("#SubMenuUser").addClass("HideThisArea");
});

$("#Menu2").click(function() {
	document.getElementById('SubMenu2').classList.toggle("HideThisArea");
	$("#SubMenu1").addClass("HideThisArea");
	$("#SubMenu3").addClass("HideThisArea");
	$("#SubMenu4").addClass("HideThisArea");
	$("#SubMenuUser").addClass("HideThisArea");
});

$("#Menu3").click(function() {
	document.getElementById('SubMenu3').classList.toggle("HideThisArea");
	$("#SubMenu1").addClass("HideThisArea");
	$("#SubMenu2").addClass("HideThisArea");
	$("#SubMenu4").addClass("HideThisArea");
	$("#SubMenuUser").addClass("HideThisArea");
});

$("#Menu4").click(function() {
	document.getElementById('SubMenu4').classList.toggle("HideThisArea");
	$("#SubMenu1").addClass("HideThisArea");
	$("#SubMenu2").addClass("HideThisArea");
	$("#SubMenu3").addClass("HideThisArea");
	$("#SubMenuUser").addClass("HideThisArea");
});


$("#MenuUser").click(function() {
	document.getElementById('SubMenuUser').classList.toggle("HideThisArea");
	$("#SubMenu1").addClass("HideThisArea");
	$("#SubMenu2").addClass("HideThisArea");
	$("#SubMenu3").addClass("HideThisArea");
	$("#SubMenu4").addClass("HideThisArea");
});