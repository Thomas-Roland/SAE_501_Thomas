<template>
  <div class="conte">
    <!-- 🖼️ Diaporama -->
    <div class="slideshow">
      <img
        v-if="currentImage"
        :src="currentImage"
        alt="Illustration du conte"
        class="image-conte"
        :class="{ zoom: zoomActive, darken: darkenEffect }"
      />
    </div>

    <!-- 📜 Texte + Boutons -->
    <div class="texte-conte" :class="{ animate: animateText }">
      <p>
        Le dimanche, au moment de communier, l’enfant mourut et entra vraiment au festin céleste.
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showButtons">
          <router-link to="/conte17">
            <button>Retour</button>
          </router-link>

          <!-- 🔥 Bouton principal -->
          <button class="next-button" @click="entrerFestin">
            Entrer dans le festin céleste
          </button>
        </div>
      </transition>
    </div>

    <!-- 🎵 Musique de fond -->
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
        new URL("../img/S20-P1.png", import.meta.url).href, // image d’intro
        new URL("../img/S20-P4.png", import.meta.url).href, // image finale
      ],
      currentIndex: 0,
      zoomActive: true,
      animateText: false,
      showButtons: false,
      darkenEffect: false,
      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    },
  },
  mounted() {
    this.triggerTextAnimation()
    setTimeout(() => {
      this.showButtons = true
    }, 4000)
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

    // 🔥 Au clic sur "Entrer dans le festin céleste"
    entrerFestin() {
      this.zoomActive = false
      this.showButtons = false

      // Passe à la deuxième image
      this.currentIndex = 1

      // Lance ensuite l’assombrissement après 2 secondes
      setTimeout(() => {
        this.lancerAssombrissement()
      }, 2000)
    },

    // 🌒 Lance l’assombrissement puis redirige vers localhost
    lancerAssombrissement() {
      this.darkenEffect = true
      setTimeout(() => {
        window.location.href = "http://localhost:5173"
      }, 10000) // redirection après 10 s
    },
  },
}
</script>

<style src="src/style.css"></style>

<style>
.zoom {
  animation: zoomIn 8s ease-in-out forwards;
  transform-origin: center center;
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}

/* 🌒 Assombrissement progressif */
.darken {
  animation: darkenEffect 10s forwards;
}

@keyframes darkenEffect {
  0% {
    filter: brightness(1);
  }
  100% {
    filter: brightness(0);
  }
}

/* ✨ Animation d’apparition/disparition des boutons */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
