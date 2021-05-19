const fs = require('fs');
const JSZip = require('jszip');
const zip = new JSZip();

const config = JSON.parse(fs.readFileSync(`config.json`).toString());

for (const item of config) {
  const content = fs.readFileSync(item.schemaPath).toString();

  zip.file(
    `${item.name}.json`,
    JSON.stringify({
      tags: item.tags,
      description: item.description,
      schema: content
    })
  );
}

zip
  .generateNodeStream({type: 'nodebuffer', streamFiles: true})
  .pipe(fs.createWriteStream('templates.zip'));
