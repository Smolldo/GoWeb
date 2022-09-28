const refs = {
    form: document.querySelector('.callback-form'),
    inputs: document.querySelectorAll('.js-input'),
    nameInput: document.querySelector('.js-input-name'),
    emailInput: document.querySelector('.js-input-email'),
    submitBtn: document.querySelector('.js-button'),
    errText: document.querySelector('.error-text')
}


refs.form.onsubmit = () =>{
        emptyInputs = Array.from(refs.inputs).filter(input => input.value === '')

        refs.inputs.forEach(i => {
            if(i.value == ''){
                refs.errText.classList.add('is-visible')
            }
            else{
                refs.errText.classList.remove('is-visible')
            }

        });

        if(emptyInputs !== 0){
            return false;
        }

}
