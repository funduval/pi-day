fs.readFileSync('./index.html', 'utf8', function(err, data) {
  if (err) throw err;
  const regex = /<script\b[^<]*(?:(?!<\/script >)<[^<]*)*>([\s\S]*?)<\/script>/g;

  const updatedData = data.replace(regex, `<script>${outputData}</script>`);
    console.log("updatedData",updatedData);
function writeToHTML(){  
fs.writeFile('./index.html', updatedData, function(err) {
    if (err) throw err;
    console.log('File updated!');
  })};
    writeToHTML();
    
    reject(err);
});  