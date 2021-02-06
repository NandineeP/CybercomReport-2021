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
        window.location.href="Dashboard.html";
    }
    
}
function adminCheck(form)
		{
			var adminName=form.adminName.value;
			var adminEmail=form.adminEmail.value;
			var adminPassword=form.adminPassword.value;
			var adminConfrimPassword=form.adminConfrimPassword.value;
			var flag=0;
			
			if(adminName=="")
			{
				document.getElementById("rShow").innerHTML="<font style='color:red'>please enter your name</font>";
				flag=1;
			}
			else
			{
				document.getElementById("rShow").innerHTML="";
			}
			if(adminEmail=="")
			{
				document.getElementById("rShow").innerHTML="<font style='color:red'>please enter your email</font>";
				flag=1;
			}
			else
			{
				document.getElementById("rShow").innerHTML="";
			}
			if(adminPassword=="")
			{
				document.getElementById("rShow").innerHTML="<font style='color:red'>please enter your password</font>";
				flag=1;
			}
			else if(adminConfrimPassword=="")
			{
				document.getElementById("rShow").innerHTML="";
				document.getElementById("rShow").innerHTML="<font style='color:red'>please retype Password</font>";
				flag=1;
			}
			else 
			{
				document.getElementById("rShow").innerHTML="";
				if(adminPassword!=adminConfrimPassword)
				{
					document.getElementById("rShow").innerHTML="<font style='color:red'>Password does not match";
					flag=1;
				}
				else
				{
					document.getElementById("rShow").innerHTML="";
					document.getElementById("rShow").innerHTML="";
				}
			}
	
			if(document.getElementById("city").value=="select")
			{
				document.getElementById("rShow").innerHTML="<font style='color:red'>please select city</font>";
				flag=1;
			}
			else
			{
				document.getElementById("rShow").innerHTML="";
			}
			if(document.getElementById("state").value=="select")
			{
				document.getElementById("rShow").innerHTML="<font style='color:red'>please select state</font>";
				flag=1;
			}
			else
			{
				document.getElementById("rShow").innerHTML="";
			}
			if(document.getElementById("agree").checked==false)
			{
				document.getElementById("rShow").innerHTML="<font style='color:red'>You haven't agreed to our terms and conditions";
				flag=1;
			}
			else
			{
				document.getElementById("rShow").innerHTML="";
			}
			if(flag==0)
			{
				window.location="Login.html";
			}
		}
