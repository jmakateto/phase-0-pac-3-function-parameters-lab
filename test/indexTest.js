const assert = require('chai').assert;
const { introduction, introductionWithLanguage, introductionWithLanguageOptional } = require('../index');

describe('Introduction Functions', () => {
  describe('introduction()', () => {
    it('should return a phrase with the provided name', () => {
      assert.strictEqual(introduction('John'), 'Hi, my name is John.');
    });
  });

  describe('introductionWithLanguage()', () => {
    it('should return a phrase with the provided name and language', () => {
      assert.strictEqual(introductionWithLanguage('John', 'Python'), 'Hi, my name is John and I am learning to program in Python.');
    });
  });

  describe('introductionWithLanguageOptional()', () => {
    it('should return a phrase with the provided name and default to JavaScript if no language is provided', () => {
      assert.strictEqual(introductionWithLanguageOptional('John'), 'Hi, my name is John and I am learning to program in JavaScript.');
    });

    it('should return a phrase with the provided name and language if both are provided', () => {
      assert.strictEqual(introductionWithLanguageOptional('John', 'Python'), 'Hi, my name is John and I am learning to program in Python.');
    });
  });
});
