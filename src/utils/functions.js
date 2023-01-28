export const calcTotals = (state) => {
    let sub =0 , shipping= 0, taxes= 0

    sub =state.map((e)=>  Number(e.price_without_tax) * Number(e.quantity)).reduce((b, a) => b + a, 0)
    shipping =state.map((e)=>  Number(e.shipping_fee)).reduce((b, a) => b + a, 0)
    taxes =state.map((e)=>  Number(e.tax * e.quantity)).reduce((b, a) => b + a, 0)
    return({
        sub, shipping, taxes
    })
}

