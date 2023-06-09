import { createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey, common } from '@mui/material/colors';

const DarkMode = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ff9800',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ffeb3b',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',
        },
        background: {
            default: grey[800],  // Dark shade of grey
            paper: grey[800],    // Dark shade of grey
        },
        text: {
            default: common[400],
            paper: common[400]
        }

    },
});

const LightMode = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',
        },
        // text: {
        //     default: grey[800],  // Dark shade of grey
        //     paper: grey[800],    // Dark shade of grey
        // },
        // background: {
        //     default: common[400],
        //     paper: common[400]
        // }



    },
});


export const getColorMode = (mode) => {
    return mode === 'dark' ? DarkMode : LightMode
}