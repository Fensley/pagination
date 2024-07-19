document.addEventListener("DOMContentLoaded", () => {
  const paratwo = document.querySelectorAll(".first-second p");
  const nextTwo = document.querySelector(".next-second-one");
  const para = document.querySelectorAll(".secondtwo p");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dataone = document.querySelectorAll(".first-third-vone p");
  const nextkat = document.querySelector(".katun");
  const datatwo = document.querySelectorAll(".first-third-vtwo p");
  const nextsinkvone = document.querySelector(".sinkde");
  const nextsinkvtwo = document.querySelector(".sinktwa");
  // console.log(datatwo);

  let intial = 1;
  let secondInitial = 0;
  let thirdinitial = 0;
  let fouthinitial = 1;

  function sectionthree() {
    function dataoneproblem() {
      dataone.forEach((each, index) => {
        each.classList.toggle("third-intial-one", thirdinitial === index);
      });
    }
    dataoneproblem();

    nextkat.addEventListener("click", () => {
      if (thirdinitial < dataone.length - 1) {
        thirdinitial++;
        dataoneproblem();
      }
    });

    function datatwoproblem() {
      datatwo.forEach((each, index) => {
        each.classList.toggle("third-intial-two", fouthinitial === index);
      });
    }
    datatwoproblem();
    nextsinkvone.addEventListener("click", () => {
      if (fouthinitial > 0) {
        fouthinitial--;
        datatwoproblem();
      }
    });

    nextsinkvtwo.addEventListener("click", () => {
      if (fouthinitial < datatwo.length - 1) {
        fouthinitial++;
        datatwoproblem();
      }
    });
  }

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
  sectionthree();
});
