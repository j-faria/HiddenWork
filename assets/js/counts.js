function setBTDT(postId) {
    console.log(postId);
    database.ref(postId)
            .child('btdt')
            .set(firebase.database.ServerValue.increment(1));
}

function setTIHI(postId) {
    // console.log(postId);
    database.ref(postId)
            .child('tihi')
            .set(firebase.database.ServerValue.increment(1));
}

function getBTDT(postId) {
    // console.log(postId);
    var ref = database.ref(postId + '/btdt');
    ref.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data == 0 | data == null) {
        document.getElementById(postId + '-btdt').innerHTML = `BTDT`;
      }
      else {
        document.getElementById(postId + '-btdt').innerHTML = `BTDT (${data})`;
      }
    });
}

function getTIHI(postId) {
    // console.log(postId);
    var ref = database.ref(postId + '/tihi');
    ref.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data == 0) {
        document.getElementById(postId + '-tihi').innerHTML = `TIHI`;
      }
      else {
        document.getElementById(postId + '-tihi').innerHTML = `TIHI (${data})`;
      }
    });
}