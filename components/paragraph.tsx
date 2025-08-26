import type React from "react"
import {Font, Text} from "@react-pdf/renderer"
import {flatten, type TextAlign} from "@react-pdf/stylesheet";

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

type TitleProps = {
    size?: string | number,
    start?: string | boolean,
    end?: string | boolean,
}

const Title = (props: React.ComponentPropsWithRef<typeof Text> & TitleProps) => {
    const withStyles = {
        fontSize: Number.isInteger(props.size) ? Number(props.size) : 24,
        textAlign: (props.start ? "left" : props.end ? "right" : "center") satisfies TextAlign as TextAlign,
    }

    return (
        <Text
            {...props}
            hyphenationCallback={value => [value]}
            style={flatten({
                ...withStyles,
                fontFamily: 'Playfair_Display',
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