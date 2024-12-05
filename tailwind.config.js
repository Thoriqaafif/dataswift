import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                basic: ["Basic", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    600: "#54a7e8",
                    700: "#4183B5",
                },
                bw: {
                    primary: "#212121",
                    secondary: "#687083",
                    icon: "#9AA2B1",
                    white: "#FFFFFF",
                    surface: "#F9FAFB",
                },
                success: {
                    600: "#8AB364",
                },
            },
        },
    },

    plugins: [forms],
};
