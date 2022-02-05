// pick a tag to do our code in
// then lets set up two.js in this 

const container = document.querySelector("section");

const params = { 
    width: 500, 
    height: 500
};

const two = new Two(params);
two.appendTo(container);

// we want to add a square

const shape = two.makeRectangle(250, 250, 100, 100);
shape.fill = "#FF69B4";

shape.noStroke();
shape.rotation = Math.PI * 0.25;


// lets listen for any update, any frame  60fps

two.bind("update", function () {
    // shape.rotation = shape.rotation + 0.05;
    shape.rotation += 0.05;
});

two.play();