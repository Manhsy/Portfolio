import React from 'react';
declare type ImageSource = {
    type: 'image/webp' | 'image/jpeg' | 'image/png' | 'image/gif';
    srcSet: string;
};
interface ImagePropTypes {
    /**
     * If `sources` is provided, this image will be loaded by search engines and lazy-loaded for
     * users on browsers that don't support responsive images. If `sources` is not provided, this
     * image will be lazy-loaded.
     */
    src: string;
    /**
     * Allows the browser to choose the best file format and image size based on the device screen
     * density and the width of the rendered image.
     */
    sources?: ImageSource[];
    alt?: string;
    /**
     * Crops the image at the provided height. The `objectFit` and `objectPosition` props can be
     * used to control how the image is cropped.
     */
    height?: string;
    /**
     * Creates a [placeholder box](https://css-tricks.com/aspect-ratio-boxes/) for the image.
     * The placeholder prevents the browser scroll from jumping when the image is lazy-loaded.
     */
    containerAspectRatio?: number;
    /**
     * Disables lazy-loading and overrides the default calculation of the `sizes` attribute.
     * Primarily for important images in a server-side rendered environment that must be
     * loaded before JavaScript is parsed and executed on the client. The value gets used
     * as the `sizes` attribute. [See allowable values](https://mzl.la/2Hh6neO).
     */
    forceEarlyRender?: React.ImgHTMLAttributes<HTMLImageElement>['sizes'];
    /**
     * Provides control over how the image should be resized to fit the container. This controls the
     * `object-fit` CSS property. It is only useful if `height` is used to "crop" the image.
     */
    objectFit?: 'cover' | 'contain';
    /**
     * Provides control over how the image position in the container. This controls the
     * `object-position` CSS property. It is only useful if `height` is used to "crop" the image.
     */
    objectPosition?: 'top' | 'center' | 'bottom' | 'left' | 'right';
    className?: string;
}
declare const Image: React.ForwardRefExoticComponent<ImagePropTypes & React.RefAttributes<HTMLElement>>;
export default Image;
//# sourceMappingURL=index.d.ts.map