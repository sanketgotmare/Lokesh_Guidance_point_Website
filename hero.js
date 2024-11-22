<script>
  const slides = document.querySelectorAll(".hero-slide");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.style.transform = `translateX(${(idx - i) * 100}%)`;
    });
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000); // Changes slide every 5 seconds
</script>
