"use strict";
    
 function setup() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    var m4 = twgl.m4;
    var slider1 = document.getElementById('slider1');
    var slider3 = document.getElementById('slider3');
    var sun = document.getElementById('sun');
    var earth = document.getElementById('earth');
    var rotateSun = 0;
    var rotateEarth = 0;
    var rotateMoon = 0;

    function moveToTx(x,y,z,Tx){
        var loc = [x,y,z];
        var locTx = m4.transformPoint(Tx,loc);
        context.moveTo(locTx[0],locTx[1]);
    }

    function lineToTx(x,y,z,Tx){
        var loc = [x,y,z];
        var locTx = m4.transformPoint(Tx,loc);
        context.lineTo(locTx[0],locTx[1]);
    }

    function drawOrbs(x,y,z,r,Tx,color){
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = 1;
        var theta=0,phi=0;

        for(phi=0;phi<2.001*Math.PI;phi=phi+(1/8)*Math.PI){
            theta=0;
            moveToTx(x+r*Math.sin(theta)*Math.cos(phi),y+r*Math.cos(theta),z+r*Math.sin(theta)*Math.sin(phi),Tx);
            for(theta=(1/32)*Math.PI;theta<1.001*Math.PI;theta=theta+(1/32)*Math.PI)
                lineToTx(x+r*Math.sin(theta)*Math.cos(phi),y+r*Math.cos(theta),z+r*Math.sin(theta)*Math.sin(phi),Tx);
            context.stroke();
        }
        for(theta=(1/8)*Math.PI;theta<0.999*Math.PI;theta=theta+(1/8)*Math.PI){
            phi=0;
            moveToTx(x+r*Math.sin(theta)*Math.cos(phi),y+r*Math.cos(theta),z+r*Math.sin(theta)*Math.sin(phi),Tx);
            for(phi=(1/64)*Math.PI;phi<2.001*Math.PI;phi=phi+(1/64)*Math.PI)
                lineToTx(x+r*Math.sin(theta)*Math.cos(phi),y+r*Math.cos(theta),z+r*Math.sin(theta)*Math.sin(phi),Tx);
            context.stroke();
        }
    }

    function drawAxes(Tx){
        context.lineWidth=1;
        context.beginPath();
        context.strokeStyle="red";
        moveToTx(0,0,0,Tx);
        lineToTx(100,0,0,Tx);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.strokeStyle="green";
        moveToTx(0,0,0,Tx);
        lineToTx(0,100,0,Tx);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.strokeStyle="blue";
        moveToTx(0,0,0,Tx);
        lineToTx(0,0,100,Tx);
        context.stroke();
        context.closePath();
    }

    function draw(){
        canvas.width = canvas.width;
        var angle1 = slider1.value*0.02*Math.PI;
        var angle3 = slider3.value*0.02*Math.PI;
        rotateEarth += sun.value*0.001;
        rotateMoon += earth.value*0.001;

        var Tmain = m4.multiply(m4.scaling([1,-1,1]), m4.multiply(m4.rotationY(rotateSun += 0.01),m4.multiply(m4.rotationX(angle1), m4.multiply(m4.rotationZ(angle3),m4.translation([250,250,250])))));
        var Tsun = m4.multiply(m4.rotationY(rotateEarth),m4.copy(Tmain));
        var Tearth = m4.multiply(m4.rotationY(rotateMoon), m4.multiply(m4.translation([175,0,0]),m4.copy(Tsun)));
        var Tmoon = m4.multiply(m4.rotationY(0), m4.multiply(m4.translation([50,0,0]),m4.copy(Tearth)));
        drawOrbs(0,0,0,40,Tsun, "red");
        drawOrbs(0,0,0,20,Tearth, "green");
        drawOrbs(0,0,0,10,Tmoon, "blue");
    }
    setInterval(draw,16);
}
window.onload = setup();