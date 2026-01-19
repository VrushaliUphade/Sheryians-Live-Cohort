var h3 = document.querySelector('h3');
var btn = document.querySelector('button');
var check = 0; // 0 = Stranger, 1 = Friend
var click = btn.addEventListener('click',function(){
    if(check === 0){
    h3.style.color = 'black';
    h3.innerHTML = 'Sending Request...'
    h3.style.fontSize= '25px'
   
    setTimeout(function(){
    h3.innerHTML = 'Friend'
    h3.style.color = 'green';
    btn.textContent = 'Remove Friend'
    check = 1;
},1000)
    }else{
      h3.style.color = 'rgb(171, 54, 54)';
    h3.innerHTML = 'Stranger'
    h3.style.fontSize= '25px'
   btn.innerHTML = 'Add Friend'
   check = 0;
    }
})




