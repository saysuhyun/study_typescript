/**
 * Template Literal
 */
type CodeFactory = 'Code Factory';

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFactory>;

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>;

// Capitalize 첫번쨰 글자만 대문자
type CodeFactoryCapital = Capitalize<CodeFactoryLower>;

// Uncapitalize 전부다 소문자로 변환
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>;