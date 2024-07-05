/**
 * Get Full Namess
 * @name getFullNamess Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullNamess(firstname, lastname) {
    return `${firstname} ${lastname}`.trim();
}


// eslint-disable-next-line import/prefer-default-export
export { getFullNamess };
