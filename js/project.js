/* ========================================
   PROJECT PAGE — Data & Interactivity
   ======================================== */

// Project data — each portfolio item maps to a project with gallery images
const PROJECTS = {
  1: {
    title: "Textile Producer Office",
    category: "Premium Corporate Interior",
    location: "Mumbai",
    area: "15,000 sq ft",
    type: "Design & Build",
    description:
      "A commanding reception and lobby space designed for a leading corporate headquarters. Every surface, light fixture, and material was selected to communicate authority and warmth in equal measure.",
    images: [
      "img/project_images/textile_producer_office/img1.png",
      "img/project_images/textile_producer_office/img2.jpg",
      "img/project_images/textile_producer_office/img3.jpg",
      "img/project_images/textile_producer_office/img4.jpg",
      "img/project_images/textile_producer_office/img5.jpg",
      "img/project_images/textile_producer_office/img6.jpg",
      "img/project_images/textile_producer_office/img7.jpg",
      "img/project_images/textile_producer_office/img8.png",
      "img/project_images/textile_producer_office/img9.jpg",
      "img/project_images/textile_producer_office/img10.jpg",
      "img/project_images/textile_producer_office/img11.jpg",
      "img/project_images/textile_producer_office/img12.jpg",
      "img/project_images/textile_producer_office/img13.jpg",
      "img/project_images/textile_producer_office/img14.jpg",
      "img/project_images/textile_producer_office/img15.jpg",
      "img/project_images/textile_producer_office/img16.jpg",
      "img/project_images/textile_producer_office/img17.jpg",
      "img/project_images/textile_producer_office/img18.jpg",
      "img/project_images/textile_producer_office/img19.jpg",
      "img/project_images/textile_producer_office/img20.jpg",
      "img/project_images/textile_producer_office/img21.jpg",
      "img/project_images/textile_producer_office/img22.jpg",
    ],
  },
  2: {
    title: "Lower Parel Office",
    category: "Corporate Office",
    location: "Mumbai",
    area: "14,000 sq ft",
    type: "Turnkey Fit-Out",
    description:
      "A modern open-plan workspace crafted for a fast-growing technology company. Clean sightlines, acoustic treatments, and flexible workstation configurations define this space.",
    images: [
      "img/project_images/lower_parel_office/img1.jpg",
      "img/project_images/lower_parel_office/img2.jpg",
      "img/project_images/lower_parel_office/img3.jpg",
      "img/project_images/lower_parel_office/img4.jpg",
      "img/project_images/lower_parel_office/img5.jpg",
      "img/project_images/lower_parel_office/img6.jpg",
      "img/project_images/lower_parel_office/img7.jpg",
      "img/project_images/lower_parel_office/img8.jpg",
      "img/project_images/lower_parel_office/img9.jpg",
      "img/project_images/lower_parel_office/img10.jpg",
      "img/project_images/lower_parel_office/img11.jpg",
      "img/project_images/lower_parel_office/img12.jpg",
      "img/project_images/lower_parel_office/img13.jpg",
      "img/project_images/lower_parel_office/img14.jpg",
      "img/project_images/lower_parel_office/img15.jpg",
      "img/project_images/lower_parel_office/img16.jpg",
    ],
  },
  3: {
    title: "Goregoan MNC Office",
    category: "MNC Office",
    location: "Mumbai",
    area: "14,000 sq ft",
    type: "Design & Build",
    description:
      "A premium boardroom and executive suite for a multinational corporation. Precision woodwork, integrated AV systems, and acoustic engineering come together in this intimate yet commanding space.",
    images: [
      "img/project_images/goregoan_mnc_office/img1.jpg",
      "img/project_images/goregoan_mnc_office/img2.png",
      "img/project_images/goregoan_mnc_office/img3.jpg",
      "img/project_images/goregoan_mnc_office/img4.jpg",
      "img/project_images/goregoan_mnc_office/img5.jpg",
      "img/project_images/goregoan_mnc_office/img6.jpg",
      "img/project_images/goregoan_mnc_office/img7.jpg",
      "img/project_images/goregoan_mnc_office/img8.jpg",
      "img/project_images/goregoan_mnc_office/img9.jpg",
      "img/project_images/goregoan_mnc_office/img10.jpg",
      "img/project_images/goregoan_mnc_office/img11.jpg",
      "img/project_images/goregoan_mnc_office/img12.jpg",
      "img/project_images/goregoan_mnc_office/img13.jpg",
      "img/project_images/goregoan_mnc_office/img14.jpg",
      "img/project_images/goregoan_mnc_office/img15.jpg",
      "img/project_images/goregoan_mnc_office/img16.jpg",
    ],
  },
  4: {
    title: "Manufacturer Office Interior",
    category: "Office Turnkey Interiors",
    location: "Silvassa",
    area: "15,000 sq ft",
    type: "Design & Build",
    description:
      "A full-floor turnkey interior execution for a leading industrial conglomerate. From structural modifications to final styling — delivered end-to-end with zero client intervention.",
    images: [
      "img/project_images/manufacturer_office/img1.jpg",
      "img/project_images/manufacturer_office/img2.jpg",
      "img/project_images/manufacturer_office/img3.jpg",
      "img/project_images/manufacturer_office/img4.jpg",
      "img/project_images/manufacturer_office/img5.jpg",
      "img/project_images/manufacturer_office/img6.jpg",
      "img/project_images/manufacturer_office/img7.jpg",
      "img/project_images/manufacturer_office/img8.jpg",
    ],
  },
  //   5: {
  //     title: "Modern Workspace Design",
  //     category: "Corporate Office",
  //     location: "Ahmedabad",
  //     area: "10,000 sq ft",
  //     type: "Design & Build",
  //     description:
  //       "A contemporary workspace designed for a progressive firm expanding into western India. Bright, open interiors with thoughtful zoning for collaboration and focus work.",
  //     images: [
  //       "img/about-bg.png",
  //       "img/portfolio-3.png",
  //       "img/portfolio-4.png",
  //       "img/hero-bg.png",
  //       "img/portfolio-2.png",
  //       "img/services-bg.png",
  //     ],
  //   },
};

