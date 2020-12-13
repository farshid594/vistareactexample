import ar_tr from './ar'
import fa_tr from './fa'
import en_tr from './en'
import es_tr from './es'

const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : "fa"

const directions = {
    fa: "rtl",
    en: "ltr",
    ar: "rtl",
    es: 'ltr'
}
function getDirection() {
    return directions[lang]
}
export { getDirection }

const translate = {
    fa: fa_tr,
    ar: ar_tr,
    en: en_tr,
    es: es_tr
}
function getTranslate() {
    return translate[lang]
}
export { getTranslate }

const fonts = {
    fa: "IRANSans",
    ar: "IRANSans",
    en: "Muli",
    es: "Muli"
}
function getFont() {
    return fonts[lang]
}
export { getFont }

function changeLang(newLang) {
    if (newLang === lang) {
        return
    }
    localStorage.setItem('lang', newLang)
    window.location.reload()
}
export { changeLang }