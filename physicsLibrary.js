function move();
if(keyDown("space")){
    sun.velocityX = 2;
}

function incinerate();
if(sun.isTouching(mercury||venus||earth||mars||jupiter||saturn||uranus||neptune)){
    mercury.visible = false;
    venus.visible = false;
    earth.visible = false;
    mars.visible = false;
    jupiter.visible = false;
    saturn.visible = false;
    uranus.visible = false;
    neptune.visible = false;
}