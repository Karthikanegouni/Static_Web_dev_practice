let myFormEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");
let statusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");


let formData ={
  name:"",
  email:"",
  status:"Active",
  gender:"male"
};


statusEl.addEventListener('change',function(event){
  formData.status=event.target.value;
  console.log(formData);
});

genderMaleEl.addEventListener('change',function(event){
  formData.gender=event.target.value;
})

genderFemaleEl.addEventListener('change',function(event){
  formData.gender=event.target.value;
})


nameEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    nameErrMsg.textContent = "Required*";
  } else {
    nameErrMsg.textContent = "";
  }
  formData.name=event.target.value;
});

emailEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    emailErrMsg.textContent = "Required*";
  } else {
    emailErrMsg.textContent = "";
  }
  formData.email=event.target.value;
});


function submitFormData(formData){
  if(formData.name==="" || formData.email===""){
    alert("Invalid Name or Email");
  }
  else{
    let url = "https://gorest.co.in/public-api/users";
    let options={
      method:"POST",
      headers:{
        "content-Type":"application/json",
        accept:"application/json",
        authorization:"Bearer 2b9c437e03653a8381f1abfdf752c738cf7834e38a4f7577feea6b3062168ac6"
      },
      body:JSON.stringify(formData)
    }

    fetch(url,options)
    .then(function(response){
      return response.json();
    })
    .then(function(jsonData){
      console.log(jsonData);
        if(jsonData.code===422){
          if(jsonData.data[0].message==="has already been taken"){
            emailErrMsg.textContent="Email Already Exists";
          }
        }
    });
  }
};


myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  submitFormData(formData);
});
