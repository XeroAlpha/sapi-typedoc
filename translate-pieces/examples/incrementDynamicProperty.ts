import * as mc from '@minecraft/server';

function incrementProperty(propertyName: string): boolean {
    let number = mc.world.getDynamicProperty(propertyName);

    console.warn('Current value is: ' + number);

    if (number === undefined) {
        number = 0;
    }

    if (typeof number !== 'number') {
        console.warn('Number is of an unexpected type.');
        return false;
    }

    mc.world.setDynamicProperty(propertyName, number + 1);
    return true;
}

incrementProperty('samplelibrary:number');
