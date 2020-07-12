import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Layout from '@/views/layout/TheLayout.vue'

describe('TheLayout.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Layout, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})

/*
Para esse teste PASSAR você terá que incluir, no componente TheLayout.vue,
a props.msg e a interpolação {{ msg }} no template, conforme abaixo:

<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
props: {
  msg: {
    type: String,
    default: ''
  }
},
</script>
*/
