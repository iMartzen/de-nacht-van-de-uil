/**
 * De Nacht van de Uil - Main JavaScript
 * Simple, cache-free implementation
 */

// Global app configuration
const UilenApp = {
  baseUrl: window.location.origin,
  currentPage: null,

  // Initialize the app
  async init() {
    this.currentPage = this.getCurrentPage();
    await Promise.all([this.loadHeader(), this.loadFooter()]);
    this.initPageSpecific();
    this.initEventListeners();
    console.log("UilenApp initialized for page:", this.currentPage);
  },

  // Get current page identifier
  getCurrentPage() {
    const path = window.location.pathname;
    if (path === "/" || path.endsWith("index.html")) {
      return "home";
    } else if (path.includes("/uilen/")) {
      const filename = path.split("/").pop().replace(".html", "");
      return filename;
    }
    return "unknown";
  },

  // Load and inject header
  async loadHeader() {
    try {
      const response = await fetch("/partials/header.html");
      if (!response.ok) throw new Error("Failed to load header");

      let headerHTML = await response.text();

      // Replace placeholders with active classes
      headerHTML = headerHTML
        .replace("{{HOME_ACTIVE}}", this.currentPage === "home" ? "active" : "")
        .replace(
          "{{STEENUIL_ACTIVE}}",
          this.currentPage === "steenuil" ? "active" : ""
        )
        .replace(
          "{{KERKUIL_ACTIVE}}",
          this.currentPage === "kerkuil" ? "active" : ""
        )
        .replace(
          "{{BOSUIL_ACTIVE}}",
          this.currentPage === "bosuil" ? "active" : ""
        )
        .replace(
          "{{VELDUIL_ACTIVE}}",
          this.currentPage === "velduil" ? "active" : ""
        )
        .replace(
          "{{RANSUIL_ACTIVE}}",
          this.currentPage === "ransuil" ? "active" : ""
        )
        .replace(
          "{{OEHOE_ACTIVE}}",
          this.currentPage === "oehoe" ? "active" : ""
        );

      const headerElement = document.getElementById("app-header");
      if (headerElement) {
        headerElement.innerHTML = headerHTML;
      }
    } catch (error) {
      console.error("Error loading header:", error);
      // Fallback to basic header if loading fails
      const headerElement = document.getElementById("app-header");
      if (headerElement) {
        headerElement.innerHTML = `
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container">
              <a class="navbar-brand fw-bold" href="/">
                <i class="bi bi-moon-stars me-2"></i>
                De Nacht van de Uil
              </a>
            </div>
          </nav>
        `;
      }
    }
  },

  // Load and inject footer
  async loadFooter() {
    try {
      const response = await fetch("/partials/footer.html");
      if (!response.ok) throw new Error("Failed to load footer");

      const footerHTML = await response.text();

      const footerElement = document.getElementById("app-footer");
      if (footerElement) {
        footerElement.innerHTML = footerHTML;
      }
    } catch (error) {
      console.error("Error loading footer:", error);
      // Fallback to basic footer if loading fails
      const footerElement = document.getElementById("app-footer");
      if (footerElement) {
        footerElement.innerHTML = `
          <footer class="bg-card border-top mt-5">
            <div class="container py-4">
              <div class="row">
                <div class="col-md-8">
                  <p class="text-muted small mb-0">
                    © 2025 De Nacht van de Uil. Gemaakt met ❤️ voor de natuur.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        `;
      }
    }
  },

  // Initialize page-specific functionality
  initPageSpecific() {
    switch (this.currentPage) {
      case "home":
        this.initHomePage();
        break;
      case "steenuil":
      case "kerkuil":
      case "bosuil":
      case "velduil":
      case "ransuil":
      case "oehoe":
        this.initOwlPage(this.currentPage);
        break;
    }
  },

  // Initialize home page
  initHomePage() {
    console.log("Initializing home page");
    // Add any home page specific functionality here
  },

  // Initialize owl detail page
  initOwlPage(owlName) {
    console.log("Initializing owl page for:", owlName);
    this.initAudioPlayer();
  },

  // Initialize audio player functionality
  initAudioPlayer() {
    const audioButtons = document.querySelectorAll(".audio-play-btn");

    audioButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const audioId = button.getAttribute("data-audio");
        const audioElement = document.getElementById(audioId);

        if (audioElement) {
          if (audioElement.paused) {
            // Pause all other audio first
            document.querySelectorAll("audio").forEach((audio) => {
              if (audio !== audioElement) {
                audio.pause();
              }
            });

            // Update all buttons to play state
            audioButtons.forEach((btn) => {
              const icon = btn.querySelector("i");
              icon.className = "bi bi-play-circle me-2";
              btn.classList.remove("btn-outline-accent-2");
              btn.classList.add("btn-outline-accent");
            });

            // Play this audio and update button
            audioElement.play();
            const icon = button.querySelector("i");
            icon.className = "bi bi-pause-circle me-2";
            button.classList.remove("btn-outline-accent");
            button.classList.add("btn-outline-accent-2");
          } else {
            audioElement.pause();
            const icon = button.querySelector("i");
            icon.className = "bi bi-play-circle me-2";
            button.classList.remove("btn-outline-accent-2");
            button.classList.add("btn-outline-accent");
          }
        }
      });
    });

    // Handle audio ended event
    document.querySelectorAll("audio").forEach((audio) => {
      audio.addEventListener("ended", () => {
        const button = document.querySelector(`[data-audio="${audio.id}"]`);
        if (button) {
          const icon = button.querySelector("i");
          icon.className = "bi bi-play-circle me-2";
          button.classList.remove("btn-outline-accent-2");
          button.classList.add("btn-outline-accent");
        }
      });
    });
  },

  // Initialize global event listeners
  initEventListeners() {
    // Mobile menu close on link click
    document.addEventListener("click", (e) => {
      if (e.target.matches(".navbar-nav .nav-link, .dropdown-item")) {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });

    // Smooth scrolling for anchor links
    document.addEventListener("click", (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });

    // Focus management for accessibility
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        // Close any open dropdowns
        const openDropdowns = document.querySelectorAll(".dropdown-menu.show");
        openDropdowns.forEach((dropdown) => {
          const bsDropdown = bootstrap.Dropdown.getInstance(
            dropdown.previousElementSibling
          );
          if (bsDropdown) {
            bsDropdown.hide();
          }
        });
      }
    });
  },
};

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  UilenApp.init();
});

// Disable service worker and caching
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });
}

// Clear any existing cache
if ("caches" in window) {
  caches.keys().then((names) => {
    names.forEach((name) => {
      caches.delete(name);
    });
  });
}
