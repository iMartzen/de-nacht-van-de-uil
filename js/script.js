/**
 * De Nacht van de Uil 
 */

// --- SafeDOM helper: sanitize & insert without innerHTML ---
const SafeDOM = (() => {
  const FORBIDDEN_TAGS = new Set([
    "SCRIPT",
    "STYLE",
    "IFRAME",
    "OBJECT",
    "EMBED",
    "LINK",
    "META",
  ]);
  const URL_ATTRS = new Set(["src", "href", "xlink:href", "formaction"]);

  function isDangerousUrl(value) {
    if (!value) return false;
    const v = String(value).trim().toLowerCase();
    if (v.startsWith("#")) return false; // allow same-page anchors
    // Allow relative paths that don't start with a protocol
    if (!v.includes("://") && !v.startsWith("//")) return false; // allow relative paths
    // Allow only http/https and protocol-relative URLs for absolute URLs
    return !(
      v.startsWith("http://") ||
      v.startsWith("https://") ||
      v.startsWith("//")
    );
  }

  function stripDanger(el) {
    // remove event handlers and dangerous URL attributes
    for (const attr of [...el.attributes]) {
      const name = attr.name.toLowerCase();
      if (name.startsWith("on")) {
        el.removeAttribute(attr.name);
        continue;
      }
      if (URL_ATTRS.has(name) && isDangerousUrl(attr.value)) {
        el.removeAttribute(attr.name);
      }
    }
  }

  function sanitizeNode(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node;
      if (FORBIDDEN_TAGS.has(el.tagName)) {
        el.remove();
        return null;
      }
      stripDanger(el);
    }
    for (const child of [...node.childNodes]) sanitizeNode(child);
    return node;
  }

  function createFragment(html) {
    // If DOMPurify is present, prefer it
    if (typeof DOMPurify !== "undefined") {
      // Return a DOM fragment when possible
      if (DOMPurify.removed === undefined) {
        // Standard DOMPurify build
        const frag = DOMPurify.sanitize(html, { RETURN_DOM_FRAGMENT: true });
        return frag;
      }
      // Fallback: sanitize to string
      const clean = DOMPurify.sanitize(html);
      const tpl = document.createElement("template");
      tpl.innerHTML = clean;
      return tpl.content;
    }
    // Fallback minimal sanitizer using DOMParser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    sanitizeNode(doc.body);
    const frag = document.createDocumentFragment();
    for (const child of [...doc.body.childNodes]) frag.appendChild(child);
    return frag;
  }

  function set(targetEl, html) {
    if (!targetEl) return;
    const frag = createFragment(html);
    targetEl.replaceChildren(frag);
  }

  return { set };
})();

