// Yaha ek naya Promise banaya gaya hai.
// new Promise() ke andar ek callback function hota hai jisme 2 parameters milte hain:
// resolve() → Success
// reject() → Error
const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  setTimeout(function () {
    // Is code ko 1 second baad execute karna.
    console.log("Async Task is complete");
    resolve(); // call hua
  }, 1000);
});

// .then() tabhi chalega jab Promise successfully resolve ho jayega.
promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // Yaha Promise success hone ke saath ek object return kar raha hai.
    resolve({ username: "Nirdesh", email: "nir@example.com" });
  }, 1000);
});

// user parameter ke andar wahi object aa jayega jo resolve() ne bheja tha.
promiseThree.then(function (user) {
  console.log(user);
  console.log(user.username);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let errer = true;
    if (!errer) {
      resolve({ username: "nirdesom", password: "123" });
    } else {
      reject("ERRER: Something Want Wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    // Previous then() ka return value yaha aayega
    console.log(username);
  })
  .catch(function (errer) {
    console.log(errer);
  })
  .finally(() => console.log("the promise is either resolved or rejected"));
// finally() Promise ka ek method hai jo hamesha execute hota hai, chahe Promise resolve ho ya reject.

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let erre = false;
    if (!erre) {
      resolve({ user: "javascript", password: "123" });
    } else {
      reject("ERRER: js went wrong");
    }
  }, 1000);
});

// // Async function banaya
async function consumePromiseFive() {
  try {
    // Promise ke resolve hone ka wait karega
    const response = await promiseFive;
    console.log(response);  // resolve() se jo object mila wo print hoga

  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();


// async function getAllUser() {
//   try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await response.json();
//     console.log(data);
//     // console.log(data[2].email);
//     data.forEach(function(e){
//       console.log(e.email);
//     })
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
}).catch((e) => {
  console.log("Errer", e);
})
