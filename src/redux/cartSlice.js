import { createSlice, current } from '@reduxjs/toolkit'
import { calcTotals } from '../utils/functions'

const initialState = {
  cart: [],
  subTotal : 0,
  shippingFees : 0,
  taxes : 0
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    removeAll: (state) => {

      return ({
        cart: [],
        subTotal : 0,
        shippingFees : 0,
        taxes : 0
      })
    },
    getCart: (state) => {
        const request = require('../assets/data.json')
        let totals  
        if (request[0]){
          totals=calcTotals(request)
        }
        return ({
          cart: request,
          subTotal : totals.sub,
          shippingFees : totals.shipping,
          taxes : totals.taxes
        })
    },
    addItem: (state, action) => {
      const {name , desc} = action.payload 
      state.cart.forEach((e)=>{
        if(e.item_name === name && e.short_description === desc){
          e.quantity += 1
          state.subTotal += Number(e.price_without_tax)
          state.taxes +=e.tax
        }
      })
     
    },
    minusItem: (state, action) => {
      const {name , desc} = action.payload 
      state.cart.forEach((e)=>{
        if(e.item_name === name && e.short_description === desc){
          if(e.quantity>1){
            e.quantity -= 1
            state.subTotal -= e.price_without_tax
            state.taxes -=e.tax

          } else{
            e.quantity -= 1
            state.subTotal -= e.price_without_tax
            state.shippingFees -= e.shipping_fee
            state.taxes -=e.tax
            state.cart = (current(state.cart).filter (j => j.quantity !== 0))
          }
        }
      })
     
    },
    removeItem: (state, action) => {
      const {name , desc} = action.payload 
      state.cart.forEach((e)=>{
        if(e.item_name === name && e.short_description === desc){

          state.cart = (current(state.cart).filter (j => j.item_name !== e.item_name))

          state.subTotal -= (Number(e.price_without_tax) *  Number(e.quantity))
          state.shippingFees -= e.shipping_fee
          state.taxes -=(Number(e.tax) *  Number(e.quantity))
        }
      })
     
    },
  },
})

export const { removeAll, getCart, addItem, minusItem, removeItem } = cartSlice.actions

export default cartSlice.reducer