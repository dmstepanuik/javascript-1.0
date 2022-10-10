import img from "../img/icon1.svg";

const getTemplate = () => {
  return `
  <div class="select__input" data-type="input">
            <span>Choose country</span>
            <span class="select__img-wrap" data-type="arrow">
              <img src="${img}" width="14">
            </span>
          </div>
          <div class="select__dropdown">
            <ul class="select__list">
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">121</li>
              <li class="select__item">212</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
            </ul>
          </div>`;
};

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;

    this.#render();
    this.#setup();
  }

  #render() {
    this.$el.classList.add("select");
    this.$el.innerHTML = getTemplate();
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener("click", this.clickHandler);
    this.$arrow = this.$el.querySelector('[data-type="arrow"]');
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    console.log(this.$arrow, type);

    if (type === "input") {
      this.toggle();
    }
  }

  get isOpen() {
    return this.$el.classList.contains("open");
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.$el.classList.add("open");
    this.$arrow.classList.add("rotate");
  }

  close() {
    this.$el.classList.remove("open");
    this.$arrow.classList.remove("rotate");
  }

  destroy() {
    this.$el.removeEventListener("click", this.clickHandler);
  }
}
