class ValidationService{
    constructor() {
        this.number = /^\d+$/ 
    }

    /**
     * 
     * @param {string} value - Value to be checked on empty
     * @returns {boolean} Returns true if value not empty
     */

    isNotEmpty(value){
        if(!value) return [false, 'This value can not be empty!']
        return [value !== '', "This value can not be empty!"]
    }

    /**
     * @param {string} value - Value to be checked
     * @param {boolean} canBeEmpty - Can value be empty?
     * @returns {boolean} Returns true if value contains only numbers. 
     */
    isOnlyNumbers(value, canBeEmpty = false){
        if(canBeEmpty && value === "") return [true, '']
        return [this.number.test(value), "This value can contain only numbers!"]
    }
}

export const validationService = new ValidationService()
