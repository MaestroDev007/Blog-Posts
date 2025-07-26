"use client"
import {ThemeProvider, CssBaseline} from '@mui/material';
import { BlogTheme } from '@/config/muiThemeConfig';

const MuiThemeProvider = ({children}) => {
  return (
    <ThemeProvider theme={BlogTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider
