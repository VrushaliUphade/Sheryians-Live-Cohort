let btn = document.querySelector('.connectbtn');
let check = 0;
btn.addEventListener('click',function(){
   if(check==0){
     console.log("connect");
    btn.innerHTML = 'Pending...'
    btn.style.background = '#E3DDDD'
    check = 1
   }
   else{
     console.log("pending");
    btn.innerHTML = 'Connect'
    btn.style.background = 'white'
    check = 0
   }
})