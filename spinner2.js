//add the \n at the end of the array for line break
const arr = ["\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\", "\r|", "\n"];

const timeout = function() {
  let delay = 100;
  for (let i of arr) {
    setTimeout(() => {
      process.stdout.write(i);
    }, delay);
    delay += 200;
  }
};

timeout();