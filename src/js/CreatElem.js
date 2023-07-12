export default class CreatElement {
  constructor(text) {
    this.text = text;
  }

  addTaskAll() {
    const alltasksList = document.querySelector('.alltasks__list');
    const text = `
                  <li class="item">
                    <label>
                      <span>${this.text}</span>
                      <input type="checkbox" class="checkbox">
                    </label>
                  </li>
           `;
    alltasksList.insertAdjacentHTML('beforeend', text);
  }
}
