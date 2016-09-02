function login() {
  window.location.replace("/login");
}

function sign() {
  window.location.replace("/signUp");
}

function addNewJob() {
  window.location.replace("jobAdd");
}

function candidates() {
  window.location.replace("candidates");
}

function edit() {
  window.location.replace("viewJob");
}

function jobs() {
  window.location.replace("availableJobs");
}

function validateEmail() {
  var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailObj = document.getElementsByTagName('input')[0];
  var passwdObj = document.getElementsByTagName('input')[1];
  var passwdVal = passwdObj.value;
  var emailVal = emailObj.value;
  document.getElementById('email-result-popup').innerHTML = "";
  emailObj.setAttribute("class", "txtfield-size");
  document.getElementById('passwd-result-popup').innerHTML = "";
  passwdObj.setAttribute("class", "txtfield-size");
  if (!emailVal.trim().length) {
    emailObj.setAttribute("class", "txt-modified-style");
    document.getElementById('email-result-popup').innerHTML = "Email is required";
    emailObj.setAttribute("id", "animation");
  } else if (!validEmail.test(emailVal)) {
    emailObj.value = "";
    emailObj.setAttribute("class", "txt-modified-style");
    document.getElementById('email-result-popup').innerHTML = "Email is invalid";
    emailObj.setAttribute("id", "animation");
  }
  if (!passwdVal.trim().length) {
    passwdObj.setAttribute("class", "txt-modified-style");
    document.getElementById('passwd-result-popup').innerHTML = "Password is incorrect";
    passwdObj.setAttribute("id", "animations");
  }
}

function validateSignUp() {
  validateName();
  validatePasswd();
  validateSignUpEmail();
  validateAddress();
  validateCheckbox();
  validatePhNo();
  validateGender();
  validateResume();
}

function changePassword() {
  validateCurrent();
  checkNewPasswd();
}

function validateJob() {
  validateCompanyName();
  validatePost();
  validateSalary();
  validateBond();
  validatePlace();
}

function validateProfile() {
  var checktrue;
  var name, address, phno, gender, privilage;
  name = validateName();
  address = validateAddress();
  phno = validatePhNo();
  gender = validateProfileGender();
  privilage = validateProfilePrivilage();
  resume = validateResume();
  checktrue = name * address * phno * gender * privilage * resume;
  if (checktrue === 1) {
    document.getElementById('updateForm').submit();
  }
}

function validateName() {
  var fnameObj = document.getElementsByName('fname')[0];
  var fnameVal = fnameObj.value.trim();
  var fnameErrorObj = document.getElementById('fname-notification');
  var fnameErrorVal = fnameErrorObj.innerHTML.trim();
  fnameErrorObj.innerHTML = "";
  fnameObj.setAttribute("id", "firstName");
  if (!fnameVal.trim().length) {
    validateNull(fnameErrorObj, fnameObj);
  } else {
    return 1;
  }
}

function validateCompanyName() {
  var nameObj = document.getElementsByName('company')[0];
  var nameVal = nameObj.value.trim();
  var nameErrorObj = document.getElementById('company-notification');
  nameErrorObj.innerHTML = "";
  nameObj.setAttribute("id", "firstName");
  if (!nameVal.trim().length) {
    validateNull(nameErrorObj, nameObj);
  }
}

function validatePost() {
  var postObj = document.getElementsByName('post')[0];
  var postVal = postObj.value.trim();
  var postErrorObj = document.getElementById('post-notification');
  postErrorObj.innerHTML = "";
  postObj.setAttribute("id", "firstName");
  if (!postVal.trim().length) {
    validateNull(postErrorObj, postObj);
  }
}

function validateSalary() {
  var salaryObj = document.getElementsByName('salary')[0];
  var salaryVal = salaryObj.value.trim();
  var salaryErrorObj = document.getElementById('salary-notification');
  salaryErrorObj.innerHTML = "";
  salaryObj.setAttribute("id", "firstName");
  if (!salaryVal.trim().length) {
    validateNull(salaryErrorObj, salaryObj);
  }
}

function validateBond() {
  var bondObj = document.getElementsByName('bond')[0];
  var bondVal = bondObj.value.trim();
  var bondErrorObj = document.getElementById('bond-notification');
  bondErrorObj.innerHTML = "";
  bondObj.setAttribute("id", "firstName");
  if (!bondVal.trim().length) {
    validateNull(bondErrorObj, bondObj);
  }
}

