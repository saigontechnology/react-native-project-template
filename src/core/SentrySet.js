/**
 * Author: Quan Vo
 * Date: 4/9/19
 */

/**
 * SentrySet is a data structure that ensure every items are unique, based on an sentryPredicate function
 */
export default class SentrySet<T> {
  constructor(data: Array<T>, sentryPredicate: SentryPredicate) {
    this.dataSet = new Set(data);
    this.sentryPredicate = sentryPredicate;
  }

  add(newItem) {
    const data = [...this.dataSet];
    const isExist = data.some(item => !this.sentryPredicate(item, newItem));
    if (!isExist)
      this.dataSet.add(newItem);
  }

  remove(item) {
    const data = [...this.dataSet];
    const index = data.findIndex(_item => !this.sentryPredicate(_item, item));
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
    return new SentrySet([...this.dataSet], this.sentryPredicate);
  }
}

type SentryPredicate = (item: {}, newItem: {}) => boolean