// --- Get project ID from URL ---
function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || "1";
}

// --- Populate page with project data ---
function populatePage() {
  const id = getProjectId();
  const project = PROJECTS[id];

  if (!project) {
    document.getElementById("project-title").textContent = "Project Not Found";
    return;
  }

  document.title = `${project.title} — Mistry Interiors`;
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-category").textContent = project.category;
  document.getElementById("project-location").textContent = project.location;
  document.getElementById("project-area").textContent = project.area;
  document.getElementById("project-type").textContent = project.type;

  // Build masonry grid
  const grid = document.getElementById("masonry-grid");
  grid.innerHTML = "";

  project.images.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "masonry-item";
    item.setAttribute("data-index", i);

    const img = document.createElement("img");
    img.src = src;
    img.alt = `${project.title} — Image ${i + 1}`;
    img.loading = i < 3 ? "eager" : "lazy";

    // Detect landscape and apply wide class
    img.onload = function () {
      if (this.naturalWidth > this.naturalHeight) {
        item.classList.add("masonry-item--wide");
      }
    };

    item.appendChild(img);
    grid.appendChild(item);

    // Click to open lightbox
    item.addEventListener("click", () => openLightbox(i));
  });
}

// --- Lightbox ---
let currentIndex = 0;
let currentImages = [];

function openLightbox(index) {
  const id = getProjectId();
  const project = PROJECTS[id];
  if (!project) return;

  currentImages = project.images;
  currentIndex = index;

  updateLightboxImage();
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

function updateLightboxImage() {
  const img = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");

  // Brief fade for transition
  img.style.opacity = "0";
  img.style.transform = "scale(0.95)";

  setTimeout(() => {
    img.src = currentImages[currentIndex];
    img.alt = `Image ${currentIndex + 1}`;
    counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;

    // Fade in after src change
    requestAnimationFrame(() => {
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    });
  }, 150);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateLightboxImage();
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateLightboxImage();
}

// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  populatePage();

  // Lightbox controls
  document
    .getElementById("lightbox-close")
    .addEventListener("click", closeLightbox);
  document.getElementById("lightbox-next").addEventListener("click", nextImage);
  document.getElementById("lightbox-prev").addEventListener("click", prevImage);

  // Click backdrop to close
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (
      e.target === e.currentTarget ||
      e.target.classList.contains("lightbox-img-wrapper")
    ) {
      closeLightbox();
    }
  });

  // Keyboard nav
  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });
});
