let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
let timerButton = document.getElementById('timer-control');
let imagePlace = document.getElementById('img-place');
let gallery = document.getElementById('gallery-row');

let gridButton = document.getElementById('grid-layout');
let columnButton; 
let changeGallery = document.getElementById('change-gallery');


let image = document.getElementsByClassName('flower');

let images = ['rainbow', 'yellow', 'purple', 'blue', 'frost', 'pink', 'white'];
let index = 0;

function fillGallery(){
	for(let i = 0; i < images.length; i++){
		gallery.innerHTML += '<img class="img-responsive" src="images/' + images[i] + '-rose.jpg">';
	}
	
}

function changetoGrid(){
	$('#gallery').removeClass('col-xs-2');
	$('#gallery').addClass('col-xs-4');

	$('#frame').removeClass('col-xs-10');
	$('#frame').addClass('col-xs-8');

	changeGallery.innerHTML = '<button class="btn-lg" id="column-layout">column layout</button>';
	columnButton = document.getElementById('column-layout');
	columnButton.addEventListener('click', changetoColumn);
}

function changetoColumn(){
	$('#gallery').removeClass('col-xs-4');
	$('#gallery').addClass('col-xs-2');

	$('#frame').removeClass('col-xs-8');
	$('#frame').addClass('col-xs-10');

	changeGallery.innerHTML = '<button class="btn-lg" id="grid-layout">grid layout</button>';
	gridButton = document.getElementById('grid-layout');
	gridButton.addEventListener('click', changetoGrid);
}

function moveRight(){
	$("#img-place").fadeOut(1000, function(){
		index++;
		if(index == images.length){
			index = 0;
		}
		image[0].setAttribute('src', "images/" + images[index] + "-rose.jpg");	
	}); 
	$("#img-place").fadeIn(2000);
}

function moveLeft(){
	$("#img-place").fadeOut(1000, function(){
		index--;
		if(index < 0){
			index = images.length - 1;
		}
		image[0].setAttribute('src', "images/" + images[index] + "-rose.jpg");
	}); 
	$("#img-place").fadeIn(2000);
};

let timer;

function startTimer(){
	timer = window.setInterval(moveRight, 10000);
	timerButton.removeEventListener('click', startTimer);
	timerButton.addEventListener('click', stopTimer);
}

function stopTimer(){
	window.clearInterval(timer);

	timerButton.removeEventListener('click', stopTimer);
	timerButton.addEventListener('click', startTimer);
}

window.addEventListener('load', startTimer);

//window.addEventListener('load', fillGallery);

timerButton.addEventListener('click', stopTimer);

leftButton.addEventListener('click', moveLeft);

rightButton.addEventListener('click', moveRight);

gridButton.addEventListener('click', changetoGrid);