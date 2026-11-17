/* ==========================================
   INFORMACIÓ DELS 15 MCS
========================================== */

const mcs = {
    chuty: {
        nom: "Chuty",
        pais: "Espanya",
        real: "Sergio Castro Gisbert",
        biografia: "Chuty és un dels freestylers més reconeguts d'Espanya. Destaca per la seva tècnica, les estructures complexes i la gran capacitat de resposta. Ha aconseguit nombrosos títols en competicions nacionals i internacionals."
    },

    aczino: {
        nom: "Aczino",
        pais: "Mèxic",
        real: "Mauricio Hernández González",
        biografia: "Aczino és un dels grans referents del freestyle internacional. És conegut per la seva agressivitat competitiva, el domini de l'escenari i la capacitat d'improvisar respostes contundents."
    },

    gazir: {
        nom: "Gazir",
        pais: "Espanya",
        real: "Gabriel Sánchez Poyal",
        biografia: "Gazir és un freestyler asturià que destaca pels seus jocs de paraules, dobles sentits i estructures elaborades. S'ha consolidat com un dels grans competidors de la seva generació."
    },

    wos: {
        nom: "Wos",
        pais: "Argentina",
        real: "Valentín Oliva",
        biografia: "Wos és un freestyler argentí que va guanyar la Final Internacional de Red Bull Batalla el 2018. Destaca per la seva energia, el flow i la connexió amb el públic. Posteriorment ha desenvolupat una carrera musical."
    },

    skone: {
        nom: "Skone",
        pais: "Espanya",
        real: "José Miguel Manzano Bazalo",
        biografia: "Skone és un freestyler malagueny reconegut pel seu humor, carisma i capacitat de resposta. Va guanyar la Final Internacional de Red Bull Batalla el 2016."
    },

    bnet: {
        nom: "Bnet",
        pais: "Espanya",
        real: "Javier Bonet González",
        biografia: "Bnet és un freestyler madrileny conegut pel seu estil natural i la seva musicalitat. Va guanyar la Final Internacional de Red Bull Batalla el 2019 i destaca per la seva improvisació fluida."
    },

    arkano: {
        nom: "Arkano",
        pais: "Espanya",
        real: "Guillermo Rodríguez Godínez",
        biografia: "Arkano és un freestyler alacantí que va guanyar la Final Internacional de Red Bull Batalla el 2015. És conegut per la seva rapidesa mental, creativitat i capacitat d'improvisació."
    },

    dtoke: {
        nom: "Dtoke",
        pais: "Argentina",
        real: "Gastón Sebastián Serrano",
        biografia: "Dtoke és un dels freestylers històrics de l'Argentina. Va guanyar la Final Internacional de Red Bull Batalla el 2013 i destaca per la seva actitud competitiva i contundència."
    },

    vallest: {
        nom: "Valles-T",
        pais: "Colòmbia",
        real: "Juan Camilo Ballesteros",
        biografia: "Valles-T és un dels principals representants del freestyle colombià. És reconegut per la seva energia, musicalitat, flow i gran presència a l'escenari."
    },

    teorema: {
        nom: "Teorema",
        pais: "Xile",
        real: "Mateo Elicura Cervera Machuca",
        biografia: "Teorema és un freestyler xilè reconegut pels seus dobles tempos, la capacitat d'improvisació i els canvis de ritme. Ha participat en competicions com FMS Chile i Red Bull Batalla."
    },

    jaze: {
        nom: "Jaze",
        pais: "Perú",
        real: "Juan Carlos Iwasaki La Puente",
        biografia: "Jaze és un freestyler peruà reconegut per la seva musicalitat, les rimes creatives i la capacitat d'adaptar-se a diferents ritmes. També ha desenvolupat una carrera musical."
    },

    zasko: {
        nom: "Zasko Master",
        pais: "Espanya",
        real: "Ginés Miñano Bernabéu",
        biografia: "Zasko Master és un freestyler alacantí reconegut per les seves mètriques complexes, les estructures elaborades i la seva gran tècnica de rima."
    },

    trueno: {
        nom: "Trueno",
        pais: "Argentina",
        real: "Mateo Palacios Corazzina",
        biografia: "Trueno és un freestyler argentí que va destacar en competicions com FMS Argentina i Red Bull Batalla. És conegut per la seva energia i el seu flow, i posteriorment s'ha consolidat en el món de la música."
    },

    metalinguistica: {
        nom: "Metalingüística",
        pais: "Xile",
        real: "Diego Alejandro Quilodrán Espejo",
        biografia: "Metalingüística és un freestyler xilè reconegut pel vocabulari, les estructures complexes i l'ús de recursos lingüístics en les seves improvisacions."
    },

    sweetpain: {
        nom: "Sweet Pain",
        pais: "Espanya",
        real: "José Manuel Rejón Rodríguez",
        biografia: "Sweet Pain és un freestyler espanyol conegut per les seves estructures complexes, les rimes elaborades i el seu estil expressiu."
    }
};


