const outputJokes = document.querySelector('#jokes-show');
const submitForm = document.querySelector('#submit-form');

submitForm.addEventListener('submit', e => {
    // Ajax
    let inputNumber = document.querySelector('#inputNumber').value;
    let result = '';

    // Initial Jokes Value = 0
    if (inputNumber.trim() === ''){
        inputNumber = 0;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${inputNumber}`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            // Jokes convert Json Format
            const jokes = JSON.parse(this.responseText);
            console.log(jokes);

            // for every jokes in loop
           if ( inputNumber !== ''){
               jokes.value.forEach(function(jk) {
                   result += `<p class="alert alert-danger mt-3">${jk.joke}</p>`
                   console.log(jk.joke);
               });
           } else {
               result = `<p class="alert alert-danger mt-3"> ${jokes.value.joke} </p>`
           }

            outputJokes.innerHTML = result;
        }
    }
    xhr.send();

    e.preventDefault();
});
