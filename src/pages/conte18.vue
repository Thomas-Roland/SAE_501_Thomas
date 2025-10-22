<template>
  <div class="conte">
    <div class="slideshow">
      <img
        v-if="currentImage"
        :src="currentImage"
        alt="Illustration du conte"
        class="image-conte"
        :class="{ zoom: zoomActive, darken: darkenEffect }"
      />
    </div>

    <div class="texte-conte" :class="{ animate: animateText }">
      <p>{{ texteAffiche }}</p>

      <transition name="fade">
        <div class="actions-top" v-if="showButtons && !finAffiche">
          <router-link to="/conte17">
            <button>Retour</button>
          </router-link>

          <button class="next-button" @click="entrerFestin">
            Entrer dans le festin céleste
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conte20",
  data() {
    return {
      images: [
        new URL("../img/S20-P1.png", import.meta.url).href,
        new URL("../img/S20-P4.png", import.meta.url).href,
      ],
      currentIndex: 0,
      zoomActive: true,
      animateText: false,
      showButtons: false,
      darkenEffect: false,
      finAffiche: false,
      texteAffiche:
        "Le dimanche, au moment de communier, l’enfant mourut et entra vraiment au festin céleste.",

      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      musicAudio: null,
    }
  },

  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    },
  },

  mounted() {
    this.musicAudio = new Audio(this.music)
    this.musicAudio.loop = true
    this.musicAudio.volume = 0.25
    this.musicAudio.play()

    this.triggerTextAnimation()
    setTimeout(() => {
      this.showButtons = true
    }, 4000)
  },

  beforeUnmount() {
    if (this.musicAudio) {
      this.musicAudio.pause()
      this.musicAudio = null
    }
  },

  methods: {
    triggerTextAnimation() {
      this.animateText = false
      void this.$nextTick(() => {
        this.animateText = true
      })
    },

    entrerFestin() {
      this.zoomActive = false
      this.showButtons = false
      this.currentIndex = 1

      this.fadeOutMusic(5000)

      setTimeout(() => {
        this.lancerAssombrissement()
      }, 2000)

      setTimeout(() => {
        this.afficherFin()
      }, 5000)
    },

    fadeOutMusic(duration) {
      if (!this.musicAudio) return

      const fadeInterval = 100 
      const fadeStep = this.musicAudio.volume / (duration / fadeInterval)

      const interval = setInterval(() => {
        if (this.musicAudio.volume > fadeStep) {
          this.musicAudio.volume -= fadeStep
        } else {
          this.musicAudio.volume = 0
          this.musicAudio.pause()
          clearInterval(interval)
        }
      }, fadeInterval)
    },

    lancerAssombrissement() {
      this.darkenEffect = true
      setTimeout(() => {
        window.location.href = "http://localhost:5173"
      }, 10000)
    },

    afficherFin() {
      this.finAffiche = true
      this.texteAffiche = "FIN"
      this.triggerTextAnimation()
    },
  },
}
</script>

<style src="src/style.css"></style>

<style scoped>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.texte-conte p {
  font-size: 1.3rem;
  transition: color 2s ease, transform 2s ease;
}

.animate p {
  transform: scale(1.05);
}

.fin {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-align: center;
  animation: fadeInFin 3s ease-in-out forwards;
}

@keyframes fadeInFin {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
