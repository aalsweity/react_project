import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        whisky_brand: "Whisky Brand",
        whisky_flavor: "Whisky Flavor",
        whisky_age: "Whiksy Age",
        whisky_image: "Whisky Image",
        //car_condition: "Car Condition",
    },
    reducers: {
        chooseWhiskyBrand: (state, action) => { state.whisky_brand = action.payload},
        chooseWhiskyFlavor: (state, action) => { state.whisky_flavor = action.payload},
        chooseWhiskyAge: (state, action) => { state.whisky_age = action.payload},
        chooseWhiskyImage: (state, action) => { state.whisky_image = action.payload}
        //chooseCarCondition: (state, action) => { state.car_condition = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseWhiskyBrand, chooseWhiskyFlavor, chooseWhiskyAge, chooseWhiskyImage} = rootSlice.actions