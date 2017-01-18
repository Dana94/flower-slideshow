let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
let timerButton = document.getElementById('timer-control');
let imagePlace = document.getElementById('img-place');

let gallery = document.getElementById('gallery');
let galleryRows = document.getElementsByClassName('gallery-row');
let html = "";

let gridButton = document.getElementById('grid-layout');
let columnButton; 
let changeGallery = document.getElementById('change-gallery');


let image = document.getElementsByClassName('flower');

let images = ['rainbow', 'yellow', 'purple', 'blue', 'frost', 'pink', 'white'];
let index = 0;

//filling the gallery in column and grid format

function fillGalleryColumn(){
	//changetocolumn method
	$('#gallery').removeClass('col-xs-4');
	$('#gallery').addClass('col-xs-2');

	$('#frame').removeClass('col-xs-8');
	$('#frame').addClass('col-xs-10');

	changeGallery.innerHTML = '<button class="btn-lg" id="grid-layout">grid layout</button>';
	gridButton = document.getElementById('grid-layout');
	gridButton.addEventListener('click', fillGalleryGrid);
	//////
	html = '<div class="row gallery-row">';
	for(let i = 0; i < images.length; i++){
		html += '<img class="img-responsive" src="images/' + images[i] + '-rose.jpg">';
	}
	html += '</div';
	$('#gallery').html(html);
	
}

function fillGalleryGrid(){
	//changetogrid method
	$('#gallery').removeClass('col-xs-2');
	$('#gallery').addClass('col-xs-4');

	$('#frame').removeClass('col-xs-10');
	$('#frame').addClass('col-xs-8');

	changeGallery.innerHTML = '<button class="btn-lg" id="column-layout">column layout</button>';
	columnButton = document.getElementById('column-layout');
	columnButton.addEventListener('click', fillGalleryColumn);
	//////
	let numberOfRows = Math.ceil(images.length/4);
	let rowNumber = 0;
	let imgCount = 0;
	let imgCountStop = 4;
	html = '';
	while(rowNumber < numberOfRows){
		html += '<div class="row gallery-row">';

		for(let i = imgCount; i < imgCountStop; i++){
			html += '<div class="col-xs-3"> <img class="img-responsive" src="images/' + images[i] + '-rose.jpg"> </div>';
		}

		html += '</div>';
		$('#gallery').html(html);
		imgCount += 4;
		imgCountStop += 4;
		if ((imgCountStop - 1) >= images.length){
			imgCountStop = images.length - imgCount;
			imgCountStop += imgCount;
		}
		
		rowNumber++;
	}	
}

//make images clickable

function clickableImages(){
	//get a query of all imgs in the gallery and loop through to add an event listener to each that will 
	//disply its image when clicked (and the slideshow will go from there?)
}

//changing the buttons for appropriate grid or column label

// function changetoGrid(){
// 	$('#gallery').removeClass('col-xs-2');
// 	$('#gallery').addClass('col-xs-4');

// 	$('#frame').removeClass('col-xs-10');
// 	$('#frame').addClass('col-xs-8');

// 	changeGallery.innerHTML = '<button class="btn-lg" id="column-layout">column layout</button>';
// 	columnButton = document.getElementById('column-layout');
// 	columnButton.addEventListener('click', changetoColumn);
// }

// function changetoColumn(){
// 	$('#gallery').removeClass('col-xs-4');
// 	$('#gallery').addClass('col-xs-2');

// 	$('#frame').removeClass('col-xs-8');
// 	$('#frame').addClass('col-xs-10');

// 	changeGallery.innerHTML = '<button class="btn-lg" id="grid-layout">grid layout</button>';
// 	gridButton = document.getElementById('grid-layout');
// 	gridButton.addEventListener('click', changetoGrid);
// }

//direction for moving through images

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

//timer for automatic slideshow

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

//event listeners

window.addEventListener('load', startTimer);

window.addEventListener('load', fillGalleryColumn);

gridButton.addEventListener('click', fillGalleryGrid);

timerButton.addEventListener('click', stopTimer);

leftButton.addEventListener('click', moveLeft);

rightButton.addEventListener('click', moveRight);
