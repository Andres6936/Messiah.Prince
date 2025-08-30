import {DOMParser} from "@xmldom/xmldom";

function defaultAttributeTransform(_name: string, value: string): any {
    const lower = value.toLowerCase();
    if (lower === 'true') return true;
    if (lower === 'false') return false;
    if (!Number.isNaN(Number(value)) && value.trim() !== '') return Number(value);
    return value;
}

type NodeMetadata = {
    title: string,
    chapter: string,
    metadata: string[],
}

const getChapterAndTitles = async (xmlPath: string) => {
    const parser = new DOMParser({
        errorHandler: {
            warning() {},
            error(msg: string) { throw new Error(msg); },
            fatalError(msg: string) { throw new Error(msg); },
        },
    } as any);

    const file = Bun.file(xmlPath);
    const xml = await file.text();
    const doc = parser.parseFromString(xml, 'text/xml');

    const getMetadata = (node: Node): string | null | NodeMetadata => {
        const ELEMENT_NODE = 1;

        if ((node as any).nodeType === ELEMENT_NODE) {
            const el = node as Element;
            const tag = el.tagName;

            const props: Record<string, unknown> = {};
            for (let i = 0; i < el.attributes.length; i += 1) {
                const attr = el.attributes.item(i)!;
                props[attr.name] = defaultAttributeTransform(attr.name, attr.value);
            }

            if (tag === 'Chapter') {
                const metadataChildren = []
                for (let i = 0; i < el.childNodes.length; i += 1) {
                    const child = getMetadata(el.childNodes.item(i));
                    if (child !== null && child !== undefined) metadataChildren.push(child);
                }

                return {
                    title: props.title as string,
                    chapter: props.chapter as string,
                    metadata: metadataChildren as string[],
                }
            }

            if (tag === 'Section') {
                return props.title as string;
            }
        }

        return null;
    }

    for (let index = 0; index < doc.childNodes.length; index += 1) {
        const node = getMetadata(doc.childNodes.item(index));
        if (node !== null && node !== undefined) return node as NodeMetadata;
    }
};

export {
    getChapterAndTitles,
}

export type {
    NodeMetadata,
}