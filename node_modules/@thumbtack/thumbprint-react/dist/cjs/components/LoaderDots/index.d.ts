/// <reference types="react" />
interface PropTypes {
    /**
     * Text that describes the current status and is only visible to
     * screenreaders.
     */
    assistiveText?: string;
    /**
     * Controls the size of the dots.
     */
    size?: 'small' | 'medium';
    /**
     * Changes the dot colors.
     */
    theme?: 'brand' | 'inverse' | 'muted';
}
export default function LoaderDots({ assistiveText, size, theme, }: PropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map