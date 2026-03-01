const character = {
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    
    attacked: function () {
        if (this.health === 0) return;

        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert("Character Died")
        }
        renderCharacter();
    },
    levelUp: function () {
        this.level += 1;
        renderCharacter();
    }
                
};

function renderCharacter() {
    document.querySelector("#class").textContent = "Class: " + character.class;
    document.querySelector("#level").textContent = "Level: " + character.level;
    document.querySelector("#health").textContent = "Health: " + character.health;
}

renderCharacter();

document.querySelector("#attacked").addEventListener("click", function () {
    character.attacked();
});

document.querySelector("#levelUp").addEventListener("click", function () {
    character.levelUp();
});