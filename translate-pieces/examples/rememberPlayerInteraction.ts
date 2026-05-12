import { system } from '@minecraft/server-wrapper';

system.beforeEvents.startup.subscribe(initEvent => {
  initEvent.blockComponentRegistry.registerCustomComponent('scripting_demo_pack:block_entity_onPlayerInteract', {
    onPlayerInteract: e => {
      if (e.player === undefined) {
        return;
      }

      const dynamicProperties = e.block.getComponent('minecraft:dynamic_properties');
      if (!dynamicProperties) {
        return;
      }

      const lastInteractorValue = dynamicProperties.get('last_interactor');
      const lastVisitor = typeof lastInteractorValue === 'string' ? lastInteractorValue : 'unknown';
      const lastTick = Number(dynamicProperties.get('last_interact_tick') ?? system.currentTick);
      const ticksAgo = Math.max(0, system.currentTick - lastTick);

      if (lastVisitor === e.player.name) {
        e.player.sendMessage("do you remember that player? I 'member, it was here " + String(ticksAgo) + ' ticks ago!');
      } else {
        e.player.sendMessage("oh, I don't remember that player");
      }

      dynamicProperties.set('last_interactor', e.player.name);
      dynamicProperties.set('last_interact_tick', system.currentTick);
    },
  });
});
