const calculatebtn = document.getElementById("btn2")

calculatebtn.addEventListener("click", () => {
    let from = document.getElementById("from");
    let to = document.getElementById("To");
    let input = document.getElementById("input").value;
    let result = document.getElementById("result");
    let resetbtn = document.getElementById("btn1");
    let fromunit = from.value;
    let tounit = to.value;
    let calculatedTemperature;

    if (fromunit === "celsius" && tounit === "fahrenheit") {
        calculatedTemperature = parseFloat(input * 1.800 + 32);
    }

    else if (fromunit === "celsius" && tounit === "kelvin") {
        calculatedTemperature = parseFloat(input) + 273.15;
    }

    else if (fromunit === "celsius" && tounit === "Rankine") {
        calculatedTemperature = parseFloat(input * 1.800) + 491.67;
    }

    else if (fromunit === "fahrenheit" && tounit === "celsius") {
        calculatedTemperature = parseFloat(input - 32) * 5 / 9;
    }

    else if (fromunit === "fahrenheit" && tounit === "kelvin") {
        calculatedTemperature = parseFloat((input) + 459.67) * 5 / 9;
    }

    else if (fromunit === "fahrenheit" && tounit === "Rankine") {
        calculatedTemperature = parseFloat(input) + 459.67 ;
    }

    else if (fromunit === "kelvin" && tounit === "celsius") {
        calculatedTemperature = parseFloat(input) - 273.15;
    }

    else if (fromunit === "kelvin" && tounit === "fahrenheit") {
        calculatedTemperature = parseFloat((input) * 1.800) - 459.67;
    }

    else if (fromunit === "kelvin" && tounit ==="Rankine") {
        calculatedTemperature = parseFloat(input) * 1.800;
    }

    else if (fromunit === "Rankine" && tounit === "celsius") {
        calculatedTemperature = parseFloat((input * 0.55)) - 273.5;
    }

    else if (fromunit === "Rankine" && tounit === "fahrenheit") {
        calculatedTemperature = parseFloat(input) - 459.67;
    }

    else if (fromunit === "Rankine" && tounit === "Rankine") {
        calculatedTemperature = parseFloat(input) * 0.55;
    }

    else {
        calculatedTemperature = input;
    }

    result.innerHTML = "Resultant Temperature is :" + calculatedTemperature.toFixed(2);

    resetbtn.addEventListener("click", () => {
        result.innerHTML = "";
        document.getElementById("input").value="";
    })

})