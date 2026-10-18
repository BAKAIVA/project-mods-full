// Growable Ores: novas receitas das canas (vanilla)
// Centro = bloco do material (ou o próprio item, se não existir bloco)
// Embaixo do centro = Essência de Prudentium; em volta = cana-de-açúcar
// Arquivo: kubejs/server_scripts/growable_ores_recipes.js

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('growable_ores') || !Platform.isLoaded('mysticalagriculture')) return

  const ESSENCE = 'mysticalagriculture:prudentium_essence'
  const CANE = 'minecraft:sugar_cane'

  // [id da receita original, cana resultante, item do centro]
  const canes = [
    ['growable_ores:vanilla/acacia_log_cane', 'growable_ores:acacia_log_cane', 'minecraft:acacia_log'],
    ['growable_ores:vanilla/amethyst_shard_cane', 'growable_ores:amethyst_shard_cane', 'minecraft:amethyst_block'],
    ['growable_ores:vanilla/bamboo_block_cane', 'growable_ores:bamboo_block_cane', 'minecraft:bamboo_block'],
    ['growable_ores:vanilla/birch_log_cane', 'growable_ores:birch_log_cane', 'minecraft:birch_log'],
    ['growable_ores:vanilla/blaze_rod_cane', 'growable_ores:blaze_rod_cane', 'minecraft:blaze_rod'],
    ['growable_ores:vanilla/bone_cane', 'growable_ores:bone_cane', 'minecraft:bone_block'],
    ['growable_ores:vanilla/breeze_rod_cane', 'growable_ores:breeze_rod_cane', 'minecraft:breeze_rod'],
    ['growable_ores:vanilla/cherry_log_cane', 'growable_ores:cherry_log_cane', 'minecraft:cherry_log'],
    ['growable_ores:vanilla/clay_cane', 'growable_ores:clay_cane', 'minecraft:clay'],
    ['growable_ores:vanilla/coal_cane', 'growable_ores:coal_cane', 'minecraft:coal_block'],
    ['growable_ores:vanilla/copper_cane', 'growable_ores:copper_cane', 'minecraft:copper_block'],
    ['growable_ores:vanilla/crimson_stem_cane', 'growable_ores:crimson_stem_cane', 'minecraft:crimson_stem'],
    ['growable_ores:vanilla/dark_oak_log_cane', 'growable_ores:dark_oak_log_cane', 'minecraft:dark_oak_log'],
    ['growable_ores:vanilla/diamond_cane', 'growable_ores:diamond_cane', 'minecraft:diamond_block'],
    ['growable_ores:vanilla/echo_shard_cane', 'growable_ores:echo_shard_cane', 'minecraft:echo_shard'],
    ['growable_ores:vanilla/egg_cane', 'growable_ores:egg_cane', 'minecraft:egg'],
    ['growable_ores:vanilla/emerald_cane', 'growable_ores:emerald_cane', 'minecraft:emerald_block'],
    ['growable_ores:vanilla/ender_pearl_cane', 'growable_ores:ender_pearl_cane', 'minecraft:ender_pearl'],
    ['growable_ores:vanilla/feather_cane', 'growable_ores:feather_cane', 'minecraft:feather'],
    ['growable_ores:vanilla/glowstone_cane', 'growable_ores:glowstone_cane', 'minecraft:glowstone'],
    ['growable_ores:vanilla/gold_cane', 'growable_ores:gold_cane', 'minecraft:gold_block'],
    ['growable_ores:vanilla/gunpowder_cane', 'growable_ores:gunpowder_cane', 'minecraft:gunpowder'],
    ['growable_ores:vanilla/honeycomb_cane', 'growable_ores:honeycomb_cane', 'minecraft:honeycomb_block'],
    ['growable_ores:vanilla/iron_cane', 'growable_ores:iron_cane', 'minecraft:iron_block'],
    ['growable_ores:vanilla/jungle_log_cane', 'growable_ores:jungle_log_cane', 'minecraft:jungle_log'],
    ['growable_ores:vanilla/lapis_cane', 'growable_ores:lapis_cane', 'minecraft:lapis_block'],
    ['growable_ores:vanilla/leather_cane', 'growable_ores:leather_cane', 'minecraft:leather'],
    ['growable_ores:vanilla/mangrove_log_cane', 'growable_ores:mangrove_log_cane', 'minecraft:mangrove_log'],
    ['growable_ores:vanilla/nether_quartz_cane', 'growable_ores:nether_quartz_cane', 'minecraft:quartz_block'],
    ['growable_ores:vanilla/nether_star_cane', 'growable_ores:nether_star_cane', 'minecraft:nether_star'],
    ['growable_ores:vanilla/netherite_ingot_cane', 'growable_ores:netherite_ingot_cane', 'minecraft:netherite_block'],
    ['growable_ores:vanilla/netherite_scrap_cane', 'growable_ores:netherite_scrap_cane', 'minecraft:netherite_scrap'],
    ['growable_ores:vanilla/oak_log_cane', 'growable_ores:oak_log_cane', 'minecraft:oak_log'],
    ['growable_ores:vanilla/pale_oak_log_cane', 'growable_ores:pale_oak_log_cane', 'minecraft:pale_oak_log'],
    ['growable_ores:vanilla/prismarine_crystals_cane', 'growable_ores:prismarine_crystals_cane', 'minecraft:prismarine_crystals'],
    ['growable_ores:vanilla/prismarine_shard_cane', 'growable_ores:prismarine_shard_cane', 'minecraft:prismarine_shard'],
    ['growable_ores:vanilla/redstone_cane', 'growable_ores:redstone_cane', 'minecraft:redstone_block'],
    ['growable_ores:vanilla/sand_cane', 'growable_ores:sand_cane', 'minecraft:sand'],
    ['growable_ores:vanilla/slime_cane', 'growable_ores:slime_cane', 'minecraft:slime_block'],
    ['growable_ores:vanilla/spruce_log_cane', 'growable_ores:spruce_log_cane', 'minecraft:spruce_log'],
    ['growable_ores:vanilla/string_cane', 'growable_ores:string_cane', 'minecraft:string'],
    ['growable_ores:vanilla/warped_stem_cane', 'growable_ores:warped_stem_cane', 'minecraft:warped_stem'],
    ['growable_ores:vanilla/wool_cane', 'growable_ores:wool_cane', 'minecraft:white_wool'],
  ]

  canes.forEach(([oldId, result, center]) => {
    event.remove({ id: oldId })
    event.shaped(Item.of(result), [
      'SSS',
      'SCS',
      'SES'
    ], {
      S: CANE,
      C: center,
      E: ESSENCE
    }).id('kubejs:growable_ores/' + result.split(':')[1])
  })
})