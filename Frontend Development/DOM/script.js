let h2 = document.querySelector('h2');
let button = document.querySelector('button');
let flag = 0;
button.addEventListener('click',function(){
    if(flag == 0){
        h2.innerHTML = 'Friend'
    h2.style.color = 'green'
    button.innerHTML = 'removeFd'
    flag = 1;
    }
    else{
        h2.innerHTML = 'Stranger'
    h2.style.color = 'red'
    button.innerHTML = 'friend'
    flag = 0;
    }
})
