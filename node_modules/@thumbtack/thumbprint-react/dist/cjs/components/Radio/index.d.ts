import React from 'react';
interface PropTypes {
    /**
     * Disable the input and the label.
     */
    isDisabled?: boolean;
    /**
     * Text or elements that appear within the label. If `children` is not provided, the developer
     * must use the `Radio`'s `id` prop to associate it with a custom `<label>` element.
     */
    children?: React.ReactNode;
    /**
     * The `id` is added to the radio button as an HTML attribute and passed to the `onChange`
     * function.
     */
    id?: string;
    /**
     * Boolean that determines if the radio is checked.
     */
    isChecked?: boolean;
    /**
     * Adds the `required` HTML attribute.
     */
    isRequired?: boolean;
    /**
     * Makes the radio and text color red.
     */
    hasError?: boolean;
    /**
     * Radio buttons that have the same name attribute are in the same radio button group. Only one
     * radio in a group can be selected at a time. All of the radio buttons in the group must share
     * a value that is unique to the page. This is required for keyboard navigation.
     */
    name: string;
    /**
     * Determine that padding that gets applied to the label. This can be used
     * to increase the label’s click target. The value supplied should be a
     * string with a unit such as `8px` or `8px 16px`.
     */
    labelPadding?: string;
    /**
     * Function that runs when a new radio button is selected. It receives the new boolean value
     * and the provided `id` as such: `props.onChange(e.target.checked, props.id)`.
     */
    onChange: (isChecked: boolean, id?: string) => void;
    /**
     * A selector hook into the React component for use in automated testing environments. It is
     * applied internally to the `<input />` element.
     */
    dataTest?: string;
    /**
     * Determines how the radio button input will be vertically aligned relative to `props.children`.
     */
    radioVerticalAlign?: 'top' | 'center';
}
export default function Radio({ children, dataTest, id, isChecked, isDisabled, isRequired, hasError, labelPadding, name, onChange, radioVerticalAlign, }: PropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map