let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');
let dirham = document.getElementById('dirham');

function round(num) { return Math.round(num*100)/100; }

// USD → others
dollar.oninput = function() {
    let value = Number(dollar.value);
    if (!value) { pound.value=''; dirham.value=''; return; }
    pound.value = round(value * 47.3);
    dirham.value = round(value / 0.108);
}

// EGP → others
pound.oninput = function() {
    let value = Number(pound.value);
    if (!value) { dollar.value=''; dirham.value=''; return; }
    dollar.value = round(value / 47.3);
    dirham.value = round((value / 47.3) / 0.108);
}

// MAD → others
dirham.oninput = function() {
    let value = Number(dirham.value);
    if (!value) { dollar.value=''; pound.value=''; return; }
    dollar.value = round(value * 0.108);
    pound.value = round(value * 5.1);
}
