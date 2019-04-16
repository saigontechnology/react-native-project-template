/**
 * Author: Quan Vo
 * Date: 4/16/19
 */

export const CHEAP_PRODUCT = 1;
export const LUXURY_PRODUCT = 2;
export const LIMITED_PRODUCT = 3;


export default ProductEnum = {
  [CHEAP_PRODUCT]: {
    name: 'Cheap product',
    Icon: <CheapProductSvg color='green' size={20}/>
  },
  [LUXURY_PRODUCT]: {
    name: 'Cheap product',
    Icon: <LuxuryProductSvg color='red' size={20}/>
  },
  [LIMITED_PRODUCT]: {
    name: 'Cheap product',
    Icon: <LimitedProductSvg color='blue' size={20}/>
  },
}