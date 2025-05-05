document.addEventListener("DOMContentLoaded", () => {
  const albumTrigger = document.querySelector("#album-trigger");
  const albumTriggerHeader = document.querySelector("#album-trigger-header");
  const masonryLayout = document.createElement("div");
  masonryLayout.classList.add("masonry-layout");
  masonryLayout.innerHTML = `
    <div class="masonry-content">
      <button class="close-btn">X</button>
      <div class="masonry-grid"></div>
    </div>
  `;
  document.body.appendChild(masonryLayout);

  const masonryGrid = masonryLayout.querySelector(".masonry-grid");
  const closeBtn = masonryLayout.querySelector(".close-btn");

  // Open masonry layout
  albumTrigger.addEventListener("click", () => {
    masonryLayout.style.display = "flex";
    loadImages();
  });

  // Open masonry layout for header album trigger
  albumTriggerHeader.addEventListener("click", () => {
    masonryLayout.style.display = "flex";
    loadImages();
  });

  // Close masonry layout
  const closeMasonry = () => {
    masonryLayout.style.display = "none";
    masonryGrid.innerHTML = ""; // Clear images
  };

  closeBtn.addEventListener("click", closeMasonry);
  masonryLayout.addEventListener("click", (e) => {
    if (e.target === masonryLayout) closeMasonry();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMasonry();
  });

  // Load images and position them based on aspect ratio
  function loadImages() {
    const images = [
      'img/designmuse.JPG',
      'img/grnpf.JPG',
      'img/grncp.JPG',
      'img/gameikai.PNG',
      'img/firef.PNG',
      'img/fireg.PNG',
      'img/iceg.PNG',
      'img/icef.PNG',
      'img/gccover.PNG',
      'img/em.PNG',
      'img/splash.PNG',
      'img/RZINL.PNG',
      'img/RZINLby.PNG',
      'img/rbxgfxcp.PNG',
      'img/rbxgfxstr.PNG',
      'img/pnkhl.jpg',
      'img/pnkpfp.jpg',
      'img/pnkcp.jpg',
      'img/ilycoms.PNG',
      'img/Valcoms.PNG',
      'img/castlong.jpg',
      'img/castdrag.PNG',
      'img/castpf.PNG'
    ];

    images.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("masonry-item");

        // Calculate row span based on aspect ratio
        const rowSpan = Math.ceil((img.height / img.width) * 20); // Adjust multiplier for finer control
        imgWrapper.style.setProperty("--row-span", rowSpan);

        imgWrapper.appendChild(img);
        masonryGrid.appendChild(imgWrapper);
      };
    });
  }
});
