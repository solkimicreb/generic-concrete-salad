export default function autoBlur(element = window) {
  window.addEventListener('keypress', ev => {
    if (ev.charCode === 13 || ev.which === 13 || ev.keyCode === 13) {
      element.form;
    }
  });
}
