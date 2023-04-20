//declare variables

let body = document.querySelector('body');
let btn_synego = document.querySelector('#p-btn-synego');
let btn_eurodesign70 = document.querySelector('#p-btn-eurodesign70');
let btn_synegoslide = document.querySelector('#p-btn-synegoslide');
let btn_ecolux = document.querySelector('#p-btn-ecolux');
let btn_700 = document.querySelector('#p-btn-700');
let btn_400 = document.querySelector('#p-btn-400');
let popup = document.querySelector('#p-productsctwindowdoor-profiletype-popup');
let btnexit = document.querySelector('#p-productsctwindowdoor-profiletype-popup-exitbtn');
let popup_img = document.querySelector('.p-productsctwindowdoor-profiletype-popup-img');
let popup_title = document.querySelector('.p-productsctwindowdoor-profiletype-popup-title');
let popup_txt = document.querySelector('.p-productsctwindowdoor-profiletype-popup-txt');
let popup_specs = document.querySelector('.p-productsctwindowdoor-profiletype-popup-specs');

//Event Listeners

btnexit.addEventListener('click', exit);

document.addEventListener('keydown', (e) => {
    let key = e.key;
    if (key == 27 || key == "Escape" || key == "Esc") {
        exit();
    }
});

btn_synego.addEventListener('click', () => {
    setStyles();
    popup_img.style.backgroundImage = "url(imgsite/imgsite-produse/IMG/p-rehau-synego.jpg)";
    popup_title.innerHTML = "Rehau Synego";
    popup_txt.innerHTML = "Sistemul de profile SYNEGO asigură o temperatură plăcută, un nivel ridicat de confort şi siguranţă pentru locuinţa D-voastră: în comparaţie cu ferestrele standard actuale, SYNEGO convinge printr-un nivel de izolare termică cu până la 50% mai mare*. Astfel, veţi reduce în mod semnificativ costurile cu încălzirea locuinţei şi veţi experimenta o nouă senzaţie de bine, la care nu veţi mai dori să renunţaţi niciodată.";
    popup_specs.innerHTML = "- Economisirea energiei datorită nivelului de izolare termică ridicat; <br> - Zgomot redus cu cel mai ridicat nivel de izolare fonică; <br> - Nivel sporit de siguranţă datorită protecţiei antiefracţie individuale pentru locuinţa D-voastră; <br> Design creativ al ferestrelor,  cu cele peste 220 de culori şi cu o multitudine de  forme; <br> Ferestre curate, strălucitoare cu suprafeţe perfect netede datorită formulei unice High Definition Finishing; <br> Impact redus asupra mediului înconjurător datorită procesului de fabricaţie ce protejează resursele naturale;";
});

btn_eurodesign70.addEventListener('click', () => {
    setStyles();
    popup_img.style.backgroundImage = "url(imgsite/imgsite-produse/IMG/p-rehau-euro-design-70.jpg)";
    popup_title.innerHTML = "Rehau Euro-Design 70";
    popup_txt.innerHTML = "Euro‑Design 70 sunt profile de fereastră pentru un buget redus, care asigură foarte multă lumină. Datorită construcției deosebit de înguste, rămâne mai mult loc pentru sticlă. Iar acest lucru îmbunătățește starea de spirit. Deoarece: Panoramele deosebite și razele soarelui au o contribuție importantă la starea dumneavoastră de bine.";
    popup_specs.innerHTML = "- Încăperi pline de lumină naturală; <br> - Gamă vastă de culori și de forme pentru dorințele dumneavoastră individuale; <br> - Siguranță în interiorul celor 4 pereți ai căminului datorită protecției extraordinare împotriva efracției; <br> - Protecție fonică excelentă, pentru un somn liniștit; <br> - Mai mult confort pentru locuit datorită izolării termice perfecte; <br> - Curățenie simplă datorită finisajului HD (HDF)";
});

