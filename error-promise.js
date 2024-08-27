const newPromise1 = new Promise((resolve, reject) => {
  reject('An error occurred in Promise1');
});

newPromise1.then(
  (result) => {
    console.log(result); // It is not invoked
  },
  (error) => {
    console.log(error); // 'An error occurred in Promise1'
  }
);

const newPromise2 = new Promise((resolve, reject) => {
  reject('An error occurred in Promise2');
});

newPromise2
  .then((result) => {
    console.log(result); // It is not invoked
  })
  .catch((error) => {
    console.log(error); // 'An error occurred in Promise2'
  });
