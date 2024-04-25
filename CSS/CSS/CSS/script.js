function convert() {
  const celsius = document.getElementById('celsius').value;
  const fahrenheit = document.getElementById('fahrenheit').value;
  const result = document.getElementById('result');
  const calculation = document.getElementById('calculation');

  if (celsius !== '') {
    const f = (celsius * 9) / 5 + 32;
    result.textContent = `Hasil konversi: ${f.toFixed(2)} Fahrenheit`;
    calculation.textContent = `( ${celsius} × 9/5 ) + 32 = ${f.toFixed(2)} Fahrenheit`;
  } else if (fahrenheit !== '') {
    const c = ((fahrenheit - 32) * 5) / 9;
    result.textContent = `Hasil konversi: ${c.toFixed(2)} Celsius`;
    calculation.textContent = `( ${fahrenheit} - 32 ) × 5/9 = ${c.toFixed(2)} Celsius`;
  } else {
    result.textContent = 'Masukkan suhu untuk dikonversi';
    calculation.textContent = '';
  }
}

function reset() {
  document.getElementById('celsius').value = '';
  document.getElementById('fahrenheit').value = '';
  document.getElementById('result').textContent = '';
  document.getElementById('calculation').textContent = '';
}

function reverse() {
  const celsius = document.getElementById('celsius').value;
  const fahrenheit = document.getElementById('fahrenheit').value;

  document.getElementById('celsius').value = fahrenheit;
  document.getElementById('fahrenheit').value = celsius;
  document.getElementById('result').textContent = '';
  document.getElementById('calculation').textContent = '';
}
