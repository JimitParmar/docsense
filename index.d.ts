// index.d.ts

export interface SubField {
  title: string;
  renderContent: (className?: string) => JSX.Element;
  className?: string;
}

export interface MainField {
  title: string;
  subFields: SubField[];
}

declare function generateDocs(mainFields: MainField[]): MainField[];

export default generateDocs;
