"use client"
import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Link from "next/link";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Logo from '@/utils/logo';
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close'; 
import { menu } from '@/lib/data';
import MSButton from '@/utils/button'

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const handleMenu = () => {
        setDrawerOpen(true);
    }
  return (
    <Stack component={`header`}
           px={{xs:2, md: 4}}
           py={2}
           position={`sticky`}
           bgcolor={`white`}
           top={0}
           id={`header`}
           direction={`row`}
           justifyContent={{xs: "space-between", lg: ""}}
           alignItems={`center`}>

            {/* Logo */}
            <Logo/>

            {/* this is the mobile navebar */}
            <Stack display={{xs: "flex", lg: "none"}}> 
                <IconButton onClick={handleMenu} sx={{color: "primary.accent"}} disableRipple>
                    <MenuIcon/>
                    </IconButton>

                      <Drawer anchor='right' open={drawerOpen} variant="temporary" onClose={()=>{setDrawerOpen(false)}}>
                      </Drawer>
            </Stack>


              {/* this is for the desktop bar */}
            <Stack direction={`row`}
                   gap={16}
                  display={{xs: "none", lg: "flex"}}
                  alignItems={`center`}>

              <Stack direction={`row`}
                     spacing={6}
                     component={`nav`}>
                {
                    menu.map((item, index) => (                     
                      <Link key={index} href={item.path} style={{textDecoration: "none"}}>
                            <Typography variant='body1'
                                       fontWeight={`700`}
                                       fontSize={`.85rem`}>
                                         {item.menu}
                            </Typography>
                                        </Link>
              ))
            }
                </Stack>

                <Stack direction={`row`}
                alignItems={`center`}
                spacing={4}>
                  <Link href={``}>Log In</Link>
                  <MSButton buttonText={`Sign Up`}
                            size="small"/>
                </Stack>
            </Stack>
        </Stack>

       
  )
}

export default NavBar
