const observer = new IntersectionObserver(entries => {
    console.log('S')
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('squareanimate');
      }
    });
  });

// let courses = document.getElementById("Courses")
let cards = document.getElementsByClassName('col-lg-3')
Array.from(cards).forEach( e=>{
    observer.observe(e);
})
