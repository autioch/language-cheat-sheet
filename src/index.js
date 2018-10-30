import './styles.scss';
import tag from 'lean-tag';
import data from './data';
import renderSection from './render/section';

// import { omit } from 'lodash';

const sections = Object.keys(data).reduce((obj, key) => Object.assign(obj, {
  [key]: renderSection(data[key])
}), {});

const paper = tag('.paper', [
  tag('.col', sections.nouns),
  tag('.col',
      sections.verbs,
      tag('.row',
          tag('.col', sections.pronouns),
          tag('.col', sections.prepositions)
      ),
      sections.adjectives
  ),
  tag('.col', sections.numerals),
  tag('.col', sections.particles, sections.adverbs)
]);

document.body.appendChild(paper);
