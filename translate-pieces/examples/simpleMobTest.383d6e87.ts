import * as gameTest from '@minecraft/server-gametest';

gameTest
    .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
        const attackerId = 'fox';
        const victimId = 'chicken';

        test.spawn(attackerId, { x: 5, y: 2, z: 5 });
        const victim = test.spawn(victimId, { x: 2, y: 2, z: 2 });

        test.assertEntityInstancePresentInArea(victim, true);

        test.succeedWhen(() => {
            test.assertEntityInstancePresentInArea(victim, false);
        });
    })
    .maxTicks(400)
    .structureName('gametests:mediumglass');
