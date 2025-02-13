async function fetchFirstSuccessful() {
  try {
    const result = await Promise.any([
      fetch("https://jsonplaceholder.typicode.com/invalid").then((res) =>
        res.json()
      ), // Fails
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json()
      ), // Succeeds
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
        res.json()
      ), // Succeeds
    ]);

    console.log("First Successful Response:", result);
  } catch (error) {
    console.error("All Requests Failed:", error);
  }
}

fetchFirstSuccessful();
