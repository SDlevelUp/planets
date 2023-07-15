export const menuItems = [
    { title: "Accueil", path: "/" },
    {
        title: "Galerie",
        path: "/",
        submenu: [
            { title: "Planetarypix", path: "/galerie" },
            { title: "Quiz", path: "/galerie/quiz" },
        ],
    },
    {
        title: "Astronomie",
        path: "/",
        submenu: [
            { title: "Astronomie", path: "/astronomie" },
            { title: "Systeme solaire", path: "/astronomie/systemesolaire" },
        ],
    },
    { title: "Contact", path: "/contact" },
];