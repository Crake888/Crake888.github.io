function splitName() {
    // Отримати значення введеного ПІБ
    var fullName = document.getElementById("input").value;

    // Розділити ПІБ на прізвище, ім'я та по-батькові
    var nameParts = fullName.split(" ");

    // Записати значення у відповідні поля
    document.getElementById("lastName").value = nameParts[0] || "";
    document.getElementById("firstName").value = nameParts[1] || "";
    document.getElementById("middleName").value = nameParts[2] || "";
  }