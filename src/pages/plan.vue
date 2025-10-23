<template>
  <div class="home">
    <div class="content-wrapper">
      <div class="header-section">
        <h1 class="main-title">Plan du Conte — Le Festin Céleste</h1>
        <p class="subtitle">
          Vous pouvez choisir la partie que vous souhaitez explorer parmi les 20 scènes.
        </p>

        <router-link to="/" class="back-button">Retour à l'accueil</router-link>

      </div>

      <div class="divider"></div>

      <div class="artists-grid">
        <router-link
          v-for="(artist, i) in artists"
          :key="i"
          :to="artist.link"
          class="artist-button"
        >
          <div class="artist-info">
            <strong>{{ artist.name }}</strong>
            <span class="artist-desc">{{ artist.desc }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      artists: [
        { name: "Scène 1", desc: "Le pauvre petit paysan écouta un jour à l’église le prêtre dire : « Pour entrer au paradis, il faut marcher droit. »", link: "/conte" },
        { name: "Scène 2", desc: "Il se mit en route, marchant toujours droit devant lui, par monts et par vaux.", link: "/conte1" },
        { name: "Scène 3", desc: "Son chemin le mena dans une grande ville.", link: "/conte2" },
        { name: "Scène 4", desc: "Jusqu’à une belle église. En voyant la magnificence de celle-ci, il crut être arrivé au paradis..", link: "/conte3" },
        { name: "Scène 5", desc: "Quand l’office se termina, le sacristain voulut le faire sortir.", link: "/conte4" },  
        { name: "Scène 6", desc: "Mais l’enfant répondit : « Non, je reste ici, je suis enfin au ciel. »", link: "/conte5" },
        { name: "Scène 7", desc: "Le prêtre demanda alors à l’enfant s’il voulait travailler ; il accepta, mais refusa de quitter l’église.", link: "/conte6" },
        { name: "Scène 8", desc: "Voyant une statue de l’Enfant Jésus, il pensa que c’était Dieu.", link: "/conte7" },
        { name: "Scène 9", desc: "Ému, il dit : « Comme tu es maigre, ô mon Dieu ! On ne te donne donc pas à manger ? »", link: "/conte8" },
        { name: "Scène 10", desc: "Une voix lui dit alors : « Donne à ceux qui ont faim, et tu me nourriras. »", link: "/conte10" },
        { name: "Scène 11", desc: "À la porte de l’église, une vieille femme mendiait. L’enfant lui donna son pain.", link: "/conte11" },
        { name: "Scène 12", desc: "La statue lui sembla sourire. Chaque jour, il continua à partager son pain.", link: "/conte12" },
        { name: "Scène 13", desc: "Un jour, il tomba malade et ne put sortir de son lit pendant huit jours.", link: "/conte13" },  
        { name: "Scène 14", desc: "Dès qu’il fut rétabli, il retourna prier devant l’Enfant Jésus.", link: "/conte14" },
        { name: "Scène 15", desc: "Il dit : « Mon Dieu, pardonne-moi de ne pas t’avoir nourri, j’étais malade. »", link: "/conte15" },
        { name: "Scène 16", desc: "Le Seigneur répondit : « J’ai vu ta bonne volonté. Dimanche prochain, tu viendras à mon festin céleste. »", link: "/conte16" },
        { name: "Scène 17", desc: "Le curé comprit qu’il fallait préparer l’enfant à recevoir la communion.", link: "/conte17" },
        { name: "Scène 18", desc: "Le dimanche, au moment de communier, l’enfant mourut et entra vraiment au festin céleste.", link: "/conte18" },
        { name: "Scène 19", desc: "Les crédits", link: "/conte19" },
        { name: "Scène 20", desc: "Page de couverture", link: "/conte20" },


      ],
    };
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f1e8 0%, #e8dcc4 100%);
  padding: 3rem 1rem;
  position: relative;
}

.home::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(197, 173, 106, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(214, 212, 206, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.header-section {
  margin-bottom: 3rem;
  text-align: center;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.main-title {
  font-size: 2.8rem;
  color: #5a4a2f;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.2rem;
  color: #6b5d4a;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

.divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #c5ad6a, transparent);
  margin: 3rem auto;
  max-width: 600px;
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  animation: fadeIn 1s ease-out 0.3s both;
}

.artist-button {
  display: block;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(197, 173, 106, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  text-decoration: none;
}

.artist-button:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: #c5ad6a;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.artist-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.artist-info strong {
  font-size: 1.1rem;
  color: #5a4a2f;
  font-weight: 600;
}

.artist-desc {
  font-size: 0.9rem;
  color: #8b7355;
  font-style: italic;
}

@media (max-width: 768px) {
  .main-title { font-size: 2rem; }
  .subtitle { font-size: 1rem; }
  .artists-grid { grid-template-columns: 1fr; }
}
</style>
