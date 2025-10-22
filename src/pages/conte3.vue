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
        Jusqu’à une belle église. En voyant la magnificence de celle-ci, il crut être arrivé au paradis.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showEnterButton">
          <router-link to="/conte2">
            <button>Retour</button>
          </router-link>

          <button @click="enterChurch">Entrer</button>
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
  name: "Conte4",
  data() {
    return {
      images: [
        new URL("../img/S4-P1.png", import.meta.url).href,
        new URL("../img/S4-P2.png", import.meta.url).href,
        new URL("../img/S4-P3.png", import.meta.url).href,
        new URL("../img/S4-P4.png", import.meta.url).href,
        new URL("../img/S4-P5.png", import.meta.url).href,
        new URL("../img/S4-P6.png", import.meta.url).href,
        new URL("../img/S4-P7.png", import.meta.url).href,
        new URL("../img/S4-P8.png", import.meta.url).href,
        new URL("../img/S4-P10.png", import.meta.url).href,
        new URL("../img/S4-P11.png", import.meta.url).href,
        new URL("../img/S4-P12.png", import.meta.url).href,
      ],
      currentIndex: 0,
      intervalId: null,
      animateText: false,
      showEnterButton: false,
      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      audio: null,
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

    this.startSlideshow()
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
    if (this.audio) {
      this.audio.pause()
      this.audio = null
    }
  },
  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        if (this.currentIndex < this.images.length - 2) {
          this.currentIndex++
          this.triggerTextAnimation()
        } else {
          clearInterval(this.intervalId)
          this.intervalId = null
          this.showEnterButton = true 
        }
      }, 700)
    },

    triggerTextAnimation() {
      this.animateText = false
      void this.$nextTick(() => {
        this.animateText = true
      })
    },

    enterChurch() {
      this.showEnterButton = false
      this.currentIndex = this.images.length - 1 
      this.triggerTextAnimation()

      setTimeout(() => {
        this.$router.push("/conte4")
      }, 1500)
    },
  },
}
</script>

<style src="src/style.css"></style>
