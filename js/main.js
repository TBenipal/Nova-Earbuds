(() => {
  // Variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const annotations = document.querySelectorAll(".HotspotAnnotation");

  // Functions
  function hideAnnotation(annotation) {
    annotation.classList.remove("active");
    gsap.to(annotation, { duration: 0.25, autoAlpha: 0 });
  }

  function showAnnotation(annotation) {
    annotation.classList.add("active");
    gsap.fromTo(annotation, { autoAlpha: 0, y: -8 }, { duration: 0.35, autoAlpha: 1, y: 0 });
  }

  function hideAllAnnotations() {
    for (let i = 0; i < annotations.length; i = i + 1) {
      hideAnnotation(annotations[i]);
    }
  }

  function ClickListener(hotspot) {
    hotspot.addEventListener("click", toggleAnnotation);
  }

  function toggleAnnotation() {
    const selected = document.querySelector(`#${this.slot}`);

    if (selected.classList.contains("active") === true) {
      hideAnnotation(selected);
      return;
    }

    hideAllAnnotations();
    showAnnotation(selected);
  }

  // Event Listeners
  hotspots.forEach(ClickListener);

})();
