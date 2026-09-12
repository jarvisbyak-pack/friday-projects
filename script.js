const starCatalog = [
    { name: "Batturan-Alpha", distance: "4.2 ly", type: "G-Type", description: "The central star of the Batturan system." },
    { name: "Nebula-X9", distance: "12.5 ly", type: "Blue Giant", description: "A highly energetic star with active flares." },
    { name: "Void-Sentinel", distance: "150 ly", type: "White Dwarf", description: "Ancient, cold remnant of a dying sun." }
];

const listElement = document.getElementById('list');
const detailsElement = document.getElementById('details');

function renderList() {
    starCatalog.forEach((star, index) => {
        const li = document.createElement('li');
        li.textContent = star.name;
        li.onclick = () => showDetails(index);
        listElement.appendChild(li);
    });
}

function showDetails(index) {
    const star = starCatalog[index];
    detailsElement.innerHTML = `
        <h3>${star.name}</h3>
        <p><strong>Distance:</strong> ${star.distance}</p>
        <p><strong>Type:</strong> ${star.type}</p>
        <p>${star.description}</p>
    `;
}

renderList();