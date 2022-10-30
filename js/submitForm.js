



function SubForm() {
    $.ajax({
        url: 'https://api.apispreadsheets.com/data/gYe63FnzepNNkVsw/',
        type: 'post',
        data: $("#myForm").serializeArray(),
        success: function () {
            const newP = document.createElement("p");
            const newContent = document.createTextNode("Your message has been send successfully!");
            newP.appendChild(newContent);
            const form = document.querySelector('.contact_form_container');
            form.appendChild(newP);
            setTimeout(function () {
                newP.remove();

            }, 3000);
            $('input[type="name"], textarea').val('');
            $('input[type="email"], textarea').val('');
        },
        error: function () {
            const newP = document.createElement("p");
            const newContent = document.createTextNode("There was an error sending your message. Please try again.");
            newP.appendChild(newContent);
            var form = document.querySelector('.contact_form_container');
            form.appendChild(newP);
            setTimeout(function () {
                newP.remove();
            }, 3000);
        }
    });
}