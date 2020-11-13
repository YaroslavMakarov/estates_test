export const getEstates = async () => {
    try {
        const fetchEstates = await fetch('http://demo9594962.mockable.io/estates');
        const estates = await fetchEstates.json();

        return await fetchEstates.json();
    } catch(error) {

        return [];
    }
    
};