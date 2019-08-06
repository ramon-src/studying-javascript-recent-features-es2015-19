function getFile(file) {
  return new Promise(function(resolve) {
    fakeAjax(file, resolve);
  });
}

/**
 * Load files asynchronously and print them synchronously
 * The await pr must be inside a regular for loop because if it was inside a function
 * it will cause an syntax error, saying that the word await keyword must be inside an async function.
 */
async function loadFiles(files) {
  var prs = files.map(getFile);
  for (let pr of prs) {
    console.log(await pr);
  }
}

loadFiles(["file1", "file2", "file3"]);

function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "the first text",
    file2: "the second text",
    file3: "the third text"
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function() {
    cb(fake_responses[url]);
  }, randomDelay);
}
