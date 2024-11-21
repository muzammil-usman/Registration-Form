function DataCatcher(name, email, password, gender) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.gender = gender;
}

function dataCatcher(e) {
  e.preventDefault();
  let dataPicker = new DataCatcher(
    namee.value,
    email.value,
    password.value,
    genderChecker()
  );
  console.table(dataPicker);
}

function genderChecker() {
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked == true) {
      return gender[i].value;
    }
  }
}

let namee = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let gender = document.getElementsByName("gender");
