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
        Le prêtre demanda alors à l’enfant s’il voulait travailler ; il accepta, mais refusa de quitter l’église.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte5">
            <button>Retour</button>
          </router-link>

          <router-link to="/conte7">
            <button>Suivant</button>
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte6",
  data() {
    return {
      images: [
        new URL("../img/S5-P7.png", import.meta.url).href,
        new URL("../img/S5-P9.png", import.meta.url).href,
      ],
      currentIndex: 0,
      intervalId: null,
      animateText: false,
      showButtons: false,
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
    this.audio.volume = 0.2
    this.audio.play()

    this.startSlideshow()

    setTimeout(() => {
      this.showButtons = true
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
