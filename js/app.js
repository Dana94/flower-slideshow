let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
let imagePlace = document.getElementById('img-place');
let image = document.getElementsByClassName('flower');

let images = ['blue', 'yellow', 'purple', 'rainbow'];
let index = 0;


// function resize(){
// 	if (image[0].height > image[0].width){
// 			console.log('y');
// 			$('#img-place').css('margin-top', -30);
// 			$("#img-place").css('height', 500);
// 		}
// 		else{
// 			console.log('n');
// 			$('#img-place').css('padding-top', 30);
// 			$("#img-place").css('height', 450);
// 		}
//  }

function moveRight(){
	$("#img-place").fadeOut(1000, function(){
		index++;
		if(index == images.length){
			index = 0;
		}
		image[0].setAttribute('src', "images/" + images[index] + "-rose.jpg");

		if (image[0].height > image[0].width){
			console.log('y');
			$('#img-place').css('margin-top', 0);
			$("#img-place").css('height', 555);
		}
		else{
			console.log('n');
			$('#img-place').css('padding-top', 60);
			// $('#img-place').css('padding-bottom', -60);
			$("#img-place").css('height', 570);
		}
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

//window.addEventListener('load',resize);
//window.addEventListener('load', startTimer);

//leftButton.addEventListener('click',resize);
leftButton.addEventListener('click', moveLeft);

//rightButton.addEventListener('click', resize);
rightButton.addEventListener('click', moveRight);

