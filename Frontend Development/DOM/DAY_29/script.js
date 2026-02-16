//1.getAttribute and setAttribute
//2.Creating an element
//3.Mouse Events, Keyboard Events, Scroll Events,
//Double click events, wheel events,etc
var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')
var btn = document.querySelector('button')

btn.addEventListener('click',function(){
    var img1Src = img1.getAttribute('src')
    var img2Src = img2.getAttribute('src')

    img1.setAttribute('src',img2Src)
    img2.setAttribute('src',img1Src)

})