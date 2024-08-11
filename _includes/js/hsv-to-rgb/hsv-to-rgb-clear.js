function hsvToRgbClear()
{
    // Clear input fields
    document.getElementById('r').value = '';
    document.getElementById('g').value = '';
    document.getElementById('b').value = '';
    document.getElementById('hex').value = '';
    document.getElementById('h').value = '';
    document.getElementById('s').value = '';
    document.getElementById('v').value = '';

    // Reset color preview
    document.getElementById('preview').style.backgroundColor = '#000000';
}

