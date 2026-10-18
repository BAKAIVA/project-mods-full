PlayerEvents.loggedIn(event => {
    const player = event.player
    
    // Verifica se é a primeiríssima vez do jogador no mundo
    if (!player.stages.has('primeiro_acesso')) {
        player.stages.add('primeiro_acesso')
        
        // Remove absolutamente qualquer item que outros mods tenham colocado no spawn
        player.inventory.clear() 
        
        // Entrega o SEU Kit Inicial Oficial
        player.give('ftbquests:book')
        player.give('minecraft:wooden_pickaxe')
        player.give('croptopia:cooked_bacon', 8)
        player.give('minecraft:copper_chestplate')
        
        // Mensagem de boas-vindas no chat (Português e Inglês)
        player.tell(Text.gold('Sua jornada começa aqui. Abra o diário de missões, equipe sua armadura e boa sorte!'))
        player.tell(Text.yellow('Your journey begins here. Open the quest book, equip your armor, and good luck!'))
    }
})