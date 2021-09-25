123let img = document.querySelector(".img_object");
img.style.left = 0 + "px"; 
img.style.top = 0 + "px";
window.addEventListener("click", function(event) { // Вешаем обработчик события клика на всё окно
 let x0 = Number(img.style.left.slice(0, img.style.left.length - 2)) + img.clientWidth/2;
 let y0 = Number(img.style.top.slice(0, img.style.top.length - 2)) + img.clientHeight/2;
 let x1 = (x0 + event.clientX)/2 - img.clientWidth/2 + "px";
 let y1 = (y0 + event.clientY)/2 - img.clientHeight/2 + "px";
 img.style.left = x1;
 img.style.top = y1;
});