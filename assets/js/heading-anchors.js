// Make headings with IDs clickable to navigate to their anchor
document.addEventListener('DOMContentLoaded', function() {
  // Select all headings with an id in the post content
  const headings = document.querySelectorAll('.post .entry h1[id], .post .entry h2[id], .post .entry h3[id], .post .entry h4[id], .post .entry h5[id], .post .entry h6[id]');
  
  headings.forEach(function(heading) {
    // Make heading clickable
    heading.style.cursor = 'pointer';
    
    heading.addEventListener('click', function(e) {
      // Update URL with the fragment identifier
      const id = this.getAttribute('id');
      if (id) {
        window.location.hash = id;
      }
    });
  });
});
