<template>
  <div class="conte">

    <!-- Image unique -->
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
        Mais l’enfant répondit : « Non, je reste ici, je suis enfin au ciel. »
      </p>

      <!-- Boutons affichés après 5 secondes -->
      <transition name="fade">
        <div class="actions-top" v-if="showNextButton">
          <!-- 🔙 Bouton de retour vers /conte4 -->
          <router-link to="/conte4">
            <button>Retour</button>
          </router-link>

          <router-link to="/conte6">
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
      images: [new URL("../img/S5-P8.png", import.meta.url).href],
      currentIndex: 0,
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
    // Animation du texte au montage
    this.triggerTextAnimation()

    // Affiche les boutons après 5 secondes
    setTimeout(() => {
      this.showNextButton = true
    }, 5000)
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
