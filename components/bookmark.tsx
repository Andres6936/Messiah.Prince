import React from "react";
import {Link, Text, View} from "@react-pdf/renderer";
import {getShortHash} from "../utils/hash.util.ts";
import {Title} from "./paragraph.tsx";

const Separator = () => {
    return (
        <View style={{alignItems: "center", justifyContent: "center", paddingVertical: "0.3cm"}}>
            <View style={{minWidth: "70%", maxWidth: "70%", borderBottom: 0.5, borderBottomColor: "#CCC", paddingBottom: "0.1cm"}}/>
        </View>
    )
}

type SectionProps = {
    title: string,
    chapter: string,
    children: React.ReactNode,
}

const Section = (props: SectionProps) => {
    return (
        <View wrap={false} style={{gap: "0.5cm"}}>
            <View style={{gap: "0.2cm"}}>
                <Title start="true" bold="true" size={16}>
                    {props.title}
                </Title>
                <Title start="true" bold="true" size={9} style={{paddingLeft: "0.2cm", textTransform: "uppercase", opacity: 0.7}}>Capítulo {props.chapter}: </Title>
            </View>
            <View style={{gap: "0.2cm", paddingLeft: "0.5cm", borderLeft: 0.5, borderLeftColor: "black"}}>
                <Bookmark title={props.title}/>
                {props.children}
            </View>

            <Separator/>
        </View>
    )
}

type BookmarkProps = {
    title: string,
}

const Bookmark = (props: BookmarkProps) => {
    return (
        <Text>
            <Text>•{' '}</Text>
            <Link
                href={`#${getShortHash(props.title)}`}
                style={{
                    color: "black",
                    fontSize: 12,
                    fontStyle: "italic",
                    textDecoration: "none",
                }}
            >
                {props.title}
            </Link>
        </Text>
    )
}

export {
    Section,
    Bookmark,
}