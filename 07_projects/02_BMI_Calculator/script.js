const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault(); // prevent submitting data with URL

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector("#result");

    if(isNaN(height) || height==='' || height<=0){
        result.innerHTML = `please give valid height!`;
    }else if(isNaN(weight) || weight==='' || weight<=0){
        result.innerHTML = `please give valid weight!`;
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        let bmiCategory = '';

        if(bmi<18.5){
            bmiCategory = 'Underweight';
        }else if(bmi>=18.5 && bmi<25){
            bmiCategory = 'Normal weight';
        }else if(bmi>=25 && bmi<30){
            bmiCategory = 'Overweight';
        }else{
            bmiCategory = 'Obese';
        }

        document.querySelector('#height').value = '';
        document.querySelector('#weight').value = '';
        result.innerHTML = `<p>BMI Index: ${bmi}</p><p>${bmiCategory}</p>`;
    }
});