const arr = ["\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\", "\r|"];

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