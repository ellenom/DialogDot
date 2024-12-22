// Dynamically update the year in the footer
const yearSpan = document.getElementById('current-year');
yearSpan.textContent = new Date().getFullYear();

// Initialize tsParticles with the new configuration
tsParticles.load({
  id: "tsparticles",
  options: {
    background: {
      color: "#000" // Background color of particles
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse" // Repulse particles on click
        },
        onHover: {
          enable: true,
          mode: "bubble" // Bubble effect on hover
        }
      },
      modes: {
        bubble: {
          distance: 200, // Distance for bubble effect
          duration: 2, // Duration of bubble effect
          opacity: 0, // Final opacity of bubbles
          size: 0, // Final size of bubbles
          speed: 3 // Speed of bubble effect
        },
        repulse: {
          distance: 400, // Distance for repulse effect
          duration: 0.4 // Duration of repulse effect
        }
      }
    },
    particles: {
      color: { value: "#ffffff" }, // Particle color
      move: {
        direction: "none", // Move in no particular direction
        enable: true, // Enable particle movement
        outModes: "out", // Move particles outside canvas bounds
        random: true, // Random movement
        speed: 0.3 // Speed of particles
      },
      number: {
        density: {
          enable: true // Enable density adjustment
        },
        value: 600 // Number of particles
      },
      opacity: {
        animation: {
          enable: true, // Enable opacity animation
          speed: 5 // Speed of opacity animation
        },
        value: { min: 0.3, max: 0.6 } // Opacity range
      },
      shape: {
        type: "circle" // Shape of particles
      },
      size: {
        value: 1 // Size of particles
      }
    }
  }
});
