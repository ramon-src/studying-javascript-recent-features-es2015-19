/**
 * The exercise:
 * You need to deconstruct the values passed to the handle response and
 * restructuring then to pass in the test case
 */
var defaults = {
  topic: "JavaScript",
  format: "Live",
  slides: {
    start: 0,
    end: 100
  }
};

function TestCase(data) {
  console.log(
    data.topic == "JS Recent Parts" &&
      data.format == "Live" &&
      data.slides.start === 0 &&
      data.slides.end == 77
  );
}

function fakeAjax(url, cb) {
  // fake ajax response:
  cb({
    topic: "JS Recent Parts",
    slides: {
      end: 77
    }
  });
}

/** 
 * The function to be refactored
 * 
  function handleResponse(// destructuring here ) {
    TestCase({
      // restructuring here 
    });
  }
*/
fakeAjax("http://get-the-workshop.tld", handleResponse);

// *******************************************************

/**
 *
 * The handle response function refactored to deconstruct object
 * and reconstruct with default values
 */
function handleResponse({
  topic = defaults.topic,
  format = defaults.format,
  slides: { start = defaults.slides.start, end = defaults.slides.end } = {}
} = {}) {
  debugger;
  TestCase({
    topic,
    format,
    slides: {
      start,
      end
    }
  });
}
