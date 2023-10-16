import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    origin : null,
    destination : null,
    travelTimeInformation : null
}

export const navSlice = createSlice({
    name : 'nav',
    initialState,
    reducers : {
        setOrigin : (state, action) =>{
            state.origin = action.payload;
        },
        setDestination : (state, action) =>{
            state.destination = action.payload;
        },
        setTravelTimeInfo : (state, action) =>{
            state.travelTimeInformation = action.payload;
            // console.log(action.type)
        },
    },
});
export const {setOrigin,setDestination,setTravelTimeInfo} = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInformation;
// console.log(selectTravelTimeInfo.payload)

export default navSlice.reducer;