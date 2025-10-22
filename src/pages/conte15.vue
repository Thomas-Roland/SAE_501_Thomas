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
        Il dit : « Mon Dieu, pardonne-moi de ne pas t’avoir nourri, j’étais malade. »
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte14">
            <button>Retour</button>
          </router-link>

          <router-link to="/conte16">
            <button class="next-button">Suivant</button>
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte15",
  data() {
    return {
      images: [
        new URL("../img/S16-P1.png", import.meta.url).href,
        new URL("../img/S16-P2.png", import.meta.url).href,
        new URL("../img/S16-P3.png", import.meta.url).href,
        new URL("../img/S16-P4.png", import.meta.url).href,
      ],
      currentIndex: 0,
      animateText: false,
      showButtons: false,

      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      footsteps: new URL(
        "../bruitage/FEETHmn_Pas cours en chaussure sur beton (ID 0514)_LS.mp3",
        import.meta.url
      ).href,

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
    this.audioFootsteps.volume = 1.0
    this.audioFootsteps.play()

    setTimeout(() => {
      this.audioFootsteps.pause()
      this.audioFootsteps = null
    }, 1000)

    this.triggerTextAnimation()
    this.playSlideshowOnce()

    setTimeout(() => {
      this.showButtons = true
    }, 5000)
  },

  beforeUnmount() {
    if (this.audioMusic) {
      this.audioMusic.pause()
      this.audioMusic = null
    }
    if (this.audioFootsteps) {
      this.audioFootsteps.pause()
      this.audioFootsteps = null
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
