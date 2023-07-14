export const menuItems = [
    { title: "Accueil", path: "/" },
    {
        title: "Galerie",
        path: "/galerie",
        submenu: [
            { title: "PlanetaryPix", path: "/galerie" },
            { title: "Systeme solaire", path: "/galerie/systemesolaire" },
            { title: "Quiz", path: "/galerie/quiz" },
        ],
    },
    { title: "Astronomie", path: "/astronomie" },
    { title: "Contact", path: "/contact" },
];