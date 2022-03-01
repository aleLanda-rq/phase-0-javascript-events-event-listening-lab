
// //good for one element
// const input = document.getElementById('input')
// .addEventListener('click',()=> alert('I was clicked!'));

//multiple elements
const input = document.getElementById('input');

function clickAlert(){
    alert('I was clicked');
    //we would put the multiple elements here
}
function addingEventListener() {
input.addEventListener('click', clickAlert);

}
