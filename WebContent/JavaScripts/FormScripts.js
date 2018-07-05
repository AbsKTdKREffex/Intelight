/**
 * 
 */

var textBoxes = document.querySelectorAll('.ElementDiv input')
var textAreas = document.querySelectorAll('.ElementDiv textarea')

for(i = 0; i < textAreas.length; i++){
	textAreas[i].addEventListener('click', activateItem);
	textAreas[i].addEventListener('focus', activateItem);
	textAreas[i].addEventListener('focusout', checkElementData);
}

for(i = 0; i < textBoxes.length; i++){
	textBoxes[i].addEventListener('click', activateItem);
	textBoxes[i].addEventListener('focus', activateItem);
	textBoxes[i].addEventListener('focusout', checkElementData);
}


//to make place holder as field lable
function activateItem(e){
	var fLable = document.querySelector('#fLable');
	var placeHolder = this.getAttribute('placeholder');
	this.removeAttribute('placeholder');
	//to get position of element
	//var divOffset = offset(this);
	if(null !== placeHolder){
		this.insertAdjacentHTML('beforebegin', '<label id="fLable' + this.getAttribute('id') + '" class="fLable">' + placeHolder + '</label>');
	}
}

function checkElementData(e) {
	if (!this.value.length && !this.classList.contains("datePicker")) {
		var fLable = document.querySelector('#fLable' + this.getAttribute('id'));
		$(this).attr("placeholder", fLable.innerHTML);
		fLable.remove();
	}
}

function checkDropDown(e) {
	if (this.classList.contains("selectpicker")) {
		var fLable = document.querySelector('#fLable' + this.getAttribute('id'));
		if (this.value == "placeholder") {
			$(fLable).addClass("dropDownLable");
		} else {
			$(fLable).removeClass("dropDownLable");
		}
		
	}
}

//Function to get relative position of the element
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}