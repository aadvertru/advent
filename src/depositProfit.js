function depositProfit(deposit, rate, threshold) {
    let currentDeposit = deposit
    let years = 0
    while (currentDeposit < threshold) {
        currentDeposit += currentDeposit * (rate/100)
        years++
    }
    console.log(years)
    return years
}

depositProfit(100, 20, 170)