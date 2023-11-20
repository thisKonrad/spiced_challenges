const icon = document.querySelector('[data-js="icon"]');
const button3 = document.querySelector('[data-js="sleep-3-button"]');
const button5 = document.querySelector('[data-js="sleep-5-button"]');
const button10 = document.querySelector('[data-js="sleep-10-button"]');
const body = document.body;

// --v-- code here --v--

button3.addEventListener("click", async () => {
  async function sleep3Seconds() {
    await sleep(3);
    icon.textContent = "⏰";
  }
  sleep3Seconds()
  icon.textContent = "💤";
});


button5.addEventListener("click", () => {
  async function sleep5Seconds() {
    await sleep(5);
    icon.textContent = "⏰";
  }
  sleep5Seconds()
  icon.textContent = "💤";
});

function handleSleepFor10Button() {
  icon.textContent = "💤";
  icon.textContent = "⏰";
}

button10.addEventListener("click", handleSleepFor10Button);


// --^-- code here --^--



// returns a Promise that resolves after x seconds
function sleep(seconds) {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
  return sleepPromise;
}
