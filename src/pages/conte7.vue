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
        Voyant une statue de l’Enfant Jésus, il pensa que c’était Dieu.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte6">
            <button>Retour</button>
          </router-link>

          <router-link to="/conte8">
            <button>Suivant</button>
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte7",
  data() {
    return {
      images: [
        new URL("../img/S9-P1.png", import.meta.url).href,
        new URL("../img/S9-P2.png", import.meta.url).href,
        new URL("../img/S9-P3.png", import.meta.url).href,
        new URL("../img/S9-P4.png", import.meta.url).href,
        new URL("../img/S9-P5.png", import.meta.url).href,
      ],
      currentIndex: 0,
      intervalId: null,
      animateText: false,
      showButtons: false,

      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      footsteps: new URL("../bruitage/FEETHmn_Pas cours en chaussure sur beton (ID 0514)_LS.mp3", import.meta.url).href,

      audioMusic: null,
      audioFootsteps: null,
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

    this.audioFootsteps = new Audio(this.footsteps)
    this.audioFootsteps.volume = 0.8
    this.audioFootsteps.play()

    setTimeout(() => {
      if (this.audioFootsteps) {
        this.audioFootsteps.pause()
        this.audioFootsteps.currentTime = 0
        this.audioFootsteps = null
      }
    }, 4000)

    this.startSlideshow()

    setTimeout(() => {
      this.showButtons = true
    }, 5000)
  },

  beforeUnmount() {
    clearInterval(this.intervalId)
    if (this.audioMusic) {
      this.audioMusic.pause()
      this.audioMusic = null
    }
    if (this.audioFootsteps) {
      this.audioFootsteps.pause()
      this.audioFootsteps = null
    }
  },

  methods: {
    startSlideshow() {
      this.animateText = true
      this.intervalId = setInterval(() => {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++
          this.triggerTextAnimation()
        } else {
          clearInterval(this.intervalId)
          this.intervalId = null
        }
      }, 1000)
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
