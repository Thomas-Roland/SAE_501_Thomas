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

    <!-- Bloc texte + boutons en haut -->
    <div class="texte-conte" :class="{ animate: animateText }">
      <p ref="conteText">
        Quand l’office se termina, le sacristain voulut le faire sortir.
      </p>

      <!-- Boutons affichés après 5s -->
      <transition name="fade">
        <div class="actions-top" v-if="showNextButton">
          <!-- 🔄 Bouton de retour vers /conte3 -->
          <router-link to="/conte3">
            <button>Retour</button>
          </router-link>
          
          <!-- 🔄 Bouton suivant (à adapter selon ta suite) -->
          <router-link to="/conte5">
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
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || null
    },
  },
  mounted() {
    // Lance le diaporama une seule fois
    this.startSlideshow()

    // Affiche les boutons après 5 secondes
    setTimeout(() => {
      this.showNextButton = true
    }, 5000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
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
      }, 700) // ⚡ rapide : 0.7s par image
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
