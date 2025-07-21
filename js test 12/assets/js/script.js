
var usersNumber = parseInt(prompt("Enter number of users"));

var users = [];

function addUser(name, id, balance) {
  var user = {
    name: name,
    id: id,
    balance: balance
  };
  users.push(user);
}

function editUserBalanceById(id, newBalance) {

  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users[i].balance = newBalance;
    }
  }

}


for (var i = 0; i < usersNumber; i++) {
  var name = prompt("Enter user name");
  var id = prompt("Enter user id");
  var balance = prompt("Enter user balance");

  addUser(name, id, balance);
}


console.log("Users before editing:");
console.table(users);


var editId = prompt("Enter ID of user to edit balance");
var newBalance = prompt("Enter new balance");

editUserBalanceById(editId, newBalance);


console.log("Users after editing:");
console.table(users);

