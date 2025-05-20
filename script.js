// Get all the project divs
const projects = document.querySelectorAll('.project');

// Event listeners for mouseenter and mouseleave to create the hover effect
projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    if (window.innerWidth > 600) {
      project.style.transform = 'scale(1.1)';
      project.style.transition = 'transform 0.3s ease';
    }
  });
  
  project.addEventListener('mouseleave', () => {
    if (window.innerWidth > 600) {
      project.style.transform = 'scale(1)';
      project.style.transition = 'transform 0.3s ease';
    }
  });
});
