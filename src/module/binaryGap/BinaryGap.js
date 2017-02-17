/**
 * Created on 2017-02-09.
 * @author: Gman Park
 *
 */

/**
 * The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
 * The number 20 has binary representation 10100 and contains one binary gap of length 1.
 * The number 15 has binary representation 1111 and has no binary gaps.
 */
class BinaryGap {
    constructor() {
        this.solution(561892);
    }

    solution(N) {
        let arrBin = N.toString(2).split('');
        let count = 0;
        let totalCount = 0;

        if (arrBin.length == 0) {
            return 0;
        }

        let prevItem = arrBin[0];

        for (let i = 1; i < arrBin.length; i++) {

            if (prevItem != arrBin[i]) {
                count += 1;
            } else {

                if (totalCount < count) {
                    totalCount = count;
                }

                count = 0;
            }
        }

        return totalCount;
    }
}

new BinaryGap();