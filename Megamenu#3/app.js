const nav = document.querySelector(".nav");
const toggler = document.querySelector(".toggler");
const navLink = document.querySelectorAll(".nav-link");

toggler.addEventListener("click",()=>{
	nav.classList.toggle("active_nav");

	document.querySelector(".bar-1").classList.toggle("close-1");
	document.querySelector(".bar-2").classList.toggle("close-2");
	document.querySelector(".bar-3").classList.toggle("close-3");
})

navLink.forEach(navLink=>{
	navLink.addEventListener("click",()=>{
		nav.classList.remove("active_nav");

		document.querySelector(".bar-1").classList.remove("close-1");
		document.querySelector(".bar-2").classList.remove("close-2");
		document.querySelector(".bar-3").classList.remove("close-3");
	})
})




		