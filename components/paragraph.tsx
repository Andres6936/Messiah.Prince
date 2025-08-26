import type React from "react"
import {Font, Text} from "@react-pdf/renderer"
import {flatten} from "@react-pdf/stylesheet";

Font.register({
    family: 'Montserrat',
    fonts: [
        {
            src: './fonts/Montserrat/static/Montserrat-Regular.ttf',
            fontWeight: "normal",
        },
        {
            src: './fonts/Montserrat/static/Montserrat-Bold.ttf',
            fontWeight: "bold",
        }
    ]

})

Font.register({
    family: "Playfair_Display",
    fonts: [
        {
            src: './fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf',
            fontWeight: "normal",
        }
    ]
})


const Title = (props: React.ComponentPropsWithRef<typeof Text>) => {
    return (
        <Text
            {...props}
            hyphenationCallback={value => [value]}
            style={flatten({
                fontFamily: 'Playfair_Display',
                fontSize: 24,
                textAlign: "center",
                ...props.style,
            })}
        />
    )
}

type ParagraphProps = {
    bold?: boolean | string,
}

const Paragraph = (props: React.ComponentPropsWithRef<typeof Text> & ParagraphProps) => {
    const withStyles = {
        fontWeight: Boolean(props.bold) ? "bold" : "normal",
    }

    return (
        <Text
            {...props}
            hyphenationCallback={value => [value]}
            style={flatten({
                ...withStyles,
                fontFamily: 'Montserrat',
                fontSize: 13,
                ...props.style,
            })}
        />
    )
}

export {Title, Paragraph}