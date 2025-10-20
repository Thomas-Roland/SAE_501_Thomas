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
        Voyant une statue de l’Enfant Jésus, il pensa que c’était Dieu.
      </p>

      <!-- Boutons affichés après 5 secondes -->
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

    <!-- Musique de fond -->
    <div class="music">
      <audio :src="music" autoplay loop></audio>
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
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || null
    },
  },
  mounted() {
    // Lance le diaporama une seule fois (pas en boucle)
    this.startSlideshow()

    // Affiche les boutons après 5 secondes
    setTimeout(() => {
      this.showButtons = true
    }, 5000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
    window.speechSynthesis.cancel()
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
      }, 1000) // ⏱️ 1 seconde entre chaque image
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
