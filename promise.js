function fetchData() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const apiCall = true;
      if (apiCall) {
        resolve("received data");
      } else {
        const errMsg = new Error("failed to fetch data");
        reject(errMsg);
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

const fetch1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("success");
  } else {
    reject("Failed");
  }
});

fetch1.then((data) => console.log(data)).catch((err) => console.log(err));

// fetch
const getGitHubProfile = fetch("https://api.github.com/users/devashishpatil23");

getGitHubProfile
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// asyn await

async function getDetials() {
  try {
    const fetchData = await fetch(
      `https://api.github.com/users/devashishpatil23z`
    );
    const resData = await fetchData.json();
    const data = resData;
    return console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getDetials();
