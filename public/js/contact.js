console.log("connected");

function validation() {
    var x = document.forms["contactform"]["name"].value;
    console.log(x);
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var y= document.forms["contactform"]["email"].value;
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(y) == false)
    {
        
        alert("You have entered an invalid email address!");
        return false;
    }
    
    var z=document.forms["contactform"]["phonenumber"].value;
  
  if( /^\d{10}$/.test(z)== false)
        {
      alert("wrong format");
        }
      
}

   


//   document.contactform.phonenumber,document.contactform.email,document.contactform.name

  

  


