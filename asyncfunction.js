
// //code:- 1
// async function sayHello() {
//     return "Hello, World!";
//   }

//   sayHello().then(m=>{
//     console.log(m);

//   }) // Logs "Hello, World!"

// code: -2

// function fetchNumber() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//        resolve("HEllo ruben kaisa hai");

//       }, 2000);; // Resolves after 2 seconds
//     });
//   }

//   async function getvalue() {
//     const number = await fetchNumber();
//     console.log(number); // Logs 42 after 2 seconds
//   }

//   getvalue();



// function severdata() {
//     return new Promise((resolve) => {
//         setTimeout(() => {

//             resolve("hello bro", 112112)

//         }, 2000);
//     })
// }


// async function recivedata() {
//     let data = await severdata()
//     console.log(data);

// }

// recivedata()




// code:- 3

// async function stepOne() {
//     return "Step 1 Complete";
//   }
  
//   async function stepTwo() {
//     return "Step 2 Complete";
//   }
  
//   async function executeSteps() {
//     const result1 = await stepOne();
//     console.log(result1);
  
//     const result2 = await stepTwo();
//     console.log(result2);
//   }
  
//   executeSteps();
  // Logs: 
  // Step 1 Complete
  // Step 2 Complete
  


// code:-4


// function mightFail() {
//     return new Promise((resolve, reject) => {
//       const success = Math.random() > 0.5;
//       setTimeout(() => {
//         success ? resolve("Success!") : reject("Failure!");
//       }, 1000);
//     });
//   }
  
//   async function executeTask() {
//     try {
//       const result = await mightFail();
//       console.log(result);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
  
//   executeTask();
  
// code:-5

// async function fetchData1() {
//     return new Promise(resolve => setTimeout(() => resolve("Data 1"), 1000));
//   }
  
//   async function fetchData2() {
//     return new Promise(resolve => setTimeout(() => resolve("Data 2"), 1500));
//   }
  
//   async function getData() {
//     const results = await Promise.all([fetchData1(), fetchData2()]);
//     return results;
//   }
  
//   getData().then(data => {
//     console.log(data[0], data[1]); // Logs "Data 1 Data 2" after 1.5 seconds
//   });
  

// code:-6

// async function slowTask(name, delay) {
//     return new Promise(resolve =>
//       setTimeout(() => resolve(`${name} done!`), delay)
//     );
//   }
  
//   async function sequentialExecution() {
//     const task1 = await slowTask("Task 1", 1000);
//     const task2 = await slowTask("Task 2", 2000);
//     return { task1, task2 };
//   }
  
//   sequentialExecution().then(({ task1, task2 }) => {
//     console.log(task1); // Logs "Task 1 done!"
//     console.log(task2); // Logs "Task 2 done!"
//   });
  
//   async function parallelExecution() {
//     const task1 = slowTask("Task 1", 1000);
//     const task2 = slowTask("Task 2", 2000);
//     const results = await Promise.all([task1, task2]);
//     return results;
//   }
  
//   parallelExecution().then(results => {
//     console.log(results[0]); // Logs "Task 1 done!"
//     console.log(results[1]); // Logs "Task 2 done!"
//   });
  

// code:-7


// async function fetchUser() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const user = await response.json();
//     return user;
//   }
  
//   fetchUser().then(user => {
//     console.log(user);
//   });
  

// code:8

// async function fetchData() {
//     return new Promise(resolve =>
//       setTimeout(() => resolve("Fetched Data"), 1000)
//     );
//   }
  
//   async function continuouslyFetchData() {
//     while (true) {
//       const data = await fetchData();
//       console.log(data);
//     }
//   }
  
  // Uncomment to test the infinite loop
  // continuouslyFetchData().catch(console.error);
  


// code:9


async function unreliableFetch() {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.7;
      setTimeout(() => {
        success ? resolve("Fetched Successfully") : reject("Fetch Failed");
      }, 500);
    });
  }
  
  async function fetchWithRetries(retries) {
    for (let i = 0; i < retries; i++) {
      try {
        const result = await unreliableFetch();
        return result;
      } catch (error) {
        if (i === retries - 1) throw new Error("All attempts failed");
      }
    }
  }
  
  fetchWithRetries(5)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err.message);
    });
  