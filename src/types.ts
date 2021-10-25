// types

// type to represent test data body
type ClientCodeData = {
  code: string,
  language: string,
  testDescription: string,
  buildPrompt?: () => string,
}

export { ClientCodeData };