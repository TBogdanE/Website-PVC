const imageFolder = 'https://fereastrarelax.ro/imgsite/imgsite-galerie/Cabana/';
const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];

fetch(imageFolder)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const images = doc.querySelectorAll('a[href]');
    const imageSources = [];

    images.forEach(image => {
      const extension = image.href.split('.').pop();
      if (imageExtensions.includes(extension)) {
        imageSources.push(`${imageFolder}${image.href}`);
      }
    });

    const imageElements = imageSources.map(src => {
      const img = document.createElement('img');
      img.src = src;
      return img;
    });

    const container = document.querySelector('#g-sct-cabana');
    imageElements.forEach(image => container.appendChild(image));
  })
  .catch(error => console.error(error));
