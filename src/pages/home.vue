<template>
  <div class="home">
    <div class="content-wrapper">
      <div class="header-section">
        <h1 class="main-title">Bienvenue dans l'univers des Contes de Grimm</h1>
        <p class="subtitle">
          Plongez dans un monde magique peuplé de rois, princesses, forêts sombres et créatures fantastiques.
          Cliquez ci-dessous pour commencer votre voyage à travers les récits intemporels.
        </p>
      </div>

      <div class="buttons-section">
        <router-link to="/conte20" class="featured-link">
          <button class="featured-button main-button">
            Le Festin céleste
          </button>
        </router-link>

        <router-link to="/plan" class="featured-link">
          <button class="featured-button secondary-button">
            Plan du conte
          </button>
        </router-link>
      </div>
      
      <div class="divider"></div>

      <h2 class="section-title">Les Légendes du Grime, bientôt disponibles</h2>

      <div class="artists-grid">
        <button class="artist-button" v-for="(artist, i) in artists" :key="i">
          <div class="artist-info">
            <strong>{{ artist.name }}</strong>
            <span class="artist-desc">{{ artist.desc }}</span>
          </div>
        </button>
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
        { name: "Blanche-Neige" },
        { name: "Hansel et Gretel" },
        { name: "Cendrillon" },
        { name: "Le Petit Chaperon rouge" },
        { name: "Raiponce" },
        { name: "La Belle au bois dormant" },
        { name: "Les Musiciens de Brême" },
        { name: "Le Loup et les sept chevreaux" },
        { name: "Le Roi Grenouille (ou Henri de Fer)" },
        { name: "Le Pêcheur et sa femme" },
        { name: "Les Six Cygnes" },
        { name: "Le Vaillant Petit Tailleur" },
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

.buttons-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 2.5rem 0 3.5rem;
}

.featured-link {
  text-decoration: none;
}

.featured-button {
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(197, 173, 106, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-button {
  font-size: 1.6rem;
  padding: 1.5rem 3.5rem;
  background: linear-gradient(135deg, #d4af37 0%, #c5ad6a 100%);
}

.main-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(197, 173, 106, 0.6);
  background: linear-gradient(135deg, #e0ba3f 0%, #d4af37 100%);
}

.secondary-button {
  font-size: 1.1rem;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #c5ad6a 0%, #b89c56 100%);
  opacity: 0.95;
}

.secondary-button:hover {
  transform: translateY(-3px);
  background: linear-gradient(135deg, #d4af37 0%, #c5ad6a 100%);
  box-shadow: 0 8px 25px rgba(197, 173, 106, 0.5);
}

.divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #c5ad6a, transparent);
  margin: 3rem auto;
  max-width: 600px;
}

.section-title {
  font-size: 2rem;
  color: #5a4a2f;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  animation: fadeIn 1s ease-out 0.3s both;
}

.artist-button {
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(197, 173, 106, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
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
  .main-button { font-size: 1.3rem; padding: 1.2rem 2.5rem; }
  .secondary-button { font-size: 1rem; padding: 0.8rem 1.8rem; }
  .artists-grid { grid-template-columns: 1fr; }
}
</style>
