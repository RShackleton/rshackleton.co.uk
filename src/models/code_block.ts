
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0' on 'Sat Oct 10 2020 13:33:52 GMT+0100 (British Summer Time)'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class CodeBlock extends ContentItem {
    public code!: Elements.TextElement;
    public language!: Elements.TextElement;
    public sourceUrl!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'source_url') {
                    return 'sourceUrl';
                }
                return elementName;
            })
        });
    }
}
