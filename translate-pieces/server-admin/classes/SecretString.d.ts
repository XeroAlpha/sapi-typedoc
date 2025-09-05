/**
 * 表示一段机密字符串的占位符。
 * 脚本无法访问或修改机密字符串的内容，
 * 此对象仅仅是一个占位符。
 * 
 * This represents a placeholder object that represents a
 * secret string. The contents of that string are not available
 * to script; this object is just a placeholder.
 */
export class SecretString {
    constructor(value: string);
}
