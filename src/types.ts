// types

// type to represent test data body
type ClientCodeData = {
  code: string,
  language: string, // enumerate this
  testDescription: string,
  buildPrompt?: () => string,
}

export { ClientCodeData };