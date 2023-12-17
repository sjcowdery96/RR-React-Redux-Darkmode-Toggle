import { createSlice } from '@reduxjs/toolkit'

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://placekitten.com/200/200',
    name: 'basic'
}

const mode2 = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://placekitten.com/100/100',
    name: 'funky'
}

const mode3 = {
    darkMode: false,
    color1: '#42AB4D',
    color2: '#7FA68D',
    color3: '#BFC2D0',
    color4: '#F2DFCC',
    color5: '#E4AB7C',
    photo: 'https://placekitten.com/200/100',
    name: 'spicy'
}

const mode4 = {
    darkMode: true,
    color1: '#3C3968',
    color2: '#7C449F',
    color3: '#C24AA6',
    color4: '#FFAAE0',
    color5: '#FDC1B8',
    photo: 'https://placekitten.com/300/300',
    name: 'magestic'
}
const mode5 = {
    darkMode: true,
    color1: '#D4783A',
    color2: '#F0AA54',
    color3: '#FCE487',
    color4: '#D0C4A6',
    color5: '#8F7B67',
    photo: 'https://placekitten.com/100/300',
    name: 'imaginary'
}

const initialState = {
    mode: mode1
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    //similar to our switch statement in the Redux reducer 
    reducers: {
        setOne: () => {
            console.log("set one!")
            return { mode: mode1 }
        },
        setTwo: () => {
            console.log("set two!")
            return {
                mode: mode2
            }
        },
        setThree: () => {
            console.log("set three!")
            return { mode: mode3 }
        },
        setFour: () => {
            console.log("set four!")
            return { mode: mode4 }
        },
        setFive: () => {
            console.log("set five!")
            return { mode: mode5 }
        },
        default: () => {
            console.log("set default!")
            return { mode: mode1 }
        }
    }
})

//exports the functions
export const { setOne, setTwo, setThree, setFour, setFive } = modeSlice.actions
//exports the component and reducer
export default modeSlice.reducer