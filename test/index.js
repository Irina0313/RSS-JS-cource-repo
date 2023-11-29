import CodeFlask from "./node_modules/codeflask/build/codeflask.module";
//import CodeFlask from "codeflask";


const editorElem = document.getElementById('editor');
console.log(editorElem)
const flask = new CodeFlask(editorElem, { language: 'js', lineNumbers: true });