document.getElementById("details")
.addEventListener("submit", function(event){        /*addEventlistener -> listens the events from the input devices*/ 
    event.preventDefault();
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Phone = document.getElementById("phone").value;
    let DOB = document.getElementById("dob").value;
    let Age = document.getElementById("age").value;
    let Gender = document.querySelector('input[name="gender"]:checked').value;
    let Address = document.getElementById("address").value;

    let Document = [];
    document.querySelectorAll('input[type ="checkbox"]:checked').forEach(function(item){
        Document.push(item.value);
    });

    
    document.getElementById("p1").innerText ="Name :"+Name;
    document.getElementById("p2").innerText ="Email :"+Email;
    document.getElementById("p3").innerText ="Contact :"+Phone;
    document.getElementById("p4").innerText ="Age :"+Age;
    document.getElementById("p5").innerText ="Gender :"+Gender;
    document.getElementById("p6").innerText ="Address :"+Address;
    document.getElementById("p7").innerText ="Document :"+Document;

    let Image = document.getElementById("image").files[0];

    if(Image){
        let read = new FileReader();
        read.onload = function(e){
            document.getElementById("dp").src = e.target.result;
        };
        read.readAsDataURL(Image);
    }
});