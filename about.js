console.log("hello world");

const image = document.querySelector('#duck')

function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


  function showAlert(event) {
	event.preventDefault()
	let myText = "This user is very smart!";
    alert (myText);;
  }



let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', showAlert)