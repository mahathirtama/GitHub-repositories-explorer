const regexNoSpecialCharacter = /^[aA-zZ\s0-9_-]+$/
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const regex = {
  regexNoSpecialCharacter,
  regexEmail,
}
export default regex