btn_synegoslide.addEventListener('click', () => {
    setStyles();
    popup_img.style.backgroundImage = "url(imgsite/imgsite-produse/IMG/p-rehau-slide-synego.jpg)";
    popup_title.innerHTML = "Rehau Synego Slide";
    popup_txt.innerHTML = "În sfârșit există uși glisante care pot fi deschise și închise cu puțin efort și cu manevrare simplă. Această variantă de fereastră permite cea mai mare flexibilitate la amenajarea spațiului de locuit. Descoperiți posibilități arhitecturale moderne și concepte inovatoare de spațiu. Ferestrele și ușile glisante din sistemul de profil SYNEGO SLIDE vă vor surprinde.";
    popup_specs.innerHTML = "";

});

btn_ecolux.addEventListener('click', () => {
    setStyles();
    popup_img.style.backgroundImage = "url(imgsite/imgsite-produse/IMG/p-ramplast-ecolux.jpg)";
    popup_title.innerHTML = "Ramplast Ecolux";
    popup_txt.innerHTML = "Profilele Ecolux au o grosime de 70mm, o izolatie termica si sonora exceptionala. Datorita structura hexacamerala a camerelor si izolarea cu trei randuri de garnituri, aceste profile ajung in clasa premium. Profilele din clasa A in gama Ecolux au fost proiectate sa ofere un sistem premium producatorilor de tamplarie PVC si nu numai. Au un design modern, colturi rotunjite si dimensiuni compacte, astfel, profilele Ecolux se pot integra in orice stil arhitectural, avand un impact optic pozitiv";
    popup_specs.innerHTML = "- Clasa A, cu pereti exteriori de 3 mm; <br> - Coeficient termic: 1.2 W/m(patrat)K;";
});

btn_700.addEventListener('click', () => {
    setStyles();
    popup_img.style.backgroundImage = "url(imgsite/imgsite-produse/IMG/p-ramplast-700.jpg)";
    popup_title.innerHTML = "Ramplast Solid 700";
    popup_txt.innerHTML = "Profilele care folosesc acest sistem premium au o  structura formata din 7 camere, care au fost proiectate sa ofere cea mai mare protectie termala si sonora. Au un design modern, cu colturi rotunjite si dimensiuni compacte. Aceasta clasa A premium are o grosime de 80mm si este renumita pentru izolarea termica si sonora, fiind considerata cea mai de top clasa din Romania.";
    popup_specs.innerHTML = " - Clasa A, cu pereti exteriori de 3 mm; <br> - Coeficient termic: 1.2 W/m(patrat)K; <br> -  2 sau 3 randuri de garnituri;";
});

btn_400.addEventListener('click', () => {
    setStyles();
    popup_img.style.backgroundImage = "url(imgsite/imgsite-produse/IMG/p-ramplast-400.jpg)";
    popup_title.innerHTML = "Ramplast Solid 400";
    popup_txt.innerHTML = "Lansate in anul 2017 ca o varianta mai buna a profilului EcoluxThermLight, Solid 400 este un prdus ecologic, cu parametri tehnici imbunatatiti. Sunt caracterizati de de o rezistenta crescuta la factori externi, procesare rapida, rezistenta marita si un design inovativ. Este format dintr-un ansamblu de 4 camere, oferind o izolare termica si sonora buna";
    popup_specs.innerHTML = " - Structura tetracamerala cu o constructie avand rosimea de 60 mm; <br> - Suprafata cu colturi rotunjite; <br> - Garnituri negre sau gri pentru etansare; <br> - Posibilitatea montarii de sticla cu grosimea de 34mm;";
});

//Functions

function exit() {
    popup.style.display = "none";
    body.style.overflow = "scroll";
};

function setStyles() {
    body.style.overflow = "hidden";
    popup.style.display = "flex";
    popup.style.position = "fixed";
    popup.style.top = "1em";
    popup.style.scale = "1";
}
