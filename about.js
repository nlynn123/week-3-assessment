console.log("hello world");
let form = document.querySelector('#contact')
const image = document.querySelector('#duck')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('You have submitted!');
}


  function showAlert(event) {
	event.preventDefault()
	let myText = "This user is very smart!";
    alert (myText);;
  }


form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', showAlert)