/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 18:08:01
 * @FilePath: /iuUI/packages/modal/src/modal.tsx
 * @Description: update here
 */
import { defineComponent, ref } from 'vue'
import { modalProps } from './modal-style'
import useModal from './composables/modal-common'
import './modal.scss'
export default defineComponent({
  name: 'VulModal',
  props: modalProps,
  emits: ['update:modelValue','onSure'],
  setup(props, ctx) {
    const {cancelBubol,sendModuleValue} = useModal(ctx)
    const closeWindwo = (e: Event) => {
      cancelBubol(e)
      sendModuleValue(false)
    }
    const clickContent = (e: Event) => {
      cancelBubol(e)
      sendModuleValue(true)
    }
    const getSure = (e:MouseEvent) => {
      ctx.emit('onSure')
      closeWindwo(e)
    }
    return () => {
      return (
        <div class='modal' v-show={props.modelValue} onClick={closeWindwo}>
          <div class='base-model__content' onClick={clickContent}>
            <div class='base-model__title'>
              {ctx.slots.title?.()}
            </div>
            {ctx.slots.default?.()}
            <div class='base-model__control'>
              <span onClick={getSure}>确定</span>
              <span onClick={closeWindwo}>关闭</span>
            </div>
          </div>
        </div>
      )
    }
  }
})
