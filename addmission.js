var userArray=[];
var adminArray=[];
function userCheck(){
    var userEmail=document.getElementById('userEmail').value;
    var userPassword=document.getElementById('userPassword').value;
    console.log(userEmail + " "+userPassword)
    if (userEmail===""||userPassword==="")
        {
            document.getElementById('show').innerHTML='enter details';
        }
    else{
        window.location.replace("Dashboard.html");
    }
    
}
function adminCheck(){
    var adminName=document.getElementById('adminName').value;
    var adminEmail=document.getElementById('adminEmail').value;
    var adminPassword=document.getElementById('adminPassword').value;
    var adminConfrimPassword=document.getElementById('adminConfrimPassword').value;
    var city=document.getElementById('city').value;
    var state=document.getElementById('state').value;
    var TandC=document.getElementById('TandC').value;
    if(adminName===""||adminEmail===""||adminPassword===""||adminConfrimPassword===""||city===""||state==="")
        {
          document.getElementById('rShow').innerHTML='enter details';  
        }
        if(!TandC.checked){
             document.getElementById('rShow').innerHTML='You have not agreed to our terms and conditions'; 
        }
        window.location.replace("Login.html")
}
