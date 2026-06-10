
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const message = document.querySelector('#weight-guide')
    // console.log(height)

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    } else if(weight === "" || height < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`

        if(bmi < 18.6){
            message.innerHTML = `Under Weight = Less than 18.6`
        } else if(bmi >= 18.6 && bmi <= 24.9){
            message.innerHTML = `Normal Range = 18.6 and 24.9`
        } else {
            message.innerHTML = `Overweight = Greater than 24.9`
        }
    }

})
