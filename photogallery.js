function getImages(imageUrl, containerSelector) {
    // get a reference to the container element where the images will be added
    let container = document.querySelector(containerSelector);
  
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
          let imageHtml = '<img src="' + imageSrc + '">';
          container.innerHTML += imageHtml;
        };
      });
  };
  
  // call the getImages function with the URL of the image folder and the selector for the container element
  getImages('https://fereastrarelax.ro/imgsite/imgsite-galerie/Cabana/', '#image-container');
  