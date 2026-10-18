ServerEvents.recipes(event => {
  event.remove({ output: 'functionalstorage:storage_controller' })

  event.shaped(
    'functionalstorage:storage_controller',
    [
      'cxc',
      'zae',
      'cxc'
    ],
    {
      a: 'minecraft:comparator',
      c: '#c:stones',
      z: '#functionalstorage:drawer',
      x: 'minecraft:quartz_block',
      e: 'functionalstorage:ender_drawer'
    }
  )
})