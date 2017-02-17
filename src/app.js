/**
 * Created on 2017-02-09.
 * @author: Gman Park
 * @description Bootstrap for app.
 */

import './assets/style.scss';
import {BinaryGap} from './module';

function main() {
    printConsoleLogo();
    const Problem1 = new BinaryGap();
}

function printConsoleLogo() {
    document.title = 'Codility';

    setTimeout(console.log.bind(console, "%cGMAN", "font:8em Arial;color:#EC6521;font-weight:bold"), 0);
    setTimeout(console.log.bind(console, "%cDevTools@2017", "font:2em sans-serif;color:#333;"), 0);
}

document.addEventListener('DOMContentLoaded', main);