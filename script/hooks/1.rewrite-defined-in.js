/** @type {import('./hook').Hook} */
module.exports = {
    afterConvert({ tsdocProject }) {
        Object.entries(tsdocProject.reflections).forEach(([id, reflection]) => {
            if (reflection.sources) {
                reflection.sources.forEach((source) => {
                    source.fileName = source.fileName.replace("translated", tsdocProject.name);
                });
            }
        });
    }
};
