const {Board, Servo} = require("johnny-five");
const keypress = require("keypress");

keypress(process.stdin);

const board = new Board(
    {
        port : "Com4"
    }
);

board.on("ready", () => {

  console.log("Use Up and Down arrows for CW and CCW respectively. Space to stop.");

  const servo1 = new Servo.Continuous(3);
  const servo2 = new Servo.Continuous(5);
  const servo3 = new Servo.Continuous(6);
  const servo4 = new Servo.Continuous(9);
  const servo5 = new Servo.Continuous(10);

  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", (ch, key) => {

    if (!key) {
      return;
    }

    if(key.name == 0){
        console.log("0")
        servo1.min();
        servo2.min();
        servo3.min();
        servo4.min();
        servo5.min();
    }else if(key.name == 1){
        servo1.max();
        servo2.min();
        servo3.min();
        servo4.min();
        servo5.min();
        console.log("1")
        
    }else if(key.name == 2){
        servo1.max();
        servo2.max();
        servo3.min();
        servo4.min();
        servo5.min();
        console.log("2")
        
    }else if(key.name == 3 ){
        servo1.max();
        servo2.max();
        servo3.max();
        servo4.min();
        servo5.min();
        console.log("3")
    }else if(key.name == 4){
        servo1.max();
        servo2.max();
        servo3.max();
        servo4.max();
        servo5.min();
        console.log("4")
    }else if(key.name == 5){
        servo1.max();
        servo2.max();
        servo3.max();
        servo4.max();
        servo5.max();
        console.log("5")
    } else if(key.name == 6){
        servo1.min();
        servo2.min();
        servo3.min();
        servo4.min();
        servo5.max();
        console.log("6")
    }
    // if (key.name === "q") {
    //   console.log("Quitting");
    //   process.exit();
    // } else if (key.name === "up") {
    //   console.log("CW");
    //   servo.cw();
    //   servo2.ccw();
    // } else if (key.name === "down") {
    //   console.log("CCW");
    //   servo.ccw();
    //   servo2.cw();
    // } else if (key.name === "space") {
    //   console.log("Stopping");
    //   servo.stop();
    // }
    
  });
});
