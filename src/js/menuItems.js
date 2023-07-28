export const menuItems = [
    { title: "Accueil", path: "/" },
    { title: "Galerie", path: "/galerie" },
    {
        title: "Astronomie",
        path: "/",
        submenu: [
            { title: "L'Astronium", path: "/astronomie" },
            { title: "Videos", path: "/astronomie/videos" },
            { title: "Quiz", path: "/astronomie/quiz" },
        ],
    },
    { title: "Contact", path: "/contact" },
];