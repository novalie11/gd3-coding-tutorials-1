const helloWorld = () => {
  console.log(
    "Ayo Sean, you Mr. Kingston You say you have it, Louis it, and then some Look how you gwan in all your ice You're pretty and you're nice Yuh done know seh Nicki ah yuh wife   But you say I be up where you stay I ain't like them other b-- that be actin' loosely Know you gettin' hype I know you wanna get up in it   But I just wanna think about it for another minute"
  );
};

// document.querySelector("button").addEventListener("click", () => {
//   logClick();
// });

// function logClick (){
//   const button = document.querySelector("button");
//   button.innerHTML = 'Clicked';
//   button.classList.toggle('clicked'); //adding a class
//   // button.classList.remove('clicked'); //removing a class

// // nameOfTheFuction();

// // document = query
// // click' 0 event
// // log Click . function
// }

document.querySelectorAll(".list__item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add(".show");
  });
});

// document.querySelectorAll('.list__item__header').forEach((item) => {
//   item.addEventListener("show", () => {
//   });
//   });

document.querySelectorAll(".list__item__header").forEach((header) => {
  header.addEventListener("click", () => {
    // const body = header.nextElementSibling;
    const body = header.parentNode.querySelector(".list__item__body");
    // body.classList.toggle("show");

    // document.querySelectorAll(".list__item__body").forEach((item) => {

    if (body.classList.contains("show")) {
      body.classList.remove("show");
    } else {
      document.querySelectorAll(".list__item__body").forEach((item) => {
        item.classList.remove("show");
      });
      body.classList.add("show");
    }
  });
});

////

document.querySelectorAll(".list__item__artist").forEach((artist) => {
  const dateofbirth = artist.innerHTML.slice(-6, -1);
  artist.innerHTML = dateofbirth;
});

//display none;
//display block;
//display: inline-block;
//display: grid
//display: flex;


const number = 6;
if (number < 4 ){
  console.log('smaller than 4')
} else {
  console.log('not smaller than 4')
}

if (number < 1 ) {
  console.log('smalle than 6')
} else if (number > 6) {
  console.log("bigger than 6");
} else {
  console.log("equal to 6");
}