/**
 * @author jiacc
 */
function drawLine(canvas_name) {
	//alert(canvas_name);
	var c = document.getElementById(canvas_name);
	var cxt = c.getContext("2d");
	cxt.moveTo(0, 0);
	cxt.lineTo(320, 120);
	cxt.lineTo(0, 240);
	cxt.stroke();
}

function drawCircle(canvas_name) {
	var c = document.getElementById(canvas_name);
	var cxt = c.getContext("2d");
	cxt.fillStyle = "#faae0f";
	cxt.beginPath();
	cxt.arc(160, 120, 50, 0, Math.PI * 2, true);
	cxt.closePath();
	cxt.fill();
}

function drawChange(canvas_name) {
	var c = document.getElementById(canvas_name);
	var cxt = c.getContext("2d");
	var grd = cxt.createLinearGradient(0, 0, 175, 50);
	grd.addColorStop(0, "#FF0000");
	grd.addColorStop(1, "#00FF00");
	cxt.fillStyle = grd;
	cxt.fillRect(0, 0, 175, 50);
}

function drawPicture(canvas_name) {
	var c = document.getElementById(canvas_name);
	var cxt = c.getContext("2d");
	var img = new Image();
	img.src = "../images/flower.png";
	cxt.drawImage(img, 0, 0);
}