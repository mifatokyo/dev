<template>

  <footer class="footer">
    <!--Waves Container-->
    <div>
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(250,250,250,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(250,250,250,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(250,250,250,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
      </svg>
    </div>
    <!--Waves end-->
    <div class="">
      <ul class="social">
        <li></li>
      </ul>
      <p class="copyright text-xs p-6 text-center">
        <small>Copyright mifa.tokyo All Right Reserved.</small>
      </p>
    </div>
  </footer>
</template>


<script>
// element.addEventListener("click", (e) => {
//   e.preventDefault();
//   e.stopPropagation();

//   setTimeout(() => {
//     const target = document.querySelector(element.hash);
//     if (target) {
//       window.scrollTo({ left: 0, top: target.offsetTop, behavior: "smooth" });
//     }
//   }, 0);
// });
</script>
