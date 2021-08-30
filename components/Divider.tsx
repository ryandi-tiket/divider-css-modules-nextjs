import * as React from 'react'
import cx from 'classnames'

import styles from './Divider.module.scss'

type Alignment = 'horizontal' | 'vertical'
type Variant = 'default' | 'bold' | 'dashed'

export type DividerProps = {
  /** alignment of the divider border */
  alignment?: Alignment
  /** divider border variant which controls colors, height, and border style */
  variant?: Variant
}

export const Divider: React.VFC<DividerProps> = ({
  alignment,
  variant = 'default',
}) => {
  const type = alignment === 'vertical' ? `tix-divider-vertical` : 'tix-divider'

  return <div className={cx(styles[type], styles[variant])} />
}
