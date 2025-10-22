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
      <p>
        Son chemin le mena dans une grande ville.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showNextButton">
          <router-link to="/conte1">
            <button>Retour</button>
          </router-link>

          <button @click="nextStep">Marcher</button>
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
  name: "Conte3",
  data() {
    return {
      images: [
        new URL("../img/S3-P1.png", import.meta.url).href,
        new URL("../img/S3-P3.png", import.meta.url).href,
        new URL("../img/S3-P4.png", import.meta.url).href,
        new URL("../img/S3-P5.png", import.meta.url).href,
        new URL("../img/S3-P6.png", import.meta.url).href,
        new URL("../img/S3-P7.png", import.meta.url).href,
        new URL("../img/S3-P8.png", import.meta.url).href,
        new URL("../img/S3-P9.png", import.meta.url).href,
        new URL("../img/S3-P10.png", import.meta.url).href,
        new URL("../img/S3-P11.png", import.meta.url).href,
        new URL("../img/S3-P12.png", import.meta.url).href,
      ],
      currentIndex: 0,
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
    this.audio.play()

    setTimeout(() => {
      this.showNextButton = true
    }, 3000)
  },
  beforeUnmount() {
    if (this.audio) {
      this.audio.pause()
      this.audio = null
    }
  },
  methods: {
    triggerTextAnimation() {
      this.animateText = false
      void this.$nextTick(() => {
        this.animateText = true
      })
    },

    nextStep() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++
        this.triggerTextAnimation()
      } else {
        this.$router.push("/conte3")
      }
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
