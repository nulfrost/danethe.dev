import type { FC, HTMLAttributes, ReactElement } from "react";
import { Children } from "react";
import type { Language } from "prism-react-renderer";
import { Highlight, themes } from "prism-react-renderer";

function getLanguageFromClassName(className: string) {
  const match = className.match(/language-(\w+)/);
  return match ? match[1] : "";
}

function isLanguageSupported(lang: string): lang is Language {
  return (
    lang === "markup" ||
    lang === "bash" ||
    lang === "clike" ||
    lang === "c" ||
    lang === "cpp" ||
    lang === "css" ||
    lang === "javascript" ||
    lang === "jsx" ||
    lang === "coffeescript" ||
    lang === "actionscript" ||
    lang === "css-extr" ||
    lang === "diff" ||
    lang === "git" ||
    lang === "go" ||
    lang === "graphql" ||
    lang === "handlebars" ||
    lang === "json" ||
    lang === "less" ||
    lang === "makefile" ||
    lang === "markdown" ||
    lang === "objectivec" ||
    lang === "ocaml" ||
    lang === "python" ||
    lang === "reason" ||
    lang === "sass" ||
    lang === "scss" ||
    lang === "sql" ||
    lang === "stylus" ||
    lang === "tsx" ||
    lang === "typescript" ||
    lang === "wasm" ||
    lang === "yaml"
  );
}

export const CodeBlock: FC<HTMLAttributes<HTMLPreElement>> = ({ children }) => {
  if (!children) throw Error("CodeBlock: children is required");
  const childrenArray = Children.toArray(children);
  const codeElement = childrenArray[0] as ReactElement;
  const className = codeElement?.props?.className || "";
  const code = codeElement.props.children[0] || "";
  const lang = getLanguageFromClassName(className);
  if (!isLanguageSupported(lang))
    throw Error(`CodeBlock: language ${lang} is not supported`);
  return (
    <Highlight code={code.trim()} language={lang || "bash"}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={`overflow-scroll ${className}`} style={{}}>
          <code className={className} style={{}}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })} style={{}}>
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token, key })}
                    style={{}}
                  />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
