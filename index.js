// const form = document.getElementById('enrollmentForm');

//         form.addEventListener('submit', function (event) {
//             event.preventDefault(); // Prevent default form submission

//             const formData = new FormData(form);

//             fetch(form.action, {
//                 method: 'POST',
//                 body: formData,
//                 headers: {
//                     'Accept': 'application/json'
//                 }
//             })
//             .then(response => {
//                 if (response.ok) {
//                     alert("Your enrollment request has been submitted successfully!"); // Show success alert
//                     form.reset(); // Reset the form
//                 } else {
//                     alert("An error occurred. Please try again later."); // Show error alert
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 alert("An error occurred. Please check your internet connection and try again."); // Show error alert for network issues
//             });
//         });