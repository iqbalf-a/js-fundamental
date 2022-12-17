var restaurant = [250000, 710000, 125000]
var tips = [10, 15, 20]

var result = []
var tipsArr = []
var totalTagihan = []

function Pembayaran(tagihan) {
    let finalTips
    if (tagihan >= 500000) {
        finalTips = tagihan * tips[0] / 100
    } else if (tagihan >= 250000 && tagihan < 500000) {
        finalTips = tagihan * tips[1] / 100
    } else if (tagihan < 250000) {
        finalTips = tagihan * tips[2] / 100
    }
    return finalTips
}

restaurant.forEach(element => {
    let finalTips = Pembayaran(element)
    tipsArr.push(finalTips)
    totalTagihan.push(element + finalTips)
});

result.push(tipsArr)
result.push(totalTagihan)

console.log(result)