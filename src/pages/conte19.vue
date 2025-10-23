<template>
  <div class="conte">
    <div class="slideshow">
      <img
        v-if="currentImage"
        :src="currentImage"
        alt="Illustration du conte"
        class="image-conte"
        :class="{ darken: darkenEffect }"
      />
    </div>

    <div v-if="fondNoirActif" class="fond-noir"></div>
  </div>
</template>

<script>
export default {
  name: "Conte20",
  data() {
    return {
      images: [
        new URL("../img/4.png", import.meta.url).href,
      ],
      currentIndex: 0,
      darkenEffect: false,
      fondNoirActif: false,

      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      musicAudio: null,
    }
  },

  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    },
  },

  mounted() {
    this.musicAudio = new Audio(this.music)
    this.musicAudio.loop = true
    this.musicAudio.volume = 0.25
    this.musicAudio.play()

    setTimeout(() => {
      this.activerFondNoir()
    }, 5000)
  },

  beforeUnmount() {
    if (this.musicAudio) {
      this.musicAudio.pause()
      this.musicAudio = null
    }
  },

  methods: {
    activerFondNoir() {
      this.fondNoirActif = true
      this.fadeOutMusic(5000)

      setTimeout(() => {
        window.location.href = "http://localhost:5173/"
      }, 10000)
    },

    fadeOutMusic(duration) {
      if (!this.musicAudio) return

      const fadeInterval = 100
      const fadeStep = this.musicAudio.volume / (duration / fadeInterval)

      const interval = setInterval(() => {
        if (this.musicAudio.volume > fadeStep) {
          this.musicAudio.volume -= fadeStep
        } else {
          this.musicAudio.volume = 0
          this.musicAudio.pause()
          clearInterval(interval)
        }
      }, fadeInterval)
    },
  },
}
</script>

<style src="src/style.css"></style>

<style scoped>
.conte {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.slideshow {
  width: 100%;
  height: 100%;
}

.image-conte {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 5s ease;
}

.fond-noir {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  animation: fadeToBlack 10s forwards;
  z-index: 10;
}

@keyframes fadeToBlack {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
