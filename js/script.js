let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});



// window.onload = () => {
// 	let button = document.querySelector("#btn");

// 	// Function for calculating BMI
// 	button.addEventListener("click", calculateBMI);
// };

// function calculateBMI() {

// 	/* Getting input from user into height variable.
// 	Input is string so typecasting is necessary. */
// 	let height = parseInt(document
// 			.querySelector("#height").value);

// 	/* Getting input from user into weight variable.
// 	Input is string so typecasting is necessary.*/
// 	let weight = parseInt(document
// 			.querySelector("#weight").value);

// 	let result = document.querySelector("#result");

// 	// Checking the user providing a proper
// 	// value or not
// 	if (height === "" || isNaN(height))
// 		result.innerHTML = "Provide a valid Height!";

// 	else if (weight === "" || isNaN(weight))
// 		result.innerHTML = "Provide a valid Weight!";

// 	// If both input is valid, calculate the bmi
// 	else {

// 		// Fixing upto 2 decimal places
// 		let bmi = (weight / ((height * height)
// 							/ 10000)).toFixed(2);

// 		// Dividing as per the bmi conditions
// 		if (bmi < 18.6) result.innerHTML =
// 			`Under Weight : <span>${bmi}</span>`;

// 		else if (bmi >= 18.6 && bmi < 24.9)
// 			result.innerHTML =
// 				`Normal : <span>${bmi}</span>`;

// 		else result.innerHTML =
// 			`Over Weight : <span>${bmi}</span>`;
// 	}
// }
