let gallery_popup = document.querySelector('.gallery-popup');
let gallery_btnexit = document.querySelector('#gallery-popup-exitbtn');
let gallery_box = document.querySelector('.gallerybox');
let images = document.querySelectorAll('.gallerybox');

gallery_btnexit.addEventListener('click', () => {
    gallery_popup.style.display = "none";
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        gallery_popup.style.display = "none";
    }
};

function currentslide(n) {

};

function popup() {
    gallery_popup.style.display = "flex";
    console.log("sal"); 
    for (i = 0; i<= images.length); i++ {
        console.log(image[i])
    }
};


/*gallery_box.addEventListener('onclick', () => {
    gallery_popup.style.display = "flex";
    console.log("sal");
});*/