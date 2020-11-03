export const getEstates = async () => {
    const fetchEstates = await fetch("http://demo9594962.mockable.io/estates");
    const estates = await fetchEstates.json();

    return estates;
};