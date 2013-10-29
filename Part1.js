function main() {

    alert("Let's figure out which numbers are even or odd!");
    var intInput = prompt('Please input an integer', 1);
    var input = (Number(intInput));

    var out = "";
    var valid = Number;

    if (!input || !valid) {
        var error = "Please enter a valid input between 5-20."
        alert(error);
    }

    else {
        if (input % 2 == 0) {
            out = "The number" + input + " is an even number."
        }

        else {
            out = "The number" + input + " is an odd number."
        }
    }
}