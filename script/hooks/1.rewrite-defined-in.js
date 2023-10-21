/** @type {import('./hook').Hook} */
module.exports = {
    afterConvert({ tsdocProject }) {
        Object.values(tsdocProject.reflections).forEach((reflection) => {
            if (reflection.sources) {
                reflection.sources.forEach((source) => {
                    source.fileName = source.fileName.replace('translated', tsdocProject.name);
                });
            }
        });
    }
};
