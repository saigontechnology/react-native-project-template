/**
 * Author: Quan Vo
 * Date: 4/13/19
 */

/**
 * Example:
 * @params: enumData = { CONST_ENUM_KEY : { key: 1, name: 'enum name', ... } }
 * @return: {
 *            CONST_ENUM_KEY: 1,
 *            1: { name: 'enum name', ... }
 *          }
 */
export default function (enumData) {
  const enumMap = {}
  for (const key in enumData) {
    if (enumData.hasOwnProperty(key)) {
      const {key: enumKey, ...data} = enumData[key];
      if (enumKey) {
        enumMap[key] = enumKey;
        enumMap[enumKey] = data;
      }
    }
  }
  return enumMap;

  /*const enumKey = {};
  for (const key in enumData) {
    if (enumData.hasOwnProperty(key)) {
      const item = enumData[key];
      if (item.key)
        enumKey[item.key] = key;
    }
  }
  enumData.key = enumKey;
  return enumData;*/
}