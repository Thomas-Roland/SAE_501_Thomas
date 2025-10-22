<template>
  <div class="conte">
    <div class="slideshow">
      <img
        v-if="currentImage"
        :src="currentImage"
        alt="Illustration du conte"
        class="image-conte zoom"
      />
    </div>

    <div class="texte-conte" :class="{ animate: animateText }">
      <p ref="conteText">
        Un jour, il tomba malade et ne put sortir de son lit pendant huit jours.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte12">
            <button>Retour</button>
          </router-link>

          <router-link to="/conte14">
            <button class="next-button">Suivant</button>
          </router-link>
        </div>
      </transition>
    </div>

    <div class="music">
      <audio :src="music" autoplay loop></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte9",
  data() {
    return {
      images: [
        new URL("../img/S15.P1.png", import.meta.url).href,
      ],
      currentIndex: 0,
      animateText: false,
      showButtons: false,
      loopCount: 0,
      maxLoops: 10,
      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || null
    },
  },
  mounted() {
    this.triggerTextAnimation()

    setTimeout(() => {
      this.showButtons = true
    }, 5000)

    this.playSlideshowLoop()
  },
  beforeUnmount() {
    window.speechSynthesis.cancel()
  },
  methods: {
    playSlideshowLoop() {
      const interval = setInterval(() => {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++
        } else {
          this.currentIndex = 0
          this.loopCount++
        }

        this.triggerTextAnimation()

        if (this.loopCount >= this.maxLoops) {
          clearInterval(interval)
        }
      }, 500)
    },
    triggerTextAnimation() {
      this.animateText = false
      void this.$nextTick(() => {
        this.animateText = true
      })
    },
  },
}
</script>

<style src="src/style.css"></style>

<style scoped>
.zoom {
  animation: zoomIn 8s ease-in-out forwards;
  transform-origin: center center;
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
