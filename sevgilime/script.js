const yesBtn = document.getElementById("yesBtn");
const yes1Btn = document.getElementById("yes1Btn");
const noBtn = document.getElementById("noBtn");
const no1Btn = document.getElementById("no1Btn");
const nextBtn = document.getElementById("nextBtn");
const next2Btn = document.getElementById("next2Btn");
const message = document.getElementById("message");
const next3Btn = document.getElementById("next3Btn");
const next4Btn = document.getElementById("next4Btn");
const next5Btn = document.getElementById("next5Btn");
const next6Btn = document.getElementById("next6Btn");
const next7Btn = document.getElementById("next7Btn");
const reptBtn = document.getElementById("reptBtn");
const rept2Btn = document.getElementById("rept2Btn");
const img9 = document.getElementById("img9");


yesBtn.addEventListener("click", function() {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "block";
});
noBtn.addEventListener("click", function() {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("reptPage").style.display = "block";
});
yes1Btn.addEventListener("click", function() {
  message.textContent = "Oleyyyyy çoook mutlu oldumm! ❤️🥹";
  document.getElementById("yes1Btn").style.display = "none";
  document.getElementById("no1Btn").style.display = "none";
  img9.style.display = "block";
});
nextBtn.addEventListener("click", function() {
  document.getElementById("secondPage").style.display = "none";
  document.getElementById("thirdPage").style.display = "block";
});
next2Btn.addEventListener("click", function() {
  document.getElementById("thirdPage").style.display = "none";
  document.getElementById("fourthPage").style.display = "block";
});

next3Btn.addEventListener("click", function() {
  document.getElementById("fourthPage").style.display = "none";
  document.getElementById("fifthPage").style.display = "block";
});
next4Btn.addEventListener("click", function() {
  document.getElementById("fifthPage").style.display = "none";
  document.getElementById("sixthPage").style.display = "block";
});
next5Btn.addEventListener("click", function() {
  document.getElementById("sixthPage").style.display = "none";
  document.getElementById("seventhPage").style.display = "block";
});
next6Btn.addEventListener("click", function() {
  document.getElementById("seventhPage").style.display = "none";
  document.getElementById("eighthPage").style.display = "block";
});
next7Btn.addEventListener("click", function() {
  document.getElementById("eighthPage").style.display = "none";
  document.getElementById("lastPage").style.display = "block";
});
reptBtn.addEventListener("click", function() {
  document.getElementById("reptPage").style.display = "none";
  document.getElementById("firstPage").style.display = "block";
});
rept2Btn.addEventListener("click", function() {
  document.getElementById("reptPage").style.display = "none";
  document.getElementById("firstPage").style.display = "block";
});
no1Btn.addEventListener("click", function() {
  document.getElementById("lastPage").style.display = "none";
  document.getElementById("reptPage").style.display = "block";
});