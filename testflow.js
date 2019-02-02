//global context of our flow
//the flow json holds each of the flow steps
var sWidth = 80;
var sHeight = 60;
var flow = {
    "obj1":{
        "shape":"diamond",
        "x":"280",
        "y":"20",
        "desc":"does it move?",
        "connections":{
            "obj2":["no","bottom", "right"],
            "obj3": ["yes","bottom", "left"]
            }
    },
    "obj2":{
        "shape":"diamond",
        "x": "180",
        "y":"80",
        "desc":"should it?",
        "connections":{
            "obj4":["yes","bottom", "right"],
            "obj5": ["no","bottom", "left"]            
        }
    },
    "obj3":{
        "shape":"diamond",
        "x": "380",
        "y":"80",
        "desc":"should it?",
        "connections":{
            "obj5":["yes","bottom", "right"],
            "obj6": ["no","bottom", "left"]
        }
    },
    "obj4":{
        "shape":"Square",
        "x": "100",
        "y":"160",
        "desc":"Duc Tape"       
        },
    "obj5":{
        "shape":"Square",
        "x": "280",
        "y":"160",
        "desc":"Beer"       
        },
    "obj6":{
        "shape":"Square",
        "x": "460",
        "y":"160",
        "desc":"WD-40"       
        }
    };

//get the canvas object
var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');    
    
window.onload = (function(){
    //draw the initial flow
        drawFlow();
})();


function drawFlow() {
//var a = document.getElementById('test');

// draw each of the elements
    for (var i in flow){
        var el = flow[i];
        tx = parseInt(el.x) + 10;
        ty = parseInt(el.y) + sHeight/2;
        ctx.strokeStyle='grey';
        ctx.font = "10px Arial";
        ctx.beginPath();
        ctx.moveTo(el.x,el.y);
        ctx.rect(el.x,el.y, sWidth, sHeight);
        ctx.stroke();
        ctx.strokeText(el.desc, tx, ty);
        // now draw lines to connectors
        if (el.connections) {
            for (c in el.connections) {
                //draw lines between each connection
                //get location of start/ing and ending/end for connections
                if (el.connections[c][1] == "bottom") {
                    fromX = parseInt(el.x) + (sWidth/2);
                    fromY = parseInt(el.y) + (sHeight);
                    textX = fromX;
                    textY = fromY;
                }
                if (el.connections[c][2]=="right") {
                    toX = parseInt(flow[c].x) + sWidth;
                    toY = parseInt(flow[c].y) + sHeight/2;
                    textX = textX + ((fromX - toX)/2);
                    textY = textY + ((toY - fromY)/2);
                }
                if (el.connections[c][2]=="left") {
                    toX = parseInt(flow[c].x);
                    toY = parseInt(flow[c].y) + sHeight/2;
                    textX = textX - ((toX - fromX)/2);
                    textY = textY + ((toY - fromY)/2);
                }                
                ctx.beginPath();
                ctx.moveTo(fromX, fromY);
                ctx.lineTo(toX, toY);
                ctx.stroke();
                ctx.strokeText(el.connections[c][0], textX, textY);

            }
        }
    }
}



    var button = document.getElementById('start');
    button.onclick = function(){
    };


