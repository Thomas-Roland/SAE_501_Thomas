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
Un jour, il tomba malade et ne put sortir de son lit pendant huit jours.     </p>

      <!-- Boutons d’action -->
      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte12">
            <button>Retour</button>
          </router-link>

          <!-- Bouton Suivant TOUJOURS disponible -->
          <router-link to="/conte14">
            <button class="next-button">Suivant</button>
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
        new URL("../img/S15.P1.png", import.meta.url).href,

      ],
      currentIndex: 0,
      animateText: false,
      showButtons: false,
      loopCount: 0,
      maxLoops: 10, // 🔁 10 boucles
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

    // Afficher les boutons après 5 secondes
    setTimeout(() => {
      this.showButtons = true
    }, 5000)

    // Lancer le diaporama automatique
    this.playSlideshowLoop()
  },
  beforeUnmount() {
    window.speechSynthesis.cancel()
  },
  methods: {
    playSlideshowLoop() {
      const interval = setInterval(() => {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++
        } else {
          this.currentIndex = 0
          this.loopCount++
        }

        this.triggerTextAnimation()

        // Arrêter après 10 boucles
        if (this.loopCount >= this.maxLoops) {
          clearInterval(interval)
        }
      }, 500) // ⚡ 0.5 seconde entre chaque image
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
