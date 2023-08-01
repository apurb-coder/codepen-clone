import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import Codepen from './Icons/codepen.svg'

const AppBarStyle= styled(AppBar)`
background-color: #060606;
`

const Header = () => {
  return (
    <div>
        <AppBarStyle position='static'>
            <Toolbar>
                <img src={Codepen} alt='logo'></img>
            </Toolbar>
        </AppBarStyle>
    </div>
  )
}

export default Header