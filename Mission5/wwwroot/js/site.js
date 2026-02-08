// jQuery code for the tutoring calculator
$(document).ready(function() {
    // Set the hourly rate
    const hourlyRate = 25.00;

    // Handle calculate button click
    $('#calculateBtn').click(function() {
        calculateTotal();
    });

    // Allow Enter key to trigger calculation
    $('#hours').keypress(function(event) {
        if (event.which === 13) { // Enter key
            calculateTotal();
        }
    });

    // Clear error message when user starts typing
    $('#hours').on('input', function() {
        $('#hours-error').removeClass('show');
        $(this).removeClass('error-input');
    });

    function calculateTotal() {
        // Get the hours value
        const hoursInput = $('#hours').val();
        const hours = parseFloat(hoursInput);

        // Validation
        if (!hoursInput || hoursInput.trim() === '') {
            showError();
            return;
        }

        if (isNaN(hours) || hours <= 0) {
            showError();
            return;
        }

        // Calculate total
        const total = hours * hourlyRate;

        // Display result
        $('#totalCost').text('$' + total.toFixed(2));
        $('#resultBox').fadeIn(300);

        // Clear error state
        $('#hours-error').removeClass('show');
        $('#hours').removeClass('error-input');
    }

    function showError() {
        $('#hours-error').addClass('show');
        $('#hours').addClass('error-input');
        $('#resultBox').fadeOut(300);
    }
});