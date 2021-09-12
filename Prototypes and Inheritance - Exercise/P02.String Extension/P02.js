var str = "string";


String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
        return;
    }

    return str + this;
}

String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
        return;
    }

    return this + str;
}

String.prototype.IsEmpty = function () {
    return this == '';
}

String.prototype.truncate = function(n) {

}
console.log(str.IsEmpty())

// ⦁	ensureStart(str) – if the current string doesn't start with the str parameter, return a new string in which str parameter appended to the beginning of the current string, otherwise returns the original string
// ⦁	ensureEnd(str) – if the current string doesn't end with str parameter, return a new string in which str parameter appended to the end of the current string, otherwise returns the original string
// ⦁	isEmpty() - return true if the string is empty and false otherwise
// ⦁	truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis (three periods) to the end. If a string is less than n characters long, return the same string. If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n. If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n amount of periods.
// ⦁	format(string, …params) - static method to replace placeholders with parameters. A placeholder is a number surrounded by curly braces. If parameter index cannot be found for a certain placeholder, do not modify it. Note static methods are attached to the String object instead of its prototype. See the examples for more info.
