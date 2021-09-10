function senddd() {
    var  username=document.getElementById("idd").value;
   var kk=document.getElementById("passs").value;
   if(username=="admin"&&kk=="12345")
   {
    setTimeout(function() {window.location = "adminPage.html" });
   }
  else
  {
      window.alert("no")
  }
}