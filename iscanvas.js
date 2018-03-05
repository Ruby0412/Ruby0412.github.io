function setup() { "use strict";

//var canvas = document.getElementById('myCanvas');
var slider1 = document.getElementById('slider11');
var slider2 = document.getElementById('slider12');
var slider3 = document.getElementById('slider13');
    window.requestAnimationFrame(render);






// var slider1 = document.getElementById('slider1');
// slider1.value = 0;
// var slider2 = document.getElementById('slider2');
// slider2.value = 0;


    twgl.setDefaults({attribPrefix: "a_"});
    var m4 = twgl.m4;
    var gl = twgl.getWebGLContext(document.getElementById("myCanvas"));
    var programInfo = twgl.createProgramInfo(gl, ["second", "first"]);
    var bufferInfo =
        twgl.primitives.createPlaneBufferInfo(gl, 1, 1, 1, 1, m4.rotationX(Math.PI / 2));

// Shared values
    var camera = m4.identity();
    var view = m4.identity();
    var world = m4.identity();

    var context = document.createElement("canvas").getContext("2d");

    function makeText(text) {
        context.canvas.width = 50;
        context.canvas.height = 30;
        context.canvas.style.margin = 0;
        context.font = "30px monospace";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.textBaseAlign = "middle";
        context.fillText(text, 30, 30);
        return context.canvas;
    }

	var radios = document.getElementsByName("choice");
 	 var i = 0, len = radios.length;
   var checked = false;
 	 var userAnswer = "✯";
  for( ; i < len; i++ ) {
     if(radios[i].checked) {
       checked = true;
       userAnswer = radios[i].value;
     }
  } 
	
    var tri = [ userAnswer];

    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    var triTextures = tri.map(function (tri) {
        var canvas = makeText(tri);
        var scale = slider1.value;
        return {
            tex: twgl.createTexture(gl, {src: canvas}),
            scale: [canvas.width * scale, canvas.height * scale, 1]
        };
    });

    var objects = [];
    var numObjects = slider2.value;


    var drawObjects = [];

    for (var num = 0; num < numObjects; num++) {
        var uniforms = {
            u_texture: triTextures[0].tex,
            u_worldViewProjection: m4.identity(),
            u_color: chroma.hsv(num % 360, 1, 1).gl(),
        };
        drawObjects.push({
            programInfo: programInfo,
            bufferInfo: bufferInfo,
            uniforms: uniforms
        });
        objects.push({
            translation: [Math.random() * 20 - 10,
                Math.random() * 35 - 10, Math.random() * 35 - 10],
            ySpeed: Math.random() * 0.6,
            zSpeed: Math.random() * 0.8,
            uniforms: uniforms,
            texInfo: triTextures[0]
        });
    }
    var clearColor = chroma.hsv(0, 0, 0).gl();

    function render(time) {
        time *= slider3.value;
        twgl.resizeCanvasToDisplaySize(gl.canvas);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        var projection =
            m4.perspective(Math.PI / 6, gl.canvas.clientWidth / gl.canvas.clientHeight, 1, 100);
        var target = [0, 0, 0];
        var up = [0, 1, 0];
            var eye = [2, 5, -30];

        m4.lookAt(eye, target, up, camera);
        m4.inverse(camera, view);

        objects.forEach(function (obj) {
            var uni = obj.uniforms;
            var texInfo = obj.texInfo;
            m4.identity(world);
            m4.rotateY(world, time * obj.ySpeed, world);
            m4.rotateZ(world, time * obj.zSpeed, world);
            m4.translate(world, obj.translation, world);
            m4.rotateX(world, time, world);
            m4.scale(world, texInfo.scale, world);
            m4.multiply(view, world, world);
            m4.multiply(projection, world, uni.u_worldViewProjection);
        });

        twgl.drawObjectList(gl, drawObjects);


        slider1.addEventListener("input", setup);
        slider2.addEventListener("input", setup);
        slider3.addEventListener("input", setup);
        
        slider4.addEventListener("input", setup);
        slider5.addEventListener("input", setup);
        slider6.addEventListener("input", setup);
         slider7.addEventListener("input", setup);
        

        window.requestAnimationFrame(render);

    }

}
    window.onload = setup;