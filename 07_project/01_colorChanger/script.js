const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
// console.log(h1);
// console.log(buttons);

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);

    // if(e.target.id === "grey"){
    //     body.style.backgroundColor = e.target.id;
    //     h1.style.color = "red"
    //     // body.style.color = "red"
    // }
    // if(e.target.id === "white"){
    //     body.style.backgroundColor = e.target.id;
    //     h1.style.color = "grey"
    // }
    // if(e.target.id === "blue"){
    //     body.style.backgroundColor = e.target.id;
    //     h1.style.color = "white"
    // }
    // if(e.target.id === "yellow"){
    //     body.style.backgroundColor = e.target.id;
    //     h1.style.color = "blue"
    // }

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = "pink";
    }
  });
});
