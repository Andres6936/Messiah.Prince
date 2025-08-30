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
            <View style={{gap: "0.1cm"}}>
                <Title start="true" bold="true" size={9} style={{textTransform: "uppercase", opacity: 0.7}}>
                    Capítulo {props.chapter}
                </Title>
                <Title start="true" bold="true" size={16}>
                    {props.title}
                </Title>
            </View>
            <View style={{marginLeft: "0.4cm", gap: "0.1cm", paddingLeft: "0.5cm", borderLeft: 0.5, borderLeftColor: "black"}} >
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
        <View style={{flexDirection: "row"}}>
            <Text>•{' '}</Text>
            <Link
                href={`#${getShortHash(props.title)}`}
                style={{
                    flex: 1,
                    color: "black",
                    fontSize: 12,
                    fontStyle: "italic",
                    textDecoration: "none",
                    lineHeight: 1.5
                }}
            >
                {props.title}
            </Link>
        </View>
    )
}

export {
    Section,
    Bookmark,
}