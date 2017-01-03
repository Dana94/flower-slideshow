let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
let imagePlace = document.getElementById('img-place');

let images = ['yellow', 'blue', 'purple', 'rainbow'];
let index = 0;

// function resize(img){
// 	if (img.width > img.height){
// 		img.style.width = 800px;
// 		img.height = 

// 	}

// }

leftButton.addEventListener('click', function(){
	if(index < 0){
		index = images.length - 1;
	}

	imagePlace.innerHTML = '<img class="img-responsive" src="images/' + images[index] + '-rose.jpg">';
	index--;
});

rightButton.addEventListener('click', function(){
	if(index == images.length){
		index = 0;
	}

	imagePlace.innerHTML = '<img class="img-responsive" src="images/' + images[index] + '-rose.jpg">';
	index++;
});