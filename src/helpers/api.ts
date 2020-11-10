export const getEstates = async () => {
    try {
        const fetchEstates = await fetch('http://demo9594962.mockable.io/estates');

        return await fetchEstates.json();
    } catch(error) {
        console.log(error);

        return [];
    }
    
};