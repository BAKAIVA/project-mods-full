ServerEvents.recipes(event => {
  if (!Platform.isLoaded('mysticalagriculture')) return
 
  event.remove({ id: 'mysticalagriculture:inferium_seeds' })
 
  event.shaped(Item.of('mysticalagriculture:inferium_seeds'), [
    'EEE',
    'EBE',
    'EEE'
  ], {
    E: 'mysticalagriculture:inferium_essence',
    B: 'mysticalagriculture:prosperity_seed_base'
  }).id('kubejs:mysticalagriculture/inferium_seeds')
})