/* ==========================================
   BATALLES DESTACADES
========================================== */

/* Més endavant posarem els vídeos.
   Al camp video només caldrà posar
   l'identificador del vídeo de YouTube. */

const batalles = {
    chuty: { titol: "Chuty vs Bnet | FMS Espanya 2019", video: "mpZT9e8fcqc", inici: 1220 },
    aczino: { titol: "Aczino vs Gazir | FMS World Series 2025", video: "eJiZXriPYs0", inici: 856 },
    gazir: { titol: "Gazir vs Tirpa | Final FMS Internacional 2021", video: "-5Xn_4d7wNk", inici: 1075 },
    wos: { titol: "Wos vs Aczino | Final Internacional Red Bull 2018", video: "kJMPD1W2Pjs", inici: 695 },
    skone: { titol: "Skone vs Sweet Pain | FMS España 2022", video: "OFJlGDMixg8", inici: 1582 },
    bnet: { titol: "Bnet vs Zasko | FMS España 2020", video: "ZaqfaX_kMfs", inici: 905 },
    arkano: { titol: "Arkano vs Dtoke | Cuartos de Final Red Bull Internacional 2015", video: "cU7C7Fhz4us", inici: 85 },
    dtoke: { titol: "Dtoke vs Papo | FMS Argentina 2019", video: "b1y12Vsn2q4", inici: 1235 },
    vallest: { titol: "Valles-T vs Chang | Octavos de Final Red Bull Internacional 2019", video: "QMJw4EbEUnc", inici: 22 },
    teorema: { titol: "Teorema vs El Menor | Final Nacional Red Bull Chile 2024", video: "AC5m5vfFooI", inici: 361 },
    jaze: { titol: "Jaze vs Strike | FMS Perú 2020", video: "iwdEQY80y6s", inici: 979 },
    zasko: { titol: "Zasko vs Alek | FMS España 2024", video: "gD9PnCT19U8", inici: 392 },
    trueno: { titol: "Trueno vs Wolf | Final Nacional Red Bull Argentina 2019", video: "jcXMR_75gSs", inici: 560 },
    metalinguistica: { titol: "Metalingüística vs Lokillo | Red Bull Batalla 5 Vidas 2024", video: "z7TfdxGIsRE", inici: 2816 },
    sweetpain: { titol: "Sweet Pain vs Míster Ego | FMS España 2022", video: "enHjZCUbQqs", inici: 1411 }
};


/* ==========================================
   PALMARÈS DELS MCS
========================================== */

// Títols documentats. La llista es pot ampliar.
// Cada entrada té: competició i any o temporada.

