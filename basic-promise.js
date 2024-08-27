const newPromise = new Promise((resolve, reject) => {
  resolve('Hello');
  // reject('Error');
});

newPromise.then(
  (result) => {
    console.log(result); // Hello
  },
  (error) => {
    console.log("There shouldn't be an error");
  }
);
