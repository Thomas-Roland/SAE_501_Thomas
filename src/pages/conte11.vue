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
        À la porte de l’église, une vieille femme mendiait. L’enfant lui donna la moitié de son pain.
      </p>

      <!-- Boutons -->
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

    // Affiche les deux premières images seulement
    this.playFirstTwoImages()

    // Affiche les boutons après les deux images
    setTimeout(() => {
      this.showButtons = true
    }, 2500)
  },
  beforeUnmount() {
    clearInterval(this.slideshowInterval)
    window.speechSynthesis.cancel()
  },
  methods: {
    // Joue les deux premières images
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

    // Quand l’utilisateur clique sur “Donner à manger”
    giveFood() {
      this.hasGivenFood = true
      this.showButtons = false

      // Relancer le diaporama pour les images restantes
      this.slideshowInterval = setInterval(() => {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++
          this.triggerTextAnimation()
        } else {
          clearInterval(this.slideshowInterval)
          // Quand tout est fini, réafficher les boutons avec “Suivant” activé
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
