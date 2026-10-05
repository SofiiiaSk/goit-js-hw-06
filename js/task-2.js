class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    this.#items.splice(index, 1);
  }
}
const storage = new Storage(["Bread", "Milk", "Eggs"]);

console.log(storage.getItems());

storage.addItem("Cheese");
console.log(storage.getItems());

storage.removeItem("Milk");
console.log(storage.getItems());
