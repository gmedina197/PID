
document.querySelector(".main p").style.display = "none";
document.querySelector(".main").classList.add("spinner-1");

// Mimic Server Request
setTimeout(() => {
  document.querySelector(".main").classList.remove("spinner-1");
  document.querySelector(".main p").style.display = "block";
}, 4000);