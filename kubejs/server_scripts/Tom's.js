ServerEvents.recipes(event => {
    event.remove({ output: 'toms_storage:storage_terminal' })
})

ServerEvents.recipes(event => {
    
    event.custom({
        "type": "integrateddynamics:drying_basin",
        "input_fluid": {
            "id": "integrateddynamics:menril_resin",
            "amount": 1000
        },
        "input_item": 'toms_storage:inventory_connector',
        "duration": 200,
        "output_item": {
            "id": 'toms_storage:storage_terminal'
        }
    })

})