const palmares = {
    chuty: {
        internacional: [
            ["Red Bull Batalla Internacional", "2023, 2024"],
            ["FMS Internacional", "2023"],
            ["FMS World Series", "2024"],
            ["Liga Venom Internacional", "2024"],
            ["Supremacía MC Internacional", "2018, 2021, 2022"],
            ["BDM Internacional", "2018, 2021"]
        ],
        nacional: [
            ["FMS Espanya", "2017, 2018, 2019, 2024, 2025"],
            ["Red Bull Batalla Espanya", "2013, 2017, 2023"],
            ["BDM Espanya", "2018"]
        ],
        altres: [
            ["USN World Summer Cup", "2021, 2022"],
            ["God Level Fest All Starts 2vs2 - World Edition", "2019 (amb Aczino), 2020 (amb Skone), 2022 (amb Marithea)"],
            ["God Level Fest Grand Slam - World Edition", "2021 (amb Gazir, Sara Socas i Skone)"],
            ["En Tres Dos Uno Battles (2vs2)", "2020 (amb BTA)"],
            ["FNE Espanya", "2019"],
            ["Big Battle", "2017"],
            ["Most Wanted Spain", "2017"],
            ["Double AA", "2016"],
            ["Gold Battle Espanya", "2011"]
        ]
    },

    aczino: {
        internacional: [
            ["Red Bull Batalla Internacional", "2017, 2021, 2022"],
            ["FMS Internacional", "2019, 2024, 2025"],
            ["BDM Internacional", "2015, 2017"],
            ["Supremacía MC Internacional", "2015, 2017, 2019"],
            ["Ghetto Dreams League Internacional", "2019, 2020"]
        ],
        nacional: [
            ["Red Bull Batalla Mèxic", "2014, 2015, 2017"],
            ["FMS Mèxic", "2019, 2021"],
            ["Red Bull Batalla Colòmbia", "2012"]
        ],
        altres: [
            ["God Level Fest", "2015, 2017"],
            ["God Level All Stars 2vs2 - World Edition", "2019 (amb Chuty)"],
            ["Avatar Freestyle", "2021"],
            ["Pangea", "2017"],
            ["Freestyle Competition", "2018"],
            ["Double AA Xile", "2018"]
        ]
    },

    gazir: {
        internacional: [
            ["Red Bull Batalla Internacional", "2024"],
            ["FMS Internacional", "2020"],
            ["FMS World Series", "2025"]
        ],
        nacional: [
            ["FMS Espanya", "2021, 2023"],
            ["FMS Colòmbia", "2025"],
            ["Red Bull Batalla Espanya", "2021, 2024"]
        ],
        altres: [
            ["God Level Fest Grand Slam - World Edition", "2021 (amb Chuty, Sara Socas i Skone)"],
            ["North Music", "2019"]
        ]
    },

    wos: {
        internacional: [
            ["Red Bull Batalla Internacional", "2018"]
        ],
        nacional: [
            ["FMS Argentina", "2018"],
            ["El Quinto Escalón", "2016"],
            ["Red Bull Batalla Argentina", "2017"]
        ],
        altres: [
            ["Double AA Argentina", "2018"],
            ["TFK", "2018"]
        ]
    },

    skone: {
        internacional: [
            ["Red Bull Batalla Internacional", "2016"]
        ],
        nacional: [
            ["Red Bull Batalla Espanya", "2016, 2020"]
        ],
        altres: [
            ["God Level Fest All Stars 2vs2 - World Edition", "2020 (amb Chuty), 2022 (amb Nekroos)"],
            ["God Level Fest", "2018"],
            ["Kingdom", "2019"]
        ]
    },

    bnet: {
        internacional: [
            ["Red Bull Batalla Internacional", "2019"]
        ],
        nacional: [
            ["FMS Espanya", "2020"],
            ["Red Bull Batalla Espanya", "2018, 2025"],
            ["Supremacía MC Espanya", "2018"]
        ],
        altres: []
    },

    arkano: {
        internacional: [
            ["Red Bull Batalla Internacional", "2015"]
        ],
        nacional: [
            ["Red Bull Batalla Espanya", "2009, 2015"]
        ],
        altres: [
            ["Hipnotik", "2008, 2014 (amb Blon, Dani i Giorgio MasPlatino)"]
        ]
    },

    dtoke: {
        internacional: [
            ["Red Bull Batalla Internacional", "2013"]
        ],
        nacional: [
            ["Red Bull Batalla Argentina", "2013, 2015"]
        ],
        altres: [
            ["El Quinto Escalón", "2017"]
        ]
    },

    vallest: {
        internacional: [],
        nacional: [
            ["Red Bull Batalla Colòmbia", "2016, 2018, 2024, 2025"],
            ["FMS Colòmbia", "2021, 2023"]
        ],
        altres: []
    },

    teorema: {
        internacional: [
            ["Sobredosis de Freestyle Internacional", "2021"],
            ["BDM Internacional", "2016"]
        ],
        nacional: [
            ["FMS Xile", "2019"],
            ["Red Bull Batalla Xile", "2019, 2025"],
            ["BDM Xile", "2016"]
        ],
        altres: [
            ["God Level Fest All Stars 3vs3 - World Edition", "2019 (amb Kaiser i Nitro)"],
            ["God Level Fest", "2018 (amb Kaiser i Nitro)"],
            ["Double AA", "2017"]
        ]
    },

    jaze: {
        internacional: [
            ["Sangre Inca Internacional", "2018"]
          
        ],
        nacional: [
            ["Red Bull Batalla Perú", "2018"],
            ["FMS Perú", "2020, 2021"]
        ],
        altres: [  
            ["God Level Fest All Stars 3vs3 - World Edition", "2019 (amb Nekroos i Choque)"]
        ]
    },

    zasko: {
        internacional: [],
        nacional: [
            ["Red Bull Batalla Espanya", "2019"]
        ],
        altres: [
            ["Gold Battle Espanya", "2015"]
        ]
    },

    trueno: {
        internacional: [
            ["Cruce de campeones Internacional", "2017"]
        ],
        nacional: [
            ["Red Bull Batalla Argentina", "2019"],
            ["FMS Argentina", "2019"]
        ],
        altres: []
    },

    metalinguistica: {
        internacional: [],
        nacional: [],
        altres: []
    },

    sweetpain: {
        internacional: [],
        nacional: [],
        altres: []
    }
};

