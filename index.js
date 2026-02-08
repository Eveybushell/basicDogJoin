const DOGSITE = "https://dogapi.dog/api/v2/breeds";

async function getBreeds() {
    try {
        const response = await fetch(DOGSITE);
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}