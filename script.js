function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (!weight || !height) {
    document.getElementById("result").textContent = "Bitte gültige Werte eingeben!";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Untergewicht";
  else if (bmi < 25) category = "Normalgewicht";
  else if (bmi < 30) category = "Übergewicht";
  else category = "Adipositas";

  document.getElementById("result").textContent = `Dein BMI: ${bmi} (${category})`;
}
