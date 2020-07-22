import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TheLayout from '@/views/layout/TheLayout.vue'
import TheLayoutDrawer from '@/views/layout/TheLayoutDrawer.vue'

describe('TheLayout.vue', () => {
  let component
  const basePath = 'new message'

  beforeEach(() => {
    component = shallowMount(TheLayout, {
      propsData: { basePath }
    })
  })

  it('renders props.basePath when passed', () => {
    expect(component.text()).to.include(basePath)
  })

  // Inspeciona as opções do componente
  it('has a created hook', () => {
    expect(component.find(TheLayoutDrawer).exists()).to.be.true
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
