const promise = new Promise((resolveee, reject) => {
  resolveee('this is my resolved data');
});

promise.then((data) => {
  console.log(data);
  console.log('2nd line hello dev server');
})
