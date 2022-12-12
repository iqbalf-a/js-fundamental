function nomor1(score) {
    let result = ''
    switch (true) {
        case (score <= 100 && score >= 80):
            result = 'A'
            break
        case (score < 80 && score >= 70):
            result = 'B'
            break
        case (score < 70 && score >= 60):
            result = 'C'
            break
        case (score < 60 && score >= 50):
            result = 'D'
            break
        case (score < 50 && score >= 0):
            result = 'F'
            break
        default:
            result = 'Mohon masukkan 1 - 100'
            break
    }
    return result

}

function nomor2(month) {
    let result = ''
    if (month === 'september' || month === 'october' || month === 'november') result = 'The season is Autumn'
    else if (month === 'december' || month === 'january' || month === 'february') result = 'The season is Winter'
    else if (month === 'march' || month === 'april' || month === 'may') result = 'The season is Spring'
    else if (month === 'june' || month === 'july' || month === 'august') result = 'The season is Summer'
    else result = 'month doesnt exist'

    return result
}

function nomor3(day) {
    let weekEnd = ['sabtu', 'minggu']
    let workingDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
    let result = ''
    if (workingDay.includes(day)) {
        result = `${day} is working day`
    } else if (weekEnd.includes(day)) {
        result = `${day} is weekend day`
    } else {
        result = `day doesnt exist`
    }

    return result
}

console.log(nomor1(60));
console.log(nomor2('april'))
console.log(nomor3('selasa'))