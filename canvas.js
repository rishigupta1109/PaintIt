console.log("welcome to Paint it");
const canvas = document.getElementById("canvas");
const cxt = canvas.getContext('2d');

canvas.width = window.innerWidth - 150;
canvas.height = window.innerHeight - 150;
let strokeWidth = 5;
let strokeColor = "white";
let backGroundColor = "green";
let drawing = false;
cxt.strokeStyle = "white";

let inputStrokeWidth = document.getElementById("strokeWidth");
let inputStrokeColor = document.getElementById("strokeColor");
let inputBackgroundColor = document.getElementById("backgroundColor");
document.getElementById("clear").onclick = (e) => {
    location.reload();  
};
inputStrokeWidth.onchange=  ((e) => {
    strokeWidth =Number( e.target.value);
})
inputStrokeColor.onchange = ((e) => {
    console.log(e);
    strokeColor = e.target.value;
})
inputBackgroundColor.onchange = ((e) => {
    canvas.style.backgroundColor = e.target.value;
})
const startedDrawing = () => {
    console.log("starteddrawing");
    drawing = true;
    cxt.beginPath();
}
const stoppedDrawing = () => {
    console.log("stoppeddrawing");
    drawing = false;
    cxt.closePath();
}
const Draw = (e) => {
    if (!drawing) return;
    cxt.lineWidth = strokeWidth;
    cxt.strokeStyle = strokeColor;
    cxt.lineCap = "round";
    cxt.lineTo(e.offsetX, e.offsetY);
    cxt.moveTo(e.offsetX, e.offsetY);
    cxt.stroke();
}

canvas.addEventListener("mousedown", startedDrawing);
canvas.addEventListener("mouseup", stoppedDrawing);
canvas.addEventListener("mousemove", Draw);


