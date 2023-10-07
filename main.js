const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const innerScheduleBlock = document.querySelector("#schedule");

const tab1Open = document.querySelector(".tab1_open");
const tab2Open = document.querySelector(".tab2_open");

tab1.addEventListener("click", function () {
  tab1.classList.add("active");
  tab2.classList.remove("active");
  tab1Open.classList.remove("hidden");
  tab2Open.classList.add("hidden");
});

tab2.addEventListener("click", function () {
  tab2.classList.add("active");
  tab1.classList.remove("active");

  tab1Open.classList.add("hidden");
  tab2Open.classList.remove("hidden");
});
