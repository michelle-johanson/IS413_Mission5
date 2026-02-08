$(document).ready(function() {
    $("#calculateBtn").click(function() {
        // 1. Get the values
        var hoursInput = $("#hours").val();
        var rateInput = $("#hourlyRate").val();

        // 2. Convert to numbers
        var hours = parseFloat(hoursInput);
        var rate = parseFloat(rateInput.replace("$", ""));

        // Error handling: Default to 0 if invalid
        if (isNaN(hours) || hours <= 0) {
            hours = 0;
        }

        // 3. Calculate total
        var total = hours * rate;

        // 4. Display the result
        // .toFixed(2) forces 2 decimal places (e.g. 125.00)
        $("#totalCost").text("$" + total.toFixed(2));

        // 5. Reveal the box (it is hidden by default in your HTML)
        $("#resultBox").show();
    });
});