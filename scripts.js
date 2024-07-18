document.addEventListener("DOMContentLoaded", () => {
  const paratwo = document.querySelectorAll(".first-second p");
  const nextTwo = document.querySelector(".next-second-one");
  const para = document.querySelectorAll(".secondtwo p");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let intial = 1;
  let secondInitial = 0;

  function sectionone() {
    function Theparenttwo() {
      paratwo.forEach((each, index) => {
        each.classList.toggle("second-intial-one", secondInitial === index);
      });
    }
    Theparenttwo();

    nextTwo.addEventListener("click", () => {
      if (secondInitial < paratwo.length - 1) {
        secondInitial++;
        Theparenttwo();
      }

      if (secondInitial === paratwo.length - 1) {
        nextTwo.style.cursor = "not-allowed";
      }
    });
  }

  //
  function sectiontwo() {
    function Theparent() {
      para.forEach((each, index) => {
        each.classList.toggle("second-intial-two", intial === index);
      });
    }
    Theparent();

    prev.addEventListener("click", () => {
      if (intial > 0) {
        intial--;
        Theparent();
      }
      if (intial === 0) {
        prev.style.cursor = "not-allowed";
      }
      if (intial < para.length) {
        next.style.cursor = "pointer";
      }
    });

    next.addEventListener("click", () => {
      if (intial < para.length - 1) {
        intial++;
        Theparent();
      }
      if (intial === para.length - 1) {
        next.style.cursor = "not-allowed";
      }
      if (intial > 0) {
        prev.style.cursor = "pointer";
      }
    });
  }
  sectiontwo();
  sectionone();
});
