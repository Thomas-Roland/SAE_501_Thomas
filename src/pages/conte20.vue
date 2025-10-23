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
  </div>
</template>

<script>
export default {
  name: "Conte20",
  data() {
    return {
      images: [new URL("../img/1.png", import.meta.url).href],
      currentIndex: 0,
      darkenEffect: false, 
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
      this.darkenEffect = true
      this.fadeOutMusic(10000)
    }, 1000)

    setTimeout(() => {
      this.$router.push("/conte") 
    }, 11000)
  },

  beforeUnmount() {
    if (this.musicAudio) {
      this.musicAudio.pause()
      this.musicAudio = null
    }
  },

  methods: {
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
  filter: brightness(1); 
  transition: filter 10s ease; 
}

.image-conte.darken {
  filter: brightness(0); 
}
</style>
