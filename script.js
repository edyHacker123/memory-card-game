const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const colums = document.querySelectorAll(".col");
let firstImg = "";
let current = {
  col: "",
  img: "",
};

for (let i = 0; i < colums.length; i++) {
  colums[i].addEventListener("click", () => {
    if (i === 0) {
      img1.style.visibility = "visible";
      colums[i].style.backgroundColor = "transparent";
      if (firstImg !== "" && firstImg !== img1.src) {
        setTimeout(() => {
          img1.style.visibility = "hidden";
          colums[i].style.backgroundColor = "black";
          current.col.style.backgroundColor = "black";
          current.img.style.visibility = "hidden";
        }, 1000);
      }
      if (firstImg === "") {
        firstImg = img1.src;
        current.col = colums[i];
        current.img = img1;
      } else {
        firstImg = "";
      }
    }
    if (i === 1) {
      img2.style.visibility = "visible";
      colums[i].style.backgroundColor = "transparent";
      if (firstImg !== "" && firstImg !== img2.src) {
        setTimeout(() => {
          img2.style.visibility = "hidden";
          colums[i].style.backgroundColor = "black";
          current.col.style.backgroundColor = "black";
          current.img.style.visibility = "hidden";
        }, 1000);
      }
      if (firstImg === "") {
        firstImg = img2.src;
        current.col = colums[i];
        current.img = img2;
      } else {
        firstImg = "";
      }
    }
    if (i === 2) {
      img3.style.visibility = "visible";
      colums[i].style.backgroundColor = "transparent";
      if (firstImg !== "" && firstImg !== img3.src) {
        setTimeout(() => {
          img3.style.visibility = "hidden";
          colums[i].style.backgroundColor = "black";
          current.col.style.backgroundColor = "black";
          current.img.style.visibility = "hidden";
        }, 1000);
      }
      if (firstImg === "") {
        firstImg = img3.src;
        current.col = colums[i];
        current.img = img3;
      } else {
        firstImg = "";
      }
    }
    if (i === 3) {
      img4.style.visibility = "visible";
      colums[i].style.backgroundColor = "transparent";
      if (firstImg !== "" && firstImg !== img4.src) {
        setTimeout(() => {
          img4.style.visibility = "hidden";
          colums[i].style.backgroundColor = "black";
          current.col.style.backgroundColor = "black";
          current.img.style.visibility = "hidden";
        }, 1000);
      }
      if (firstImg === "") {
        firstImg = img4.src;
        current.col = colums[i];
        current.img = img4;
      } else {
        firstImg = "";
      }
    }
  });
}
