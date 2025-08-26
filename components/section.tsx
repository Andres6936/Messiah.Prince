import React, {Fragment} from "react"
import {Title} from "./paragraph.tsx";

type ChapterProps = {
    title: string,
    chapter: string | number,
    children: React.ReactNode,
}

const Chapter = (props: ChapterProps) => {
    return (
        <Fragment>
            <Title>{props.title}</Title>
            <Title style={{fontSize: 16}}>Capítulo {props.chapter}</Title>
            {props.children}
        </Fragment>
    )
}

export {
    Chapter,
}