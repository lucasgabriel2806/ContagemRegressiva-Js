// Variáveis
let txt_days = document.getElementById('days');
let txt_hours = document.getElementById('hours');
let txt_minutes = document.getElementById('minutes');
let txt_seconds = document.getElementById('seconds');

// testando pegar dia

let days = new Date();

txt_days.innerHTML = days.getDay();