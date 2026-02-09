const DOGBREEDS = "https://dogapi.dog/api/v2/breeds";
const DOGFACTS = "https://dogapi.dog/api/v2/facts?limit=5";
const DOGGROUPS = "https://dogapi.dog/api/v2/groups";

async function getBreeds() {
    try {
        const response = await fetch(DOGBREEDS);
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }
        const result = await response.json();
        const list = document.getElementById("breed-list");
        
        result.data.forEach(breed => {
            console.log(breed.attributes.name);
            const li = document.createElement("li");
            li.textContent = breed.attributes.name;
            list.appendChild(li);
            li.addEventListener("click", () => {
                getBreedbyID(breed.id);
            });
        });
    } catch (error) {
        console.error(error.message);
    }
}

async function getBreedbyID(breedID) {
    try {
        const response = await fetch(`${DOGBREEDS}/${breedID}`);
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }
        const result = await response.json();
        const list = document.getElementById("breed-list");
        
        displayBreed(result.data);
    } catch (error) {
        console.error(error.message);
    }
}

function displayBreed(breed) {
    const container = document.getElementById("breed-details");
    const attributes = breed.attributes;

    container.innerHTML = `
        <h3>${attributes.name}</h3>

        <p><strong>Description:</strong>${attributes.description}</p>

        <ul>
           <li><strong>Life span:</strong> ${attributes.life.min}-${attributes.life.max} years</li>
           <li><strong>Male weight:</strong> ${attributes.male_weight.min}-${attributes.male_weight.max} kg</li>
           <li><strong>Female weight:</strong> ${attributes.female_weight.min}-${attributes.female_weight.max} kg</li>
           <li><strong>Hypoallergenic:</strong> ${attributes.hypoallergenic ? "Yes" : "No"}</li>
        </ul>
        `;
}

async function getFacts() {
    try {
        const response = await fetch(DOGFACTS);
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }
        const result = await response.json();
        const list = document.getElementById("fact-list");
        
        result.data.forEach(fact => {
            const li = document.createElement("li");
            li.textContent = fact.attributes.body;
            list.appendChild(li);
            });
    } catch (error) {
        console.error(error.message);
    }
}

async function getGroups() {
    try {
        const response = await fetch(DOGGROUPS);
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }
        const result = await response.json();
        const list = document.getElementById("group-list");
        
        result.data.forEach(group => {
            const li = document.createElement("li");
            li.textContent = group.attributes.name;
            list.appendChild(li);
            });
    } catch (error) {
        console.error(error.message);
    }
}
getFacts();
getGroups();
getBreeds();