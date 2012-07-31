function Node( x, y, size, color, label ){
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.label = label;
}

Node.prototype.draw = function ( context ){
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI*2.0, false);
    context.fill();

    context.fillStyle = "rgb(0,0,0)";
    context.font = "bold 12px sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(this.label, this.x, this.y);
}

function randint(min, max)
{
    return parseInt(min + Math.random()*(max-min));
}

function make_nodes( graph, size){
    var nodes = new Array();
    var radius = size/2.2;
    for (i=0; i<graph.length; ++i)
    {
        var color = 'rgba(' + randint(128,255) + ',' + randint(128,255) + ',' + randint(128,255) + ',0.8)';
        var angle = Math.PI*2.0/graph.length*i;
        var x = size/2.0 + Math.sin(angle)*radius;
        var y = size/2.0 + Math.cos(angle)*radius;
        nodes[graph[i].key] = new Node(x, y, graph[i].dependancies.length, color, graph[i].key);
    }
    return nodes;
}

function draw(){
    //canvas = $('#id-circle-graph');
    var canvas = document.getElementById('id-circle-graph');
    context = canvas.getContext('2d');
    context.fillStyle = "rgb(102,102,102)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var nodes = make_nodes(graph, Math.min(canvas.width, canvas.height));

    for (key in nodes){
        nodes[key].draw( context );
    }
    
    /*context.fillStyle = "rgb(255,255,255)";
    context.beginPath();
    context.arc(200, 200, 40, 0, Math.PI*2.0, false);
    context.fill();*/
}
