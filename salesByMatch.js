'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    // validity check
    if(!ar || ar.length !== n) return 0;
    let numberOfPairs = 0;
    let sockTypeCount = new Map();
    // iterate through socks
    for(let i = 0; i < n; i++){
        const sock = ar[i];
        if(!sockTypeCount.has(sock)){
            sockTypeCount.set(sock, 1);
        } else {
            const newCount = sockTypeCount.get(sock) + 1;
            sockTypeCount.set(sock, newCount)
        }
    }
    // count up th pairs
    for(let type of sockTypeCount.keys()){
        const pairs = sockTypeCount.get(type)
        numberOfPairs += Math.floor(pairs/2);
    }
    //return number of pairs
    return numberOfPairs

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}})