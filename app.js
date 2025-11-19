function gradeCalculator() {

    let studentName = document.getElementById("studentName").value;
    let grade1 = parseFloat(document.getElementById("grade1").value);
    let grade2 = parseFloat(document.getElementById("grade2").value);
    let grade3 = parseFloat(document.getElementById("grade3").value);
    let result = document.getElementById("result");

    let average = (grade1 + grade2 + grade3) / 3;

    if (average >= 70) {

    result.textContent = `Congradulations ${studentName} you passed! Grade Average: ${average.toFixed(2)}`;
    } else {
        result.textContent = `Keep practicing ${studentName}. Grade Average: ${average.toFixed(2)}`;

    }
    
}