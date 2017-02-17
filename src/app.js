/**
 * Created on 2017-02-09.
 * @author: Gman Park
 * @description Bootstrap for app.
 */

import './assets/style.scss';
import {A} from './module/A';

function main() {
    document.title = 'ECMAscript';

    const moduleA = new A();
}

document.addEventListener('DOMContentLoaded', main);