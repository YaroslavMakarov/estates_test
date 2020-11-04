export const getEstates = async () => {
    try {
        const fetchEstates = await fetch("https://demo9594962.mockable.io/estates", {mode: "no-cors"});
        const estates = fetchEstates.json();

        return estates;
    } catch(error) {
        console.log(error);

        return [];
    }
    
};