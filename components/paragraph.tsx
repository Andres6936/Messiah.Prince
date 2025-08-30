import type React from "react"
import {Text} from "@react-pdf/renderer"
import {flatten, type FontStyle, type FontWeight, type TextAlign, type TextDecoration} from "@react-pdf/stylesheet";
import {defaultStyles} from "../utils/defaultStyles.ts";
import { Fragment } from "react";


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

type Props = {
    ss?: string | boolean
    se?: string | boolean
    b?: string | boolean
    i?: string | boolean
    u?: string | boolean
}

const P = (props: React.ComponentPropsWithRef<typeof Text> & Props) => {
    const withStyles = {
        fontWeight: Boolean(props.b) ? "semibold" : "normal" satisfies FontWeight,
        fontStyle: Boolean(props.i) ? "italic" : "normal" satisfies FontStyle as FontStyle,
        textDecoration: Boolean(props.u) ? "underline" : "none" satisfies TextDecoration as TextDecoration,
    }

    return (
        <Fragment>
            {props.ss && (<S/>)}
            <Text
                {...props}
                style={flatten({
                    ...withStyles,
                    ...props.style,
                })}
            />
            {props.se && (<S/>)}
        </Fragment>
    )
}

const S = () => <Text>{' '}</Text>

export {Title, Paragraph, P, S}