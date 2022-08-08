
const textArea = document.getElementById('editor');
const previewDisplay = document.getElementById('preview');
const editorExpand = document.getElementById('editor-expand');
const previewExpand = document.getElementById('preview-expand');
const editorWrap = document.querySelector('.editor-wrap');
const previewWrap = document.querySelector('.preview-wrap');

previewDisplay.innerHTML = marked.parse(textArea.value);

textArea.onkeyup = function() {
    previewDisplay.innerHTML = marked.parse(this.value);
}

editorExpand.addEventListener('click', () => {
    if (editorExpand.classList.contains('fa-up-right-and-down-left-from-center')) {
        textArea.classList.add('expand');
        previewWrap.style.display = "none";
        editorExpand.classList.remove('fa-up-right-and-down-left-from-center');
        editorExpand.classList.add('fa-down-left-and-up-right-to-center');
    } else if (editorExpand.classList.contains('fa-down-left-and-up-right-to-center')) {
        textArea.classList.remove('expand');
        previewWrap.style.display = "block";
        editorExpand.classList.add('fa-up-right-and-down-left-from-center');
        editorExpand.classList.remove('fa-down-left-and-up-right-to-center');
    }
});

previewExpand.addEventListener('click', () => {
    if (previewExpand.classList.contains('fa-up-right-and-down-left-from-center')) {
        previewDisplay.classList.add('expand');
        editorWrap.style.display = "none";
        previewExpand.classList.remove('fa-up-right-and-down-left-from-center');
        previewExpand.classList.add('fa-down-left-and-up-right-to-center');
    } else if (previewExpand.classList.contains('fa-down-left-and-up-right-to-center')) {
        previewDisplay.classList.remove('expand');
        editorWrap.style.display = "block";
        previewExpand.classList.add('fa-up-right-and-down-left-from-center');
        previewExpand.classList.remove('fa-down-left-and-up-right-to-center');
    }
});
