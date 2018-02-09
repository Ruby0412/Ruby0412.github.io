
 var canvas=document.getElementById('canvas1');

    var cxt=canvas.getContext('2d');
    var time=0;
    var ang=0;
    function draw(){
        ang+=Math.PI/200;
        ang%=Math.PI*2;
        var slider1 = document.getElementById("slider1");
        var radius = slider1.value;
        document.getElementById("radius").innerHTML = radius;

        var slider2 = document.getElementById("slider2");
        var radius1 = slider2.value;
        document.getElementById("radius1").innerHTML = radius1;

        var slider3 = document.getElementById("slider3");
        var radius2 = slider3.value;
        document.getElementById("radius2").innerHTML = radius2;

        var slider4 = document.getElementById("slider4");
        var speed = slider4.value;
        document.getElementById("speed").innerHTML = speed;

        var slider5 = document.getElementById("slider5");
        var speed1 = slider5.value;
        document.getElementById("speed1").innerHTML = speed1;

        cxt.clearRect(0,0,800,800);
        cxt.strokeStyle="#FFF";
        cxt.beginPath();
        cxt.arc(400,400,radius,0,360,false);
        cxt.closePath();
        cxt.closePath();
        cxt.stroke();
        cxt.beginPath();
        cxt.arc(400,400,100,0,360,false);
        cxt.stroke();
        cxt.closePath();



        //draw sun
        cxt.save();
        cxt.beginPath();
        cxt.arc(400,400,20,0,360,false);


        cxt.closePath();

        var sunColor=cxt.createRadialGradient(400,400,0,400,400,10);
        sunColor.addColorStop(0,"#F99");
        sunColor.addColorStop(1,"#F00");
        cxt.fillStyle=sunColor;
        cxt.fill();
        cxt.beginPath();
        cxt.lineWidth = 3;

        cxt.translate(400,400);
        cxt.rotate(ang);
        cxt.moveTo(-50,0);
        cxt.lineTo(-10,0);
        cxt.moveTo(10,0);
        cxt.lineTo(50,0);

        cxt.moveTo(-35,-35);
        cxt.lineTo(-10,-10);
        cxt.moveTo(10,10);
        cxt.lineTo(35,35);

        cxt.moveTo(35,-35);
        cxt.lineTo(10,-10);
        cxt.moveTo(-10,10);
        cxt.lineTo(-35,35);

        cxt.moveTo(0,-50);
        cxt.lineTo(0,-10);
        cxt.moveTo(0,10);
        cxt.lineTo(0,50);

        cxt.strokeStyle="#F00";
        cxt.closePath();
        cxt.stroke();
        cxt.restore();

        cxt.save();

        cxt.translate(400,400);
        cxt.rotate(speed*time*365/360*Math.PI/180);

        cxt.beginPath();
        cxt.arc(radius,0,10,0,360,false);
        var earthColor=cxt.createRadialGradient(radius,0,0,radius,0,10);
        cxt.strokeStyle="#050c12";
        earthColor.addColorStop(0,"#78B1Eb");
        earthColor.addColorStop(1,"#050c12");
        cxt.fillStyle=earthColor;
        cxt.fill();
        cxt.closePath();



        cxt.beginPath();
        cxt.arc(0,radius,10,0,360,false);
        var earthColor=cxt.createRadialGradient(0,radius,radius,0,0,10);
        cxt.strokeStyle="#050c12";
        earthColor.addColorStop(0,"#78B1Eb");
        earthColor.addColorStop(1,"#050c12");
        cxt.fillStyle=earthColor;
        cxt.fill();
        cxt.closePath();

        cxt.beginPath();
        cxt.arc(0,100,10,0,360,false);
        var earthColor=cxt.createRadialGradient(0,100,100,0,0,10);
        cxt.strokeStyle="#050c12";
        earthColor.addColorStop(0,"#78B1Eb");
        earthColor.addColorStop(1,"#050c12");
        cxt.fillStyle=earthColor;
        cxt.fill();
        cxt.closePath();






        cxt.save();
        cxt.strokeStyle="#FFF";
        cxt.translate(radius,0);

        cxt.beginPath();
        cxt.arc(0,0,radius1,0,360,false);
        cxt.stroke();
        cxt.closePath();


        cxt.rotate(speed1*time*365*Math.PI/180);
        cxt.beginPath();
        cxt.arc(radius1,0,5,0,360,false);
        var moonColor=cxt.createRadialGradient(radius1,0,0,radius1,0,5);
        cxt.strokeStyle="#322222";
        moonColor.addColorStop(0,"#c0a48e");
        moonColor.addColorStop(1,"#322222");
        cxt.fillStyle=moonColor;
        cxt.fill();
        cxt.closePath();

        cxt.save;

        cxt.translate(radius1,0);

        cxt.beginPath();
        cxt.strokeStyle="#FFF";
        cxt.arc(0,0,radius2,0,360,false);
        cxt.stroke();
        cxt.closePath();

        cxt.rotate(time*365*Math.PI/180);
        cxt.beginPath();
        cxt.arc(radius2,0,5,0,360,false);
        var moonColor=cxt.createRadialGradient(radius2,0,0,radius2,0,5);
        cxt.strokeStyle="#322222";
        moonColor.addColorStop(0,'#a7e1e5');
        moonColor.addColorStop(1,'#19243a');
        cxt.fillStyle=moonColor;
        cxt.fill();
        cxt.closePath();

        cxt.save;

        cxt.translate(radius2,0);

        cxt.beginPath();
        cxt.strokeStyle="#FFF";
        cxt.arc(0,0,40,0,360,false);
        cxt.stroke();
        cxt.closePath();

        cxt.rotate(time*365*Math.PI/180);
        cxt.beginPath();
        cxt.arc(40,0,5,0,360,false);
        var moonColor=cxt.createRadialGradient(40,0,0,40,0,5);
        cxt.strokeStyle="#322222";
        moonColor.addColorStop(0,'#a7e1e5');
        moonColor.addColorStop(1,'#19243a');
        cxt.fillStyle=moonColor;
        cxt.fill();
        cxt.closePath();



        cxt.restore();
        cxt.restore();
        cxt.restore();


        time++;
    }
    slider1.addEventListener("input", draw);
    slider2.addEventListener("input", draw);
    slider3.addEventListener("input", draw);
    slider4.addEventListener("input", draw);
    slider5.addEventListener("input", draw);



    setInterval(draw,50);




















