function DataCatcher(name, email, password, gender) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.gender = gender;
  // this.city = city;
}

function genderChecker() {
  for (let i = 0; i < gender; i++) {
    if (gender[i].checked) {
      genderFound(gender[i].value);
      break;
    }
  }
}

function genderFound(genderValue) {
  console.log("select gender : " + genderValue);
}

function dataCatcher(e) {
  e.preventDefault();
  let dataPicker = new DataCatcher(namee.value, email.value, password.value);
  console.table(dataPicker);
}

let namee = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let gender = document.getElementsByName("gender");
// let male = document.getElementById("male");
// let female = document.getElementById("female");
// let city = document.getElementById("name");
