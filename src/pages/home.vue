<template>
  <div class="home">
    <h1>Bienvenue dans l’univers des Contes de Grimm</h1>
    <p>
      Plongez dans un monde magique peuplé de rois, princesses, forêts sombres et créatures fantastiques.
      Cliquez ci-dessous pour commencer votre voyage à travers les récits intemporels.
    </p>

    <router-link to="/conte">
      <button class="big-button">Le Festin céleste</button>
    </router-link>
    
    <div class="artists">
      <div><button class="big-button">Wiley – souvent appelé The Godfather of Grime</button></div>
      <div><button class="big-button">Dizzee Rascal – l’un des premiers à populariser le grime à l’international</button></div>
      <div><button class="big-button">Skepta – membre du collectif Boy Better Know (BBK)</button></div>
      <div><button class="big-button">Jme – frère de Skepta, MC et producteur</button></div>
      <div><button class="big-button">Kano – artiste respecté pour ses lyrics et sa longévité</button></div>
      <div><button class="big-button">Lethal Bizzle – connu pour ses hits énergiques (Pow!, Fester Skank)</button></div>
      <div><button class="big-button">Ghetts – MC technique et charismatique</button></div>
      <div><button class="big-button">Trim – ancien membre de Roll Deep, très expérimental</button></div>
      <div><button class="big-button">Ruff Sqwad – collectif influent du début des années 2000</button></div>
      <div><button class="big-button">D Double E – flow unique, icône underground</button></div>
      <div><button class="big-button">P Money – reconnu pour ses clashes et ses freestyles</button></div>
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
  text-align: center;
  padding: 2rem;
  position: relative; /* permet aux clics de passer correctement */
  z-index: 1;
}

.big-button {
  font-size: 1.2rem;
  padding: 1rem 2rem;
  margin: 0.5rem;
  border-radius: 10px;
  background-color: #d6d4ce;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;
  pointer-events: auto; /* garantit que le bouton capte les clics */
  position: relative;
  z-index: 2;
}

.big-button:hover {
  background-color: #c5ad6a;
  transform: scale(1.05);
}

.artists {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: auto; /* autorise les clics */
  position: relative;
  z-index: 2;
}
</style>
