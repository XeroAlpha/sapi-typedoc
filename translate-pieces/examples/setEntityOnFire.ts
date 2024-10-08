import { world, Entity, EntityComponentTypes, system } from "@minecraft/server";

function setAblaze(entity: Entity) {
    entity.setOnFire(20, true);

    system.runTimeout(() => {
        const onfire = entity.getComponent(EntityComponentTypes.OnFire);
        if (onfire) {
            world.sendMessage(`${onfire.onFireTicksRemaining} fire ticks remaining, extinguishing the entity.`);
        }
        // This will extinguish the entity
        entity.extinguishFire(true);
    }, 30); // Run in 30 ticks or ~1.5 seconds

}
