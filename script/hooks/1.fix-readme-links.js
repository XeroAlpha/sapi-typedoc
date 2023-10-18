const TypeDoc = require("typedoc");

module.exports = {
    /**
     * @param {{ tsdocProject: TypeDoc.ProjectReflection }} context
     */
    afterConvert({ tsdocProject }) {
        const { readme } = tsdocProject;
        readme.forEach((part) => {
            if (part.kind === 'text' || part.kind === 'inline-tag') {
                part.text = part.text.replace(/https:\/\/projectxero.top\/sapi\/(?!original)(?=\w)/g, './');
                part.text = part.text.replace(/\(#(\w+)\)/g, '(#md:$1)');
            }
        });
    }
};
