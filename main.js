canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width = 150;
greencar_height = 200;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 10;
greencar_y = 600;

function add() {
	background_image_tag = new Image();
	background_image_tag.onload = uploadBackground;
	background_image.src = background_image;

	greencar_image_tag = new Image();
	greencar_image_tag.onload = uploadgreencar;
    greencar_image_tag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {

	ctx.drawImage(greencar_image_tag, greencar_x, greencar_y, greencar_width, greencar_height);


	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >= 0){
		greencar_y = greencar_y - 10;
		uploadgreencar();
		uploadBackground();
	}
}

function down()
{
	if(greencar_y <= 900){
		greencar_y = greencar_y + 10;
		uploadgreencar();
		uploadBackground();
	}
}

function left()
{
	if(greencar_x >= 0){
		greencar_x = greencar_x - 10;
		uploadgreencar();
		uploadBackground();
	}
}

function right()
{
	if(greencar_x <= 900){
		greencar_x = greencar_x + 10;
		uploadgreencar();
		uploadBackground();
	}
}
