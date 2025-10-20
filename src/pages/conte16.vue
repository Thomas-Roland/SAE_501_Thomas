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
Le Seigneur répondit : « J’ai vu ta bonne volonté. Dimanche prochain, tu viendras à mon festin céleste. »      </p>

      <!-- Boutons d’action -->
      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte15">
            <button>Retour</button>
          </router-link>

          <!-- Bouton Suivant TOUJOURS disponible -->
          <router-link to="/conte17">
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
        new URL("../img/S18-P1.png", import.meta.url).href,
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
    this.triggerTextAnimation()

    // Afficher les boutons après 5 secondes
    setTimeout(() => {
      this.showButtons = true
    }, 5000)

    // Lancer le diaporama une seule fois
    this.playSlideshowOnce()
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
          clearInterval(interval) // ✅ Arrête le diaporama à la fin
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
