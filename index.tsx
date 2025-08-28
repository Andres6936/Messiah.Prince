import React from 'react';
import ReactPDF, {Document, Page, Text, View} from '@react-pdf/renderer';
import {xmlFileToReactTree, type ComponentMap} from './utils/node.factory';

import {Paragraph, Title} from './components/paragraph';
import {Chapter, Section} from './components/section';
import { Cite, Verse } from './components/cite';

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

const withBook = (nodes: React.ReactNode) => {
    return (
        <Document>
            <Page size="A4" style={{paddingVertical: "1.5cm", paddingHorizontal: "2cm", textAlign: "justify", fontSize: "14pt"}}>
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

    const nodes = []
    for await (let chapter of chapters) {
        nodes.push(await getTreeNode(chapter))
    }

    ReactPDF.render(withBook(nodes), `./book-x.pdf`);
})()