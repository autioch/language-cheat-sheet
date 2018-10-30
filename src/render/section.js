import tag from 'lean-tag';
import { FROM, TO } from './consts';

function renderOriginal(item) {
  const content = item.label || item[FROM];

  return tag('td', content);
}

function renderTranslation(item) {
  let content = item[TO];

  content = Array.isArray(content) ? content : [content];

  return content.map((el) => tag('td', el));
}

function renderItem(item) {
  return tag('tr', [
    renderOriginal(item),
    ...renderTranslation(item)
  ]);
}

function renderTable(items) {
  const rows = items.map((item) => renderItem(item));

  return tag('table', rows);
}

export default function renderSection(section) {
  const table = renderTable(section.items);

  return tag('.section', tag('h3.section-header', tag('', section.header[FROM]), tag('', section.header[TO])), table);
}
