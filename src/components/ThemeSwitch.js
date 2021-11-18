import React, {useState} from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'
import Videos from './Layout/Videos/Videos'

const ThemeSwitch = () => {

    const [dark, setDark] = useState(false)

    const theme = createTheme({
        palette: {
            type: dark ? 'dark' : 'light',
        },
    })

    return (
        <div>
            <ThemeProvider theme={theme}>
            <Switch checked={dark} onChange={() => setDark(!dark)} />
            <Paper>
                <Videos/>
            </Paper>
        </ThemeProvider>
        </div>
    )
}

export default ThemeSwitch
