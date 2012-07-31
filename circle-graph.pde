Node n1;

void setup()
{
    size(400, 400);
    smooth();
    noStroke();

    n1 = new Node(100, 100, 20, 255); 
}

void draw()
{
    background(102);
    pushMatrix();
    n1.display();
    popMatrix();
}

class Node
{
    int x, y;
    int size;
    int color;

    Node(x, y, size, color)
    {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    void display()
    {
        pushMatrix();
        translate(x, y);
        fill(color);
        ellipse(0, 0, size, size)
        popMatrix();
    }
}
