import React, {Fragment} from "react"
import {Title} from "./paragraph.tsx";
import { View } from "@react-pdf/renderer";

type ChapterProps = {
    title: string,
    chapter: string | number,
    children: React.ReactNode,
}

const Chapter = (props: ChapterProps) => {
    return (
        <View style={{gap: "0.5cm"}} break={Number(props.chapter) !== 1}>
            <Title>{props.title}</Title>
            <Title style={{fontSize: 16}}>Capítulo {props.chapter}</Title>
            {props.children}
        </View>
    )
}

type SectionProps = {
    title: string,
    children: React.ReactNode,
}

const Section = (props: SectionProps) => {
    return (
        <Fragment>
            <Title size="16" start="true" bold="true" style={{paddingTop: "1.2cm", paddingBottom: "0.3cm"}}>{props.title}</Title>
            {props.children}
        </Fragment>
    )
}

export {
    Chapter,
    Section,
}