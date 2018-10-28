import adjectives from './adjectives';
import adverbs from './adverbs';
import nouns from './nouns';
import numerals from './numerals';
import particles from './particles';
import prepositions from './prepositions';
import pronouns from './pronouns';
import verbs from './verbs';

// https://niemiecki.ang.pl/gramatyka/czesci-mowy

export default [{
  header: {
    polish: 'Rzeczownik(i)',
    german: 'Substantiv(e)'
  },
  items: nouns
}, {
  header: {
    polish: 'Czasownik(i)',
    german: 'Verb(en)'
  },
  items: verbs
}, {
  header: {
    polish: 'Przymiotnik(i)',
    german: 'Adjektiv(e)'
  },
  items: adjectives
}, {
  header: {
    polish: 'Liczebniki(i)',
    german: 'Ziffer/Zahlen'
  },
  items: numerals
}, {
  header: {
    polish: 'Partykuł(y)',
    german: 'Partikel'
  },
  items: particles
}, {
  header: {
    polish: 'Przyim(ek/ki)',
    german: 'Präposition(en)'
  },
  items: prepositions
}, {
  header: {
    polish: 'Przysłów(ek/ki)',
    german: 'Adverb(ien)'
  },
  items: adverbs
}, {
  header: {
    polish: 'Zaim(ek/ki)',
    german: 'Pronomen'
  },
  items: pronouns
}];
