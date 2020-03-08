const submitBtn=document.getElementById("submitBtn");
submitBtn.addEventListener("click",function(){
//sob id doria ano
const message=document.getElementById("message"); 
const settingwill=document.getElementById("settingwill")     
const alertAble=document.getElementById("alert");

if(message.value ===''){
//class add remove concept and setTimeout concept
alertAble.classList.add('show');
setTimeout(function(){
 alertAble.classList.remove('show');  
},2000)
}
else{
settingwill.innerText=message.value;
}


})