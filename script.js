const stars = [
    { name: "Battura Prime", type: "G-Type", dist: "12 ly" },
    { name: "Xylos-9", type: "Neutron", dist: "450 ly" },
    { name: "Nebula Core", type: "Blue Giant", dist: "1200 ly" }
];

const listEl = document.getElementById('star-list');
const detailEl = document.getElementById('star-details');

stars.forEach(star => {
    const li = document.createElement('li');
    li.textContent = star.name;
    li.onclick = () => {
        detailEl.innerHTML = `<h2>${star.name}</h2><p>Type: ${star.type}</p><p>Distance: ${star.dist}</p>`;
    };
    listEl.appendChild(li);
});