const menu = {
  _courses: {
    appetizers: [{name: 'falafel', price: 5}],
    mains: [{name: 'pizza', price: 5}],
    desserts: [{name: 'cheesecake', price: 5}],
  },
  get getAppetizers() {
    return this._courses.appetizers;
    },
  get getMains() {
    return this._courses.mains;
  },  
  get getDesserts() {
    return this._courses.desserts;
  },
  set addAppetizers(appetizer) {
    return this._courses.appetizers.push(appetizer);
  },
  set addMains(mains) {
    return this._courses.mains.push(mains);
  },
  set addDesserts(dessert) {
    return this._courses.desserts.push(dessert);
  },
  get courses() {
    return this._courses;
  },
  addDishToCourse(courseName, dishName, dishPrice) {
   const dish = {
      name: dishName,
      price: dishPrice
    }
    switch(courseName) {
      case 'appetizers': return menu.addAppetizers = dish;
      case 'mains': return menu.addMains = dish;
      case 'desserts': return menu.addDesserts = dish;
      default: console.log('this is not a valid course choice')
    }
  },
  getRandomDishFromCourse(courseName) {
    var dishes = this.courses[courseName]
    let randIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randIndex]
    },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let mains = this.getRandomDishFromCourse('mains');
    let desserts = this.getRandomDishFromCourse('desserts');
    let totalPrice = (appetizer['price'] + mains['price'] + desserts['price'])
    return `Appetizers: ${appetizer.name}, Mains: ${mains.name}, Dessert: ${desserts.name}, and your total price for this meal is £${totalPrice}`
      }
}
menu.addDishToCourse('appetizers', 'toast', 5)
menu.addDishToCourse('appetizers', 'mirza ghassemi', 10)
menu.addDishToCourse('appetizers', 'salad', 7)

menu.addDishToCourse('mains', 'koobideh', 15)
menu.addDishToCourse('mains', 'dolma', 15)
menu.addDishToCourse('mains', 'kofta', 15)

menu.addDishToCourse('desserts', 'knafa', 15)
menu.addDishToCourse('desserts', 'cake', 15)
menu.addDishToCourse('desserts', 'brownies', 15)
let meal = menu.generateRandomMeal()
console.log(menu.getAppetizers);

console.log(meal)