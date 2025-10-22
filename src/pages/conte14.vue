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
        Dès qu’il fut rétabli, il retourna prier devant l’Enfant Jésus.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showEnterButton">
          <router-link to="/conte13">
            <button>Retour</button>
          </router-link>

          <button @click="enterChurch">Entrer</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte14",
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
      footstepSound: new URL(
        "/bruitage/FEETHmn_Pas cours en chaussure sur beton (ID 0514)_LS.mp3",
        import.meta.url
      ).href,
      doorSound: new URL(
        "/bruitage/DOORCreak_Grincement de porte 8 (ID 3211)_LS.mp3",
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
    this.footstepAudio.loop = true
    this.footstepAudio.volume = 1.0
    this.footstepAudio.play()

    setTimeout(() => {
      if (this.footstepAudio) {
        this.footstepAudio.pause()
        this.footstepAudio = null
      }
    }, 6500)

    this.startSlideshow()
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
      if (this.footstepAudio) {
        this.footstepAudio.pause()
        this.footstepAudio = null
      }

      const doorAudio = new Audio(this.doorSound)
      doorAudio.volume = 1.0
      doorAudio.play()

      this.showEnterButton = false
      this.currentIndex = this.images.length - 1
      this.triggerTextAnimation()

      setTimeout(() => {
        this.$router.push("/conte15")
      }, 1800)
    },
  },
}
</script>

<style src="src/style.css"></style>
