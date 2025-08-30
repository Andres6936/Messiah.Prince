import React from 'react';
import ReactPDF, {Document, Page, Text, View} from '@react-pdf/renderer';

import {Cite, Verse} from './components/cite';
import {Paragraph, Title} from './components/paragraph';
import {Chapter, Section} from './components/section';
import {Bookmark, Section as SectionBookmark} from "./components/bookmark.tsx";
import {getChapterAndTitles, type NodeMetadata} from './utils/chapter.extract';
import {xmlFileToReactTree, type ComponentMap} from './utils/node.factory';

const components: ComponentMap = {
    Paragraph,
    Title,
    Chapter,
    Section,
    Cite,
    Verse,
};

const getTreeNode = async (xmlPath: string) => {
    return await xmlFileToReactTree(xmlPath, components, {
        onUnknownTag: (tagName) => {
            if (tagName === 'Chapter') return Chapter;
            return null; // null = unwrap, deja sólo los children
        },
    });
};

const withBook = (nodes: React.ReactNode, metadata: NodeMetadata[]) => {
    return (
        <Document>
            <Page size="A4" style={{
                paddingVertical: "1.5cm",
                paddingHorizontal: "2cm",
                textAlign: "justify",
                fontSize: "14pt",
                gap: "0.7cm"
            }}>
                {metadata.map(it => (
                    <SectionBookmark key={it.chapter} title={it.title} chapter={it.chapter}>
                        {it.metadata.map((it, index) => <Bookmark key={index} title={it}/>)}
                    </SectionBookmark>
                ))}
            </Page>
            <Page size="A4"
                  style={{paddingVertical: "1.5cm", paddingHorizontal: "2cm", textAlign: "justify", fontSize: "14pt"}}>
                {nodes}
            </Page>
        </Document>
    );
};


(async () => {
    const glob = new Bun.Glob('./chapters/*.xml');
    const chapters = []
    for await (const file of glob.scan(".")) {
        chapters.push(file);
    }

    const metadata = []
    const nodes = []
    for await (let chapter of chapters) {
        nodes.push(await getTreeNode(chapter))
        const nodeMetadata = await getChapterAndTitles(chapter)
        if (nodeMetadata) metadata.push(nodeMetadata)
    }

    ReactPDF.render(withBook(nodes, metadata), `./book-x.pdf`);
})()