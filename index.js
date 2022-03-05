// const input = document.querySelector('input');
// function clickAlert() {
//     alert ('I was clicked !!!!');
// }
// input.addEventListener('click', clickAlert);

// const input = document.querySelector('input');
// input.addEventListener('click', function(){
//     alert ('I was clicked!!');
// });

// const input = document.querySelector('input');

// const addingEventListener = input.addEventListener('click', function(){
//     alert ('i was clicked!');
// });
// console.log(addingEventListener());

function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
    alert('I was clicked!');
});
}
