/*Used the A.I. tool Chat GPT to genrate the more detailed Adventure Card function, allowing the user to click the adventure cards and be presented with additional information regarding the topic.*/

const adventures = [
    {
        name: 'Camelback Mountain',
        type: 'Hiking',
        difficulty: 'Hard',
        description: 'A steep and challenging hike that rewards visitors with incredible panoramic views of the Phoenix skyline. Best suited for experienced hikers.',
        image_sml: 'images/camelback_mountain_trail_card_sml.webp',
        image_full: 'images/camelback_mountain_trail_card_full.webp'
    },
    {
        name: 'Horseshoe Bend',
        type: 'Sightseeing',
        difficulty: 'Easy',
        description: 'A short walk leads to one of the most photographed views in Arizona, where the Colorado River curves dramatically through the canyon.',
        image_sml: 'images/horseshoe_bend_card_sml.webp',
        image_full: 'images/horseshoe_bend_card_full.webp'
    },
    {
        name: 'Havasu Falls',
        type: 'Hiking',
        difficulty: 'Moderate',
        description: 'A longer hike leads to stunning turquoise waterfalls deep within the canyon. A truly unforgettable destination.',
        image_sml: 'images/havasu_falls_card_sml.webp',
        image_full: 'images/havasu_falls_card_full.webp'
    },
    {
        name: 'Saguaro National Park',
        type: 'Hiking/Sightseeing',
        difficulty: 'Easy-Moderate',
        description: 'Walk among towering saguaro cacti and enjoy peaceful desert scenery with trails for all experience levels.',
        image_sml: 'images/saguaro_sunset_card_sml.webp',
        image_full: 'images/saguaro_sunset_card_full.webp'
    },
    {
        name: 'Sedona Red Rocks',
        type: 'Hiking/Sightseeing',
        difficulty: 'Easy-Moderate',
        description: 'Famous for its red rock formations and scenic beauty, Sedona offers trails for beginners and experienced hikers alike.',
        image_sml: 'images/sedona_red_rock_card_sml.webp',
        image_full: 'images/sedona_red_rock_card_full.webp'
    },
    {
        name: 'Flagstaff',
        type: 'Hiking/Camping',
        difficulty: 'Easy-Moderate',
        description: 'A cooler mountain escape with forests, trails, and great camping opportunities away from the desert heat.',
        image_sml: 'images/flag_staff_trail_card_sml.webp',
        image_full: 'images/flag_staff_trail_card_full.webp'
    },
    {
        name: 'Grand Canyon National Park',
        type: 'Sightseeing/Hiking',
        difficulty: 'Easy-Hard',
        description: 'One of the most famous natural wonders in the world, offering breathtaking views and unforgettable hiking experiences.',
        image_sml: 'images/grand_canyon_card_sml.webp',
        image_full: 'images/grand_canyon_card_full.webp'
    },
];

const adventureContainer = document.querySelector('#adventureContainer');
const modal = document.querySelector('#adventure-modal');
const modalContent = document.querySelector('.modal-content');
const closeButton = modal.querySelector('.close-viewer');
const form = document.querySelector('.searchAndFilterSection');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchAdventures = document.querySelector('#searchAdventures').value.toLowerCase();
    const filteredAdventures = adventures.filter(adventure =>
        adventure.name.toLowerCase().includes(searchAdventures) ||
        adventure.description.toLowerCase().includes(searchAdventures) ||
        adventure.type.toLowerCase().includes(searchAdventures) ||
        adventure.difficulty.toLowerCase().includes(searchAdventures)
    );
    renderAdventures(filteredAdventures);
});

function adventureTemplate(adventure) {
    return `
        <article class="adventureCards" tabindex="0" role="button">
            <img src="${adventure.image_sml}" alt="${adventure.name}">
            <h4 class="cardName">${adventure.name}</h4>
            <ul class="AdventureContent">
                <li class="adventureType">Type: ${adventure.type}</li>
                <li class="adventureDifficulty">Difficulty: ${adventure.difficulty}</li>
                <li class="adventureDescription">Description: ${adventure.description}</li>
            </ul>
        </article>
    `;
}

function renderAdventures(list) {
    if(list.length === 0) {
        adventureContainer.innerHTML = "<p>No adventures found.</p>";
        return;
    }

    const gallery = document.createElement('div');
    gallery.classList.add('adventureCardsGallery');

    list.forEach(adventure => {
        gallery.insertAdjacentHTML('beforeend', adventureTemplate(adventure));
    });

    adventureContainer.innerHTML = "";
    adventureContainer.appendChild(gallery);

    gallery.querySelectorAll('.adventureCards').forEach((card, index) => {
        card.addEventListener('click', () => {
            const adventure = list[index];
            modalContent.innerHTML = adventureDetailTemplate(adventure);
            modal.showModal();
        });
        card.addEventListener('keydown', e => {
            if(e.key === 'Enter')
            card.click();
        });                                     
    });
}

function adventureDetailTemplate(adventure) {
    return `
        <div class="modalCard">
            <img src="${adventure.image_full}" alt="${adventure.name}">
            <h2>${adventure.name}</h2>
            <p><strong>Type:</strong> ${adventure.type}</p>
            <p><strong>Difficulty:</strong> ${adventure.difficulty}</p>
            <p>${adventure.description}</p>
            <p><strong>Tips:</strong> Bring water, check weather, and start early!</p>
        </div>
    `;
}

closeButton.addEventListener('click', () => modal.close());
modal.addEventListener('click', e => {
    if (e.target === modal) modal.close();
});

init();
function init() {
    renderAdventures(adventures);
}

modal.addEventListener('keydown', e => {
    if(e.key === 'Escape') modal.close();
});