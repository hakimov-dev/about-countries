<template>
  <section><span class="loader"> </span></section>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #8c929d #8c929d transparent transparent;
  -webkit-animation: rotation 1s linear infinite;
  animation: rotation 1s linear infinite;
}
.loader:after,
.loader:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent transparent #0ff #0ff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-animation: rotationBack 0.5s linear infinite;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}
.loader:before {
  width: 32px;
  height: 32px;
  border-color: #8c929d #8c929d transparent transparent;
  -webkit-animation: rotation 1.5s linear infinite;
  animation: rotation 1.5s linear infinite;
}

/* keyFrames */
@-webkit-keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
