import './styles.scss';
import tag from 'lean-tag';
import data from './data';

const FROM = 'polish';
const TO = 'german';

function renderTable(items) {
  const rows = items.map((def) => tag('tr', tag('td', def[FROM]), tag('td', def[TO])));

  return tag('table', rows);
}

function renderSection(section) {
  const table = renderTable(section.items);

  return tag('.section', tag('h3.section-header', tag('', section.header[FROM]), tag('', section.header[TO])), table);
}

const sections = data.map((section) => renderSection(section));
const paper = tag('.paper', sections);

document.body.appendChild(paper);
