// Display payment details based on selected option
document.getElementById("paymentType").addEventListener("change", function() {
    const cardDetails = document.getElementById("cardDetails");
    const upiDetails = document.getElementById("upiDetails");

    if (this.value === "card") {
        cardDetails.style.display = "block";
        upiDetails.style.display = "none";
    } else if (this.value === "upi") {
        cardDetails.style.display = "none";
        upiDetails.style.display = "block";
    } else {
        cardDetails.style.display = "none";
        upiDetails.style.display = "none";
    }
});

// Retrieve cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display order summary
function displayOrderSummary() {
    const orderSummaryDiv = document.getElementById("order-summary");
    let total = 0;

    orderSummaryDiv.innerHTML = "";

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "summary-item";
        itemDiv.textContent = `${item.name} - ₹${item.price}`;
        orderSummaryDiv.appendChild(itemDiv);
        total += parseFloat(item.price);
    });

    document.getElementById("total-amount").textContent = `₹${total}`;
}

// Call the display function on page load
displayOrderSummary();

// Handle payment form submission
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Hide the modal
    $('#paymentModal').modal('hide');

    // Create and display the thank you message
    const thankYouMessage = document.createElement("div");
    thankYouMessage.className = "alert alert-success text-center mt-4";
    thankYouMessage.textContent = "Thank You for Shopping with Us!";
    thankYouMessage.style.fontSize = "1.5rem";
    thankYouMessage.style.fontWeight = "bold";
    
    // Append the message to the body or another container
    document.body.appendChild(thankYouMessage);

    // Redirect to the homepage after a 5-second timer
    setTimeout(() => {
        window.location.href = "index.html"; // Change to the correct path of your homepage if needed
    }, 3500); // 5000 milliseconds = 5 seconds
});

