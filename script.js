function DataCatcher(name, email, password, gender, city) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.gender = gender;
  this.city = city;
}

function dataCatcher(e) {
  e.preventDefault();
  let dataPicker = new DataCatcher(
    namee.value,
    email.value,
    password.value,
    genderChecker(),
    cityChecker()
  );
  console.table(dataPicker);
}

function cityChecker() {
  if (selectCity.selectedIndex === 0) {
    alert("Please Select City");
  }
  return selectCity.value;
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
let selectCity = document.getElementById("selectCity");
