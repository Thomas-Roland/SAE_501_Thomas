<template>
  <div class="conte">
    <div class="slideshow">
      <img
        v-if="currentImage"
        :src="currentImage"
        alt="Illustration du conte"
        class="image-conte"
      />
    </div>

    <div class="texte-conte" :class="{ animate: animateText }">
      <p ref="conteText">
        Mais l’enfant répondit : « Non, je reste ici, je suis enfin au ciel. »
      </p>

      <transition name="fade">
        <div class="actions-top" v-if="showNextButton">
          <router-link to="/conte4">
            <button>Retour</button>
          </router-link>

          <router-link to="/conte6">
            <button>Suivant</button>
          </router-link>
        </div>
      </transition>
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
      audio: null,
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
    this.audio.volume = 0.2
    this.audio.play()

    this.triggerTextAnimation()
    setTimeout(() => {
      this.showNextButton = true
    }, 5000)
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
  },
}
</script>

<style src="src/style.css"></style>
