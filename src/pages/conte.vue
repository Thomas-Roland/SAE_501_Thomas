<template>
  <div class="conte">
    <div class="slideshow">
      <img
        v-if="currentImage"
        :src="currentImage"
        alt="Illustration du conte"
        class="image-conte"
      />

      <div class="texte-conte" :class="{ animate: animateText }">
        <p>
          Le pauvre petit paysan écouta un jour à l’église le prêtre dire :
          « Pour entrer au paradis, il faut marcher droit. »
        </p>

        <transition name="fade">
          <div class="actions-top" v-if="showNextButton">
            <router-link to="/">
              <button>Retour</button>
            </router-link>

            <router-link to="/conte1">
              <button @click="nextImage">Suivant</button>
            </router-link>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte",
  data() {
    return {
      images: [
        new URL("../img/S1-p1.png", import.meta.url).href,
        new URL("../img/S1-p2.png", import.meta.url).href,
        new URL("../img/S1-p3.png", import.meta.url).href,
      ],
      currentIndex: 0,
      intervalId: null,
      animateText: false,
      showNextButton: false,
      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      audio: null,
      isMusicPlaying: true,
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || null
    },
  },
  mounted() {
    this.audio = new Audio(this.music)
    this.audio.loop = true
    this.audio.volume = 0.1 
    this.audio.play()

    
    this.intervalId = setInterval(() => {
      this.nextImage()
    }, 800)

    setTimeout(() => {
      this.showNextButton = true
    }, 5000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
    if (this.audio) {
      this.audio.pause()
      this.audio = null
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
      this.triggerTextAnimation()
    },
    triggerTextAnimation() {
      this.animateText = false
      void this.$nextTick(() => {
        this.animateText = true
      })
    },
    toggleMusic() {
      if (!this.audio) return
      if (this.isMusicPlaying) {
        this.audio.pause()
      } else {
        this.audio.play()
      }
      this.isMusicPlaying = !this.isMusicPlaying
    },
  },
}
</script>

<style src="src/style.css"></style>