/* ==========================================
   LOGOS REALS DELS PALMARESOS
   Desa cada logo real a img/logos/ amb el nom indicat.
========================================== */

const logosCompeticions = {
    "Red Bull Batalla Internacional": "img/logos/red-bull-batalla-internacional.png",
    "FMS Internacional": "img/logos/fms-internacional.png",
    "FMS World Series": "img/logos/fms-world-series.png",
    "Liga Venom Internacional": "img/logos/liga-venom-internacional.png",
    "Supremacía MC Internacional": "img/logos/supremacia-mc-internacional.png",
    "BDM Internacional": "img/logos/bdm-internacional.png",
    "FMS Espanya": "img/logos/fms-espanya.png",
    "Red Bull Batalla Espanya": "img/logos/red-bull-batalla-espanya.png",
    "BDM Espanya": "img/logos/bdm-espanya.png",
    "USN World Summer Cup": "img/logos/usn-world-summer-cup.png",
    "God Level Fest All Starts 2vs2 - World Edition": "img/logos/god-level-fest-all-starts-2vs2-world-edition.png",
    "God Level Fest Grand Slam - World Edition": "img/logos/god-level-fest-grand-slam-world-edition.png",
    "En Tres Dos Uno Battles (2vs2)": "img/logos/en-tres-dos-uno-battles-2vs2.png",
    "FNE Espanya": "img/logos/fne-espanya.png",
    "Big Battle": "img/logos/big-battle.png",
    "Most Wanted Spain": "img/logos/most-wanted-spain.png",
    "Double AA": "img/logos/double-aa.png",
    "Gold Battle Espanya": "img/logos/gold-battle-espanya.png",
    "Ghetto Dreams League Internacional": "img/logos/ghetto-dreams-league-internacional.png",
    "Red Bull Batalla Mèxic": "img/logos/red-bull-batalla-mexic.png",
    "FMS Mèxic": "img/logos/fms-mexic.png",
    "Red Bull Batalla Colòmbia": "img/logos/red-bull-batalla-colombia.png",
    "God Level Fest": "img/logos/god-level-fest.png",
    "God Level All Stars 2vs2": "img/logos/god-level-all-stars-2vs2.png",
    "God Level All Stars 2vs2 - World Edition": "img/logos/god-level-all-stars-2vs2.png",
    "Avatar Freestyle": "img/logos/avatar-freestyle.png",
    "Pangea": "img/logos/pangea.png",
    "Freestyle Competition": "img/logos/freestyle-competition.png",
    "Double AA Xile": "img/logos/double-aa-xile.png",
    "FMS Colòmbia": "img/logos/fms-colombia.png",
    "North Music": "img/logos/north-music.png",
    "FMS Argentina": "img/logos/fms-argentina.png",
    "El Quinto Escalón": "img/logos/el-quinto-escalon.png",
    "Red Bull Batalla Argentina": "img/logos/red-bull-batalla-argentina.png",
    "Double AA Argentina": "img/logos/double-aa-argentina.png",
    "TFK": "img/logos/tfk.png",
    "God Level Fest All Stars 2vs2 - World Edition": "img/logos/god-level-fest-all-stars-2vs2-world-edition.png",
    "Kingdom": "img/logos/kingdom.png",
    "Supremacía MC Espanya": "img/logos/supremacia-mc-espanya.png",
    "Hipnotik": "img/logos/hipnotik.png",
    "Sobredosis de Freestyle Internacional": "img/logos/sobredosis-de-freestyle-internacional.png",
    "FMS Xile": "img/logos/fms-xile.png",
    "Red Bull Batalla Xile": "img/logos/red-bull-batalla-xile.png",
    "BDM Xile": "img/logos/bdm-xile.png",
    "God Level Fest All Stars 3vs3 - World Edition": "img/logos/god-level-fest-all-stars-3vs3-world-edition.png",
    "Sangre Inca Internacional": "img/logos/sangre-inca-internacional.png",
    "Red Bull Batalla Perú": "img/logos/red-bull-batalla-peru.png",
    "FMS Perú": "img/logos/fms-peru.png",
    "Cruce de campeones Internacional": "img/logos/cruce-de-campeones-internacional.png",
};

