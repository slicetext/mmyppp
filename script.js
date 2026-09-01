const container = document.querySelector('#timeline-wrapper');

container.addEventListener('wheel', (event) => {

    update_descriptions()
    // If the user is already scrolling horizontally, let the browser handle it
    if (event.deltaX !== 0)  return;
    
    // Redirect vertical scroll to horizontal
    // container.scrollLeft += event.deltaY;
    container.scrollBy({ left: (window.innerWidth * 31) / 100 * Math.sign(event.deltaY), behavior: 'smooth' });
    
    // Prevent the default vertical page scroll
    event.preventDefault();
});

window.addEventListener('keydown', (e) => {
  const scrollAmount = (window.innerWidth * 30) / 100; // Adjust speed here
  if (e.key === 'ArrowRight') {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else if (e.key === 'ArrowLeft') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
});

const sources_button = document.getElementById('sources-button');
sources_button.addEventListener('click', function() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});
