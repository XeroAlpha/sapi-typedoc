// A function that throws entities up in the air
import { Entity } from '@minecraft/server';

function yeetEntity(entity: Entity) {

    // Zero out the entity's velocity before applying impulse
    entity.clearVelocity();

    // throw the zombie up in the air
    entity.applyImpulse({ x: 0, y: 15, z: 0 });
}
