/* ========================================
   MISTRY INTERIORS — Main JavaScript
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ========== NAVBAR SCROLL EFFECT ==========
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  const handleNavbarScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });

  // ========== MOBILE NAV TOGGLE ==========
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
      document.body.style.overflow = navLinks.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        const offset = 80; // navbar height
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ========== REVEAL ON SCROLL (Intersection Observer) ==========
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ========== COUNTER ANIMATION ==========
  const statNumbers = document.querySelectorAll(".stat-number[data-count]");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countTo = parseInt(target.getAttribute("data-count"));
          animateCounter(target, 0, countTo, 2000);
          counterObserver.unobserve(target);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  statNumbers.forEach((el) => counterObserver.observe(el));

  function animateCounter(element, start, end, duration) {
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeOut);

      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // ========== PARALLAX HERO BACKGROUND ==========
  const heroBg = document.querySelector(".hero-bg-img");

  if (heroBg) {
    window.addEventListener(
      "scroll",
      () => {
        const scrolled = window.scrollY;
        const heroHeight = document.querySelector(".hero").offsetHeight;

        if (scrolled < heroHeight) {
          const parallaxValue = scrolled * 0.3;
          heroBg.style.transform = `scale(1.05) translateY(${parallaxValue}px)`;
        }
      },
      { passive: true },
    );
  }

  // ========== SCROLL-DRIVEN PROCESS TIMELINE ==========
  const processTimeline = document.getElementById("process-timeline");
  const timelineLine = document.getElementById("process-timeline-line");
  const processSteps = document.querySelectorAll(".process-step");

  if (processTimeline && timelineLine && processSteps.length > 0) {
    const updateTimeline = () => {
      const timelineRect = processTimeline.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled into the timeline section
      // The line starts drawing when the timeline enters the viewport (trigger point at 70% down the screen)
      const triggerPoint = windowHeight * 0.7;
      const scrollIntoTimeline = triggerPoint - timelineTop;
      const scrollableDistance = timelineHeight;

      // Calculate line progress (0 to 1)
      let progress = scrollIntoTimeline / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      // Set the line height
      const lineHeight = progress * timelineHeight;
      timelineLine.style.height = lineHeight + "px";

      // Hide the glow dot when line hasn't started or is complete
      if (progress <= 0 || progress >= 1) {
        timelineLine.style.setProperty("--glow-opacity", "0");
      } else {
        timelineLine.style.setProperty("--glow-opacity", "1");
      }

      // Activate steps when the line reaches their dot position
      processSteps.forEach((step) => {
        const stepRect = step.getBoundingClientRect();
        const dotTop = stepRect.top - timelineRect.top + 10; // offset for dot center

        if (lineHeight >= dotTop) {
          step.classList.add("timeline-active");
        } else {
          step.classList.remove("timeline-active");
        }
      });
    };

    // Run on scroll with requestAnimationFrame for smooth performance
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateTimeline();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true },
    );

    // Initial check
    updateTimeline();
  }

  // ========== PORTFOLIO HOVER TILT (subtle) ==========
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -2;
      const rotateY = ((x - centerX) / centerX) * 2;

      item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
      item.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    item.addEventListener("mouseenter", () => {
      item.style.transition = "none";
    });
  });

  // ========== CONTACT FORM ==========
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById("form-submit");
      const originalText = submitBtn.querySelector("span").textContent;

      // Simple form feedback
      submitBtn.querySelector("span").textContent = "Sending...";
      submitBtn.style.pointerEvents = "none";

      // Simulate send (replace with actual form handler)
      setTimeout(() => {
        submitBtn.querySelector("span").textContent = "Sent ✓";
        submitBtn.style.backgroundColor = "var(--color-accent)";
        submitBtn.style.borderColor = "var(--color-accent)";

        setTimeout(() => {
          submitBtn.querySelector("span").textContent = originalText;
          submitBtn.style.pointerEvents = "";
          submitBtn.style.backgroundColor = "";
          submitBtn.style.borderColor = "";
          contactForm.reset();
        }, 3000);
      }, 1500);
    });
  }

  // ========== ACTIVE NAV LINK HIGHLIGHT ==========
  const sections = document.querySelectorAll("section[id]");
  const navLinksAll = document.querySelectorAll(".nav-link");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinksAll.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-80px 0px -50% 0px",
    },
  );

  sections.forEach((section) => sectionObserver.observe(section));

  // ========== CURSOR EFFECT (Desktop only) ==========
  if (window.matchMedia("(hover: hover)").matches) {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const style = document.createElement("style");
    style.textContent = `
            .custom-cursor {
                width: 8px;
                height: 8px;
                background-color: rgba(2, 6, 111, 0.5);
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1),
                            width 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                            height 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                            background-color 0.3s ease;
                transform: translate(-50%, -50%);
                mix-blend-mode: difference;
            }
            .custom-cursor.hover {
                width: 40px;
                height: 40px;
                background-color: rgba(2, 6, 111, 0.15);
            }
        `;
    document.head.appendChild(style);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // Enlarge cursor on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .portfolio-item, .service-card",
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
  }

  // ========== PRELOADER ==========
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    // Trigger hero animations after load
    setTimeout(() => {
      document.querySelectorAll(".hero .reveal").forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 200);
      });
    }, 300);
  });
});
