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
    ]

})

type CiteProps = {
    children: React.ReactNode,
}

const Cite = (props: CiteProps) => {
    return (
        <View style={{paddingHorizontal: "1cm"}}>
            <Text>
                {props.children}
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
                    fontSize: 6,
                    fontFamily: 'Montserrat',
                    fontWeight: "light",
                    fontStyle: "italic",
                }}
            >
                {'  '}{props.verse}{'  '}
            </Text>
            <Text
                style={flatten({
                    fontSize: 12,
                    fontFamily: 'Montserrat',
                    fontWeight: "light",
                    fontStyle: "italic",
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