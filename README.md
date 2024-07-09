# Docspresso

Docspresso is an open-source documentation framework that simplifies the creation of customizable and structured documentation for your projects.

## Features

- **Customizable Structure:** Define main fields and subfields to organize your documentation.
- **Flexible Content Rendering:** Render content dynamically based on user-defined functions.
- **Integration with React and Next.js:** Easily integrate Docspresso components into your React or Next.js projects.
- **Styling with Tailwind CSS:** Use Tailwind CSS for styling your documentation components.

## Installation

## 1. To install Docspresso, simply add it as a dependency to your project:

```bash
npm install docspresso
# or
yarn add docspresso
```
Paste the following code in your mainContent.tsx/.jsx file inside page directory: 
```bash
import { generateDocs, MainField, SubField } from 'docspresso';

const mainFields: MainField[] = [
  {
    title: 'Guide',
    subFields: [
      {
        title: 'Installation',
        renderContent: (className?: string) => <div className={className}>Content 1</div>,
        className: 'custom-class-1'
      },
      {
        title: 'Usage',
        renderContent: (className?: string) => <div className={className}>Content 2</div>,
        className: 'custom-class-2'
      },
    ],
  },
];

const mainContent = generateDocs(mainFields);

export default mainContent;
```
## 2. Paste this in your main documentation's Page.tsx/jsx file:
```bash
Paste this code in your page.tsx or page.jsx file in documentation directory:
'use client'
import mainContent from "../docs/mainContent";
import { useState } from "react";
export default function DocsPage() {
  // const router = useRouter();
  const [expandedMainField, setExpandedMainField] = useState<number | null>(null);
  const [selectedSubField, setSelectedSubField] = useState<number | null>(null);
  const toggleMainField = (mainIndex: number) => {
    if (expandedMainField === mainIndex) {
      setExpandedMainField(null); // Collapse if clicking on the same expanded mainField
    } else {
      setExpandedMainField(mainIndex); // Expand if clicking on a different mainField
      setSelectedSubField(null); // Reset selectedSubField when expanding a new mainField
    }
  };
  const handleSubFieldClick = (subIndex: number) => {
    setSelectedSubField(subIndex);
  };
  return (
    <div className="w-screen mx-40 flex">
    {/* Sidebar with Fixed Position */}
    <div className="h-screen w-[20%] sticky top-0 left-0 py-3  bg-white space-y-10">
      <ul>
        {mainContent.map((mainField, mainIndex) => (
          <li key={mainIndex} className="pb-2">
            <h2
              onClick={() => toggleMainField(mainIndex)}
              className={`font-semibold text-lg pb-2 cursor-pointer ${
                expandedMainField === mainIndex ? 'text-blue-500' : ''
              }`}
            >
              {mainField.title}
            </h2>
            {expandedMainField === mainIndex && (
              <ul>
                {mainField.subFields.map((subField, subIndex) => (
                  <li key={subIndex} className="ml-8 py-1 list-disc">
                    <h3
                      onClick={() => handleSubFieldClick(subIndex)}
                      className={`cursor-pointer ${
                        selectedSubField === subIndex ? 'text-blue-500' : ''
                      }`}
                    >
                      {subField.title}
                    </h3>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
    {/* Main Content Area */}
    <div className="w-[80%] mr-12">
      {expandedMainField !== null && selectedSubField !== null && (
        <div className={mainContent[expandedMainField].subFields[selectedSubField].className}>
          {mainContent[expandedMainField].subFields[selectedSubField].renderContent()}
        </div>
      )}
    </div>
  </div>
);
}
```

## 3. Run your project
```bash
npm run dev
```

## Documentation Example
Explore the example folder for a complete [example](https://hirasys.vercel.app/docs) of using Docspresso in a Next.js project.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## Support
If you find Docspresso helpful, consider supporting me on [Patreon](https://patreon.com/Jimit) to help sustain its development.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/JimitParmar/docspresso-documentation-framework/blob/main/LICENSE) file for details.
