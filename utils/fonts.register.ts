import {Font} from "@react-pdf/renderer";

Font.register({
    family: 'Montserrat',
    fonts: [
        {
            src: './fonts/Montserrat/static/Montserrat-LightItalic.ttf',
            fontWeight: "light",
            fontStyle: "italic",
        },
        {
            src: './fonts/Montserrat/static/Montserrat-Italic.ttf',
            fontWeight: "normal",
            fontStyle: "italic",
        },
        {
            src: './fonts/Montserrat/static/Montserrat-Regular.ttf',
            fontWeight: "normal",
        },
        {
            src: './fonts/Montserrat/static/Montserrat-SemiBold.ttf',
            fontWeight: "semibold",
        },
        {
            src: './fonts/Montserrat/static/Montserrat-SemiBoldItalic.ttf',
            fontWeight: "semibold",
            fontStyle: "italic",
        },
        {
            src: './fonts/Montserrat/static/Montserrat-Bold.ttf',
            fontWeight: "bold",
        },
        {
            src: './fonts/Montserrat/static/Montserrat-BoldItalic.ttf',
            fontWeight: "bold",
            fontStyle: "italic",
        }
    ]

})

Font.register({
    family: "Playfair_Display",
    fonts: [
        {
            src: './fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf',
            fontWeight: "normal",
        },
        {
            src: './fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf',
            fontWeight: "bold",
        }
    ]
})