const UilenApp = {
  currentPage: null,

  // Initialize the app
  async init() {
    this.currentPage = this.getCurrentPage();
    await this.loadHeaderAndFooter();
    this.initAudioPlayer();
    this.initStoryNarration();
    this.initMobileMenu();
  },

  // Get current page identifier
  getCurrentPage() {
    const path = window.location.pathname;
    if (path === "/" || path.endsWith("index.html")) {
      return "home";
    } else if (path.includes("/uilen/")) {
      return path.split("/").pop().replace(".html", "");
    }
    return "home";
  },

  // Load header and footer
  async loadHeaderAndFooter() {
    const isOwlPage = this.currentPage !== "home";
    const basePath = isOwlPage ? "../" : "./";

    try {
      // Load header
      const headerResponse = await fetch(`${basePath}partials/header.html`);
      if (headerResponse.ok) {
        let headerHTML = await headerResponse.text();

        // Set active navigation
        headerHTML = headerHTML
          .replace(
            "{{HOME_ACTIVE}}",
            this.currentPage === "home" ? "active" : ""
          )
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

        // Fix navigation links based on current page location
        if (isOwlPage) {
          // On owl pages, use relative paths
          headerHTML = headerHTML
            .replace('href="/"', 'href="../index.html"')
            .replace('href="/uilen/steenuil.html"', 'href="steenuil.html"')
            .replace('href="/uilen/kerkuil.html"', 'href="kerkuil.html"')
            .replace('href="/uilen/bosuil.html"', 'href="bosuil.html"')
            .replace('href="/uilen/velduil.html"', 'href="velduil.html"')
            .replace('href="/uilen/ransuil.html"', 'href="ransuil.html"')
            .replace('href="/uilen/oehoe.html"', 'href="oehoe.html"');
        } else {
          // On home page, use proper relative paths
          headerHTML = headerHTML
            .replace(
              'href="/uilen/steenuil.html"',
              'href="uilen/steenuil.html"'
            )
            .replace('href="/uilen/kerkuil.html"', 'href="uilen/kerkuil.html"')
            .replace('href="/uilen/bosuil.html"', 'href="uilen/bosuil.html"')
            .replace('href="/uilen/velduil.html"', 'href="uilen/velduil.html"')
            .replace('href="/uilen/ransuil.html"', 'href="uilen/ransuil.html"')
            .replace('href="/uilen/oehoe.html"', 'href="uilen/oehoe.html"');
        }

        // Safely insert sanitized header without using innerHTML
        SafeDOM.set(document.getElementById("app-header"), headerHTML);
      }

      // Load footer
      const footerResponse = await fetch(`${basePath}partials/footer.html`);
      if (footerResponse.ok) {
        const footerHTML = await footerResponse.text();
        // Safely insert sanitized footer without using innerHTML
        SafeDOM.set(document.getElementById("app-footer"), footerHTML);
      }
    } catch (error) {
      console.error("Error loading partials:", error);
    }
  },

  // Initialize audio player for owl pages
  initAudioPlayer() {
    const audioButtons = document.querySelectorAll(".audio-play-btn");

    audioButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const audioId = button.getAttribute("data-audio");
        const audio = document.getElementById(audioId);

        if (!audio) return;

        if (audio.paused) {
          // Stop any spoken story narration before playing a bird call
          if (window.speechSynthesis) window.speechSynthesis.cancel();

          // Pause other audio and reset buttons
          document.querySelectorAll("audio").forEach((otherAudio) => {
            if (otherAudio !== audio) otherAudio.pause();
          });

          document.querySelectorAll(".audio-play-btn").forEach((btn) => {
            btn.querySelector("i").className = "bi bi-play-circle me-2";
            btn.className = "btn btn-outline-accent audio-play-btn";
          });

          // Play this audio and update button
          audio.play();
          button.querySelector("i").className = "bi bi-pause-circle me-2";
          button.className = "btn btn-outline-accent-2 audio-play-btn";
        } else {
          // Pause and reset button
          audio.pause();
          button.querySelector("i").className = "bi bi-play-circle me-2";
          button.className = "btn btn-outline-accent audio-play-btn";
        }
      });
    });

    // Reset button when audio ends
    document.querySelectorAll("audio").forEach((audio) => {
      audio.addEventListener("ended", () => {
        const button = document.querySelector(`[data-audio="${audio.id}"]`);
        if (button) {
          button.querySelector("i").className = "bi bi-play-circle me-2";
          button.className = "btn btn-outline-accent audio-play-btn";
        }
      });
    });
  },

  // Read the per-stop owl story aloud in Dutch using the Web Speech API.
  // No audio files needed; the story text stays visible as a fallback.
  initStoryNarration() {
    const storyEl = document.querySelector(".owl-story[data-tts]");
    const button = document.querySelector(".story-play-btn");
    if (!storyEl || !button) return;

    const synth = window.speechSynthesis;
    // Hide the button when the browser can't do speech synthesis; text remains readable.
    if (!synth || typeof SpeechSynthesisUtterance === "undefined") {
      button.classList.add("d-none");
      return;
    }

    const text = storyEl.textContent.replace(/\s+/g, " ").trim();
    if (!text) {
      button.classList.add("d-none");
      return;
    }

    const label = button.querySelector("span");
    const icon = button.querySelector("i");
    let speaking = false;

    // Pick the most natural-sounding Dutch voice available on this device.
    // Browsers expose whatever the OS has; quality varies a lot, so we score
    // candidates instead of grabbing the first one (which is often a robotic
    // built-in like macOS "Xander" or Linux eSpeak).
    const pickDutchVoice = () => {
      const voices = synth.getVoices() || [];
      const dutch = voices.filter(
        (v) => /^nl(-|_|$)/i.test(v.lang) || /dutch|nederlands/i.test(v.name)
      );
      if (dutch.length === 0) return null;

      const score = (v) => {
        const n = (v.name || "").toLowerCase();
        let s = 0;
        if (n.includes("google")) s += 100; // Google network voices sound best
        if (/natural|neural|premium|enhanced|verbeterd|siri/.test(n)) s += 60;
        if (v.localService === false) s += 40; // network > local on most systems
        if (/nl-nl/i.test(v.lang)) s += 10; // prefer NL over Flemish (nl-BE)
        if (/compact|espeak|pico|eloquence/.test(n)) s -= 100; // robotic engines
        return s;
      };

      return dutch.slice().sort((a, b) => score(b) - score(a))[0];
    };

    const setIdle = () => {
      speaking = false;
      if (icon) icon.className = "bi bi-play-circle me-2";
      if (label) label.textContent = "Verhaal voorlezen";
      button.className = "btn btn-outline-accent story-play-btn";
    };

    const setSpeaking = () => {
      speaking = true;
      if (icon) icon.className = "bi bi-stop-circle me-2";
      if (label) label.textContent = "Stoppen";
      button.className = "btn btn-outline-accent-2 story-play-btn";
    };

    const start = () => {
      synth.cancel(); // clear any queued or lingering utterance
      // Pause any playing bird-call audio so the two don't overlap
      document.querySelectorAll("audio").forEach((a) => a.pause());

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "nl-NL";
      utter.rate = 0.95;
      utter.pitch = 1;
      const voice = pickDutchVoice();
      if (voice) utter.voice = voice;
      utter.onend = setIdle;
      utter.onerror = setIdle;
      synth.speak(utter);
      setSpeaking();
    };

    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (speaking) {
        synth.cancel();
        setIdle();
      } else {
        start();
      }
    });

    // Voices can load asynchronously; this nudges some browsers to populate them.
    if (typeof synth.onvoiceschanged !== "undefined") {
      synth.onvoiceschanged = () => synth.getVoices();
    }

    // Never let narration keep talking after leaving the page.
    const stopNarration = () => synth.cancel();
    window.addEventListener("beforeunload", stopNarration);
    window.addEventListener("pagehide", stopNarration);
  },

  // Handle mobile menu
  initMobileMenu() {
    document.addEventListener("click", (e) => {
      // Only close menu for actual navigation links, not dropdown toggles
      if (
        e.target.matches(".dropdown-item") ||
        (e.target.matches(".navbar-nav .nav-link") &&
          !e.target.classList.contains("dropdown-toggle"))
      ) {
        // Let the link navigate normally, then close the mobile menu
        setTimeout(() => {
          const navbarCollapse = document.querySelector(".navbar-collapse");
          if (navbarCollapse?.classList.contains("show")) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        }, 50);
      }
    });
  },
};

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  UilenApp.init();
});
