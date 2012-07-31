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

nodes = new Array();
nodes.push(new Node(20, 20, 300, 'rgba(255,0,0,0.67)', 'reddot'))

function draw(){
    //canvas = $('#id-circle-graph');
    canvas = document.getElementById('id-circle-graph');
    context = canvas.getContext('2d');
    context.fillStyle = "rgb(102,102,102)";
    context.fillRect(0, 0, 400, 400);

    n1 = new Node(200, 200, 40, "rgba(255,255,255,0.7)", "Node 1");
    n1.draw( context );

    n2 = new Node(250, 200, 60, "rgba(200,200,200,0.7)", "Node 2");
    n2.draw( context );

    for (i=0; i<nodes.length; ++i){
        nodes[i].draw( context );
    }
    
    /*context.fillStyle = "rgb(255,255,255)";
    context.beginPath();
    context.arc(200, 200, 40, 0, Math.PI*2.0, false);
    context.fill();*/
}
