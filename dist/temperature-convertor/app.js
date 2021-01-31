const celciusInput = document.querySelector('#celcius > input');
const faherenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNumber(number){
    return Math.round(number*100)/100;
}
function celciusToFahrenteitAndKelvin(){
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp +273.15;
    faherenheitInput.value = roundNumber(fTemp);
    kelvinInput.value =roundNumber(kTemp);
}
function FahrenteitToCeliusAndKelvin(){
    const fTemp = parseFloat(faherenheitInput.value);
    const cTemp = (fTemp - 32) * ( 5/9);
    const kTemp = (fTemp + 459.67)* 5/9;
    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
}
function kelvinToFahrenteitAndCelcius(){
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 237.15;
    const fTemp = 9/5 * (kTemp-273) +32;
    celciusInput.value = roundNumber(cTemp);
    faherenheitInput.value = roundNumber(fTemp);
}

function main(){

    celciusInput.addEventListener('input', celciusToFahrenteitAndKelvin );

    faherenheitInput.addEventListener('input', FahrenteitToCeliusAndKelvin );
    
    kelvinInput.addEventListener('input', kelvinToFahrenteitAndCelcius );
}
main();