function obtenirLogoCompeticio(nom) {
    return logosCompeticions[nom] || '';
}

/* ==========================================
   MOSTRAR PALMARÈS
========================================== */

function mostrarPalmares(id) {

    const contenidor = document.getElementById("palmares-contingut");
    contenidor.innerHTML = "";

    const dades = palmares[id];

    const categories = [
        ["internacional", "TÍTOLS INTERNACIONALS"],
        ["nacional", "TÍTOLS NACIONALS"],
        ["altres", "ALTRES COMPETICIONS"]
    ];

    categories.forEach(function(categoria) {

        const tipus = categoria[0];
        const titol = categoria[1];
        const titols = dades[tipus];

        // Crear apartat desplegable
        const desplegable = document.createElement("details");
        desplegable.className = "palmares-grup";

        const capcalera = document.createElement("summary");

        capcalera.textContent = titol + " (" + titols.length + ")";

        desplegable.appendChild(capcalera);

        const llista = document.createElement("div");
        llista.className = "palmares-llista";

        if (titols.length === 0) {

            const missatge = document.createElement("p");
            missatge.className = "palmares-buit";
            missatge.textContent =
                "No consten títols en aquesta categoria.";

            llista.appendChild(missatge);

        } else {

            titols.forEach(function(titolGuanyat) {

                const fila = document.createElement("div");
                fila.className = "palmares-fila";

                const identitat = document.createElement("div");
                identitat.className = "palmares-identitat";

                const logo = document.createElement("img");
                logo.className = "palmares-logo";
                logo.src = obtenirLogoCompeticio(titolGuanyat[0]);
                logo.alt = "Logotip de " + titolGuanyat[0];
                logo.loading = "lazy";
                if (!logo.src || logo.getAttribute("src") === "") {
                    logo.hidden = true;
                } else {
                    logo.onerror = function() {
                        this.hidden = true;
                    };
                }

                const competicio = document.createElement("span");
                competicio.className = "palmares-nom";
                competicio.textContent = titolGuanyat[0];

                const any = document.createElement("strong");
                any.textContent = titolGuanyat[1];

                identitat.appendChild(logo);
                identitat.appendChild(competicio);
                fila.appendChild(identitat);
                fila.appendChild(any);

                llista.appendChild(fila);

            });

        }

        desplegable.appendChild(llista);
        if (tipus === 'internacional' && titols.length > 0) {
            desplegable.open = true;
        }
        contenidor.appendChild(desplegable);

    });

}

/* ==========================================
   ELEMENTS DE LA FITXA
========================================== */

const modal = document.getElementById("modal-mc");
const botoTancar = document.getElementById("tancar-modal");
const fonsModal = document.querySelector(".modal-fons");

let botoAnterior;


/* ==========================================
   OBRIR FITXA
========================================== */

