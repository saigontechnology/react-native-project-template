/**
 * Author: Quan Vo
 * Date: 4/16/19
 */

import {synthesize} from "redux-dispatcher";
import ProductEnum from "../../../enum/ProductEnum";


type ProductType = {
  id: number,
  fullName: ?string,
  category: $Keys<typeof ProductEnum>
};

const mapDispatchToAC = {
  addProduct: (product:ProductType) => ({product}),

  showListProduct: (listProduct: Array<ProductType>) => ({listProduct}),
};

export default synthesize('home', mapDispatchToAC);