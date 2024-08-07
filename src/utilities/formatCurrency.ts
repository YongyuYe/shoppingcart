const CURRENCY_FORMATTER = new Intl.NumberFormat('en-GB',{currency:"GBP",style:"currency"})

export function formatCurrency(number:number){
    return CURRENCY_FORMATTER.format(number)

}