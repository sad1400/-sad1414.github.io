"use strict";

import {
    fib
} from './lab_2.js';

/**
 * Возвращает дробную часть числа num.
 * @param {num} num число, от которого нужно найти дробную часть.
 * @return {num} дробная часть числа.
 */
export function getDecimal(num) {
    if (Math.trunc(num) == num) return 0;
    else if (num < 0) return num - (-Math.ceil(-num));
    if (num > 1) return +(num - Math.trunc(num)).toFixed(2);
}

/**
 * Возвращает строку str с заглавным первым символом.
 * @param {str} str строка, которую нужно преобразовать.
 * @return {str} str с заглавным первым символом.
 */
export function ucFirst(str) {
    if (!str) return str;
    else {
        let newstr = str[0].toUpperCase() + str.slice(1);
        return newstr;
    }
}

/**
 * Возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false.
 * @param {str} str проверяемая строка.
 * @return {number} true, если строка str содержит 'viagra' или 'XXX', а иначе false.
 */
export function checkSpam(str) {
    let newstr = str.toLowerCase();
    return newstr.includes('viagra') || newstr.includes('xxx');
}

/**
 * Проверяет длину строки str.
 * @param {str} str Проверяемая строка.
 * @param {number} maxlength максимальная длина строки.
 * @return {str} str, усеченная строка.
 */
export function truncate(str, maxlength) {
    if (str.length < maxlength) return str;
    else return str.slice(0, maxlength - 1) + '…';
}

/**
 * Дефисы в строке удаляются, а все слова после них получают заглавную букву.
 * @param {str} str Проверяемая строка.
 * @return {str} strwew, преобразованная строка.
 */
export function camelize(str) {
  let words = str.split('-');
  
  for (let i = 1; i < words.length; i++) {
    words[i] = ucFirst(words[i]);
  }
  
  return words.join('');
}
/**
 * Возвращает массив, заполненный числами Фибоначчи до n-го числа (не включая его).
 * @param {number} n натуральноее число, количество чисел Фибоначчи.
 * @return {Array} arr, массив с числами Фибоначчи.
 */
export function  fibs(n){
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(fib(i));
    return arr;
}

/**
 * Возвращает массив из элементов, отсортированный по убыванию.
 * @param {Arr} arr массив элементов.
 * @return {Arr} arr, массив, отсортированный по убыванию.
 */
export function arrReverseSorted(arr) {
  const sorted = arr.slice().sort((a, b) => b - a);
  return sorted;
}

/**
 * Возвращает массив уникальных, не повторяющихся значений.
 * @param {Arr} arr массив элементов.
 * @return {Arr} arr, массив с уникальными значениями.
 */
export function unique(arr) {
    let set = new Set();
    for (let i in arr) set.add(arr[i]);
    return Array.from(set);
}
