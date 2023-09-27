/**
 * @remarks
 * Takes the input object (a property bag of values) and bind
 * it to the pane as a data source. UI child elements of the
 * pane will be updated when the values in the object change,
 * and vice versa.
 *
 * @param propertyPane
 * The property pane to bind the property bag to.
 * @param target
 * The property bag to bind to the pane.
 */
export declare function bindDataSource<T extends PropertyBag, Prop extends keyof T & string>(
    propertyPane: IPropertyPane,
    target: T,
): T;