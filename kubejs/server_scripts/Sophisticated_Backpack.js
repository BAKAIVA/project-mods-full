ServerEvents.recipes(event => {
    
    event.remove({ output: 'sophisticatedbackpacks:backpack' })

    event.shaped(
        Item.of('sophisticatedbackpacks:backpack', 1),
        [
            'SXS', 
            'MCM', 
            'LLL'  
        ],
        {
            C: 'minecraft:chest',
            M: 'integrateddynamics:menril_planks',
            X: 'integrateddynamics:crystalized_menril_chunk', 
            S: '#c:strings',
            L: '#c:leathers'
        }
    )
    
})