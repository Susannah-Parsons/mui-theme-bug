"use client"
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
    /**
     * List the custom variants
     */
    interface TypographyVariants {
      body3: React.CSSProperties;
    }
    // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      body3: true;
    }
}

const myTypography = {
    fontFamily: ["Noto Sans", "sans-serif"].join(),
    allVariants: {
      color: "black",
      fontStyle: "normal",
      fontWeight: "normal"
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.7"
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.7"
    },
    body3: {
      fontSize: "0.75rem",
      lineHeight: "1.7"
    }
}

export const lightTheme = responsiveFontSizes(createTheme({
    typography: myTypography,
}));
