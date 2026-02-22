//JSON Data to frontend
//Event Bubbling
//Local Storage
var arr = [
    {
        userName : 'raghav',
        age:22,
        Coder:false,
        isStatus:'Stranger',
        image : "https://i.pinimg.com/736x/fb/30/1e/fb301ef7fb3d2fe212fbd7cded96c8ed.jpg "

    },{
        userName : 'ranveer',
        age:32,
        Coder:true,
        isStatus:'Stranger',
        image : "https://i.pinimg.com/736x/3e/36/00/3e3600f33f0c190104d30d2a971e1659.jpg "
    },{
         userName : 'salmon',
        age:44,
        Coder:false,
        isStatus:'Stranger',
        image : "https://i.pinimg.com/736x/ba/a8/69/baa86966bb77a3bdb1595bdbd3a1ad3c.jpg"
    }
]


var main = document.querySelector('#main')
function heroFunction(){
    var sum =''
arr.forEach(function(elem,idx){
    sum = sum + ` <div id="card">
        <img src="${elem.image}" alt="">
        <h1> ${elem.userName }</h1>
        <h3>age: ${elem.age }</h3>
        <h2>Coder: ${elem.Coder}</h2> 
        <h5>${elem.isStatus} </h5>
        <button id=${idx}>Add Friends </button>
    </div>` 
})
main.innerHTML = sum
}
heroFunction()
main.addEventListener('click',function(dets){
    var gold = arr[dets.target.id]
    if(gold.isStatus == 'Stranger'){
    gold.isStatus ='Friends'
    } else{
        gold.isStatus ='Stranger'
    }
   heroFunction()
   
    
})


 