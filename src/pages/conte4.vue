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
        Quand l’office se termina, le sacristain voulut le faire sortir.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showNextButton">
          <router-link to="/conte3">
            <button>Retour</button>
          </router-link>

          <router-link to="/conte5">
            <button>Suivant</button>
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte5",
  data() {
    return {
      images: [
        new URL("../img/S5-P1.png", import.meta.url).href,
        new URL("../img/S5-P2.png", import.meta.url).href,
        new URL("../img/S5-P3.png", import.meta.url).href,
        new URL("../img/S5-P4.png", import.meta.url).href,
        new URL("../img/S5-P5.png", import.meta.url).href,
        new URL("../img/S5-P6.png", import.meta.url).href,
        new URL("../img/S5-P7.png", import.meta.url).href,
        new URL("../img/S5-P8.png", import.meta.url).href,
      ],
      currentIndex: 0,
      intervalId: null,
      animateText: false,
      showNextButton: false,

      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      footstepSound: new URL(
        "/bruitage/FEETHmn_Pas rapides sur beton (ID 1318)_LS.mp3",
        import.meta.url
      ).href,

      audio: null,
      footstepAudio: null,
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
    this.audio.volume = 0.2
    this.audio.play()

    this.footstepAudio = new Audio(this.footstepSound)
    this.footstepAudio.volume = 1.0
    this.footstepAudio.play()

    setTimeout(() => {
      if (this.footstepAudio) {
        this.footstepAudio.pause()
        this.footstepAudio = null
      }
    }, 4000)

    this.startSlideshow()

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
    if (this.footstepAudio) {
      this.footstepAudio.pause()
      this.footstepAudio = null
    }
  },

  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++
          this.triggerTextAnimation()
        } else {
          clearInterval(this.intervalId)
          this.intervalId = null
        }
      }, 700)
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
