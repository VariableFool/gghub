'use strict';

let canvas, ctx, mousePos;
let points = [];
let pointsAmount = 80;
let maxDist = 300;
const colour = '255,30,155';

export function init(dist, amount) {
  if (points.length > 0) {
    destroy();
  }

  maxDist = dist;
  pointsAmount = amount;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvas.addEventListener('mousemove', (evt) => {
    mousePos = getMousePos(canvas, evt);
  });
  resizeCanvas();
  generatePoints(pointsAmount);
  pointFun();
  setInterval(pointFun, 16);
  window.addEventListener('resize', resizeCanvas, false);
}

function point() {
  this.x = Math.random() * (canvas.width + maxDist) - maxDist / 2;
  this.y = Math.random() * (canvas.height + maxDist) - maxDist / 2;
  this.vx = Math.random() * 1 - 0.5;
  this.vy = Math.random() * 1 - 0.5;
  this.dia = Math.random() * 3 + 1;
  points.push(this);
}

function generatePoints(amount) {
  if (amount > 80) return;
  for (let i = 0; i < amount; i++) {
    new point();
  }
}

function draw(obj) {
  ctx.beginPath();
  ctx.fillStyle = `rgb(${colour})`;
  ctx.arc(obj.x, obj.y, obj.dia ?? 2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
}

function update(obj) {
  obj.x += obj.vx;
  obj.y += obj.vy;
  if (obj.x > canvas.width + maxDist / 2) obj.x = -(maxDist / 2);
  else if (obj.x < -(maxDist / 2)) obj.x = canvas.width + maxDist / 2;
  if (obj.y > canvas.height + maxDist / 2) obj.y = -(maxDist / 2);
  else if (obj.y < -(maxDist / 2)) obj.y = canvas.height + maxDist / 2;
}

function pointFun() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (mousePos) {
    collision(mousePos, maxDist * 2);
    draw(mousePos);
  }
  for (let i = 0; i < points.length; i++) {
    collision(points[i], maxDist);
    draw(points[i]);
    update(points[i]);
  }
}

function collision(obj, dist) {
  for (let i = 0; i < points.length; i++) {
    if (obj !== points[i]) {
      const temp = Math.sqrt((obj.x - points[i].x) ** 2 + (obj.y - points[i].y) ** 2);
      if (temp < dist) {
        ctx.beginPath();
        ctx.moveTo(obj.x, obj.y);
        ctx.strokeStyle = `rgba(${colour}, ${0.8 * Math.pow((dist - temp) / dist, 5)})`;
        ctx.lineTo(points[i].x, points[i].y);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }
}

export function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  pointFun();
}

function getMousePos(cvs, evt1) {
  const rect = cvs.getBoundingClientRect();
  return {
    x: evt1.clientX - rect.left,
    y: evt1.clientY - rect.top,
  };
}

function destroy() {
  points = [];
  mousePos = null;
  window.removeEventListener('resize', resizeCanvas, false);
  canvas.removeEventListener('mousemove', getMousePos, false);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
