<template>
  <div class="conte">
    <div class="slideshow">
      <img
        v-if="currentImage"
        :src="currentImage"
        alt="Illustration du conte"
        class="image-conte"
      />

      <div class="texte-conte" :class="{ animate: animateText }">
        <p>
          Il se mit en route, marchant toujours droit devant lui, par monts et par vaux.
        </p>

        <transition name="fade">
          <div class="actions-top" v-if="showNextButton">
            <router-link to="/conte">
              <button>Retour</button>
            </router-link>

            <!-- ✅ Nouveau bouton “Marcher” -->
            <button @click="nextStep">Marcher</button>
          </div>
        </transition>
      </div>
    </div>

    <!-- Musique de fond -->
    <div class="music">
      <audio :src="music" autoplay loop></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte2",
  data() {
    return {
      images: [
        new URL("../img/S2-P1.png", import.meta.url).href,
        new URL("../img/S2-P2.png", import.meta.url).href,
        new URL("../img/S2-P3.png", import.meta.url).href,
        new URL("../img/S2-P4.png", import.meta.url).href,
        new URL("../img/S2-P5.png", import.meta.url).href,
        new URL("../img/S2-P6.png", import.meta.url).href,
        new URL("../img/S2-P7.png", import.meta.url).href,
        new URL("../img/S2-P8.png", import.meta.url).href,
        new URL("../img/S2-P9.png", import.meta.url).href,
        new URL("../img/S2-10.png", import.meta.url).href,
        new URL("../img/S2-11.png", import.meta.url).href,
        new URL("../img/S2-12.png", import.meta.url).href,
        new URL("../img/S2-13.png", import.meta.url).href,
      ],
      currentIndex: 0,
      animateText: false,
      showNextButton: false,
      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      audio: null,
      isMusicPlaying: true,
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
    this.audio.play()

    // Affiche les boutons après quelques secondes
    setTimeout(() => {
      this.showNextButton = true
    }, 3000)
  },
  beforeUnmount() {
    if (this.audio) {
      this.audio.pause()
      this.audio = null
    }
  },
  methods: {
    triggerTextAnimation() {
      this.animateText = false
      void this.$nextTick(() => {
        this.animateText = true
      })
    },

    // ✅ Nouvelle méthode pour faire avancer l’image
    nextStep() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++
        this.triggerTextAnimation()
      } else {
        // ✅ Quand on est à la dernière image → redirige vers la page suivante
        this.$router.push("/conte2")
      }
    },

    toggleMusic() {
      if (!this.audio) return
      if (this.isMusicPlaying) {
        this.audio.pause()
      } else {
        this.audio.play()
      }
      this.isMusicPlaying = !this.isMusicPlaying
    },
  },
}
</script>

<style src="src/style.css"></style>
