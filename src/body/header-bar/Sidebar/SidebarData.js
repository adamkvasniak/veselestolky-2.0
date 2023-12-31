
import prkenko from "./prkenkoo.png"
import home from "./home.png"
import dome from "./dome.png"
import zahon from "./zahon_ikonka.png"
import stol from "./stolIkona.png"
import hojda from "./hojdacka_ikona.png"
import info from "./kontakt.png"

export const SidebarData = [
    {
        title: "Domov",
        path: "/",
        icon: home,
        cName: 'nav-text'
    },
    {
        title: "Geodomy",
        path: "/geodomy",
        icon: dome,
        cName: 'nav-text'
    },
    {
        title: "Vyvyšené záhony",
        path: "/zahony",
        icon: zahon,
        cName: 'nav-text'
    },
    {
        title: "Interiér",
        path: "/interier",
        icon: stol,
        cName: 'nav-text'
    },
    {
        title: "Exteriér",
        path: "/exterier",
        icon: hojda,
        cName: 'nav-text'
    },
    {
        title: "Drevené doplnky",
        path: "/doplnky",
        icon: prkenko,
        cName: 'nav-text'
    },
    {
        title: "KONTAKT",
        path: "/kontakt",
        icon: info,
        cName: 'nav-text'
    },
]