/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-24 22:35:24
 * @FilePath: /vultures/packages/vul-base/tooltip/src/tooltip.tsx
 * @Description: update here
 */
import { defineComponent, PropType } from 'vue'
import './tooltip.scss'

const cardProps = {
  position: {
    type: String as PropType<'left' | 'top' | 'right' | 'bottom'>,
    default: 'top'
  },
  tooltip: {
    type: String,
    default: 'hello iuUI'
  }
} as const

export default defineComponent({
  name: 'VulTooltip',
  props: cardProps,
  setup(props, ctx) {
  },

  render() {
    const { tooltip, position } = this

    return (
      <div data-tooltip={tooltip} data-position={position}>
        {this.$slots.default?.()}
      </div>
    )
  }
})
