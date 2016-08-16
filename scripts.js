function generateFaces() {
    var numberOfFaces = 5;
    var theLeftSide = document.getElementById("leftSide");
    for (i = 0; i < numberOfFaces; ++ i) {
        pic = document.createElement("img");
        pic.src = "logo.jpg";
        pic.style.top = Math.floor(Math.random() * 401) + "px";
        pic.style.left = Math.floor(Math.random() * 401) + "px";
        theLeftSide.appendChild(pic);
    }
    var theRightSide = document.getElementById("rightSide");
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    var theBody = document.getElementsByTagName("body")[0];
    theLeftSide.lastChild.onclick = function nextLevel (event){
        event.stopPropagation();
        numberOfFaces += 5;
        generateFaces();
    };
    theBody.onclick = function gameOver() {
        alert("Game Over");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    }
}