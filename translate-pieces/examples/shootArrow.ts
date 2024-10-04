import { world, Vector3 } from '@minecraft/server';

const location: Vector3 = { x: 0, y: -59, z: 0 }; // Replace with the coordinates of where you want to spawn the arrow
const velocity: Vector3 = { x: 0, y: 0, z: 5 };
const arrow = world.getDimension('overworld').spawnEntity('minecraft:arrow', location);
const projectileComp = arrow.getComponent('minecraft:projectile');
projectileComp?.shoot(velocity);
