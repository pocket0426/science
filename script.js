document.addEventListener("mousemove", function(event) {
    var circle = document.querySelector(".circle");
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
 });

 var shape = document.querySelector(".menu-card");
 var isScrolling = false;
 
 window.addEventListener("scroll", function() {
     if (!isScrolling) {
         isScrolling = true;
         setTimeout(function() {
             var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 
             // 부드러운 이동을 위해 requestAnimationFrame 사용
             requestAnimationFrame(function() {
                 shape.style.top = scrollTop + "px";
                 isScrolling = false;
             });
         }, 100); // 0.3초 지연
     }
 });