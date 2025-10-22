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
        Le curé comprit qu’il fallait préparer l’enfant à recevoir la communion.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte16">
            <button>Retour</button>
          </router-link>
          <router-link to="/conte18">
            <button class="next-button">Suivant</button>
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte17",
  data() {
    return {
      images: [
        new URL("../img/S19-P1.png", import.meta.url).href,
      ],
      currentIndex: 0,
      animateText: false,
      showButtons: false,

      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      audioMusic: null,
    }
  },

  computed: {
    currentImage() {
      return this.images[this.currentIndex] || null
    },
  },

  mounted() {
    this.audioMusic = new Audio(this.music)
    this.audioMusic.loop = true
    this.audioMusic.volume = 0.2
    this.audioMusic.play()

    this.triggerTextAnimation()
    setTimeout(() => {
      this.showButtons = true
    }, 5000)
    this.playSlideshowOnce()
  },

  beforeUnmount() {
    if (this.audioMusic) {
      this.audioMusic.pause()
      this.audioMusic = null
    }
    window.speechSynthesis.cancel()
  },

  methods: {
    playSlideshowOnce() {
      const interval = setInterval(() => {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++
          this.triggerTextAnimation()
        } else {
          clearInterval(interval)
        }
      }, 500)
    },

    triggerTextAnimation() {
      this.animateText = false
      void this.$nextTick(() => (this.animateText = true))
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
