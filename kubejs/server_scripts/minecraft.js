ServerEvents.recipes(event => {

    event.remove({ output: 'minecraft:furnace' })
    event.shaped(
        Item.of('minecraft:furnace', 1),
        [
            'CCC',
            'CXC',
            'CCC'
        ],
        {
            C: '#c:cobblestones',
            X: '#minecraft:logs'
        }
    )
    
})