import { expect } from 'chai';
import { ClientCodeData } from '../src/types';

describe('client request', function() {
  it('test type', function() {
    const testType: ClientCodeData = {
      code: "#include <iostream> int main() { std::cout<< \"Hello World!\" << std::endl; return 0; }",
      language: "c++",
      testDescription: 'print hello world',
      // buildPrompt: () => `//${this.language}\n${this.code}\n\n//${this.testDescription}`
    }
    expect(testType.language).equal('c++')
  }); 
});