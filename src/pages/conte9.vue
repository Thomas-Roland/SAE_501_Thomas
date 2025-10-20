<template>
  <div class="conte">
    <!-- Diaporama -->
    <div class="slideshow">
      <img
        v-if="currentImage"
        :src="currentImage"
        alt="Illustration du conte"
        class="image-conte"
      />
    </div>

    <!-- Bloc texte + boutons -->
    <div class="texte-conte" :class="{ animate: animateText }">
      <p ref="conteText">
        Ému, il dit : « Comme tu es maigre, ô mon Dieu ! On ne te donne donc pas à manger ? »
      </p>

      <!-- Boutons -->
      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte8">
            <button>Retour</button>
          </router-link>

          <button 
            v-if="!feedDone"
            @click="startSlideshow"
          >
            Donner à manger
          </button>

          <router-link to="/conte10">
            <button :disabled="!feedDone">
              Suivant
            </button>
          </router-link>
        </div>
      </transition>
    </div>

    <!-- Musique de fond -->
    <div class="music">
      <audio :src="music" autoplay loop></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte9",
  data() {
    return {
      images: [
        new URL("../img/S11-P1.png", import.meta.url).href,
        new URL("../img/S11-P2.png", import.meta.url).href,
        new URL("../img/S11-P3.png", import.meta.url).href,
        new URL("../img/S11-P4.png", import.meta.url).href,
        new URL("../img/S11-P5.png", import.meta.url).href,
        new URL("../img/S11-P6.png", import.meta.url).href,
      ],
      currentIndex: 0,
      animateText: false,
      showButtons: false,
      showFeedButton: true,
      feedDone: false,
      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || null
    },
  },
  mounted() {
    this.triggerTextAnimation()

    setTimeout(() => {
      this.showButtons = true
    }, 5000)
  },
  beforeUnmount() {
    window.speechSynthesis.cancel()
  },
  methods: {
    startSlideshow() {
      this.showFeedButton = false
      this.feedDone = true
      this.playSlideshowOnce()
    },
    playSlideshowOnce() {
      const interval = setInterval(() => {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++
          this.triggerTextAnimation()
        } else {
          clearInterval(interval)
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
