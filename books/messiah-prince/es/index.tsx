import React from 'react';
import ReactPDF, {Document, Page} from '@react-pdf/renderer';

import "~/utils/fonts.register"

import {Cite, Verse} from '~/components/cite';
import {Cover} from '~/components/cover.tsx';
import {P, S, Paragraph, Title} from '~/components/paragraph';
import {Chapter, Section} from '~/components/section';
import {Bookmark, Section as SectionBookmark} from "~/components/bookmark.tsx";
import {getChapterAndTitles, type NodeMetadata} from '~/utils/chapter.extract';
import {type ComponentMap, xmlFileToReactTree} from '~/utils/node.factory';
import {defaultStyles} from "~/utils/defaultStyles.ts";

const components: ComponentMap = {
    Paragraph,
    Title,
    Chapter,
    Section,
    Cite,
    Verse,
    P,
    S,
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
        <Document
            title='Demostración de que Jesucristo es el Mesías esperado por los hebreos'
            author='Rafael Luis Serralta Nogués'
            subject='Jesús el Mesías Principe'
            keywords='Jesús, Mesías, Principe'
            creator='Rafael Luis Serralta Nogués'
            producer='Joan Andrés Buriticá Salazar'
            language='es'
        >
            <Cover/>
            <Page
                size="A4" style={{
                backgroundColor: defaultStyles.background,
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
            <Page
                size="A4"
                style={{
                    backgroundColor: defaultStyles.background,
                    paddingVertical: "1.5cm",
                    paddingHorizontal: "2cm",
                    textAlign: "justify",
                    fontSize: "14pt"
                }}>
                {nodes}
            </Page>
        </Document>
    );
};


(async () => {
    const glob = new Bun.Glob(import.meta.dir + '/chapters/*.xml');
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

    ReactPDF.render(withBook(nodes, metadata), `./book.pdf`);
})()
