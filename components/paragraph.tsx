import type React from "react"
import {Font, Text} from "@react-pdf/renderer"
import {flatten, type TextAlign} from "@react-pdf/stylesheet";
import {defaultStyles} from "../utils/defaultStyles.ts";

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
        },
        {
            src: './fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf',
            fontWeight: "bold",
        }
    ]
})

const toInteger = (value: string | number): number => {
    if (typeof value === 'number') return value;

    return parseInt(value, 10);
};

type TitleProps = {
    size?: string | number,
    start?: string | boolean,
    end?: string | boolean,
    bold?: string | boolean,
}

const Title = (props: React.ComponentPropsWithRef<typeof Text> & TitleProps) => {
    const withStyles = {
        fontSize: props.size ? toInteger(props.size) : 24,
        textAlign: (props.start ? "left" : props.end ? "right" : "center") satisfies TextAlign as TextAlign,
        fontWeight: Boolean(props.bold) ? "bold" : "normal",
    }

    return (
        <Text
            {...props}
            hyphenationCallback={value => [value]}
            style={flatten({
                ...withStyles,
                color: defaultStyles.primary,
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
                color: defaultStyles.primary,
                fontFamily: 'Montserrat',
                fontSize: 13,
                ...props.style,
            })}
        />
    )
}

export {Title, Paragraph}