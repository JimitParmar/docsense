// src/docspresso.d.ts

declare module 'docspresso' {

  export interface SubField {
    title: string;
    renderContent: (className?: string) => JSX.Element;
    className?: string;
  }

  export interface MainField {
    title: string;
    subFields: SubField[];
  }

  export function generateDocs(mainFields: MainField[]): MainField[];

  export default generateDocs;
}
