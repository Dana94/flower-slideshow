let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
let timerButton = document.getElementById('timer-control');
let imagePlace = document.getElementById('img-place');
let smallFlowers;

let gallery = document.getElementById('gallery');
let galleryRows = document.getElementsByClassName('gallery-row');
let html = "";

let gridButton = document.getElementById('grid-layout');
let columnButton; 

let gridForm = false;

let changeGallery = document.getElementById('change-gallery');

let uploadButton = document.getElementById('upload');

let image = document.getElementsByClassName('flower');

let images = ['rainbow-rose.jpg', 'yellow-rose.jpg', 'purple-rose.jpg', 'blue-rose.jpg', 'frost-rose.jpg', 'pink-rose.jpg', 'white-rose.jpg', 'pale-rose.jpg'];
let index = 0;

//filling the gallery in column or grid format

//gallery is displayed in column format
function fillGalleryColumn(){
	$('#gallery').removeClass('col-lg-4 col-md-4 col-xs-4');
	$('#gallery').addClass('col-lg-2 col-md-2 col-xs-2');

	$('#frame').removeClass('col-lg-8 col-md-8 col-xs-8');
	$('#frame').addClass('col-lg-10 col-md-10 col-xs-10');

	changeGallery.innerHTML = '<button class="btn" id="grid-layout"><span class="glyphicon glyphicon-th" aria-hidden="true"></span></button>';
	gridButton = document.getElementById('grid-layout');
	gridButton.addEventListener('click', fillGalleryGrid);
	//////
	html = '<div class="row gallery-row">';
	for(let i = 0; i < images.length; i++){
		html += '<img class="img-responsive small-flower" src="images/' + images[i] + '" alt="'+ images[i] + '">';
	}
	html += '</div';
	$('#gallery').html(html);

	//making the images clickable
	smallFlowers = document.getElementsByClassName('small-flower');
	for(let i = 0; i < smallFlowers.length; i++){
		smallFlowers[i].addEventListener('click', function(){
			image[0].setAttribute('src', smallFlowers[i].getAttribute('src'));
		});
	}

	gridForm = false;
	
}


//gallery is displayed in grid format
function fillGalleryGrid(){
	$('#gallery').removeClass('col-lg-2 col-md-2 col-xs-2');
	$('#gallery').addClass('col-lg-4 col-md-4 col-xs-4');

	$('#frame').removeClass('col-lg-10 col-md-10 col-xs-10');
	$('#frame').addClass('col-lg-8 col-md-8 col-xs-8');

	changeGallery.innerHTML = '<button class="btn" id="column-layout"><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span></button>';
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
			html += '<div class="col-xs-3"> <img class="img-responsive small-flower" src="images/' + images[i] + '" alt="'+ images[i] + '"> </div>';
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
	//making the images clickable
	smallFlowers = document.getElementsByClassName('small-flower');
	for(let i = 0; i < smallFlowers.length; i++){
		smallFlowers[i].addEventListener('click', function(){
			image[0].setAttribute('src', smallFlowers[i].getAttribute('src'));
		});
	}

	gridForm = true;

}

//directions for moving through images
function moveRight(){
	$("#img-place").fadeOut(1000, function(){
		index++;
		if(index == images.length){
			index = 0;
		}
		image[0].setAttribute('src', "images/" + images[index] + "");	
	}); 
	$("#img-place").fadeIn(2000);
}

function moveLeft(){
	$("#img-place").fadeOut(1000, function(){
		index--;
		if(index < 0){
			index = images.length - 1;
		}
		image[0].setAttribute('src', "images/" + images[index] + "");
	}); 
	$("#img-place").fadeIn(2000);
};

//timer for automatic slideshow
let timer;

function startTimer(){
	timerButton.innerHTML = '<span class="glyphicon glyphicon-pause" aria-hidden="true"></span>';
	timer = window.setInterval(moveRight, 10000);
	timerButton.removeEventListener('click', startTimer);
	timerButton.addEventListener('click', stopTimer);
}

function stopTimer(){
	window.clearInterval(timer);
	timerButton.innerHTML = '<span class="glyphicon glyphicon-play" aria-hidden="true"></span>';
	timerButton.removeEventListener('click', stopTimer);
	timerButton.addEventListener('click', startTimer);
}

//not mine, slightly modified
//Source for handleFiles() code below:
//https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications#Using_hidden_file_input_elements_using_the_click()_method
function handleFiles() {
  let fileList = this.files;
  //let numFiles = fileList.length;

  for(let i = 0; i < fileList.length; i++){
  		images.push(fileList[i]);
  }
  console.log(images);
  
  //find out which gallery form is displayed, and reload it
  gridForm ? fillGalleryGrid() : fillGalleryColumn();
}
//end source code

//event listeners

window.addEventListener('load', startTimer);

window.addEventListener('load', fillGalleryColumn);

gridButton.addEventListener('click', fillGalleryGrid);

timerButton.addEventListener('click', stopTimer);

leftButton.addEventListener('click', moveLeft);

rightButton.addEventListener('click', moveRight);

//change layout according to screen size
// let div = document.getElementsByTagName('div');
// let width = window.innerWidth;
// let height = window.innerHeight;
// for(let i = 0; i < div.length; i++){
// 	div[i].height = height;
// 	div[i].width = width;
// }

//not mine, slightly modified
//Source for code below:
//https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications#Using_hidden_file_input_elements_using_the_click()_method

let fileElem = document.getElementById("fileElem");

uploadButton.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

fileElem.addEventListener("change", handleFiles, false);
//end source code