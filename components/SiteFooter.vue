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
    <div class="bg-white">
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

<style lang="scss" scoped>

/* = = = = = = = = = = = = = = = =
// Footer - unique styles
= = = = = = = = = = = = = = = = */
.footer{
  position: relative;
  z-index: 1;
  @include mq(md){
    margin-bottom: 4rem;
  }
  .waves {
    position:relative;
    width: 100%;
    height:3rem;
    margin-bottom:-7px; /*Fix for safari gap*/
  }
  .parallax{
    & use {
      animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
      &:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
      }
      &:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
      }
      &:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
      }
      &:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
      }
    }
  }
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
}
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
}
</style>
