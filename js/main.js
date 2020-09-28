const hamburger = document.querySelector(".navmenu-togler")
const navmenu = document.querySelector(".sitenav__list")
const backyardOpen = document.querySelector(".on-open__backyard")

hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("open-menu")
  backyardOpen.classList.toggle("on-open__backyard");
})

backyardOpen.addEventListener("click", () =>{
  navmenu.classList.remove("open");
  backyardOpen.classList.remove("on-open__backyard");
})