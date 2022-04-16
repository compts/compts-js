export default PsExtender;
/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
declare function PsExtender(): any[] | any;
declare class PsExtender {
    extendElement(id: any): ElementTrigger;
    tag_value(tar: any, ar: any): void;
    init(str: any, ar: any): any;
    domQuerySelector(idss: any, ar: any): void;
}
import ElementTrigger from "../lib/dom/index";
