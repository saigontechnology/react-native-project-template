/**
 * @author Lê Quốc Dương on 2019-03-26
 */

import React from 'react'
import Svg, {Defs, Path, G, Mask, Use} from 'react-native-svg'


export default function ({size, color}) {
  return (
      <Svg width={size} height={size} viewBox="0 0 94 94">
        <Defs>
          <Path id="prefix__a" d="M0 0h94v94H0z"/>
        </Defs>

        <G fill="none" fillRule="evenodd">
          <Mask id="prefix__b" fill="#fff">
            <Use xlinkHref="#prefix__a"/>
          </Mask>

          <Use fill={color} fillRule="nonzero" xlinkHref="#prefix__a"/>

          <Path
              fill="#CCC"
              d="M57.05 64.363c-2.005-.319-2.051-5.816-2.051-5.816s5.891-5.815 7.175-13.636c3.454 0 5.588-8.314 2.133-11.239C64.452 30.592 68.747 9.5 47 9.5S29.548 30.593 29.692 33.672c-3.454 2.925-1.32 11.24 2.133 11.24 1.284 7.82 7.176 13.635 7.176 13.635s-.046 5.497-2.051 5.816C30.492 65.387 6.375 75.994 6.375 87.625v7.721L47 100.125l40.625-4.779v-7.721c0-11.63-24.117-22.238-30.575-23.262z"
              mask="url(#prefix__b)"/>
        </G>
      </Svg>
  );
}