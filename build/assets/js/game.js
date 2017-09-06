'use strict';

const w = window.innerWidth;
const h = window.innerHeight;

let getContext = (w, h) => {
  let canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.width = w || window.innerWidth;
  canvas.height = h || window.innerHeight;
  return canvas.getContext("2d");
}

const ctx = getContext(w, h);



class Particle {
  constructor() {
    this.x = Math.round(Math.random() * w);
    this.y = Math.round(Math.random() * h);

    this.energy = Math.round(Math.random() * 1000);

    this.radiusFactor = 100;
    this.targetRadiusFactor = this.radiusFactor + (25 - Math.round(Math.random() * 50));

    this.color = {
      r: Math.round(Math.random() * 50 + 200),
      g: Math.round(Math.random() * 50 + 200),
      b: Math.round(Math.random() * 50 + 200)
    }
    this.opacity = Math.round(Math.random() * 30 + 20) / 100;
    // this.targetOpacity = this.opacity + ((50 - Math.round(Math.random() * 100)) / 100);
    this.targetOpacity = Math.round(Math.random() * 40 + 10) / 100;

    this.driftDistance = 25;
    this.targetX = this.x + (this.driftDistance - Math.round(Math.random() * this.driftDistance * 2));
    this.targetY = this.y + (this.driftDistance - Math.round(Math.random() * this.driftDistance * 2));
  }

  draw() {
    let color = `rgba(${this.color.r},${this.color.g},${this.color.b},${this.opacity})`;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.energy / this.radiusFactor, 0, Math.PI * 2);
    ctx.fill();
  }

  drift() {
    let x = (this.targetX - this.x) / (Math.round(Math.random() * 400) + 100);
    let y = (this.targetY - this.y) / (Math.round(Math.random() * 400) + 100);
    this.x += x;
    this.y += y;
    if (this.x > w + this.energy / this.radiusFactor) this.x = 0;
    if (this.x < 0 - this.energy / this.radiusFactor) this.x = w;
    if (this.y > h + this.energy / this.radiusFactor) this.y = 0;
    if (this.y < 0 - this.energy / this.radiusFactor) this.y = h;
    if (Math.abs(this.targetX - this.x) < 10 || Math.abs(this.targetX - this.x) > 100) this.targetX = this.x + (this.driftDistance - Math.round(Math.random() * this.driftDistance * 2));
    if (Math.abs(this.targetY - this.y) < 10 || Math.abs(this.targetY - this.y) > 100) this.targetY = this.y + (this.driftDistance - Math.round(Math.random() * this.driftDistance * 2));
  }

  pulsate() {
    let r = (this.targetRadiusFactor - this.radiusFactor) / 70;
    this.radiusFactor += r;

    if (this.radiusFactor < 75) this.targetRadiusFactor += 50;
    if (this.radiusFactor > 125) this.targetRadiusFactor -= 50;

    if (Math.abs(this.targetRadiusFactor - this.radiusFactor) < 10) this.targetRadiusFactor = this.radiusFactor + (25 - Math.round(Math.random() * 50));
  }

  flicker() {
    let o = (this.targetOpacity - this.opacity) / 50;
    this.opacity += o;

    // if (this.opacity < 0.1) this.targetOpacity += 0.5;
    // if (this.opacity > 0.9) this.targetOpacity -= 0.5;

    // if (Math.abs(this.targetOpacity - this.opacity) < 10) this.targetOpacity = this.opacity + ((50 - Math.round(Math.random() * 100)) / 100);
    if (Math.abs(this.targetOpacity - this.opacity) < 10) this.targetOpacity = Math.round(Math.random() * 40 + 10) / 100;

  }

  deplete() {
    
  }
}

class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}



const globals = {
  stage: false,
  frame: 0,
}

/*****************************************************************************

 STATES

 titlescreen
 running
 paused
 gameover

 *****************************************************************************/

const state = {
  current: 'titlescreen',
  previous: '',
}

let setState = s => {
  state.previous = state.current;
  state.current = s;

  document.querySelector('body').classList.remove(state.previous);
  document.querySelector('body').classList.add(state.current);
}

/*****************************************************************************

 OBJECTS

 *****************************************************************************/

const particles = [];

let setStage = () => {

  for (let i = 0; i < 500; i++) {
    let p = new Particle();
    particles.push(p);
  }

}

/*****************************************************************************

 TRIGONOMETRY FUNCTIONS

 Also add functions for:
 line-line intersections
 other intersections
 direction from one point to another

 *****************************************************************************/

let distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

let rads = degs => degs * Math.PI / 180;

let degs = rads => rads * 180 / Math.PI;

/*****************************************************************************

 UPDATE

 *****************************************************************************/

let update = () => {
  if (globals.stage === false) {
    setStage();
    globals.stage = true;
  }

  particles.forEach((e) => {
    e.drift();
    e.pulsate();
    e.flicker()
  })
}

/*****************************************************************************

 DRAW

 *****************************************************************************/

let draw = () => {
  // Clear the canvas
  ctx.clearRect(0,0,w,h);

  particles.forEach((e) => {
    e.draw();
  })
}

/*****************************************************************************

 FRAME

 *****************************************************************************/

let frame = setInterval(() => {
  if (state.current === 'running') {
    globals.frame++;
    update();
    draw();
  }
}, 16); // ~60fps
