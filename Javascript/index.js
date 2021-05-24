const hamburger = document.querySelector(".hamburger");
const links = document.querySelector('.links');
const all = document.querySelectorAll('.nav-links');


hamburger.addEventListener('click', () => {
    links.classList.toggle('open');
    all.forEach(link => {
        link.classList.add('fade');
    });
    document.getElementById('1').classList.toggle('show1');
    document.getElementById('2').classList.toggle('show2');
    document.getElementById('3').classList.toggle('show3');
});
all.forEach(link => {
    link.addEventListener('click', () => {
        links.classList.toggle('open');
    });
});
var home = document.getElementById("home");
var about = document.getElementById("about");
var project = document.getElementById("myworks");
var contact = document.getElementById("contact");

//to find the position of the element..
function findPosition(obj) { 
    var currenttop = 0; 
    if (obj.offsetParent) { 
        do { 
            currenttop += obj.offsetTop; 
        } while ((obj = obj.offsetParent)); 
        return [currenttop]; 
    } 
}

//to scroll down to the position..
const showHome = () => {
    window.scrollTo(0, findPosition(home));
}
const showAbout = () => {
    window.scrollTo(0, findPosition(about));
}
const showProjects = () => {
    window.scrollTo(0, findPosition(project));
}
const showContact = () => {
    window.scrollTo(0, findPosition(contact));
}



const close1 = document.getElementById("close1");
const video1 = document.getElementById("video1");
const image1 = document.getElementById("img1");

const close2 = document.getElementById("close2");
const video2 = document.getElementById("video2");
const image2 = document.getElementById("img2");

const close3 = document.getElementById("close3");
const video3 = document.getElementById("video3");
const image3 = document.getElementById("img3");

const close4 = document.getElementById("close4");
const video4 = document.getElementById("video4");
const image4 = document.getElementById("img4");

image1.addEventListener("click", () => {
    video1.style.display = "block";
    close1.style.display = "block";    
})
close1.addEventListener("click", () => {
    video1.style.display = "none";
    close1.style.display = "none";
});

image2.addEventListener("click", () => {
    video2.style.display = "block";
    close2.style.display = "block";    
})
close2.addEventListener("click", () => {
    video2.style.display = "none";
    close2.style.display = "none";
});

image3.addEventListener("click", () => {
    video3.style.display = "block";
    close3.style.display = "block";    
})
close3.addEventListener("click", () => {
    video3.style.display = "none";
    close3.style.display = "none";
});

image4.addEventListener("click", () => {
    video4.style.display = "block";
    close4.style.display = "block";    
})
close4.addEventListener("click", () => {
    video4.style.display = "none";
    close4.style.display = "none";
});