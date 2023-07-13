export const menuItems = [
    { title: "Accueil", path: "/" },
    {
        title: "Galerie",
        path: "/galerie",
        submenu: [
            { title: "PlanetaryPix", path: "/galerie" },
            { title: "Sous-menu 2", path: "/galerie/sous-menu-2" },
            { title: "Sous-menu 3", path: "/galerie/sous-menu-3" },
        ],
    },
    { title: "Astronomie", path: "/astronomie" },
    { title: "Contact", path: "/contact" },
];