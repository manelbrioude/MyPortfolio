// menu icon toggle
let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick =  () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// scrolling
let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset =sec.offsetTop-100;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id')

        if(top>= offset && top< offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })

            sec.classList.add("show-animate");
        }
        else {
            sec.classList.remove("show-animate");
        }
    })
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY>100)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Read more button 
function readMore() {
    console.log("hola")
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}


//validate form filled
inputName=document.querySelector("#name")
inputemail=document.querySelector("#email")
inputphone=document.querySelector("#phone-number")
inputsubject=document.querySelector("#subject")
inputmessage=document.querySelector("#message")

// loading

save_btn=document.querySelector("#save-btn")
error=document.querySelector(".error")
error_message=document.querySelector(".error-message")
save_btn.onclick = function (e) {
    this.innerHTML = "<div class='loader'></div>";
    e.preventDefault()
    if( inputName.value!="" && inputemail.value!="" && inputphone.value!="" && inputsubject.value!="" && inputmessage.value!=""){
        setTimeout(()=>{
            error.style.display="inline";
            error_message.innerHTML="There has been a problem sending your message, please click here <a href='mailto:manel_brioude@hotmail.com?'><i class='bx bx-envelope'></i></a> to contact me";
            error_message.style = "font-size:2rem; text-decoration: none; color: white";
            this.innerHTML = "Error";
        },2000)
    }else{
        
        setTimeout(()=>{
            this.innerHTML = "Error";
            error.style.display="inline";
            error_message.innerHTML="Please fill correctly the form";
            error_message.style = "font-size:2rem; text-decoration: none; color: white";
        },2000)
    }
    
}

// home buttons 



