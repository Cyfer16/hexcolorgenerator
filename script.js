function updateColor() {
    let selectedColor = document.getElementById('colorPicker').value;
    document.getElementById('colorBox').style.backgroundColor = selectedColor;
    document.getElementById('hexCode').innerText = selectedColor.toUpperCase();
}
