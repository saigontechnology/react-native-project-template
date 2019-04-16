/**
 * Author: Quan Vo
 * Date: 4/16/19
 */

import ProductEnum, {LIMITED_PRODUCT} from "../../../../enum/ProductEnum";


export default function ({id, fullName, category}) {
  const {name, Icon} = ProductEnum[category];

  return (
      <View>

        <Text>{fullName || name}</Text>

        {Icon}

        {category === LIMITED_PRODUCT && <Text>{name}</Text>}

      </View>
  )
}