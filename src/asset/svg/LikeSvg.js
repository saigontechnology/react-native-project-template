/**
 * Created by HienPT on 2/25/19.
 */
import React from 'react'
import Svg, { Rect, Defs, Path, G, Use } from "react-native-svg"

export default function({size, color}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 12 11"
    >
      <Path
        d="M.167 10.646h2.12V4.358H.168v6.288zm11.666-5.764c0-.576-.477-1.048-1.06-1.048H7.432l.53-2.41v-.157c0-.21-.106-.42-.212-.576L7.167.167l-3.5 3.458c-.212.157-.319.42-.319.733v5.24c0 .577.478 1.048 1.061 1.048h4.773c.424 0 .795-.262.954-.629l1.591-3.72c.053-.105.053-.262.053-.367V4.882h.053c0 .053 0 0 0 0z"
        fill={color}
        fillRule="nonzero"
      />
    </Svg>
  )
}
