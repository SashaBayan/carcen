export const SAY_HELLO = 'SAY_HELLO'
export const SAY_GOODBYE = 'SAY_GOODBYE'

export function sayHi() {
  return {
    type: SAY_HELLO
  }
}

export function sayBye() {
  return {
    type: SAY_GOODBYE
  }
}
