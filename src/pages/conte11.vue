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
        À la porte de l’église, une vieille femme mendiait. L’enfant lui donna la moitié de son pain.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte10">
            <button>Retour</button>
          </router-link>

          <button 
            v-if="!hasGivenFood"
            @click="giveFood"
          >
            Donner à manger
          </button>

          <router-link to="/conte12">
            <button :disabled="!hasGivenFood">
              Suivant
            </button>
          </router-link>
        </div>
      </transition>
    </div>

    <div class="music">
      <audio ref="musicAudio" :src="music" autoplay loop></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte11", 
  data() {
    return {
      images: [
        new URL("../img/S13-P1.png", import.meta.url).href,
        new URL("../img/S13-P2.png", import.meta.url).href,
        new URL("../img/S13-P3.png", import.meta.url).href,
        new URL("../img/S13-P4.png", import.meta.url).href,
        new URL("../img/S13-P5.png", import.meta.url).href,
        new URL("../img/S13-P6.png", import.meta.url).href,
      ],
      currentIndex: 0,
      animateText: false,
      showButtons: false,
      hasGivenFood: false,
      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      slideshowInterval: null,
    }
  },

  computed: {
    currentImage() {
      return this.images[this.currentIndex] || null
    },
  },

  mounted() {
    this.triggerTextAnimation()
    this.playFirstTwoImages()

    const audio = this.$refs.musicAudio
    if (audio) {
      audio.volume = 0.2
    }

    setTimeout(() => {
      this.showButtons = true
    }, 2500)
  },

  beforeUnmount() {
    clearInterval(this.slideshowInterval)
    window.speechSynthesis.cancel()

    const audio = this.$refs.musicAudio
    if (audio) {
      audio.pause()
      audio.src = ""
    }
  },

  methods: {
    playFirstTwoImages() {
      this.slideshowInterval = setInterval(() => {
        if (this.currentIndex < 1) {
          this.currentIndex++
          this.triggerTextAnimation()
        } else {
          clearInterval(this.slideshowInterval)
        }
      }, 1000)
    },

    giveFood() {
      this.hasGivenFood = true
      this.showButtons = false

      this.slideshowInterval = setInterval(() => {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++
          this.triggerTextAnimation()
        } else {
          clearInterval(this.slideshowInterval)
          this.showButtons = true
        }
      }, 1000)
    },

    triggerTextAnimation() {
      this.animateText = false
      void this.$nextTick(() => (this.animateText = true))
    },
  },
}
</script>

<style src="src/style.css"></style>
