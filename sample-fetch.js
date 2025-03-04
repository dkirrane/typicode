/**
 * Run with Node
 * node sample-fetch.js
 */

/**
 * Example using Promises instead of async/await, you can do:
 */
function fetchData() {
  return fetch("https://my-json-server.typicode.com/dkirrane/typicode/posts")
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
}

/**
 * Example using async/await
 */
async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/dkirrane/typicode/posts"
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
fetchDataAsync();
