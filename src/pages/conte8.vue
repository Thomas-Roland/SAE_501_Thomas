<template>
  <div class="conte">

    <!-- Diaporama (image unique) -->
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

      <!-- Boutons affichés après 5 secondes -->
      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte7">
            <button>Retour</button>
          </router-link>

          <router-link to="/conte9">
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
  name: "Conte8",
  data() {
    return {
      images: [
        new URL("../img/S9-P5.png", import.meta.url).href, // une seule image
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
    // Lance l’animation du texte
    this.triggerTextAnimation()

    // Affiche les boutons après 5 secondes
    setTimeout(() => {
      this.showButtons = true
    }, 5000)
  },
  beforeUnmount() {
    window.speechSynthesis.cancel()
  },
  methods: {
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