function obrirFitxa(id) {

    const mc = mcs[id];

    if (!mc) {
        return;
    }

    // Informació del MC
    const nomElement = document.getElementById("fitxa-nom");
    nomElement.textContent = mc.nom;
    nomElement.classList.toggle("nom-llarg", id === "metalinguistica");
    document.getElementById("fitxa-pais").textContent = mc.pais;
    document.getElementById("fitxa-real").textContent = mc.real;
    document.getElementById("fitxa-biografia").textContent = mc.biografia;

    // Fotografia ampliada
    const imatge = document.getElementById("fitxa-imatge");

    imatge.src = "img/" + id + ".jpg";
    imatge.alt = "Fotografia de " + mc.nom;
    document.getElementById('fitxa-nom').classList.toggle('nom-llarg', mc.nom.length >= 13);

    // Batalla destacada: primer mostrar la miniatura.
    const batalla = batalles[id];
    const titolBatalla = document.getElementById("batalla-titol");
    const video = document.getElementById("batalla-video");
    const portada = document.getElementById("batalla-portada");
    const accions = document.getElementById("batalla-accions");
    const enllacBatalla = document.getElementById("batalla-enllac");
    const notaBatalla = document.getElementById("batalla-nota");
    const botonetTornar = document.getElementById("batalla-reiniciar");

    // En tancar o canviar de MC aturem el reproductor anterior.
    video.removeAttribute("src");
    video.hidden = true;
    notaBatalla.hidden = true;
    botonetTornar.hidden = true;

    if (batalla && batalla.video) {
        const segonInici = Math.max(0, Math.floor(Number(batalla.inici) || 0));
        const identificador = batalla.video;
        titolBatalla.textContent = batalla.titol;
        const miniatura = document.getElementById("batalla-miniatura");
        miniatura.onerror = function() {
            // Si YouTube bloqueja la miniatura, fem servir la foto local del MC.
            this.onerror = null;
            this.src = "img/" + id + ".jpg";
        };
        miniatura.src = "https://img.youtube.com/vi/" + identificador + "/hqdefault.jpg";
        enllacBatalla.href = "https://www.youtube.com/watch?v=" + identificador +
            (segonInici ? "&t=" + segonInici + "s" : "");
        portada.hidden = false;
        accions.hidden = false;
    } else {
        portada.hidden = true;
        accions.hidden = true;
        titolBatalla.textContent = "Pròximament afegirem una batalla destacada.";
    }

    // Carregar el palmarès del MC seleccionat
    mostrarPalmares(id);

    // Mostrar la finestra
    botoAnterior = document.activeElement;
    modal.dataset.mcActual = id;
    modal.hidden = false;
    document.body.style.overflow = "hidden";

    botoTancar.focus();
}


/* ==========================================
   TANCAR FITXA
========================================== */

function tancarFitxa() {

    modal.hidden = true;
    document.body.style.overflow = "";

    // Aturar el vídeo
    document.getElementById("batalla-video").removeAttribute("src");

    // Tornar al botó seleccionat
    if (botoAnterior) {
        botoAnterior.focus();
    }
}


// Reproduir un vídeo només després que l'usuari cliqui el botó.
// El navegador transmet a YouTube l'origen de la pàgina quan ho permet.
document.getElementById("batalla-reproduir").addEventListener("click", function() {
    const id = document.querySelector(".modal-mc").dataset.mcActual;
    const batalla = batalles[id];
    if (!batalla || !batalla.video) return;

    const segonInici = Math.max(0, Math.floor(Number(batalla.inici) || 0));
    const video = document.getElementById("batalla-video");
    document.getElementById("batalla-portada").hidden = true;
    video.hidden = false;
    video.title = batalla.titol;
    video.src = "https://www.youtube.com/embed/" + batalla.video +
        "?start=" + segonInici + "&playsinline=1&rel=0";
    document.getElementById("batalla-nota").hidden = false;
    document.getElementById("batalla-reiniciar").hidden = false;
});

document.getElementById("batalla-reiniciar").addEventListener("click", function() {
    const video = document.getElementById("batalla-video");
    video.removeAttribute("src");
    video.hidden = true;
    document.getElementById("batalla-portada").hidden = false;
    document.getElementById("batalla-nota").hidden = true;
    this.hidden = true;
});

/* ==========================================
   ESDEVENIMENTS
========================================== */

// Clicar la fotografia d'un MC
document.querySelectorAll(".mc-galeria").forEach(function(boto) {

    boto.addEventListener("click", function() {
        obrirFitxa(boto.dataset.mc);
    });

});

// Tancar amb la X
botoTancar.addEventListener("click", tancarFitxa);

// Tancar clicant fora
fonsModal.addEventListener("click", tancarFitxa);

// Tancar amb Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && !modal.hidden) {
        tancarFitxa();
    }

});
/* ==========================================
   FILTRE DE LA GALERIA - MILLORA D'ACCESSIBILITAT
========================================== */
const cercadorMC = document.getElementById('mc-buscador');
if (cercadorMC) {
  const targetesMC = Array.from(document.querySelectorAll('.mc-galeria'));
  const comptadorMC = document.getElementById('mc-resultats');
  const galeriaBuida = document.getElementById('galeria-buit');
  const normalitzar = function(text) {
    return text.toLocaleLowerCase('ca').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  cercadorMC.addEventListener('input', function() {
    const text = normalitzar(cercadorMC.value.trim());
    let visibles = 0;
    targetesMC.forEach(function(targeta) {
      const coincideix = normalitzar(targeta.textContent).includes(text);
      targeta.hidden = !coincideix;
      if (coincideix) visibles++;
    });
    comptadorMC.textContent = visibles + ' / ' + targetesMC.length + ' MCs';
    galeriaBuida.hidden = visibles !== 0;
  });
}
