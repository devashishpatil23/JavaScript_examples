let searchInput = document.querySelector("input");

function myFunc(event) {
  const query = event.target.value;

  fetch(`https://jsonplaceholder.typicode.com/posts?query=${query}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

function debounce(func, delay) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
// Why is This Important?
// Without clearTimeout, every keystroke would trigger an API call after 500ms.
// If you typed 5 characters, 5 API calls would fire, causing
    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

searchInput.addEventListener("input", debounce(myFunc, 500));



// Definition: Debouncing is a technique used to limit the rate at which a function is executed.
// Purpose: It ensures a function is called only once after a specified delay of inactivity, instead of being called continuously during rapid events.

// 


// Search Input: Fetch suggestions only when the user stops typing.
// Window Resize: Avoid redundant layout recalculations during resizing.
// Button Clicks: Prevent double submissions in forms.
// Scroll Events: Optimize actions like infinite scrolling or animations.
