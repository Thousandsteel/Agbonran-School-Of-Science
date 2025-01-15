

  function animateCounter(id, target) {
    const element = document.getElementById(id);
    let current = 0;
    const increment = Math.ceil(target / 100); // Increment step
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      element.textContent = current + (id === "satisfaction-count" ? "%" : ""); // Add "%" for satisfaction
    }, 30); // Speed of the animation
  }

  // Initialize Counters
  document.addEventListener("DOMContentLoaded", () => {
    animateCounter("students-count", 1200);
    animateCounter("teachers-count", 50);
    animateCounter("graduates-count", 5000);
    animateCounter("satisfaction-count", 100);
  });

