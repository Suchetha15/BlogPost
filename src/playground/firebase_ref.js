const database = firebase.database();

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//     console.log(expenses);
// }, (error) => {
//     console.log('Failed read operation', error);
// });

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});




//   database.ref()
//   .on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is in ${val.location.city} as ${val.job.title}`);
//   });

database.ref('expenses').push({
    description: "Rent",
    note: "expense 1",
    amount: 123,
    createdAt: 0
});

//   database.ref('/location')
//     .once('value', )
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Failed read operation', error);
//     });

//   database.ref().set({
//       name: "Suchetha",
//       stresslevel: 5,
//       job: {
//         title: "Software Developer",
//         company: "Google"
//       },
//       location: {
//           city: "Bengaluru",
//           Country: "India"
//       },
//       age: 24
//   }).then(() => {
//         console.log('Data is saved!!');
//     }).catch((error) => {
//         console.log('This failed: ', error);
//     });

//  database.ref().update({
//     stresslevel: 8,
//     'job/company': 'Amazon',
//     'location/city': 'Bangalore'
//  });

// database.ref("/age").remove().then(() => {
//     console.log('Age was removed');
// }).catch((error) => {
//     console.log('This failed: ', error);
// });
//alernate way to remove database.ref("/age").set(null);


