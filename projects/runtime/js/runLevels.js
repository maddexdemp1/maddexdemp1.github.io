var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createRock (x, y){
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/rock1.png");
  
    obstacleImage.x = -98
    obstacleImage.y = -98 
    sawBladeHitZone.addChild(obstacleImage);
    }
    
    createRock(1000, 550)
    createRock(2500, 460)

    function enemyMaker(x, y) {
      // all code from TODO 11 and 12
      var enemy = game.createGameItem("enemy", 25);
    enemy.x = x;
    enemy.y = y;
    var laser = draw.bitmap("img/laser1.png");
    enemy.velocityX = -2;
    laser.x = -99;
    laser.y = -98;
    enemy.addChild(laser);
    game.addGameItem(enemy);
 
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-10)
      enemy.fadeOut();
    };
    enemy.onProjectileCollision = function (){
      game.increaseScore(100);
      enemy.fadeOut();
      };
    }
  
  enemyMaker(1200, groundY - 50);
  
   
  function createReward(x, y){
    var reward = game.createGameItem("reward", 25);
    reward.x = x;
    reward.y = y;
    var star = draw.bitmap("img/star.png");
    reward.velocityX = -.5;
    star.scaleX = .125
    star.scaleY = .125
    star.x = -85;
    star.y = -98;
    game.addGameItem(reward);
    reward.addChild(star);
    reward.onPlayerCollision = function() {
      game.changeIntegrity(15);
      game.increaseScore(200);
      reward.fadeOut();
    }
    reward.onPlayerCollision = function(){
      reward.fadeOut(); 
      game.increaseScore(300)
    }
    reward.onProjectileCollision = function(){
      reward.fadeOut();
    };
    
  }
  createReward(1000, groundY - 25)
  function createMarker(x, y){
    var marker = createGameItem("marker", 25);
    marker.x = x;
    marker.y = y;
    var end = draw.rect(50, 50, "blue");
    marker.velocityX = -.1
    end.x = -85;
    end.y = -98
    game.addGameItem(marker);
    marker.addChild(end);
    marker.onPlayerCollision = function(){
      location.reload(); 
    }
  createMarker(1300, groundY - 35)
  }

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
  };


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
