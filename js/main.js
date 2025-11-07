(() => {
  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [
    {
      image: "images/hyper-charging.svg",
      title: "Hyper Charging:",
      text: "0 to 100% in 20 Minutes"
    },
    {
      image: "images/cloud-fit.svg",
      title: "Cloud Fit:",
      text: "All-Day Wear, Zero Fatigue"
    },
    {
      image: "images/open-ear design.png",
      title: "Open-Ear Design:",
      text: "Locks over & under a ear to avoid earbuds from falling"
    },
    {
      image: "images/audio-earring.png",
      title: "Audio Earrings:",
      text: "Earbuds that fit & look like earrings when wore"
    },
    {
      image: "images/fingerprint.svg",
      title: "Touch Control:",
      text: "Control the actions with just a touch"
    }
  ]


  //Array Functions
  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);

      // text container
      const container = document.createElement('div');
      container.id = "text-box";

      // image container div
      const imageContainer = document.createElement('div');
      imageContainer.id = "image-box"; // add id to your image div

      // Create the image element
      const imageElement = document.createElement('img');
      imageElement.src = infoBox.image;
      imageElement.alt = infoBox.title;

      // Add image inside image container
      imageContainer.appendChild(imageElement);

      // Create and add text content
      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      // Append text to container
      container.appendChild(titleElement);
      container.appendChild(textElement);

      // Append both image and text containers to selected hotspot
      selected.appendChild(imageContainer);
      selected.appendChild(container);

      gsap.set(selected, { autoAlpha: 0 });
    });
  }


  loadInfo();

  // Functions
  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: .1, autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: .1, autoAlpha: 0 });
  }
  
 hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });


  
})();