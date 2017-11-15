import TouchHover from '../src'

base.features.add('touch-hover', TouchHover, {
  openCheck: function() {
    let $submenu = this.node.querySelector('ul')
    let style = window.getComputedStyle($submenu)

    return style.getPropertyValue('display') !== 'none'
           && style.getPropertyValue('visibility') !== 'hidden'
  },
  resetOpen: function() {
    this.node.classList.remove('-current')
  }
})

base.features.init()
