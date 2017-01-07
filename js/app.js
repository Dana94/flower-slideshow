let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
let imagePlace = document.getElementById('img-place');
let image = document.getElementsByClassName('flower');

let images = ['yellow', 'blue', 'purple', 'rainbow'];
let index = 0;

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
}

// function stopTimer(){
// 	window.clearInterval(timer);

// 	leftButton.removeEventListener('click', stopTimer);
// 	rightButton.removeEventListener('click', stopTimer);


// 	//document.addEventListener('click', startTimer);
// }

//window.addEventListener('load', startTimer);

leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);