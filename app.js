console.log("App loaded ✅");
 
// Starter places
const defaultPlaces = [
  { name: "Vete-Katten", category: "Fika", area: "Kungsgatan", desc: "Classic Swedish pastries & cakes.", votes: 45 },
  { name: "Café Saturnus", category: "Fika", area: "Östermalm", desc: "Famous for giant cinnamon buns.", votes: 38 },
  { name: "Kaffebar", category: "Fika", area: "Södermalm", desc: "Cozy indie café, known from film 'Fucking Åmål'.", votes: 29 },
 
  { name: "Pelikan", category: "Restaurant", area: "Södermalm", desc: "Traditional Swedish husmanskost.", votes: 50 },
  { name: "Oaxen Slip", category: "Restaurant", area: "Djurgården", desc: "Modern Nordic cuisine in a relaxed atmosphere.", votes: 42 },
  { name: "Växthuset", category: "Restaurant", area: "Hornstull", desc: "Creative vegan fine dining.", votes: 33 },
  { name: "Frantzén", category: "Restaurant", area: "Norrmalm", desc: "Sweden’s only 3-star Michelin restaurant.", votes: 55 },
  { name: "Meatballs for the People", category: "Restaurant", area: "Södermalm", desc: "Iconic Swedish meatballs with a modern twist.", votes: 47 },
 
  { name: "Nystekt Strömming", category: "Street Food", area: "Slussen", desc: "Classic fried herring stand.", votes: 36 },
  { name: "K25", category: "Street Food", area: "Kungsgatan", desc: "Food court with Asian, Mexican & more.", votes: 28 }
];
 
let places = [...defaultPlaces];
 
// DOM references
const els = {
  grid: document.getElementById("cards"),
  search: document.getElementById("search"),
  cat: document.getElementById("categoryFilter"),
  sort: document.getElementById("sortBy"),
  addForm: document.getElementById("addForm"),
  name: document.getElementById("placeName"),
  category: document.getElementById("placeCategory"),
  area: document.getElementById("placeArea"),
  desc: document.getElementById("placeDesc")
};
 
// Render cards
function render() {
  console.log("Rendering list…");
  let list = [...places];
  const q = els.search.value.toLowerCase();
  const cat = els.cat.value;
  const sortBy = els.sort.value;
 
  if (q) {
    list = list.filter(x =>
      x.name.toLowerCase().includes(q) ||
      x.area.toLowerCase().includes(q) ||
      x.desc.toLowerCase().includes(q)
    );
  }
  if (cat !== "all") {
    list = list.filter(x => x.category === cat);
  }
  if (sortBy === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name, "en"));
  } else if (sortBy === "top") {
    list.sort((a, b) => b.votes - a.votes);
  }
 
  els.grid.innerHTML = "";
  const tmpl = document.getElementById("cardTemplate");
 
  if (list.length === 0) {
    els.grid.innerHTML = "<p>No results found.</p>";
    return;
  }
 
  for (const x of list) {
    const node = tmpl.content.cloneNode(true);
    node.querySelector(".title").textContent = x.name;
    node.querySelector(".area").textContent = `${x.area} · ${x.category}`;
    node.querySelector(".desc").textContent = x.desc;
    node.querySelector(".votes").textContent = x.votes;
 
    node.querySelector(".vote-btn").addEventListener("click", () => {
      x.votes++;
      render();
    });
 
    els.grid.appendChild(node);
  }
}
 
// Add form
els.addForm.addEventListener("submit", e => {
  e.preventDefault();
  const newPlace = {
    name: els.name.value,
    category: els.category.value,
    area: els.area.value,
    desc: els.desc.value,
    votes: 0
  };
  places.push(newPlace);
  render();
  els.addForm.reset();
});
 
// Event listeners
els.search.addEventListener("input", render);
els.cat.addEventListener("change", render);
els.sort.addEventListener("change", render);
 
// Run after DOM loaded
window.addEventListener("DOMContentLoaded", render);