const loadExternalJS_script = (script_link) => {
  let recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('src', script_link)
  document.head.appendChild(recaptchaScript)
}

module.exports = {
  loadExternalJS_script
}