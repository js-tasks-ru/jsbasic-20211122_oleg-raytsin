/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.render();
  }

  render() {
    let table = document.createElement('TABLE');
    let tableHeader = document.createElement('THEAD');

    tableHeader.innerHTML = `
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr> 
      `;

    table.append(tableHeader);

    let tableBody = document.createElement('TBODY');
    tableBody.innerHTML = this.rows
      .map(row => `<tr><td>${row.name}</td><td>${row.age}</td><td>${row.salary}</td><td>${row.city}</td><td><button>X</button></td>`)
      .join('');

    table.append(tableBody);

    table.addEventListener('click', this.onClick);

    this.elem = table;
  }

  onClick (event) {
    if (event.target.tagName === 'BUTTON') {
      event.target.closest('TR').remove();
    }
  }
}
