function getImages(sectionSelector, imageSrc, dataLightbox) {

    // get a reference to the container element where the images will be added
    let container = document.querySelector(`#${sectionSelector}`);
    // define the URL of the image folder on your server
    let imageUrl = imageSrc;
    let lightbox = dataLightbox;
    // make a request to the server to get a list of all the image files in the folder
    fetch(imageUrl)
        .then(response => response.text())
        .then(html => {
            // create a temporary div element to hold the HTML returned by the server
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // select all the <a> elements in the temporary div that link to image files
            let imageLinks = tempDiv.querySelectorAll('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]');

            // loop through the <a> elements and dynamically generate HTML code for each image
            for (let i = 0; i < imageLinks.length; i++) {
                let imageSrc = imageLinks[i].getAttribute('href');
                let imageHtml = '<a href="' + imageSrc + '" data-lightbox= "' + lightbox + '" ><img src="' + imageSrc + '"></a>';
                container.innerHTML += imageHtml;
                console.log(`Addedimage ${i} ${imageSrc}`);
            };
        });
};

window.addEventListener('load', function () {
    setTimeout(function () {
        getImages('g-sct-HanulAncutei', 'imgsite/imgsite-galerie/Hanul Ancutei/', 'HanulAncutei');
        getImages('g-sct-cabana', 'imgsite/imgsite-galerie/Cabana/', 'cabana');
        getImages('g-sct-others', 'imgsite/imgsite-galerie/OthersImg/', 'others');
    }, 10000);
});

