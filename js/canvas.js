window.onload=function(){

    init();
    setup();setbackground();
    setupAnother();

}




    function init(){

        function ball() {
        this.r = this.rand(35);
        this.x = this.r;
        this.y = this.r;
        this.speedX = this.rand(15);
        this.speedY = this.rand(15);
        this.width = 0;
        this.height = 0;
        this.canvas = {};
        this.color = 'rgb('+this.rand(255)+','+this.rand(255)+','+this.rand(255)+')';
        this.init();
    }

        ball.prototype = {
            init:function () {
                var game = document.getElementById('canvas');
                this.canvas = game.getContext('2d');
                this.width=game.width;
                this.height=game.height;
            },
            rand:function (num) {
                return Math.floor(Math.random() * num+1);
            },
            play:function () {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x>this.width) {
                    this.speedX = -this.speedX;
                }
                if (this.x<this.r) {
                    this.speedX = -this.speedX;
                }
                if (this.y>this.height) {
                    this.speedY = -this.speedY;
                }
                if (this.y<this.r) {
                    this.speedY = -this.speedY;
                }


                this.canvas.beginPath();
                this.canvas.fillStyle = this.color;
                this.canvas.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
                this.canvas.fill();
            }
        };


        var arr = [];
       for (var i=0;i<27;i++) {
            arr[i] = new ball();
       }
        arr[0] =  new ball();

        setInterval(function () {
            arr[0].canvas.clearRect(0,0,450,350);
            for (var i=0;i<arr.length;i++) {
                arr[i].play();
            }
        },30)





    }

function setup() {

    var canvas = document.getElementById("canvas");
    var ct = canvas.getContext("2d");
    var slider1 = document.getElementById("slider1");
    var slider2 = document.getElementById("slider2");
    var slider3 = document.getElementById("slider3");


    // Point data
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    function drawCircle() {


        var center = new Point(225, 175); // The center of the circle
        var radius = slider1.value;
        var numOfPoints = slider2.value;
        var color = slider3.value;
        var stepSize = (2.0 * Math.PI)/numOfPoints; // Number of degrees in radians to rotate between points
        var point = []; // The current point that has been calculated


        document.getElementById("radius").innerHTML = radius;
        document.getElementById("numOfPoints").innerHTML = numOfPoints;
        document.getElementById("color").innerHTML = color;


        // Clears the canvas
        canvas.width = canvas.width;
        ct.beginPath();

        // Calculate all of the points on the circle we will use and then draw a line
        ct.strokeStyle = "white";
        for (var i = 0; i < numOfPoints + 1; i++) {
            point = new Point(Math.floor(center.x + Math.cos(i * stepSize)*radius),
                Math.floor(center.y + Math.sin(i * stepSize)*radius));
            ct.lineTo(point.x, point.y);


            ct.stroke();
        }

        var index = color;

        var ColorValue = "FFFFFF";
        if(index == 1)
            ColorValue = "FFCCCC"; //peach
        if(index == 2)
            ColorValue = "CCAFFF"; //violet
        if(index == 3)
            ColorValue = "A6BEFF"; //lt blue
        if(index == 4)
            ColorValue = "99FFFF"; //cyan
        if(index == 5)
            ColorValue = "D5CCBB"; //tan
        if(index == 6)
            ColorValue = "99FF99"; //lt green
        if(index == 7)
            ColorValue = "FFFF99"; //lt yellow
        if(index == 8)
            ColorValue = "FFCC99"; //lt orange
        if(index == 9)
            ColorValue = "CCCCCC"; //lt grey


        ct.fillStyle =   "#"+ColorValue;
        ct.fill();

        ct.closePath();

    }


    slider1.addEventListener("input", drawCircle);
    slider2.addEventListener("input", drawCircle);
    slider3.addEventListener("input", drawCircle);
    drawCircle();





}



function setupAnother() {

    var canvas = document.getElementById("myCanvas");
    var ct1 = canvas.getContext("2d");
    var slider1_1 = document.getElementById("slider1_1");
    var slider2_1 = document.getElementById("slider2_1");
    var slider3_1 = document.getElementById("slider3_1");


    // Point data
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    function drawCircle1() {


        var center1 = new Point(225, 175); // The center of the circle
        var radius1 = slider1_1.value;
        var numOfPoints1 = slider2_1.value;
        var color1 = slider3_1.value;
        var stepSize1 = (2.0 * Math.PI)/numOfPoints1; // Number of degrees in radians to rotate between points
        var point1 = []; // The current point that has been calculated


        document.getElementById("radius1").innerHTML = radius1;
        document.getElementById("numOfPoints1").innerHTML = numOfPoints1;
        document.getElementById("color1").innerHTML = color1;


        // Clears the canvas
        ct1.beginPath();

        // Calculate all of the points on the circle we will use and then draw a line
        ct1.strokeStyle = "white";
        for (var i = 0; i < numOfPoints1 + 1; i++) {
            point1 = new Point(Math.floor(center1.x + Math.cos(i * stepSize1)*radius1),
                Math.floor(center1.y + Math.sin(i * stepSize1)*radius1));
            ct1.lineTo(point1.x, point1.y);
            ct1.stroke();
        }

        var index = color1;

        var ColorValue1 = "FFFFFF";
        if(index == 1)
            ColorValue1 = "FFCCCC"; //peach
        if(index == 2)
            ColorValue1 = "CCAFFF"; //violet
        if(index == 3)
            ColorValue1 = "A6BEFF"; //lt blue
        if(index == 4)
            ColorValue1 = "99FFFF"; //cyan
        if(index == 5)
            ColorValue1 = "D5CCBB"; //tan
        if(index == 6)
            ColorValue1 = "99FF99"; //lt green
        if(index == 7)
            ColorValue1 = "FFFF99"; //lt yellow
        if(index == 8)
            ColorValue1 = "FFCC99"; //lt orange
        if(index == 9)
            ColorValue1 = "CCCCCC"; //lt grey


        ct1.fillStyle =   "#"+ColorValue1;
        ct1.fill();

        ct1.closePath();

    }


    slider1_1.addEventListener("input", drawCircle1);
    slider2_1.addEventListener("input", drawCircle1);
    slider3_1.addEventListener("input", drawCircle1);
    drawCircle1();





}


function setbackground()
{
    window.setTimeout( "setbackground()", 1000); // 5000 milliseconds delay

    var index = Math.round(Math.random() * 9);

    var ColorValue = "FFFFFF"; // default color - white (index = 0)

    if(index == 1)
        ColorValue = "FFCCCC"; //peach
    if(index == 2)
        ColorValue = "CCAFFF"; //violet
    if(index == 3)
        ColorValue = "A6BEFF"; //lt blue
    if(index == 4)
        ColorValue = "99FFFF"; //cyan
    if(index == 5)
        ColorValue = "D5CCBB"; //tan
    if(index == 6)
        ColorValue = "99FF99"; //lt green
    if(index == 7)
        ColorValue = "FFFF99"; //lt yellow
    if(index == 8)
        ColorValue = "FFCC99"; //lt orange
    if(index == 9)
        ColorValue = "CCCCCC"; //lt grey

    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}



























