<template>
  <div class="conte">
    <div class="slideshow">
      <img
        v-if="currentImage"
        :src="currentImage"
        alt="Illustration du conte"
        class="image-conte"
      />
    </div>

    <div class="texte-conte" :class="{ animate: animateText }">
      <p ref="conteText">
        La statue lui sembla sourire. Chaque jour, il continua à partager son pain.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte11">
            <button>Retour</button>
          </router-link>

          <router-link to="/conte13">
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
        new URL("../img/S11-P1.png", import.meta.url).href,
        new URL("../img/S11-P2.png", import.meta.url).href,
        new URL("../img/S11-P3.png", import.meta.url).href,
        new URL("../img/S11-P4.png", import.meta.url).href,
        new URL("../img/S11-P5.png", import.meta.url).href,
        new URL("../img/S11-P6.png", import.meta.url).href,
        new URL("../img/S11-P7.png", import.meta.url).href,
        new URL("../img/S11-P8.png", import.meta.url).href,
        new URL("../img/S11-P9.png", import.meta.url).href,
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
