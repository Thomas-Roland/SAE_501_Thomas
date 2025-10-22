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

      <router-link to="/conte" class="featured-link">
        <button class="featured-button">
          Le Festin céleste
        </button>
      </router-link>
      
      <div class="divider"></div>

      <h2 class="section-title">Les Légendes du Grime</h2>
      
      <div class="artists-grid">
        <button class="artist-button">
          <div class="artist-info">
            <strong>Wiley</strong>
            <span class="artist-desc">The Godfather of Grime</span>
          </div>
        </button>
        
        <button class="artist-button">
          <div class="artist-info">
            <strong>Dizzee Rascal</strong>
            <span class="artist-desc">Pioneer international du grime</span>
          </div>
        </button>
        
        <button class="artist-button">
          <div class="artist-info">
            <strong>Skepta</strong>
            <span class="artist-desc">Boy Better Know (BBK)</span>
          </div>
        </button>
        
        <button class="artist-button">
          <div class="artist-info">
            <strong>Jme</strong>
            <span class="artist-desc">MC et producteur</span>
          </div>
        </button>
        
        <button class="artist-button">
          <div class="artist-info">
            <strong>Kano</strong>
            <span class="artist-desc">Lyrics et longévité</span>
          </div>
        </button>
        
        <button class="artist-button">
          <div class="artist-info">
            <strong>Lethal Bizzle</strong>
            <span class="artist-desc">Pow!, Fester Skank</span>
          </div>
        </button>
        
        <button class="artist-button">
          <div class="artist-info">
            <strong>Ghetts</strong>
            <span class="artist-desc">Technique et charisme</span>
          </div>
        </button>
        
        <button class="artist-button">
          <div class="artist-info">
            <strong>Trim</strong>
            <span class="artist-desc">Roll Deep, expérimental</span>
          </div>
        </button>
        
        <button class="artist-button">
          <div class="artist-info">
            <strong>Ruff Sqwad</strong>
            <span class="artist-desc">Collectif influent 2000s</span>
          </div>
        </button>
        
        <button class="artist-button">
          <div class="artist-info">
            <strong>D Double E</strong>
            <span class="artist-desc">Flow unique, icône underground</span>
          </div>
        </button>
        
        <button class="artist-button">
          <div class="artist-info">
            <strong>P Money</strong>
            <span class="artist-desc">Clashes et freestyles</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-title {
  font-size: 2.8rem;
  color: #5a4a2f;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.3;
}

.subtitle {
  font-size: 1.2rem;
  color: #6b5d4a;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

.featured-link {
  text-decoration: none;
  display: inline-block;
  margin: 2rem 0;
}

.featured-button {
  font-size: 1.5rem;
  padding: 1.5rem 3rem;
  border-radius: 15px;
  background: linear-gradient(135deg, #d4af37 0%, #c5ad6a 100%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(197, 173, 106, 0.4);
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.featured-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(197, 173, 106, 0.6);
  background: linear-gradient(135deg, #e0ba3f 0%, #d4af37 100%);
}

.button-icon {
  font-size: 1.3rem;
  animation: sparkle 2s infinite;
}

@keyframes sparkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
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
  font-weight: 600;
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  .main-title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .featured-button {
    font-size: 1.2rem;
    padding: 1.2rem 2rem;
  }
  
  .artists-grid {
    grid-template-columns: 1fr;
  }
}
</style>