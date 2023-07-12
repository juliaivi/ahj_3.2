import CreatElement from './CreatElem';

export default class Tasks {
  constructor() {
    this.counter = 0;
    this.container = document.querySelector('.container');
    this.allTasks = document.querySelector('.all-tasks');
    this.pinnedTasks = document.querySelector('.pinned-tasks');
    this.pinnedList = document.querySelector('.pinned__list');
    this.alltasksList = document.querySelector('.alltasks__list');
    this.allItem = this.allTasks.querySelectorAll('.item');
    this.input = this.container.querySelector('.input');
  }

  init() {
    this.input.addEventListener('keydown', (event) => this.onEnter(event)); // отправка
    this.input.addEventListener('input', (event) => this.onInput(event)); // прячет подсказку
    this.container.addEventListener('change', (event) => this.addPinnedList(event)); // прослушка на изменение чек
  }

  onInput(e) {
    this.container.querySelector('.mistake').classList.add('hidden');

    if (this.input.value === '' && this.allItem.length === 0) {
      this.allTasks.querySelector('.no-tasks').classList.remove('hidden');
    }

    this.filterEl(this.input.value, e);
  }

  onEnter(e) {
    if (e.key === 'Enter') {
      if (e.target.value === '') {
        this.container.querySelector('.mistake').classList.remove('hidden');
      } else {
        this.creatElement = new CreatElement(this.input.value);
        this.creatElement.addTaskAll();
        this.input.value = '';
        this.position += 1;
        this.addHidden(this.allTasks);
        this.heddenEl();
      }
    }
  }

  addHidden(elem) {
    if (elem.querySelector('li')) {
      elem.querySelector('.no-tasks').classList.add('hidden');
    } else {
      elem.querySelector('.no-tasks').classList.remove('hidden');
    }
  }

  heddenEl() {
    const items = this.alltasksList.querySelectorAll('.item');
    items.forEach((el) => {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
      }
    });
  }

  addPinnedList(e) {
    const inputCheck = e.target;
    this.alltasksListElem = inputCheck.closest('.alltasks__list');
    this.pinnedListsElem = inputCheck.closest('.pinned__list');
    this.checkbox = Array.from(this.container.querySelectorAll('.checkbox'));
    if (e.target.checked && this.alltasksList) {
      this.movingElements(inputCheck, this.allTasks, this.pinnedTasks);
    }

    if (!e.target.checked && this.pinnedList) {
      this.movingElements(inputCheck, this.pinnedTasks, this.allTasks);
    }
  }

  movingElements(el, allTasks, pinnedTasks) {
    const itemElem = el.closest('.item');
    if (itemElem !== null) {
      this.li = itemElem.cloneNode(true);
      itemElem.remove();
    }

    if (this.alltasksListElem !== null) {
      this.pinnedList.append(this.li);
    }

    if (this.pinnedListsElem !== null) {
      this.alltasksList.append(this.li);
    }
    this.addHidden(pinnedTasks);
    this.addHidden(allTasks);
  }

  filterEl(elem, e) {
    const spans = this.alltasksList.querySelectorAll('span');
    spans.forEach((el) => {
      if (el.textContent.toLowerCase().includes(elem.toLowerCase())) {
        el.closest('.item').classList.remove('hidden');
        this.counter += 1;
      } else {
        el.closest('.item').classList.add('hidden');
      }
    });

    if (this.counter === 0) {
      this.allTasks.querySelector('.no-tasks').classList.remove('hidden');
    }

    if (e.data === null && this.counter > 0 && elem !== null) {
      this.allTasks.querySelector('.no-tasks').classList.add('hidden');
    }
    this.counter = 0;
  }
}
