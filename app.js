const submit = document.getElementById("generateButton");
console.log(submit);
// var gift = document.getElementById("grid");
submit.addEventListener('click', myFunction)
var i=1;
var oldValue=0;

function myFunction() {
    // to create a new element in the html
    let n=document.getElementById('textBox').value;
    // console.log(n);
    for(;i<=n;i++){
    var box = document.createElement('div');
    // box.src = "https://i.pinimg.com/originals/f0/ca/ac/f0caac4e2700cc5f8b778846774ab638.png";
    // gift.append(img);
    // .classList method is used to define the class .myDiv in css and class="myDiv"
    // for the div we created as box
    box.classList.add('myDiv');
    document.getElementById('grid').appendChild(box); 
    box.innerHTML+= i;
    oldValue=document.getElementById('grid').lastElementChild.innerHTML;
    }
}
