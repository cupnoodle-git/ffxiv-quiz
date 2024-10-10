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