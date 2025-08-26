import React from 'react';
import ReactPDF, {Document, Page, Text, View} from '@react-pdf/renderer';
import {xmlFileToReactTree, type ComponentMap} from './utils/node.factory';

import {Paragraph} from './components/paragraph';
import {Chapter} from './components/section';

const components: ComponentMap = {
    Paragraph,
    Chapter,
};

export async function buildBookFromXml(xmlPath: string) {
    const nodes = await xmlFileToReactTree(xmlPath, components, {
        textWrapper: Paragraph,
        trimText: true,
        onUnknownTag: (tagName) => {
            // Ejemplo: si no tienes un componente para "Chapter", podrías usar Section como fallback
            if (tagName === 'Chapter') return Chapter;
            return null; // null = unwrap, deja sólo los children
        },
    });

    return (
        <Document>
            <Page size="A4" style={{paddingVertical: "1.5cm", paddingHorizontal: "2cm", textAlign: "justify", fontSize: "14pt", gap: "0.5cm"}}>
                {nodes}
            </Page>
        </Document>
    );
}

(async () => {
    const book = await buildBookFromXml('./chapters/chapter-01.xml');
    ReactPDF.render(book, `./book-x.pdf`);
})()