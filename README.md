Source code for the Witch Hunt quiz site.  I will eventually change this into a generic starting point for making custom quiz pages.

quizFunctions.js methods:
  moveImage(imageID, newX, newY, rotation, mirror)
    - Moves an image within its container to the specified coordinates.  Rotation and mirror are optional parameters.
  moveTargetToCoords(targetID, newX, newY)
    - Same as moveImage, but centers the image on the specified coordinates.  Good for moving the target image to a specific place
  getElementCoords(elementID)
    - returns an array with the coordinates of the element within its container [x, y].
  moveCharToTarget(charID, targetID, offsetX = 0, offsetY = 0)
    - similar to moveTargetToCoords() but placed slightly higher so it looks as if they are standing on the specified place
  hideImage(targetID)
    - sets display style to "none"
  showImage(targetID)
    - sets display style to "inline"
  changeImage(imageID, newImagePath)
    - self explanatory
  cancelAnimation(objID, animationName)
    - removes the specified animation from an element
  setText(divID, newMessage)
    - changes the text within an element
  addText(divID, newMessage)
    - same as above, but appends text
  setBgAndColor(divID, newBG, newColor)
   - changes the background color and font color of an element
