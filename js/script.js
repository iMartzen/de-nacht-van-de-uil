/**
 * De Nacht van de Uil - Main JavaScript
 * Simple, cache-free implementation
 */

// Global app configuration
const UilenApp = {
  baseUrl: window.location.origin,
  currentPage: null,

  // Initialize the app
  init() {
    this.currentPage = this.getCurrentPage();
    this.loadHeader();
    this.loadFooter();
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
  loadHeader() {
    const headerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="/">
                        <i class="bi bi-moon-stars me-2"></i>
                        De Nacht van de Uil
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link ${
                                  this.currentPage === "home" ? "active" : ""
                                }" href="/">
                                    <i class="bi bi-house-door me-1"></i>Home
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-book me-1"></i>Uilen
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item ${
                                      this.currentPage === "steenuil"
                                        ? "active"
                                        : ""
                                    }" href="/uilen/steenuil.html">Steenuil</a></li>
                                    <li><a class="dropdown-item ${
                                      this.currentPage === "kerkuil"
                                        ? "active"
                                        : ""
                                    }" href="/uilen/kerkuil.html">Kerkuil</a></li>
                                    <li><a class="dropdown-item ${
                                      this.currentPage === "bosuil"
                                        ? "active"
                                        : ""
                                    }" href="/uilen/bosuil.html">Bosuil</a></li>
                                    <li><a class="dropdown-item ${
                                      this.currentPage === "velduil"
                                        ? "active"
                                        : ""
                                    }" href="/uilen/velduil.html">Velduil</a></li>
                                    <li><a class="dropdown-item ${
                                      this.currentPage === "ransuil"
                                        ? "active"
                                        : ""
                                    }" href="/uilen/ransuil.html">Ransuil</a></li>
                                    <li><a class="dropdown-item ${
                                      this.currentPage === "oehoe"
                                        ? "active"
                                        : ""
                                    }" href="/uilen/oehoe.html">Oehoe</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;

    const headerElement = document.getElementById("app-header");
    if (headerElement) {
      headerElement.innerHTML = headerHTML;
    }
  },

  // Load and inject footer
  loadFooter() {
    const footerHTML = `
            <footer class="bg-card border-top mt-5">
                <div class="container py-4">
                    <div class="row">
                        <div class="col-md-6">
                            <h5 class="text-accent mb-3">
                                <i class="bi bi-moon-stars me-2"></i>
                                De Nacht van de Uil
                            </h5>
                            <p class="text-muted mb-0">
                                Ontdek de fascinerende wereld van Nederlandse uilen tijdens deze educatieve wandeling.
                                Een initiatief voor natuurbehoud en bewustwording.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-accent mb-3">Quick Links</h6>
                            <ul class="list-unstyled">
                                <li><a href="/" class="text-decoration-none text-muted">Home</a></li>
                                <li><a href="/uilen/steenuil.html" class="text-decoration-none text-muted">Steenuil</a></li>
                                <li><a href="/uilen/kerkuil.html" class="text-decoration-none text-muted">Kerkuil</a></li>
                                <li><a href="/uilen/bosuil.html" class="text-decoration-none text-muted">Bosuil</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr class="my-4 border-secondary">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <p class="text-muted small mb-0">
                                © 2025 De Nacht van de Uil. Gemaakt met ❤️ voor de natuur.
                            </p>
                        </div>
                        <div class="col-md-4 text-md-end">
                            <p class="text-muted small mb-0">
                                Simpel • Mobiel • Cache-vrij
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        `;

    const footerElement = document.getElementById("app-footer");
    if (footerElement) {
      footerElement.innerHTML = footerHTML;
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
