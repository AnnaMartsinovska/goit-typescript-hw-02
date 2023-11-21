/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
type UnionType = string | number;
let union: UnionType;

type LiteralType = "enable" | "disable";
let literal: LiteralType;
