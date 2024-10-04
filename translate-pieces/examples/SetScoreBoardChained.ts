import { Dimension, world } from '@minecraft/server';

// Having these commands:

// scoreboard objectives add scoreObjective1 dummy
// scoreboard players set @e[type=armor_stand,name=myArmorStand] scoreObjective1 -1

// Equivalent scripting code would be:
function setScores(dimension: Dimension) {
    const objective = world.scoreboard.addObjective('scoreObjective1', 'dummy');
    dimension
        .getEntities({
            type: 'armor_stand',
            name: 'myArmorStand',
        })
        .forEach(entity => {
            if (entity.scoreboardIdentity !== undefined) {
                objective.setScore(entity.scoreboardIdentity, -1);
            }
        });
}
