import img from "../img/icon1.svg";

const getTemplate = (data = [], placeholder) => {
  const text = placeholder ?? "Choose the country";

  const items = data.map((item) => {
    return `
    <li class="select__item " data-type="item" data-code="${item.code}">${item.name}</li>
    `;
  });

  return `
   <div class="select__backdrop data-type="backdrop"></div>
  <div class="select__input" data-type="input">
            <span data-type="name">${text}</span>
            <span class="select__img-wrap" data-type="arrow">
              <img src="${img}" width="14">
            </span>
          </div>
          <div class="select__dropdown">
            <ul class="select__list">
            ${items.join("")}  
            </ul>
          </div>`;
};

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedCode = null;

    this.#render();
    this.#setup();
  }

  #render() {
    const { placeholder, data } = this.options;
    this.$el.classList.add("select");
    this.$el.innerHTML = getTemplate(data, placeholder);
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener("click", this.clickHandler);
    this.$arrow = this.$el.querySelector('[data-type="arrow"]');
    this.$name = this.$el.querySelector('[data-type="name"]');
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    console.log(this.$arrow, type);

    if (type === "input") {
      this.toggle();
    } else if (type === "item") {
      const code = event.target.dataset.code;
      this.select(code);
    } else if (type === "backdrop") {
      this.close();
    }
  }

  get isOpen() {
    return this.$el.classList.contains("open");
  }

  get current() {
    return this.options.data.find((item) => item.code === this.selectedCode);
  }

  select(code) {
    this.selectedCode = code;
    this.$name.textContent = this.current.name;
    this.$el.querySelectorAll('[data-type="item"]').forEach((el) => {
      el.classList.remove("selected");
    });
    this.$el.querySelector(`[data-code=${code}]`).classList.add("selected");

    this.options.onSelect ? this.options.onSelect(this.current) : null;

    this.close();
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
    this.$el.innerHTML = "";
  }
}
