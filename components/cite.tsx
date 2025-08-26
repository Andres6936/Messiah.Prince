import React, {Fragment} from "react";
import {Font, Text, View} from "@react-pdf/renderer"
import {flatten} from "@react-pdf/stylesheet";

Font.register({
    family: 'Montserrat',
    fonts: [
        {
            src: './fonts/Montserrat/static/Montserrat-LightItalic.ttf',
            fontWeight: "light",
            fontStyle: "italic",
        },
        {
            src: './fonts/Montserrat/static/Montserrat-BoldItalic.ttf',
            fontWeight: "bold",
            fontStyle: "italic",
        }
    ]

})

type CiteProps = {
    cite: string,
    children: React.ReactNode,
}

const Cite = (props: CiteProps) => {
    return (
        <View style={{paddingHorizontal: "1cm"}}>
            <Text
                hyphenationCallback={value => [value]}
                style={{
                    fontFamily: 'Montserrat',
                    fontWeight: "light",
                    fontStyle: "italic",
                }}
            >
                “{props.children}”
            </Text>
            <Text
                style={{
                    textAlign: "right",
                    fontSize: 8,
                    fontFamily: 'Montserrat',
                    fontWeight: "light",
                    fontStyle: "italic",
                }}
            >
                ({props.cite})
            </Text>
        </View>
    )
}

type VerseProps = {
    verse: string,
    children: React.ReactNode,
}

const Verse = (props: VerseProps) => {

    return (
        <Fragment>
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 6,
                }}
            >
                {'  '}{props.verse}{'  '}
            </Text>
            <Text
                hyphenationCallback={value => [value]}
                style={flatten({
                    fontSize: 11,
                })}
            >
                {props.children}
            </Text>
        </Fragment>
    )
}

export {
    Cite,
    Verse,
}