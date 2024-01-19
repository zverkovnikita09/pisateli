import "./src/css/style.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initFormActions } from "./src/js/form";

gsap.registerPlugin(ScrollTrigger);
initFormActions();

if (window.matchMedia("(min-width: 1025px").matches) {
  gsap.fromTo(
    ".title",
    { opacity: 1, scale: 1 },
    {
      opacity: 0,
      scale: 0.8,
      scrollTrigger: {
        trigger: ".first-block",
        start: "1%",
        end: "10%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".squad",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".first-block",
        start: "10%",
        end: "30%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".squad",
    { scale: 0.2, rotate: 50 },
    {
      scale: 3.5,
      rotate: 150,
      scrollTrigger: {
        trigger: ".first-block",
        start: "10%",
        end: "95%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".title__info.is--1",
    { opacity: 0, scale: 0.6 },
    {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: ".first-block",
        start: "13%",
        end: "35%",
        scrub: true,
      },
    }
  );

  gsap.to(".title__info.is--1", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".first-block",
      start: "45%",
      end: "50%",
      scrub: true,
    },
  });

  gsap.fromTo(
    ".title__info.is--2",
    { opacity: 0, scale: 0.7 },
    {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: ".first-block",
        start: "45%",
        end: "60%",
        scrub: true,
      },
    }
  );

  //Карты

  gsap.fromTo(
    ".card.is--1",
    { x: 0, rotate: 11 },
    {
      x: "47.5%",
      rotate: 11,
      scrollTrigger: {
        trigger: ".cards",
        start: "-130%",
        end: "bottom",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".card.is--2",
    { x: 0 },
    {
      x: "10%",
      scrollTrigger: {
        trigger: ".cards",
        start: "-130%",
        end: "bottom",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".card.is--3",
    { x: 0, rotate: -10 },
    {
      x: "-25%",
      rotate: -10,
      scrollTrigger: {
        trigger: ".cards",
        start: "-130%",
        end: "bottom",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".card.is--4",
    { x: 0, rotate: -22 },
    {
      x: "-28.5%",
      rotate: -22,
      scrollTrigger: {
        trigger: ".cards",
        start: "-130%",
        end: "bottom",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".card.is--5",
    { x: 0, rotate: -30, y: 40 },
    {
      x: "-75%",
      rotate: -30,
      y: 40,
      scrollTrigger: {
        trigger: ".cards",
        start: "-130%",
        end: "bottom",
        scrub: true,
      },
    }
  );

  //Что мы можем
  gsap.fromTo(
    ".abilities__plus",
    { x: "5vw" },
    {
      x: "20vw",
      scrollTrigger: {
        trigger: ".abilities",
        start: "-50%",
        end: "-40%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".abilities__plus",
    { x: "20vw", width: 140, height: 140, rotate: 0 },
    {
      x: 0,
      width: 80,
      height: 80,
      rotate: 135,
      scrollTrigger: {
        trigger: ".abilities",
        start: "-40%",
        end: "-20%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".abilities__plus",
    { scale: 1 },
    {
      scale: 0,
      scrollTrigger: {
        trigger: ".abilities",
        start: "-22%",
        end: "-17%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".abilities__logo",
    { scale: 0 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: ".abilities",
        start: "-18%",
        end: "-15%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".ability.is--1",
    { x: "-5vw", opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".abilities__wrapper",
        start: "-70%",
        end: "-20%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".ability.is--3",
    { x: "5vw", opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".abilities__wrapper",
        start: "-75%",
        end: "-20%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".ability.is--2",
    { x: "-5vw", opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".abilities__wrapper",
        start: "-30%",
        end: "30%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".ability.is--4",
    { x: "5vw", opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".abilities__wrapper",
        start: "-30%",
        end: "30%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".abilities__title .top-text",
    { x: "-3vw", opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".abilities__title",
        start: "-150%",
        end: "-30%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".abilities__title .green-text",
    { x: "3vw", opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".abilities__title",
        start: "-150%",
        end: "-30%",
        scrub: true,
      },
    }
  );

  //slider
  gsap.fromTo(
    ".slider-title__big",
    { scale: 0.5 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: ".slider-block",
        start: "-80%",
        end: "10%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".slider",
    { x: 1 },
    {
      x: -800,
      scrollTrigger: {
        trigger: ".slider-block",
        start: "-70%",
        end: "bottom",
        scrub: true,
      },
    }
  );

  //Футер
  gsap.fromTo(
    ".footer__plus",
    { x: "-15vw", rotate: 30 },
    {
      x: "30vw",
      rotate: -150,
      scrollTrigger: {
        trigger: ".footer",
        start: "-65%",
        end: "-10%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".footer__plus",
    { x: "30vw", rotate: -150 },
    {
      x: "-15vw",
      rotate: 30,
      scrollTrigger: {
        trigger: ".footer",
        start: "-10%",
        end: "65%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".footer .active-text",
    { opacity: 0.4 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".footer",
        start: "-25%",
        end: "10%",
        scrub: true,
      },
    }
  );
} else {
  const fadeBlocks = document.querySelectorAll(".fade");
  const fadeBlocksFullHeigth = document.querySelectorAll(".fade-full-height");

  gsap.fromTo(
    ".slider",
    { x: -1360 },
    {
      x: -1000,
      scrollTrigger: {
        trigger: ".slider-block",
        start: "-200%",
        end: "bottom",
        scrub: true,
      },
    }
  );

  const appearance = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in_view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  const appearanceFullIntersection = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in_view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 1,
    }
  );

  fadeBlocks.forEach((sect) => appearance.observe(sect));
  fadeBlocksFullHeigth.forEach((sect) =>
    appearanceFullIntersection.observe(sect)
  );
}
