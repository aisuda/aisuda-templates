const fs = require('fs');
const JSZip = require('jszip');
const zip = new JSZip();

const templateMap = JSON.parse(fs.readFileSync(`template-map.json`).toString());

for (const template of templateMap) {
  const content = fs.readFileSync(template.schemaPath).toString();

  zip.file(
    `${template.name}.json`,
    JSON.stringify({
      tags: template.tags,
      description: template.description,
      schema: content
    })
  );
}

zip
  .generateNodeStream({type: 'nodebuffer', streamFiles: true})
  .pipe(fs.createWriteStream('templates.zip'));
