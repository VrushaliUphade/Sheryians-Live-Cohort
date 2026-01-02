let btn =  document.querySelector('button');
let box = document.querySelector('#box');
 btn.addEventListener('click', function(){
   var R = Math.floor(Math.random()*256);
   var G = Math.floor(Math.random()*256);
   var B = Math.floor(Math.random()*256);

   box.style.backgroundColor = `rgb(${R},${G},${B})`
   
   
})