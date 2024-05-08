class ValidationService {
  constructor() {
    this.number = /^[-]?(\d+)$/;
  }

  // TODO: Добавить функцию validator для проверки всех необходимых условий. Добавить валидацию на максимальное значение

  /**
   *
   * @param {string} value - Value to be checked
   * @param {Array} validators - Array of necessary
   * @returns {Array} - Returns true if all validations passed
   */
  validation(value, validators = []) {
    for (const validator of validators) {
      const [res, error] = validator(value);
      if (!res) {
        return [false, error];
      }
    }
    return [true, ""];
  }

  /**
   *
   * @param {string} value - Value to be checked on empty
   * @returns {boolean} Returns true if value not empty
   */

  isNotEmpty(value) {
    if (!value) return [false, "This value can not be empty!"];
    return [value !== "", "This value can not be empty!"];
  }

  /**
   * @param {string} value - Value to be checked
   * @param {boolean} canBeEmpty - Can value be empty?
   * @returns {boolean} Returns true if value contains only numbers.
   */
  isOnlyNumbers(value, canBeEmpty = false) {
    if (canBeEmpty && value === "") return [true, ""];
    return [this.number.test(value), "This value can contain only numbers!"];
  }

  /**
   *
   * @param {string} value - Value to be checked
   * @param {number} max - Maximum possible value
   * @param {number} min - Minimum possible value
   * @returns {boolean} Returns true if value is in range
   */

  isInRange(value, max = Number.MAX_SAFE_INTEGER, min = 0) {
    if (value === "") return [true, ""];
    const number = +value;
    if (Number.isNaN(number))
      return [false, "This value can contain only numbers!"];

    if(!Number.isInteger(number)){
      return [false, "This value can contain only integer numbers!"]
    }

    if (number < min)
      return [false, `Too less value. Minimum possible value is ${min}`];
    if (number > max)
      return [false, `Too big value. Maximum possible value is ${max}`];
    return [true, ""];
  }




  isSequenceOfValidNumbers(string, max = Number.MAX_SAFE_INTEGER, min = 0) {
      if(string === '') return [true, '']
      if(!this.number.test(string[string.length - 1])) return [false, 'Remove last symbol from your input']

    const numberArray = string.trim().split(",");
    for (const number of numberArray) {
          const [res, error] = this.isInRange(+(number), max, min)
          if(error.includes('Too less value.')) return [false, "You passed some too less value. Please check your input"]
          if(error.includes('Too big value.')) return [false, "You passed some too big value. Please check your input"]
          if(error.includes('can contain only numbers')) return [false, "You passed some NaN value. Please check your input"]
          if(error.includes('can contain only integer numbers')) return [false, "You passed some float value. Please check your input"]
    }
    return [true, ""];
  }
}

export const validationService = new ValidationService();
