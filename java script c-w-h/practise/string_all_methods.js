let str = "  Hello World!  ";

// 1. length – returns the length of the string
console.log(str.length); // 15

// 2. toUpperCase() – converts the string to uppercase
console.log(str.toUpperCase()); // "  HELLO WORLD!  "

// 3. toLowerCase() – converts the string to lowercase
console.log(str.toLowerCase()); // "  hello world!  "

// 4. trim() – removes whitespace from both ends
console.log(str.trim()); // "Hello World!"

// 5. trimStart() – removes whitespace from the beginning
console.log(str.trimStart()); // "Hello World!  "

// 6. trimEnd() – removes whitespace from the end
console.log(str.trimEnd()); // "  Hello World!"

// 7. slice(start, end) – extracts a part of the string
console.log(str.slice(2, 7)); // "Hello"

// 8. substring(start, end) – similar to slice but doesn't accept negative indexes
console.log(str.substring(2, 7)); // "Hello"

// 9. substr(start, length) – returns a substring with a specific length (deprecated but still works)
console.log(str.substr(2, 5)); // "Hello"

// 10. replace(search, replace) – replaces the first occurrence
console.log(str.replace("World", "Universe")); // "  Hello Universe!  "

// 11. replaceAll(search, replace) – replaces all occurrences
console.log(str.replaceAll(" ", "-")); // "--Hello-World!--"

// 12. includes(substring) – checks if substring exists
console.log(str.includes("Hello")); // true

// 13. startsWith(substring) – checks if it starts with substring
console.log(str.trim().startsWith("Hello")); // true

// 14. endsWith(substring) – checks if it ends with substring
console.log(str.trim().endsWith("!")); // true

// 15. indexOf(substring) – returns the index of the first occurrence
console.log(str.indexOf("o")); // 6

// 16. lastIndexOf(substring) – returns the index of the last occurrence
console.log(str.lastIndexOf("o")); // 8

// 17. charAt(index) – returns character at index
console.log(str.charAt(2)); // "H"

// 18. charCodeAt(index) – returns UTF-16 code of character
console.log(str.charCodeAt(2)); // 72

// 19. split(separator) – splits the string into an array
console.log(str.trim().split(" ")); // ["Hello", "World!"]

// 20. repeat(count) – repeats the string
console.log("Hi ".repeat(3)); // "Hi Hi Hi "

// 21. match(regex) – returns result of regex match
console.log(str.match(/\w+/g)); // ["Hello", "World"]

// 22. search(regex) – returns index of match
console.log(str.search("World")); // 8

// 23. padStart(targetLength, padString) – pads from the start
console.log("5".padStart(3, "0")); // "005"

// 24. padEnd(targetLength, padString) – pads from the end
console.log("5".padEnd(3, "0")); // "500"

// 25. concat() – joins two or more strings
console.log("Hello".concat(" ", "World")); // "Hello World"

// 26. valueOf() – returns primitive string value (used internally)
console.log(str.valueOf()); // "  Hello World!  "

// 27. toString() – same as valueOf()
console.log(str.toString()); // "  Hello World!  "
