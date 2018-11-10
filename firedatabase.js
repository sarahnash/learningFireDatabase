

// function writeUserData(commentId, name, comment) {
//   firebase.database().ref('comments/' + commentId).set({
//     commentId: firebase.commentId,
//     name: name,
//     comment: document.getElementsByClassName('comment-form').text()
//   })
// }

function init () {
  document.getElementById('submitBtn').addEventListener('click', readComment)
  database.ref('comments/').on('value', function (snapshot) {
    snapshot.forEach(function (item) {
      console.log(item.val())
      document.getElementById('object').innerHTML += `<div class="card" style="width: calc(100% - 20px); margin: 10px;">
      <div class="card-body">
        <h5 class="card-title">${item.val().username}</h5>
        <p class="card-text">${item.val().comment}</p>
      </div>
    </div>`
    })
  })
}

document.addEventListener('DOMContentLoaded', init)

function readComment (e) {
  // needs to read the input from the textarea tag
  console.info('i clicked it')
  e.preventDefault()
  var userComment = document.getElementById('textarea').value
  console.log(userComment)
  writeComment(userComment)
}

function writeComment (userComment) {
  // needs to write the comment to the fire database
  console.log('write me')
  var myData = {
    username: 'sarah',
    comment: userComment
  }
  var newPostKey = database.ref().child('comments').push().key

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {}
  updates['/comments/' + newPostKey] = myData
  database.ref().update(updates)
}



// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDwiMu3Dkmtbl3OCP_4Y6Vx66f_jXpLNnU',
  authDomain: 'learningfiredatabase.firebaseapp.com',
  databaseURL: 'https://learningfiredatabase.firebaseio.com',
  projectId: 'learningfiredatabase',
  storageBucket: 'learningfiredatabase.appspot.com',
  messagingSenderId: '926338231190'
}

firebase.initializeApp(config)

var database = firebase.database()

// get elements
// const preObject = document.getElementById('object')

// // create references
// const dbRefObject = firebase.database().ref().child('object')

// // sync object changes
// dbRefObject.on('value', snap => {
//   preObject.innerText = JSON.stringify(snap.val(), null, 3)
// })

//   var bigOne = document.getElementById('bigOne')
//   var dbRef = firebase.database().ref().child('text')
//   dbRef.on('value', snap => bigOne.innerText = snap.val())
