// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }


const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const place = document.getElementById('place');

form.addEventListener('submit',e =>{
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};


const validateInputs = () => {
    const firstnameValue = firstname.ariaValueMax.trim();
    const lastnameValue = lastname.ariaValueMax.trim();
    const placeValue = place.ariaValueMax.trim();

   
    if(firstnameValue == ''){
        setError(firstnameValue, 'firstname is required');
}else{
    setSuccess(firstname);
}

if(lastnameValue == ''){
    setError(lastnameValue, 'lastname is required');
}else{
setSuccess(lastname);
}

if(placeValue == ''){
    setError(placeValue, 'place is required');
}else{
setSuccess(place);
}

};
