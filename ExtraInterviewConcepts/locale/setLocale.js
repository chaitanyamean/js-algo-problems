import englishTransalation from './en-translate.js';
import spanishTransalation from './sp-translate.js';


const user = {locale: 'en'}


let translations;


switch(user.locale) {
    case 'en':
        translations = englishTransalation;
        break
    case 'sp':
        translations = spanishTransalation
        break
    default:
    translations = englishTransalation;
}

import(`./${user.locale}-translate.js`)
.catch(() => import('./en-translate.js'))
.then(({default: translations}) => {
    console.log(translations.HI)
})