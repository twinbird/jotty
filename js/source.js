function save() {
	let v = editor.value;
	localStorage.setItem('note', v);
}

function load() {
	let v = localStorage.getItem('note');
	editor.value = v;
}
	
document.addEventListener('DOMContentLoaded', function() {
	let editor = document.getElementById('editor');
	
	editor.addEventListener('input', save);
	load();
});
