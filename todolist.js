let form=document.querySelector('form')
let ip=document.querySelector('input')
let ul=document.querySelector('ul')
let arr=[]
let i=0
let li
create()
function assign(params) {
    arr[i]=li.innerText
    i++                             
}
function create(params) { 
    li=document.createElement('li')
ul.append(li)
}            
console.log(ul);
form.addEventListener('submit',(a)=>{
    a.preventDefault()
   li.innerText=ip.value  
   assign()
       create()
})
console.log(arr);
console.log(arr[1]);
