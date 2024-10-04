import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, Vector3 } from '@minecraft/server';
import { MinecraftDimensionTypes } from '@minecraft/vanilla-data';

const players = world.getPlayers();
const targetLocation: Vector3 = {
    x: 0,
    y: 0,
    z: 0,
};

const musicOptions: MusicOptions = {
    fade: 0.5,
    loop: true,
    volume: 1.0,
};
world.playMusic('music.menu', musicOptions);

const worldSoundOptions: WorldSoundOptions = {
    pitch: 0.5,
    volume: 4.0,
};
const overworld = world.getDimension(MinecraftDimensionTypes.Overworld);
overworld.playSound('ambient.weather.thunder', targetLocation, worldSoundOptions);

const playerSoundOptions: PlayerSoundOptions = {
    pitch: 1.0,
    volume: 1.0,
};

players[0].playSound('bucket.fill_water', playerSoundOptions);
