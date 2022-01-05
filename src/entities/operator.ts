import { MySet } from "../utils/collections";

export const operators = new MySet<string>([
  "+",
  "-",
  "*",
  "/",
  "^",
  "%",
  "MOD",
  "\\",
  "++",
  "--",
  "+=",
  "-=",
  "*=",
  "/=",
  "!",
  "NOT",
  "AND",
  "&&",
  "||",
  "XOR",
  "EQ",
  "==",
  "===",
  "NEQ",
  "<>",
  "!=",
  "!==",
  "GT",
  ">",
  "LT",
  "<",
  "GTE",
  ">=",
  "LTE",
  "<=",
  "CONTAINS",
  "CT", // Lucee-only
  "DOES NOT CONTAIN",
  "NCT", // Lucee-only
  "&",
  "&=",
  ".",
  "?:",
  ".?",
  "..."
]);
