import React from 'react'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"


const MSButton = ({buttonText, 
                        variant = "contained",
                        type = "button",
                        size,
                        alt = "",
                        onClick,
                        ...props}) => {
  return (
    <Button variant ={variant}
            onClick={onClick}
            size={size}
            type={type}
            sx={{ bgcolor: variant === "contained" ? "primary.light" : "white", 
                 color: variant === "contained" ? "white" : "primary.light",
                 border: variant === "contained" ? "none" : "1px solid",
                 borderColor: "primary.light",
                 borderRadius: alt === "rounded" ? "200px" : "5px",
             
                width: 'fit-content',
                //  px: alt === "rounded" ? 3 : 0,
                //  py: alt === "rounded"? 2 : 1,
                   textTransform: "none", // Prevent uppercase if not desired
                    fontSize: { xs: ".65rem", lg: ".85rem" },
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                 "&:hover": {
                  bgcolor: variant === "contained" ? "primary.accent" : "primary.accent",
                  color: variant === "contained"? "white" : "white",
                
                  // opacity: [0.9, 0.8, 0.7]
                 }

            }}
            >
             {buttonText}
    </Button>
  )
}

export default MSButton
