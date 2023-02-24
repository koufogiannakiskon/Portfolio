const nameField = document.getElementById("name_form");
const emailField = document.getElementById("email_form");
const form = document.querySelector(".contact_form_container");

function SubForm() {
  if (nameField.value.length == 0 || emailField.value.length == 0) {
    const newP = document.createElement("p");
    newP.classList.add("error");
    const ErrorContent = document.createTextNode(
      "Please, fill out all required fields (*)."
    );
    newP.appendChild(ErrorContent);
    form.appendChild(newP);
    setTimeout(function () {
      newP.remove();
    }, 3000);
  } else {
    $.ajax({
      url: "https://api.apispreadsheets.com/data/gYe63FnzepNNkVsw/",
      type: "post",
      data: $("#myForm").serializeArray(),
      success: function () {
        const newP = document.createElement("p");
        newP.classList.add("success");
        const SuccessContent = document.createTextNode(
          "Your message has been send successfully!"
        );
        newP.appendChild(SuccessContent);
        form.appendChild(newP);
        setTimeout(function () {
          newP.remove();
        }, 3000);
        $('input[type="name"], textarea').val("");
        $('input[type="email"], textarea').val("");
      },
      error: function () {
        const newP = document.createElement("p");
        const newContent = document.createTextNode(
          "There was an error sending your message. Please try again."
        );
        newP.appendChild(newContent);
        var form = document.querySelector(".contact_form_container");
        form.appendChild(newP);
        setTimeout(function () {
          newP.remove();
        }, 3000);
      },
    });
  }
}
