import Image from "next/image"
import logoImage from "@/assets/images/logo-dark-transparent.png"
import { Box } from "@mui/material"


const  Logo = () => {
    return (
        <Box sx={{
            width: {
                xs: "30%",
                lg: "20%"
            }
        }}> 
             <Image src={logoImage}
               alt={`mindstitch image`}
               />
        </Box>
    )
       
}

export default Logo