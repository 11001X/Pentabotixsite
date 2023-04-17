const images = document.querySelectorAll('.loading-image');

images.forEach(image => {
  image.addEventListener('load', () => {
    const progressBar = image.parentNode.querySelector('.progress');
    progressBar.style.width = '100%';
  });

  image.addEventListener('error', () => {
    console.error(`Error loading image: ${image.src}`);
  });
});
