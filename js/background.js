document.addEventListener('DOMContentLoaded', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
  const random_image = images[Math.floor(Math.random() * images.length)];
  const momentum = document.querySelector('#momentum-wrapper');
  momentum.style = `background:linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/images/${random_image}"), no-repeat; background-size:cover; color:white;`;
});
