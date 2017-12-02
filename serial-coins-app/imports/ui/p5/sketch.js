// pass in p5.js as function argument p5
export default function sketch (p5) {
  // set the intial ascii variable
  let coin = {value:0};

  // set the initial random text color
  let r = p5.random(255);
  let g = p5.random(255);
  let b = p5.random(255);

  p5.setup = function () {
    // standard p5 setup code, note p5. because we passed it in above
    p5.createCanvas(600, 400);
    p5.background(255);
    p5.textSize(30);

   
  };

  p5.draw = function () {
    // fill the background with white before drawing the coin value
    p5.fill(255);
    p5.noStroke();
    // draw the white background
    p5.rect(0, 0, p5.width, p5.height);
    // draw the incoming coin in the center with a different color
    p5.fill(r, g, b);
    p5.text(coin.value, p5.width/2-30, p5.height/2-20);
  };

  // this special function receives data from App.jsx withTracker
  p5.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.coin){
      // get the new ascii object
      coin = props.coin;
      // get a new random color
      r = p5.random(255);
      g = p5.random(255);
      b = p5.random(255);
    }
  };
};