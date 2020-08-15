
class OntarioTax {
    static calculate(nAmt) {
        var taxSum = 0
        if (nAmt <= 40922) {
            taxSum = nAmt * 0.0505
        } else if (40922 < nAmt <= 81847) {
            taxSum = (nAmt - 40922) * 0.0915 + 2067
        }
        else if (81847 < nAmt <= 150000) {
            taxSum = (nAmt - 81847) * 0.1116 + 5811
        }
        else if (150000 < nAmt <= 220000) {
            taxSum = (nAmt - 150000) * 0.1216 + 13417
        }
        else {
            taxSum = (nAmt - 220000) * 0.1316 + 21929
        }
        console.log(`Ontario Tax = ${taxSum}`)
        return Number(taxSum.toFixed(2));
    }
}

class FederalTax {
    static calculate(nAmt) {
        var taxSum = 0
        if (nAmt <= 45282) {
            taxSum = nAmt * 0.15
        } else if (45282 < nAmt <= 90563) {
            taxSum = (nAmt - 45282) * 0.205 + 6792
        }
        else if (90563 < nAmt <= 140388) {
            taxSum = (nAmt - 90563) * 0.26 + 16075
        }
        else if (140388 < nAmt <= 200000) {
            taxSum = (nAmt - 140388) * 0.29 + 29029
        }
        else {
            taxSum = (nAmt - 200000) * 0.33 + 46317
        }
        console.log(`Federal Tax = ${taxSum}`)
        return Number(taxSum.toFixed(2));
    }
}

module.exports = {OntarioTax,FederalTax};