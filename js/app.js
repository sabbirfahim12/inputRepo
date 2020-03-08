const submitBtn=document.getElementById("submitBtn");
submitBtn.addEventListener("click",function(e){
e.preventDefault();
const message=document.getElementById("message"); 
const settingwill=document.getElementById("settingwill")     
const alert=document.getElementById("alert");

if(message ===''){
//class add remove concept and setTimeout concept
    alert.classList.add('show');
    setTimeout(function(){
        alert.classList.remove('show') 
    },2000)
}else{
settingwill.innerText=message.value;
}


})