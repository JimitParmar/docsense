// index.js

/**
 * @typedef {Object} SubField
 * @property {string} title
 * @property {(className?: string) => JSX.Element} renderContent
 * @property {string} [className]
 */

/**
 * @typedef {Object} MainField
 * @property {string} title
 * @property {SubField[]} subFields
 */

/**
 * Generate documentation structure.
 * @param {MainField[]} mainFields
 * @returns {MainField[]}
 */
function generateDocs(mainFields) {
  return mainFields;
}

module.exports = generateDocs;
