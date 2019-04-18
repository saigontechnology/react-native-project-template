/**
 * Author: Quan Vo
 * Date: 4/9/19
 */

/**
 * SentrySet is a data structure that ensure every items are unique, based on an isDuplicated function
 */
export default class SentrySet<T> {
  constructor(data: Array<T>, isDuplicated: SentryPredicate) {
    this.dataSet = new Set(data);
    this.isDuplicated = isDuplicated;
  }

  add(newItem) {
    const data = [...this.dataSet];
    const notExist = data.every(item => !this.isDuplicated(item, newItem));
    if (notExist)
      this.dataSet.add(newItem);
  }

  remove(item) {
    const data = [...this.dataSet];
    const index = data.findIndex(_item => this.isDuplicated(_item, item));
    if (index > -1) {
      const newData = [
        ...data.slice(0, index),
        ...data.slice(index + 1)
      ];
      this.dataSet = new Set(newData);
      return true;
    }
    return false;
  }

  size() {
    return this.dataSet.size;
  }

  values() {
    return [...this.dataSet];
  }

  clone() {
    return new SentrySet([...this.dataSet], this.isDuplicated);
  }
}

type SentryPredicate = (item: {}, newItem: {}) => boolean;