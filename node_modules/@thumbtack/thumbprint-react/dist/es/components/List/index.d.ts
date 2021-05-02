import React from 'react';
interface ListPropTypes {
    /**
     * List items to render. Should be instances of `ListItem`.
     */
    children?: React.ReactNode;
    /**
     * Controls the theme of the markers applied to each list item.
     */
    theme?: 'bullet' | 'decimal' | 'alpha';
}
export declare function List({ children, theme }: ListPropTypes): JSX.Element;
interface ListItemPropTypes {
    /**
     * Item contents to render.
     */
    children?: React.ReactNode;
}
export declare function ListItem({ children }: ListItemPropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map