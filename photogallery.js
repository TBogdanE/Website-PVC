fetch('https://fereastrarelax.ro/imgsite/imgsite-galerie/Cabana/')
    .then(response => response.text())
    .then(html => {
        // Parse the HTML to extract the image URLs
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const imageLinks = Array.from(doc.querySelectorAll('a')).map(a => a.href);
        const imageUrls = imageLinks.filter(link => link.endsWith('.jpg') || link.endsWith('.png')).map(link => link.replace('/imgsite/imgsite-galerie/Cabana/', 'https://fereastrarelax.ro/imgsite/imgsite-galerie/Cabana/'));
        console.log(`parser:${parser} \n doc:${doc} \n imageLinks:${imageLinks} \n imageUrls:${imageUrls}`);

        // Update the HTML to display the images
        const container = document.querySelector('#g-sct-others');
        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.setAttribute('data-mfp-src', url);
            const link = document.createElement('a');
            link.href = url;
            link.appendChild(img);
            container.appendChild(link);
            console.log(`img:${img} \n link:${link}`);
        });
    });



/*function getImages(sectionSelector, imageSrc, dataLightbox) {

    // get a reference to the container element where the images will be added
    let container = document.querySelector(`#${sectionSelector}`);
    // define the URL of the image folder on your server
    let imageUrl = imageSrc;
    let lightbox = dataLightbox;
    console.log(`1.imageSrc:${imageSrc}`);
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
                let imageHtml = '<a href="' + imageSrc + '" data-lightbox= "'+ lightbox +'" ><img src="' + imageSrc + '"></a>';
                container.innerHTML += imageHtml;
                console.log(`2.imageSrc:${imageSrc}`);
                console.log(`3.imageHtml:${imageHtml}`);
            };
        });
};

window.addEventListener('load', function() {
getImages('g-sct-HanulAncutei','imgsite/imgsite-galerie/Hanul\ Ancutei/', 'HanulAncutei');
getImages('g-sct-cabana','https://fereastrarelax.ro/imgsite/imgsite-galerie/Cabana/', 'cabana');
getImages('g-sct-others','https://fereastrarelax.ro/imgsite/imgsite-galerie/OthersImg/', 'others');
});
*/
