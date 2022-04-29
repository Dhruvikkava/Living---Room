$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(".menu-icon").hide();
        $(".close-text").show();
        document.body.classList.toggle("navbar-toggle");
        document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden' ;
      });
      
      $(".close-text").click(function(){
        $(".menu-icon").show();
        $(".close-text").hide();
        document.body.classList.toggle("navbar-toggle");
        document.body.style.overflow = 'auto';
      });
})

$(document).ready(function(){
    gsap.registerPlugin( ScrollSmoother, SplitText);

    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 1,
      // normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      effects: true,
      preventDefault: true
     });

    let tl = gsap.timeline();
    let mySplitText = new SplitText("#collactions", { type: "words,chars" });
    let chars = mySplitText.chars;
    
    chars.forEach((char, i) => {
    smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
    });
})

AOS.init({
  duration: 600,
  offset: 100,
  anchorPlacement: 'top-bottom',
  delay: 500,
  
});

// Mouse follower on image
$(document).ready(function(){
  gsap.utils.toArray(".link1,.link2,.link3,.link4,.link5,.link6").forEach((el) => {
  
    const image = el.querySelector('.scroll-follow,.follow-img2,.follow-img3,.follow-img4,.follow-img5,.follow-img6'),
          setX = gsap.quickSetter(image, "x", "px"),
          setY = gsap.quickSetter(image, "y", "px"),
          align = e => {
            const top = el.getBoundingClientRect().top;
            setX(e.clientX );
            setY(e.clientY - top);
          },
          startFollow = () => document.addEventListener("mousemove", align),
          stopFollow = () => document.removeEventListener("mousemove", align),
          fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});
    
    el.addEventListener('mouseenter', (e) => {
      fade.play();
      startFollow();
      align(e);
    });
    
    el.addEventListener('mouseleave', () => fade.reverse());
   
  });
})

// Text down to up 
$(document).ready(function(){
  var childSplit = new SplitText("h1", {
    type: "lines",
    linesClass: "split-child"
  });
  var parentSplit = new SplitText("h1", {
    type: "lines",
    linesClass: "split-parent"
  });
  
  gsap.from(childSplit.lines, {
    duration: 1.5,
    yPercent: 100,
    ease: "power4",
    stagger: 0.1
  });
})

// Mouse follower on cursor
$(document).ready(function(){
  gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

})

// Mouse hover anchor tag background change 
$(document).ready(function(){
  
})