data = [
  "./src/1.png",
  "./src/2.png",
  "./src/3.png",
  "./src/4.png",
  "./src/5.png",
  "./src/6.png",
];
randomdata = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];
let i = 0;
const amages = document.querySelectorAll(".pizzadom");
Array.from(amages).forEach((Element) => {
  if (i == 6) {
    i = 0; //
  }
  Element.setAttribute("src", data[i]);
  i++;
});
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circles");
  const wrap = document.querySelector("#wrapper_loader");
  const img = document.getElementById("img");
  const loader = document.querySelector(".loader_in");
  const maincounter = document.getElementById("maincount");
  const mainin = document.getElementById("main");
  let tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.from(circles, { opacity: 0, scale: 0, stagger: 0.25 });
  tl.from(loader, { opacity: 0, y: 50, duration: 1 }, "-=0.5");
  tl.from(img, { opacity: 0, duration: 1 }, "-=1");
  tl.call(startCounter);

  gsap.registerPlugin(ScrollTrigger);

  let currentcount = 0;
  let anim;

  function startCounter() {
    anim = setInterval(() => {
      if (currentcount >= 100) {
        gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.to(circles, { opacity: 0, scale: 0, stagger: 0.25 });
        tl.to(loader, { opacity: 0, y: 50, duration: 1 }, "-=0.5");
        tl.to(img, { opacity: 0, duration: 1 }, "-=1");
        tl.to(wrap, { opacity: 0, left: 50, duration: 1 }, "-=1");
        tl.call(ohk);

        clearInterval(anim);
      } else {
        currentcount++;
        maincounter.innerText = `${currentcount}`;
      }
    }, 50);
  }

  function ohk() {
    wrap.style.display = "none";
    mainin.style.display = "block";
    const mainsection = document.querySelector(".hero-wrapper");
    const mainheader = document.querySelector("#head_dis");
    tl.to(mainheader, {
      top: 0,
      duration: 1,
      onStart: () => {
        document.body.style.overflow = "hidden";
      },
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });
    tl.to("#uni p span", {
      color: "white",
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#uni",
        scroller: "body",
        start: "-40% 50%",
        end: "top 30%",
        scrub: 2,
      },
    });
    tl.to(mainsection, {
      top: 0,
      onStart: () => {
        document.body.style.overflow = "hidden";
      },
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
      duration: 2,
      ease: "power1.out",
    });
    tl.to(".grid", {
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      onStart: () => {
        document.body.style.overflow = "hidden";
      },
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });
    tl.call(cookedupfunction);
  }
  function ceame() {
    ScrollTrigger.create({
      trigger: "#uni",
      scroller: "body",
      markers: true,
      start: "top top",
      end: "+=500",
      pin: true,
    });
  }
});

function randomelemdis() {
  const randomindex = Math.floor(Math.random() * randomdata.length);
  return randomdata[randomindex];
}

function cookedupfunction() {
  setInterval(() => {
    let newind = randomelemdis();
    let newind2 = randomelemdis();
    if (newind == newind2) {
      newind2 = randomelemdis();
    }
    const reldat = document.getElementsByClassName("imageholder")[newind];
    const reldat2 = document.getElementsByClassName("imageholder")[newind2];
    const td = gsap.timeline();
    td.to(reldat, { opacity: 1, duration: 0.2 });
    td.to(reldat, { opacity: 0 });
    td.to(reldat2, { opacity: 1, duration: 0.2 });
    td.to(reldat2, { opacity: 0 });
  }, 500);
  
  ohki();
}

// setInterval(() => {
//     const clickEvent = new MouseEvent('click', {
//       bubbles: true,
//       cancelable: true,
//       view: window,
//       isTrusted : true,
//     });
//     video.dispatchEvent(clickEvent);
//     console.log(clickEvent)
//   }, 100);
function ohki() {

  const video = document.querySelector("video");

 
  const section = document.querySelector(".text-bento2-wrapper");
  if(video.muted == true){
    const Element = document.createElement('h1');
    Element.innerHTML = "Video is muted. Click to unmute";
    document.getElementById('sec').appendChild(Element);
    Element.style.position = "absolute"
     Element.style.color = "white"
  }
  section.addEventListener('click' , ()=>{
    video.muted = false;  
        const Element = section.querySelectorAll('h1')[1];
        Element.parentNode.removeChild(Element);
        video.currentTime = 0;
  })
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "60% center",
      end: "300% top",
      scrub: 4,
      pin: true,
      container: "#main",
      onToggle: (self) => {
        self.isActive
          ? video
              .play()
              .then(() => {})
              .catch((error) => {
                console.error("Error playing video:", error);
              })
          : video.pause();
      },
    },
  });

  timeline
    .to(video, {
      duration: 2,
      width: "80vw",
      ease: "power2.inOut",
    })
    .eventCallback("onStart", () => {})
    .eventCallback("onComplete", () => {
      video.pause();
      timeline.scrollTrigger.end = window.scrollY;
    });
}

if (window.screen.width < 451) {
  document.querySelector(".small-top").style.display = "flex";
  document.querySelector(".small-header").style.display = "flex";
  let infi = document.querySelector(".infi");
  for (let index = 17; index < 37; index++) {
    infi.removeChild(infi.children[i])
  }
} else {
  document.querySelector(".small-top").style.display = "none";
  document.querySelector(".small-header").style.display = "none";
}