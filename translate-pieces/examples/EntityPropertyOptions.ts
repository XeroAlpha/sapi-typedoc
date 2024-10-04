import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={property=propId}]

// Equivalent scripting code would be:
function findEntitiesHavingAProperty(propId: string) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}

// Having this command:

// execute as @e[has_property={propId=propValue}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyEqualsTo(propId: string, propValue: boolean | number | string) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { equals: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