function validatePlace() {
  var placeObj = document.getElementsByName('place')[0];
  var placeVal = placeObj.value.trim();
  var placeErrorObj = document.getElementById('place-notification');
  placeErrorObj.innerHTML = "";
  placeObj.setAttribute("id", "firstName");
  if (!placeVal.trim().length) {
    validateNull(placeErrorObj, placeObj);
  }
}

function validateId() {
  var idObj = document.getElementsByName('id')[0];
  var idVal = idObj.value.trim();
  var idErrorObj = document.getElementById('id-notification');
  idErrorObj.innerHTML = "";
  idObj.setAttribute("id", "firstName");
  if (!idVal.trim().length) {
    validateNull(idErrorObj, idObj);
  }
}

function validateAddress() {
  var permanentObj = document.getElementsByClassName('permanentfield')[0];
  var permanentVal = permanentObj.value.trim();
  var permanentErrorObj = document.getElementById('permanent-address-notification');
  permanentErrorObj.innerHTML = "";
  permanentObj.setAttribute("id", "address");
  if (!permanentVal.trim().length) {
    validateNull(permanentErrorObj, permanentObj);
    permanentObj.setAttribute("id", "error-style");
  } else {
    return 1;
  }
}

function validatePasswd() {
  var passwordObj = document.getElementsByName('password')[0];
  var passwordVal = passwordObj.value.trim();
  var confirmObj = document.getElementsByName('password')[1];
  var confirmVal = confirmObj.value.trim();
  var len = passwordVal.trim().length;
  var passwordErrorObj = document.getElementById('passwd-notification');
  passwordErrorObj.innerHTML = "";
  var confirmErrorObj = document.getElementById('confirm-passwd-notification');
  confirmErrorObj.innerHTML = "";
  passwordObj.setAttribute("id", "password");
  confirmObj.setAttribute("id", "password");
  if (len < 8 && len != 0) {
    passwordErrorObj.innerHTML = "Password is too short";
    passwordObj.setAttribute("id", "error-style");
  } else if (!passwordVal.trim().length) {
    validateNull(passwordErrorObj, passwordObj);
  }
  if (passwordVal.trim() != confirmVal.trim()) {
    confirmErrorObj.innerHTML = "Password not matching";
    confirmObj.setAttribute("id", "error-style");
  } else if (!confirmVal.trim().length) {
    validateNull(confirmErrorObj, confirmObj);
  }
}

function checkNewPasswd() {
  var newObj = document.getElementsByName('newPassword')[0];
  var newVal = newObj.value.trim();
  var confirmObj = document.getElementsByName('confirmPassword')[0];
  var confirmVal = confirmObj.value.trim();
  var len = newVal.trim().length;
  var newErrorObj = document.getElementById('new-notification');
  newErrorObj.innerHTML = "";
  var confirmErrorObj = document.getElementById('confirm-notification');
  confirmErrorObj.innerHTML = "";
  newObj.setAttribute("id", "password");
  confirmObj.setAttribute("id", "password");
  if (len < 8 && len != 0) {
    newErrorObj.innerHTML = "Password is too short";
    newObj.setAttribute("id", "error-style");
  } else if (!newVal.trim().length) {
    validateNull(newErrorObj, newObj);
  }
  if (newVal.trim() != confirmVal.trim()) {
    confirmErrorObj.innerHTML = "Password not matching";
    confirmObj.setAttribute("id", "error-style");
  } else if (!confirmVal.trim().length) {
    validateNull(confirmErrorObj, confirmObj);
  }
}

function validateCurrent() {
  var currentObj = document.getElementsByName('password')[0];
  var currentVal = currentObj.value.trim();
  var len = currentVal.trim().length;
  var currentErrObj = document.getElementById('current-notification');
  currentErrObj.innerHTML = "";
  if (len < 8 && len != 0) {
    currentErrObj.innerHTML = "Password is incorrect";
  } else if (!currentVal.trim().length) {
    validateNull(currentErrObj, currentObj);
  }
}

function addExperience() {
  var professionalObj = document.getElementById('professional');
  var fresherObj = document.getElementById('fresher');
  var experience = document.getElementsByName('experience')[0];
  if (professionalObj.checked) {
    fresherObj.checked = false;
    experience.setAttribute("id", "newDisplay");
    document.getElementById('privilage').innerHTML = "";
  }
}

