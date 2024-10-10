function moveImage(imageID, newX, newY, rotation = 0, mirror = false)
{
	var imageToMove = document.getElementById(imageID);
	if (imageToMove)
	{
		imageToMove.offsetHeight; //Force Reflow
		
		//Move image to specified location
		imageToMove.style.left = newX + "px";
		imageToMove.style.top = newY + "px";
		
		//Transform (rotate/mirror)
		var transformValue = `rotate(${rotation}deg)`;
		if (mirror)
		{ 
			transformValue += ` scaleX(-1)`;
		}
		else
		{
			transformValue += ` scaleX(1)`;
		}
		imageToMove.style.transform = transformValue;		
		
	}
	else
	{
		console.error("Could not move image (Not found: " + imageID + ")");
	}
}

function moveTargetToCoords(targetID, newX, newY)
{
	//Move the target so that the center is on the selected coordinates
	var targetImage = document.getElementById(targetID);
	if (targetImage)
	{
		var targetPosInfo = targetImage.getBoundingClientRect();
		newX -= targetPosInfo.width / 2;
		newY -= targetPosInfo.height / 2;

		moveImage(targetID, newX, newY);
	}
	else
	{
		console.error("Could not move image (Not found: " + targetID + ")");
	}
}

function getElementCoords(elementID)
{
	let newX = 0;
	let newY = 0;
	let xString = document.getElementById(elementID).style.left;
	let yString = document.getElementById(elementID).style.top;
	newX = Number(xString.substring(0, xString.length-2));
	newY = Number(yString.substring(0, yString.length-2));	
	return [newX, newY];
}

function moveCharToTarget(charID, targetID, offsetX = 0, offsetY = 0)
{
	//move thar character sprite so that the sprite's feet are centered on the marker
	var imageToMove = document.getElementById(charID);
	var targetImage = document.getElementById(targetID);
	if (imageToMove && targetImage)
	{
		imageToMove.offsetHeight; //Force Reflow
		targetImage.offsetHeight;

		//Get target location and width
		var targetPosInfo = targetImage.getBoundingClientRect();
		var charPosInfo = imageToMove.getBoundingClientRect();
		//Set target coords to center of the target
		var targetX = getElementCoords(targetID)[0] + (targetPosInfo.width / 2) + offsetX;
		var targetY = getElementCoords(targetID)[1] + (targetPosInfo.height / 2) + offsetY;
		console.log(getElementCoords(targetID));
		console.log(targetX);
		console.log(targetY);
		//Subtract the image height and half width from the target pos
		targetX -= (charPosInfo.width / 2);
		targetY -= (charPosInfo.height / 1.5);
		//move the stuff
		imageToMove.style.left = targetX + "px";
		imageToMove.style.top = targetY + "px";
	}
	else
	{
		console.error("Could not move image (Image(s) not found" + charID, " / " + targetID + ")");
	}
}

function hideImage(imageID)
{
	var imageToHide = document.getElementById(imageID);
	if (imageToHide)
	{
		imageToHide.style.display = "none";
	}
	else
	{
		console.error("Could not hide image (Not found: " + imageID + ")");
	}
}

function showImage(imageID)
{
	var imageToShow = document.getElementById(imageID);
	if (imageToShow)
	{
		imageToShow.style.display = "inline";
	}
	else
	{
		console.error("Could not display image (Not found: " + imageID + ")");
	}
}

function changeImage(imageID, newImagePath)
{
	var imageToChange = document.getElementById(imageID);
	if (imageToChange)
	{
		imageToChange.src = newImagePath;
	}
	else
	{
		console.error("Could not change image (Not found: " + imageID + ")");
	}
}

function reanimate(objID, animationName)
{
	var objToAnimate = document.getElementById(objID);
	if (objToAnimate)
	{
		objToAnimate.classList.remove(animationName);
		objToAnimate.offsetHeight;
		objToAnimate.classList.add(animationName);
		
	}
	else
	{
		console.error("Could not animate (Not found: " + objID + ")");
	}
}

function cancelAnimation(objID, animationName)
{
	var objToAnimate = document.getElementById(objID);
	if (objToAnimate)
	{
		objToAnimate.classList.remove(animationName);
		objToAnimate.offsetHeight;
	}
	else
	{
		console.error("Could not animate (Not found: " + objID + ")");
	}
}

//Function for setting the alert box settings (setText, addText
function setText(divID, newMessage)
{
	var divToChange = document.getElementById(divID);
	if (divToChange)
		divToChange.innerHTML = newMessage;
	else
		console.error("Could not change text (Not Found: " + divID + ")");
}

function addText(divID, newMessage)
{
	document.getElementById(divID).innerHTML += newMessage;
}

function setBgAndColor(divID, newBG, newColor)
{
	document.getElementById(divID).style.backgroundColor = newBG;
	document.getElementById(divID).style.color = newColor
}