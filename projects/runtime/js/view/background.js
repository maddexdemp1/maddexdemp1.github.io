var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      var ship;
      var comets = []; 
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();
        

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
         //   var backgroundFill = draw.rect(canvasWidth, groundY,'purple');
         var backgroundFill = draw.bitmap("img/Background-image.png")
         backgroundFill.x = 0
         backgroundFill.y = 0
         backgroundFill.scaleX = 2.90;
         backgroundFill.scaleY = 2.75
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            var planet = draw.bitmap("img/planet.png");
            planet.x = 600;
            planet.y = 100;
            planet.scaleX = 1.0;
            planet.scaleY = 1.0;
            background.addChild(planet);

            for (var i = 0; i < 10; i++){
            var circle = draw.circle(10, "white", "LightGray", );
            circle.x = canvasWidth * Math.random();
            circle.y = groundY * Math.random();
            background.addChild(circle);
            }
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 2; ++i) {
                var cometHeight = 300;
                var comet = draw.bitmap("img/comet.png");
                comet.x = 700 * i;
                comet.y = 300 - cometHeight;
                background.addChild(comet);
                comets.push(comet);
              }
            
            // TODO 3: Part 1 - Add a tree
            ship = draw.bitmap("img/spaceship.png")
            ship.x = 450;
            ship.y = 300;
            background.addChild(ship)
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            ship.x = ship.x - 2
            if (ship.x < -200){
                ship.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
        
        
            
            for (var i = 0; i < comets.length; i++) {
                var eachComet = comets[i];
                eachComet.x = eachComet.x - 0.4
                if (eachComet.x < -200){
                    eachComet.x = canvasWidth;
                }
                
        
                // code to do something with each element
              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
