import Typed from "typed.js";

export const initFormActions = () => {
  const form = document.querySelector(".footer__form");
  const input = form.querySelector(".input");
  const submitBtn = form.querySelector(".submit-button");

  const chat_id = ["336095422", "249419496", "1117620825"];

  input.addEventListener("change", () => {
    if (input.value) input.classList.remove("has-error");
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!input.value) {
      input.classList.add("has-error");
      return;
    }
    Promise.all([
      chat_id.map((id) => {
        return fetch(
          `https://api.telegram.org/bot6625089181:AAHxudoVwxnjinoVYD8FjnExUVPd9bCYWc8/sendmessage?chat_id=${id}&text=${input.value}`
        );
      }),
    ]).finally(() => {
      form.querySelector(".form-group").classList.add("hide");
      form.querySelector(".form-success").classList.add("active");

      const typed = new Typed(".form-success", {
        strings: ["Спасибо! <br> Мы свяжемся с вами <br> в ближайшее время!"],
        typeSpeed: 20,
        showCursor: false,
      });
    });
  });
};
