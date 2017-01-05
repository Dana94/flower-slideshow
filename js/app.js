let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
let imagePlace = document.getElementById('img-place');

let images = ['yellow', 'blue', 'purple', 'rainbow'];
let image = '';
let index = 0;

// function resize(img){
// 	if (img.width > img.height){
// 		img.style.width = 800px;
// 		img.height = 

// 	}

// }

leftButton.addEventListener('click', function(){
	$("#img-place").fadeOut(1000, function(){
		index--;
		if(index < 0){
			index = images.length - 1;
		}
		$(this).html('<img id="flower" class="img-responsive" src="images/' + images[index] + '-rose.jpg">');
	}); 
	$("#img-place").fadeIn(2000);
});

rightButton.addEventListener('click', function(){ 
	$("#img-place").fadeOut(1000, function(){
		index++;
		if(index == images.length){
			index = 0;
		}
		$(this).html('<img id="flower" class="img-responsive" src="images/' + images[index] + '-rose.jpg">');
	}); 
	$("#img-place").fadeIn(2000);
});