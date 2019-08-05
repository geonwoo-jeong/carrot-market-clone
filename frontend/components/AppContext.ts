import { DocumentContext } from "next/document"
import { Store } from "redux"

export type AppContext = DocumentContext & {
  readonly store: Store
}
