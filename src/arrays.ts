/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newArr: number[] = [];
    if (numbers.length === 0) {
        return newArr;
    } else {
        newArr.push(numbers[0]);
        newArr.push(numbers[numbers.length - 1]);
        return newArr;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newArr = numbers.map((numberl: number): number => 3 * numberl);
    return newArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newArr = numbers.map((stringl: string): number =>
        !isNaN(parseInt(stringl)) ? parseInt(stringl) : 0
    );
    return newArr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newArr = amounts.map((amount: string): number =>
        !isNaN(parseInt(amount.replace("$", "")))
            ? parseInt(amount.replace("$", ""))
            : 0
    );
    return newArr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newArr = messages.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    newArr = newArr.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message + ""
    );
    return newArr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newArr = words.filter((word: string): boolean => word.length < 4);
    return newArr.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    if (
        !colors.includes("red") &&
        !colors.includes("blue") &&
        !colors.includes("green")
    ) {
        return false;
    } else if (
        (colors.includes("red") &&
            colors.includes("blue") &&
            colors.includes("green")) ||
        (colors.includes("red") &&
            !colors.includes("blue") &&
            !colors.includes("green")) ||
        (!colors.includes("red") &&
            colors.includes("blue") &&
            !colors.includes("green")) ||
        (!colors.includes("red") &&
            !colors.includes("blue") &&
            colors.includes("green"))
    ) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const s =
        sum + "=" + addends.map((addend: number): string => addend.toString());
    return s.replaceAll(",", "+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newArr = values.map((value: number): number => value);
    const index = newArr.findIndex((num) => num < 0);
    const sum =
        index !== -1
            ? newArr
                  .slice(0, index)
                  .reduce((amountTotal, num) => amountTotal + num, 0)
            : 0;
    if (index !== -1) {
        newArr.splice(index + 1, 0, sum);
    } else {
        newArr.push(newArr.reduce((amountTotal, num) => amountTotal + num, 0));
    }
    return newArr;
}
