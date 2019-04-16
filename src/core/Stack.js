/**
 * @author Lê Quốc Dương on 2019-04-01
 */


export default class Stack {
  constructor(items) {
    this.items = items || [];
  }

  getLength() {
    return this.items.length;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items.slice(-1)[0];
  }
}