function workExperience() {
  var privilageObj = document.getElementsByName('privilage')[0];
  var experience = document.getElementsByName('experience')[0];
  if (privilageObj.value === 'professional') {
    experience.setAttribute("id", "newDisplay");
    document.getElementById('privilage').innerHTML = "";
  }
}

function removeExperience() {
  var professionalObj = document.getElementById('professional');
  var fresherObj = document.getElementById('fresher');
  var experience = document.getElementsByName('experience')[0];
  if (fresherObj.checked) {
    professionalObj.checked = false;
    experience.setAttribute("id", "display");
    document.getElementById('privilage').innerHTML = "";
  }
}

function validateCheckbox() {
  var professionalObj = document.getElementsByName('professional')[0];
  var fresherObj = document.getElementsByName('fresher')[0];
  if (!professionalObj.checked && !fresherObj.checked) {
    document.getElementById('privilage').innerHTML = "Cannot be null";
  }
}

function validateSignUpEmail() {
  var regExp = /^[a-z][a-z\._0-9]*@[a-z]+\.[a-z]{0,3}(\.[a-z]{0,3})?/gm;
  var emailObj = document.getElementsByName('email')[0];
  var emailVal = emailObj.value.trim();
  var emailErrorObj = document.getElementById("email-notification");
  emailErrorObj.innerHTML = "";
  emailObj.setAttribute("id", "email");
  if (!emailVal.trim().length) {
    validateNull(emailErrorObj, emailObj);
  } else if (!regExp.test(emailVal)) {
    checkValidity("email", emailErrorObj, emailObj);
  }
}

function validatePhNo() {
  var phExp = /\d{10}/;
  var phObj = document.getElementsByName('phoneNo')[0];
  var phVal = phObj.value.trim();
  phVal = phVal.replace(/-/g, "");
  var phErrorObj = document.getElementById('phno-notification');
  phErrorObj.innerHTML = "";
  var phlen = phVal.length;
  if (!phVal.trim().length) {
    validateNull(phErrorObj, phObj);
  } else if (!phExp.test(phVal)) {
    checkValidity("phone number", phErrorObj, phObj);
  } else {
    slicePhNo(phObj, phVal);
    phObj.setAttribute("id", "phno");
    phObj.setAttribute("class", "inputfield");
    return 1;
  }
}

function validateGender() {
  var maleObj = document.getElementById("male");
  var femaleObj = document.getElementById("female");
  document.getElementById('gender-notification').innerHTML = "Cannot be null";
  if (maleObj.checked || femaleObj.checked) {
    document.getElementById('gender-notification').innerHTML = "";
  }
}

function changefileName() {
  var cvObj = document.getElementsByName('cv')[0];
  var resumeObj = document.getElementsByName('resume')[0];
  resumeObj.value = cvObj.value;
}

function validateResume() {
  var resumeObj = document.getElementsByName('resume')[0];
  var resumeErrObj = document.getElementById('resume-notification');
  if (resumeObj.value === "") {
    validateNull(resumeErrObj, resumeObj);
  } else {
    resumeErrObj.innerHTML = "";
    return 1;
  }
}

function validateProfileGender() {
  var genderObj = document.getElementsByName('gender')[0];
  var genderErrObj = document.getElementById('gender-notification');
  if (genderObj.value === "") {
    validateNull(genderErrObj, genderObj);
  } else {
    if (genderObj.value != "male" && genderObj.value != "female") {
      checkValidity("gender", genderErrObj, genderObj);
    } else {
      genderErrObj.innerHTML = "";
      return 1;
    }
  }
}

function validateProfilePrivilage() {
  var privilgObj = document.getElementsByName('privilage')[0];
  var privilgErrObj = document.getElementById('privilage-notification');
  if (privilgObj.value === "") {
    validateNull(privilgErrObj, privilgObj);
  } else {
    if (privilgObj.value != "professional" && privilgObj.value != "fresher") {
      checkValidity("privilage", privilgErrObj, privilgObj);
    } else {
      privilgErrObj.innerHTML = "";
      return 1;
    }
  }
}

function slicePhNo(phObj, phVal) {
  phObj.value = phVal.slice(0, 3) + "-" + phVal.slice(3, 6) + "-" + phVal.slice(6, 11);
}

function validateNull(errorobj, fieldobject) {
  errorobj.innerHTML = "Cannot be null";
  fieldobject.setAttribute("id", "error-style");
}

function checkValidity(string, errorobj, fieldobject) {
  errorobj.innerHTML = "Enter valid " + string;
}