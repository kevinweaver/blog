const mediumToMarkdown = require('medium-to-markdown');

mediumToMarkdown.convertFromUrl('https://medium.com/p/292e6c696df7')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
