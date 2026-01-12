const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    thumbs.forEach((t) => t.classList.remove("active"));

    this.classList.add("active");

    const imgSrc = this.querySelector("img").src;
    document.body.style.backgroundImage = `url(${imgSrc})`;
  });
});
