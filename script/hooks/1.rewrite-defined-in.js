const TypeDoc = require("typedoc");

module.exports = {
    /**
     * @param {{ tsdocProject: TypeDoc.ProjectReflection }} context
     */
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
