ServerEvents.recipes(event => {
  const snads = [
    'utilitarian:snad',
    'utilitarian:red_snad',
    'utilitarian:soul_snad'
  ]
 
  snads.forEach(id => {
    event.remove({ output: id })
  })
})
 