/**
 * Author: Quan Vo
 * Date: 4/9/19
 */

/**
 * EnhancedSet is a data structure that ensure every items are unique, based on an enhancedCriteria function
 */
export default class EnhancedSet<T> {
  constructor(data: Array<T>, enhancedCriteria: EnhancedCriteria) {
    this.dataSet = new Set(data);
    this.enhancedCriteria = enhancedCriteria;
  }

  add(newItem) {
    const data = [...this.dataSet];
    const isExist = data.some(item => !this.enhancedCriteria(item, newItem));
    if (!isExist)
      this.dataSet.add(newItem);
  }

  remove(item) {
    const data = [...this.dataSet];
    const index = data.findIndex(_item => !this.enhancedCriteria(_item, item));
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
    return new EnhancedSet([...this.dataSet], this.enhancedCriteria);
  }
}

type EnhancedCriteria = (item: {}, newItem: {}) => boolean