
const textArea = document.getElementById('editor');
const previewDisplay = document.getElementById('preview');

textArea.onkeyup = function() {
    previewDisplay.innerHTML = marked.parse(this.value);
}
