const pokemon = [
    {
        name: "Charmander",
        type: "fire",
        maxHp: 100,
        moves: ["Scratch", "Ember", "Flamethrower"]
    },
    {
        name: "Squirtle",
        type: "water",
        maxHp: 110,
        moves: ["Tackle", "Water Gun", "Bite"]
    },
    {
        name: "Pikachu",
        type: "electric",
        maxHp: 95,
        moves: ["Quick Attack", "Thunder Shock", "Thunderbolt"]
    },
    {
        name: "Bulbasaur",
        type: "grass",
        maxHp: 105,
        moves: ["Tackle", "Vine Whip", "Razor Leaf"]
    },
    {
        name: "Torchic",
        type: "fire",
        maxHp: 98,
        moves: ["Tackle", "Ember", "Quick Attack"]
    }
];

const container = document.getElementById("pokemon-container");

pokemon.forEach(function (pokemon) {

    const card = document.createElement("div");

    card.classList.add("pokemon-card", pokemon.type);

    const name = document.createElement("h2");
    name.textContent = pokemon.name;

    const type = document.createElement("p");
    type.textContent = "Type: " + pokemon.type;

    const hp = document.createElement("p");
    hp.textContent = "Max HP: " + pokemon.maxHp;

    const movesHeading = document.createElement("h3");
    movesHeading.textContent = "Moves:";

    const movesList = document.createElement("ul");

    pokemon.moves.forEach(function (move) {
        const listItem = document.createElement("li");
        listItem.textContent = move;

        movesList.appendChild(listItem);
    });

    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(hp);
    card.appendChild(movesHeading);
    card.appendChild(movesList);

    container.appendChild(card);
});