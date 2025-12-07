import React from "react";
import {Text, View} from "@react-pdf/renderer"
import {flatten} from "@react-pdf/stylesheet";
import {defaultStyles} from "../utils/defaultStyles.ts";


const P = (props: React.ComponentPropsWithRef<typeof Text>) => {
    return (
        <Text
            {...props}
            hyphenationCallback={value => [value]}
            style={flatten({
                color: defaultStyles.primary,
                fontFamily: 'Montserrat',
                fontWeight: "light",
                fontStyle: "italic",
                ...props.style,
            })}
        />
    )
}

const Mark = ({children}: {children: React.ReactNode}) => {
    return (
        <P
            style={{
                paddingTop: "0.2cm",
                textAlign: "right",
                fontSize: 8,
            }}
        >
            ({children})
        </P>
    )
}

type CiteProps = {
    cite: string,
    wrap?: string | boolean,
    children: React.ReactNode,
}

const Cite = (props: CiteProps) => {
    if (props.wrap && Boolean(props.wrap)) {
        return (
            <View style={{paddingHorizontal: "1cm"}}>
                <View
                    style={{
                        color: defaultStyles.primary,
                        gap: "0.3cm",
                        fontSize: 12,
                        fontFamily: 'Montserrat',
                        fontWeight: "light",
                        fontStyle: "italic",
                    }}
                >
                    {props.children}
                </View>
                <Mark>{props.cite}</Mark>
            </View>
        )
    }

    return (
        <View style={{paddingHorizontal: "1cm"}}>
            <P style={{fontSize: 12}}>
                “{props.children}”
            </P>
            <Mark>{props.cite}</Mark>
        </View>
    )
}

const Indicator = ({indicator}: { indicator: string | undefined | null }) => {
    if (!indicator) return null;
    if (indicator === '') return null;

    return (
        <Text
            style={{
                fontWeight: "bold",
                fontSize: 6,
                color: defaultStyles.indicator,
            }}
        >
            {'  '}{indicator}{'  '}
        </Text>
    )
}

type VerseProps = {
    verse: string,
    children: React.ReactNode,
}

const Verse = (props: VerseProps) => {

    return (
        <Text hyphenationCallback={value => [value]}>
            <Indicator indicator={props.verse}/>
            <Text
                hyphenationCallback={value => [value]}
                style={flatten({
                    fontSize: 11,
                    lineHeight: 1.3,
                })}
            >
                {props.children}
            </Text>
        </Text>
    )
}

export {
    Cite,
    Verse,
}
