(() => {
  const hotspots = document.querySelectorAll(".Hotspot");
  const annotations = document.querySelectorAll(".HotspotAnnotation");
  const infoBoxes = [
    {
      image: "images/Hotspot-1.svg",
      title: "Hyper Charging:",
      text: "0 to 100% in 15 Minutes"
    },
    {
      image: "images/Hotspot-1.svg",
      title: "Cloud Fit:",
      text: "All-Day Wear, Zero Fatigue"
    },
    {
      image: "images/Hotspot-1.svg",
      title: "Earring Lock:",
      text: "Locks under any ear to avoid earbuds from falling at any cost"
    },
    {
      image: "images/Hotspot-1.svg",
      title: "Earring Fit:",
      text: "Earbuds that will look just like Earrings when wore on"
    },
    {
      image: "images/Hotspot-1.svg",
      title: "NOVA:",
      text: "Welcome to the future of electronics!"
    },
  ]


  //Array Functions
  function loadInfo() {
      infoBoxes.forEach((infoBox, index) => {
        //console.log(index+1);
        let selected = document.querySelector(`#hotspot-${index+1}`);
        console.log(selected);

        const container = document.createElement('div');


        //Create h2 in JS
        const titleElement = document.createElement('h2');

        //Add text in h2
        titleElement.textContent = infoBox.title;

        //Create text in JS
        const textElement = document.createElement('p');

        //Add text in text
        textElement.textContent = infoBox.text;

        const imageElement = document.createElement('img');
        imageElement.src = infoBox.image;
        imageElement.alt = infoBox.title;

        //Apply it
        container.appendChild(titleElement);
        container.appendChild(textElement);
        selected.appendChild(imageElement);
        selected.appendChild(container);

        // Initially hide all info boxes
        gsap.set(selected, { autoAlpha: 0 });
    });
  }

  loadInfo();

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

  function showHoverAnnotation() {
    const selected = document.querySelector(`#${this.slot}`);
    hideAllAnnotations();
    showAnnotation(selected);
  }

  function hideHoverAnnotation() {
    const selected = document.querySelector(`#${this.slot}`);
    hideAnnotation(selected);
  }

  // Event Listeners
  hotspots.forEach(function(hotspot) {
    hotspot.addEventListener("mouseenter", showHoverAnnotation);
    hotspot.addEventListener("mouseleave", hideHoverAnnotation);
  });

  
})();