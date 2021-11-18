import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@codemirror/highlight"

export const KlipperConfLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
      }),
      foldNodeProp.add({
        "HeaderToHeader": foldInside
      }),
      styleTags({
        Header: t.namespace,
        Include: t.namespace,
        KeyValue: t.macroName,
        IncludeVal: t.className,
        LineComment: t.comment
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "#"}
  }
})

export function KlipperConf() {
  return new LanguageSupport(KlipperConfLanguage)
}
