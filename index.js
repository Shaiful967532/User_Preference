const fontsize = document.getElementById("fontSize");
const bgcolor = document.getElementById("bgcolor");
const reset = document.getElementById("reset");
const main = document.querySelector("main");

const changefontsize = (event) => {
    const fontsizelocal = event.target.value;
    main.style.fontSize = fontsizelocal;
    localStorage.setItem("fontsize", fontsizelocal);
};

const changebgcolor = (event) => {
    const backgroundcolorlocal = event.target.value;
    main.style.backgroundColor = backgroundcolorlocal;
    localStorage.setItem("bgcolor", backgroundcolorlocal);
};

const setitems = (font, color) => {
    fontsize.value = font;
    bgcolor.value = color;
    main.style.fontSize = font;
    main.style.backgroundColor = color;
};

const clearLocalStorage = () => {
    localStorage.removeItem("fontsize");
    localStorage.removeItem("bgcolor");
    setitems("16px", "aqua");
};

const intialsetup = () => {
    const fntSz = localStorage.getItem("fontsize");
    const bgclr = localStorage.getItem("bgcolor");
    if (fntSz && bgclr) {
    setitems(fntSz, bgclr);
    } else if (fntSz && !bgclr) {
    setitems(fntSz, "aqua");
    } else if (!fntSz && bgclr) {
    setitems("16px", bgclr);
    } else {
    setitems("16px", "aqua");
    }
};

fontsize.addEventListener("change", changefontsize);
bgcolor.addEventListener("change", changebgcolor);
reset.addEventListener("click", clearLocalStorage);

intialsetup();