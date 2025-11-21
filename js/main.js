(() => {
  const menu = document.querySelector("#sidebar");
  const hamburger = document.querySelector("#hamburger");
  const menuLinks = document.querySelectorAll("#sidebar ul li a");
  const hotspots = document.querySelectorAll(".Hotspot");
  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");
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

  canvas.width = 1920;
  canvas.height = 1080;

  const frameCount = 321;
  const images = [];
  const buds = {
      frame: 0
  }

  //GSAP - Animation

  //GSAP Animation for header

  function showHeader() {
    const hlogo = document.querySelector("#header-logo");
    const screen = window.innerWidth;
    
    if(screen < 768) {
      gsap.from(hlogo, {
        duration: 1,
        x: -200,
        ease: "ease-in"
      })

      gsap.from(hamburger, {
        duration: 1,
        x: 200,
        ease: "ease-in"
      })
    }

    else if(screen >= 768) {
      gsap.from(hlogo, {
        duration:  1,
        x: -400,
        ease: "ease-in"
      })

      gsap.from(menu, {
        duration: 1,
        x: 800,
        ease: "ease-in"
      })
    }
  }

  showHeader();

  //GSAP Animation for hero section
  function showHero() {
    const offer = document.querySelector("#offer");
    const model = document.querySelector("#nova-model");
    const btn = document.querySelector("#hero-btn");
    const description = document.querySelector("#hero-description");
    const screen = window.innerWidth;

    if(screen < 768) {
      gsap.fromTo(offer, {
        opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: .1,
          scrollTrigger: {
            trigger: offer,
            start: "top 100%",      // when the offer enters the viewport
            end: "bottom 10%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      gsap.fromTo(model, {
        opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: .3,
          scrollTrigger: {
            trigger: offer,
            start: "top 100%",      // when the offer enters the viewport
            end: "bottom 15%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      gsap.fromTo(btn, {
        opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: .5,
          scrollTrigger: {
            trigger: offer,
            start: "top 100%",      // when the offer enters the viewport
            end: "bottom 5%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      gsap.fromTo(description, {
        opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: .4,
          scrollTrigger: {
            trigger: offer,
            start: "top 100%",      // when the offer enters the viewport
             end: "bottom 0%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    } 
    
    else if(screen >= 768) {
      gsap.from(offer, {
        x: -800,
        duration: .5,
        ease: "ease-in",
        delay: .4,
        scrollTrigger: {
          trigger: offer,       // starts when the model enters view
          start: "top 80%",     // adjust as needed
          toggleActions: "play reverse play reverse"
         }
      })

      gsap.from(model, {
        x: -800,
        duration: .5,
        ease: "ease-in",
        delay: .6,
        scrollTrigger: {
          trigger: model,       // starts when the model enters view
          start: "top 80%",     // adjust as needed
          toggleActions: "play reverse play reverse"
         }
      })

      gsap.from(description, {
        x: -800,
        duration: .5,
        ease: "ease-in",
        delay: .7,
        scrollTrigger: {
          trigger: description,       // starts when the model enters view
          start: "top 80%",     // adjust as needed
          toggleActions: "play reverse play reverse"
         }
      })

      gsap.from(btn, {
        x: -800,
        duration: .5,
        ease: "ease-in",
        delay: .8,
        scrollTrigger: {
          trigger: btn,       // starts when the model enters view
          start: "top 80%",     // adjust as needed
          toggleActions: "play reverse play reverse"
         }
      }) 
    }
  }

  showHero();

  //GSAP Animation for Benefits Section

    function showBenefits() {
      const benefit1 = document.querySelector("#benefit-1");
      const benefit2 = document.querySelector("#benefit-2");
      const benefit3 = document.querySelector("#benefit-3");
      const benefit4 = document.querySelector("#benefit-4");
      const screen = window.innerWidth;

      if(screen < 768) {
        gsap.from(benefit1, {
          x: -1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit1,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.from(benefit2, {
          x: -1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit2,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.from(benefit3, {
          x: -1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit3,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.from(benefit4, {
          x: -1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit4,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })
      }

      else if(screen >= 768 && screen < 1200) {
        gsap.from(benefit1, {
          x: -1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit1,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.from(benefit2, {
          x: -1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit2,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.from(benefit3, {
          x: -1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit3,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.from(benefit4, {
          x: -1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit4,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })
      }

      else if(screen >= 1200) {
        gsap.from(benefit1, {
          x: -1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit1,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.from(benefit2, {
          x: 1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit2,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.from(benefit3, {
          x: -1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit3,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.from(benefit4, {
          x: 1920,
          duration: 1,
          ease: "ease-in",
          scrollTrigger: {
            trigger: benefit4,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        })
      }
    }
    showBenefits();


  //GSAP Animation for Scroll Effect

  function showBuds() {
    const screen = window.innerWidth;
    if(screen < 768) {
      gsap.to(buds, {
        frame: 320,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view", 
            pin: true,
            scrub: 40,
            start: "top 50%",
            end: "bottom 80%",
            toggleActions: "play reverse play reverse"
        },
        onUpdate: render
      })
    }

    else if(screen > 768 && screen < 1200) {
      gsap.to(buds, {
        frame: 320,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view", 
            pin: true,
            scrub: 40,
            start: "top 40%",
            end: "bottom 90%",
            toggleActions: "play reverse play reverse"
        },
        onUpdate: render
      })
    }

    else if(screen > 1200) {
      gsap.to(buds, {
        frame: 320,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view", 
            pin: true,
            scrub: 25,
            start: "top 13%",
            end: "bottom bottom",
            toggleActions: "play reverse play reverse"
        },
        onUpdate: render
      })
    }
  }

  showBuds();
  
  // GSAP Animation for each feature box
  function showFeature(feature) {
    const screen = window.innerWidth;

    if (screen < 768) {

      if (feature.id == "feature-1") {
        gsap.fromTo(feature, 
          { 
            x: 100, 
            opacity: 0 
          }, 

          { 
            x: 0, 
            opacity: 1, 
            duration: 1,
            scrollTrigger: {
              trigger: feature,
              start: "top 90%",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      } 

    else if (feature.id == "feature-2") {
      gsap.fromTo(feature, 
        { 
          x: -150, 
          opacity: 0 
        },

        { 
          x: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    } 
    
    else if (feature.id == "feature-3") {
      gsap.fromTo(feature, 
        { 
          x: 200, 
          opacity: 0 
        },

        { 
          x: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    } 

    else if (feature.id == "feature-4") {
      gsap.fromTo(feature, 
        { 
          x: -250, 
          opacity: 0 
        }, 

        { 
          x: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    } 

    else if (feature.id == "feature-5") {
      gsap.fromTo(feature, 
        { 
          x: 300, 
          opacity: 0 
        },

        { 
          x: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
  } 
  
  else if (screen >= 768) {

    if (feature.id == "feature-1") {
      gsap.fromTo(feature, 
        { 
          x: -200, 
          opacity: 0 
        }, 

        { x: 0, 
          opacity: 1, 
          duration: 0.5,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    } 

    else if (feature.id == "feature-2") {
      gsap.fromTo(feature, 
        { 
          x: 200, 
          opacity: 0 
        }, 

        { 
          x: 0, 
          opacity: 1, 
          duration: 0.5,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    } 

    else if (feature.id == "feature-3") {
      gsap.fromTo(feature, 
        { 
          x: -100, 
          opacity: 0 
        }, 

        { 
          x: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    } 

    else if (feature.id == "feature-4") {
      gsap.fromTo(feature, 
        { 
          x: 100, 
          opacity: 0 
        }, 

        { 
          x: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    } 

    else if (feature.id == "feature-5") {
      gsap.fromTo(feature, 
        { 
          opacity: 0 
        },

        { 
          opacity: 1, 
          duration: 1.5,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

  }
}
  //Functions

  // Menu
  function toggleMenu() {
      menu.classList.toggle("active");
  }

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

      //Create the feature div on each increease +1 from 0 so it starts from feature-1
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


      //Create the div for text
      const textBox = document.createElement("div");
      textBox.className = "text-box";

      //Create the text h2 and p
      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;

      //Append elements to there boxes
      imageBox.appendChild(img);
      textBox.appendChild(titleElement);
      textBox.appendChild(textElement);

      //Append the boxes with the main div featurebox
      featurebox.appendChild(imageBox);
      featurebox.appendChild(textBox);

      //Append the featurebox with the main div 
      mobileContainer.appendChild(featurebox);

      showFeature(featurebox);

    });
  }

  loadMobileFeatures();

  // Run a for loop to populate images array
  for (let i=0; i<frameCount; i++) {
    const img = new Image();
    // Adds variable ${i+1}.toString() for increment images to create animation the .toString() converts that variable to a string
    img.src = `images/Explode_${(i+1).toString()}.webp`;
    images.push(img);
  }
  console.log(images);

  images[0].addEventListener("load", render);
  
  function render() {
    console.log(buds.frame);
    console.log(images[buds.frame]);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame], 0, 0);
  }

  //Slider Functions
  function moveDivisor() {
    //console.log(slider.value);
    divisor.style.width = `${slider.value}%`;
  }

  function resetSlider() {
      slider.value = 50;
  }

  //Event Listeners

  // Slider Listeners
  slider.addEventListener("input", moveDivisor);
  window.addEventListener("load", resetSlider);

  //Model Listeners
  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  //Menu Listeners
  hamburger.addEventListener("click", toggleMenu);
  menuLinks.forEach(link=>{
    link.addEventListener("click", toggleMenu);
  })

  //Scroll Listeners
  images[0].addEventListener("load", render);

})();