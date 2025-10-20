export default {
  name: "Conte",
  data() {
    return {
      images: [
        new URL("../img/S1-p1.png", import.meta.url).href,
        new URL("../img/S1-p2.png", import.meta.url).href,
        new URL("../img/S1-p3.png", import.meta.url).href,
      ],
      currentIndex: 0,
      intervalId: null,
      animateText: false,
      showNextButton: false,
      music: new URL("../assets/audio/just-relax-11157.mp3", import.meta.url).href,
      audio: null,
      isMusicPlaying: true, // 🎵 État de la musique
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || null
    }
  },
  mounted() {
    // Lance la musique
    this.audio = new Audio(this.music)
    this.audio.loop = true
    this.audio.play()

    // Change d’image toutes les 0.8s
    this.intervalId = setInterval(() => {
      this.nextImage()
    }, 800)

    // Affiche le bouton suivant après 5s
    setTimeout(() => {
      this.showNextButton = true
    }, 5000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
    window.speechSynthesis.cancel()
    if (this.audio) {
      this.audio.pause()
      this.audio = null
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
      this.triggerTextAnimation()
      this.showNextButton = false
      setTimeout(() => {
        this.showNextButton = true
      }, 5000)
    },
    triggerTextAnimation() {
      this.animateText = false
      void this.$nextTick(() => {
        this.animateText = true
      })
    },
    speakText() {
      const text = this.$refs.conteText.innerText
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "fr-FR"
      utterance.rate = 1
      utterance.pitch = 1
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(utterance)
    },
    toggleMusic() {
      if (!this.audio) return
      if (this.isMusicPlaying) {
        this.audio.pause()
      } else {
        this.audio.play()
      }
      this.isMusicPlaying = !this.isMusicPlaying
    }
  }
}
