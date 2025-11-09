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
      image: "images/open-ear-design.svg",
      title: "Open-Ear Design:",
      text: "Avoids The Earbuds From Falling"
    },
    {
      image: "images/audio-earring.svg",
      title: "Audio Earrings:",
      text: "Earbuds That Look Like Earrings"
    },
    {
      image: "images/fingerprint.svg",
      title: "Touch Control:",
      text: "Control Actions With Single Touch"
    }
  ]

  //Functions
  //Array Functions Desktop
  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);

      // main container
      const hotspotContainer = document.createElement('div');
      hotspotContainer.className = "info-container";

      // text container
      const container = document.createElement('div');
      container.id = "text-box";

      // image container div
      const imageContainer = document.createElement('div');
      imageContainer.id = "image-box";

      // Create the image element
      const imageElement = document.createElement('img');
      imageElement.src = infoBox.image;
      imageElement.alt = infoBox.title;

      // Create and add text content
      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      // Add image inside image container
      imageContainer.appendChild(imageElement);

      // Append text to container
      container.appendChild(titleElement);
      container.appendChild(textElement);

      // Append image and text to wrapper
      hotspotContainer.appendChild(imageContainer);
      hotspotContainer.appendChild(container);

      // Append main div to hotspot
      selected.appendChild(hotspotContainer);

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

  // Mobile and Tablet Array Functions
  function loadMobileFeatures() {

    //Main div
    const mobileContainer = document.querySelector(".mobile-features");

    infoBoxes.forEach((infoBox, index) => {

      //Create the feature div
      const featurebox = document.createElement("div");
      featurebox.className = "feature";
      featurebox.id = `feature-${index + 1}`;

      // Create the image box
      const imageBox = document.createElement("div");
      imageBox.id = "image-box";

      // Create the img element
      const img = document.createElement("img");
      img.src = infoBox.image;
      img.alt = infoBox.title;

      //Img append with the image box
      imageBox.appendChild(img);

      //Create the div for text
      const textBox = document.createElement("div");
      textBox.className = "text-box";

      //Create the text h2 and p
      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;

      //Apped text with the text box
      textBox.appendChild(titleElement);
      textBox.appendChild(textElement);

      //Append the boxes with the main div featurebox
      featurebox.appendChild(imageBox);
      featurebox.appendChild(textBox);

      //Append the featurebox with the main div 
      mobileContainer.appendChild(featurebox);

    });
  }

  loadMobileFeatures();


  // GSAP Animation

  //Event Listeners
  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
  
})();