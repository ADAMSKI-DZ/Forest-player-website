//*Menu navigation with indicator and pages function
const menu = document.querySelectorAll(".list");
const indicator = document.querySelector(".indicator");
const home = document.querySelector(".home");
const pages = document.querySelectorAll(".page");
function defaultMarker() {
  indicator.style.left = home.offsetLeft + "px";
  indicator.style.width = home.offsetWidth + "px";
}
setTimeout(() => {
  defaultMarker();
}, 500);

function marker(e) {
  indicator.style.left = e.offsetLeft + -10 + "px";
  indicator.style.width = e.offsetWidth + 20 + "px";
}
menu.forEach((link) => {
  link.addEventListener("click", (e) => {
    marker(e.target);
  });
});
for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function () {
    let m = 0;
    while (m < menu.length) {
      menu[m++].classList.remove("active");
    }
    menu[i].classList.add("active");
    let t = 0;
    while (t < menu.length) {
      pages[t++].classList.remove("active");
    }
    pages[i].classList.add("active");
  };
}
//*Cursor Shape Tracker
const circleCursor = document.querySelector(".cursor-circle");
const pointCursor = document.querySelector(".cursor-point");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  circleCursor.style.left = x + "px";
  circleCursor.style.top = y + "px";
  circleCursor.style.display = "block";
  pointCursor.style.left = x + "px";
  pointCursor.style.top = y + "px";
  pointCursor.style.display = "block";
});
document.addEventListener("mouseout", () => {
  pointCursor.style.display = "none";
  circleCursor.style.display = "none";
});

//*Image Slider with navigation dots
const imageSlide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
for (let i = 0; i < imageSlide.length; i++) {
  dots[i].onclick = function () {
    let m = 0;
    while (m < dots.length) {
      dots[m++].className = "dot";
    }
    dots[i].className = "dot active";
    let t = 0;
    while (t < imageSlide.length) {
      imageSlide[t++].className = "slide";
    }
    imageSlide[i].className = "slide active";
  };
}

//*Auto image slider random change
const autoChange = (e) => {
  let m = 0;
  while (m < dots.length) {
    dots[m++].classList.remove("active");
  }
  dots[i].classList.add("active");
  let n = 0;
  while (n < imageSlide.length) {
    imageSlide[n++].classList.remove("active");
  }
  imageSlide[i].classList.add("active");
};
let i = 0;
const autoNum = () => {
  setTimeout(() => {
    autoChange(i);
    i++;
    if (i <= dots.length) {
      autoNum();
    }
    if (i === dots.length) {
      i = 0;
    }
  }, 3000);
};
autoNum();

// !Mouse Hover all
const logo = document.querySelector(".logo-cursor");
logo.addEventListener("mouseover", () => {
  circleCursor.style.transform = "scale(1.8) translate(-50%,-50%)";
});
logo.addEventListener("mouseout", () => {
  circleCursor.style.transform = "scale(1) translate(-50%,-50%)";
});
const menuAll = document.querySelector(".menu");
menuAll.addEventListener("mouseover", () => {
  circleCursor.style.transform = "scale(1.5) translate(-50%,-50%)";
});
menuAll.addEventListener("mouseout", () => {
  circleCursor.style.transform = "scale(1) translate(-50%,-50%)";
});
const menuRes = document.querySelector(".menu-res-btn");
menuRes.addEventListener("mouseover", () => {
  circleCursor.style.transform = "scale(1.5) translate(-50%,-50%)";
});
menuRes.addEventListener("mouseout", () => {
  circleCursor.style.transform = "scale(1) translate(-50%,-50%)";
});
const downloadBtn = document.querySelector(".download-btn");
const watchBtn = document.querySelector(".watch");
downloadBtn.addEventListener("mouseover", () => {
  circleCursor.style.transform = "scale(1.5) translate(-50%,-50%)";
  circleCursor.style.opacity = "0.5";
});
downloadBtn.addEventListener("mouseout", () => {
  circleCursor.style.transform = "scale(1) translate(-50%,-50%)";
  circleCursor.style.opacity = "1";
});
watchBtn.addEventListener("mouseover", () => {
  circleCursor.style.transform = "scale(1.5) translate(-50%,-50%)";
  circleCursor.style.opacity = "0.5";
});
watchBtn.addEventListener("mouseout", () => {
  circleCursor.style.transform = "scale(1) translate(-50%,-50%)";
  circleCursor.style.opacity = "1";
});
const creator = document.querySelector(".creator a");
creator.addEventListener("mouseover", () => {
  circleCursor.style.transform = "scale(1.5) translate(-50%,-50%)";
});
creator.addEventListener("mouseout", () => {
  circleCursor.style.transform = "scale(1) translate(-50%,-50%)";
});
const playHover = document.querySelector(".play");
const pauseHover = document.querySelector(".pause");
playHover.addEventListener("mouseover", () => {
  circleCursor.style.transform = "scale(1.5) translate(-50%,-50%)";
});
playHover.addEventListener("mouseout", () => {
  circleCursor.style.transform = "scale(1) translate(-50%,-50%)";
});
pauseHover.addEventListener("mouseover", () => {
  circleCursor.style.transform = "scale(1.5) translate(-50%,-50%)";
});
pauseHover.addEventListener("mouseout", () => {
  circleCursor.style.transform = "scale(1) translate(-50%,-50%)";
});
const audioAnimation = document.querySelector(".audio-spectrum");
audioAnimation.addEventListener("mouseover", () => {
  circleCursor.style.transform = "scale(1.5) translate(-50%,-50%)";
  circleCursor.style.border = "3px solid #000";
});
audioAnimation.addEventListener("mouseout", () => {
  circleCursor.style.transform = "scale(1) translate(-50%,-50%)";
  circleCursor.style.border = "3px solid #fff";
});

//*Play and pause music function
const music = document.querySelector(".music");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const btnContainer = document.querySelector(".player-btn");
const creatorText = document.querySelector(".creator");

playBtn.addEventListener("click", () => {
  music.play();
  audioAnimation.classList.add("animate");
  btnContainer.classList.add("change");
  creatorText.classList.add("change");
});
pauseBtn.addEventListener("click", () => {
  music.pause();
  audioAnimation.classList.remove("animate");
  btnContainer.classList.remove("change");
  creatorText.classList.remove("change");
});

//*Mobile menu click function
const mobileMenu = document.querySelector(".mobile-menu");
menuRes.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuRes.classList.toggle("animate");
});
const listMobile = document.querySelectorAll(".list-mobile");
for (let i = 0; i < menu.length; i++) {
  listMobile[i].onclick = function () {
    let m = 0;
    while (m < menu.length) {
      listMobile[m++].className = "list-mobile";
    }
    listMobile[i].className = "list-mobile active";
    let t = 0;
    while (t < menu.length) {
      pages[t++].className = "page";
    }
    pages[i].className = "page active";
  };
}

//*Download btn click to go to download page
const downloadPage = document.querySelector(".download");
const downloadIndicator = document.querySelector(".download-list");
function indicatorDownload(m) {
  indicator.style.left = m.offsetLeft + -10 + "px";
  indicator.style.width = m.offsetWidth + 20 + "px";
}
downloadBtn.addEventListener("click", () => {
  for (let i = 0; i < pages.length; i++) {
    pages[i].className = "page";
    pages[1].className = "page active";
    menu[i].className = "list";
    menu[1].className = "list active";
  }
  indicatorDownload(downloadIndicator);
});
