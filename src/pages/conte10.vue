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
        Une voix lui dit alors : « Donne à ceux qui ont faim, et tu me nourriras. »
      </p>

      <!-- Boutons affichés après 5 secondes -->
      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte9">
            <button>Retour</button>
          </router-link>

          <router-link to="/conte11">
            <button>Suivant</button>
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
  name: "Conte10",
  data() {
    return {
      images: [
        new URL("../img/S12-P1.png", import.meta.url).href,
        new URL("../img/S12-P2.png", import.meta.url).href,
        new URL("../img/S12-P3.png", import.meta.url).href,
      ],
      currentIndex: 0,
      animateText: false,
      showButtons: false,
      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || null
    },
  },
  mounted() {
    // Animation du texte
    this.triggerTextAnimation()

    // Lancer le diaporama (une seule fois)
    this.playSlideshowOnce()

    // Afficher les boutons après 5 secondes
    setTimeout(() => {
      this.showButtons = true
    }, 5000)
  },
  beforeUnmount() {
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
      }, 1000) // 1 seconde entre les images
    },
    triggerTextAnimation() {
      this.animateText = false
      void this.$nextTick(() => (this.animateText = true))
    },
  },
}
</script>

<style src="src/style.css"></style>

