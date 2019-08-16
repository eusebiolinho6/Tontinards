import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {

      fr: {
        translation: {
          "Invest": "Investir au Cameroun",
          "landing1": "startups les plus prometteuses",
          "landing2": "Nous avons sélectionné les startups les plus prometteuses du Cameroun pour que vous puissiez investir dans le partage des bénéfices futurs ou simplement investir dans le soutien d'un projet qui vous intéresse.",
          "landing3": "Début financement",
          "landing4": "Obtenir un financement",
          "landing5": "Pourquoi Tontinards?",
          "landing6": "La solidarité africaine rencontre la rentabilité!",
          "landing61":" C'est simple! Parce qu'aucun autre peuple n'a plus de solidarité que les Africains. La plupart des Africains aident les membres de leur famille tels que frères, soeurs, tantes, cousines, père, mère, amis, membres de la tribu, collègues, etc. La plate-forme Tontinard sélectionne avec soin les startups les plus prometteuses afin que vous puissiez profiter pleinement de votre solidarité en soutenant un projet que vous aimez et en partageant les bénéfices futurs.",
          "landing7": " Voulez-vous ",
          "landing71": "nous rejoindre pour transformer la solidarité africaine en un profit?",
          "landing8": "Début financement",
          "landing9": "Obtenir un financement"
        }
      },
      
      en: {
        translation: {
          "Invest": "Invest in Cameroon’s",
          "landing1":"most promising startups",
          "landing2": "We have selected Cameroon’s most promising startups so you can invest to share future profits or just invest to support a project you are interested in.",
          "landing3": "Start Funding",
          "landing4": "Get Funded",
          "landing5": "Why Tontinards?",
          "landing6": "African Solidarity meets Profitability!",
          "landing61": "It’s simple! Because no other people have more solidarity than Africans. Most Africans help their family members like brothers, sisters, aunts, cousines, father, mother, friends, tribesmen, colleagues and the list goes on.All what the Tontinard platform carefully select the most promising startups, so that you can enjoy showing your African solidarity by supporting a project you love and sharing in the future profit.",
          "landing7": " Do you want to",
          "landing71": "join us transform Africa’s solidarity to Profit?",
          "landing8": "Start Funding",
          "landing9": "Get Funded"
        }
      }
    
    },
    lng: 'fr',
    fallbackLng: 'fr',

    interpolation: {
      escapeValue: false
    }
  });


  export default i18n;