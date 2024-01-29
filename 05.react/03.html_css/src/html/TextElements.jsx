import React from 'react';
import '../css/TextElements.css';

// Component to demonstrate various text-related HTML elements
function TextElements() {
  return (
    <div className="text-elements">
      {/* Heading elements */}
      <h1>Heading 1 (h1)</h1>
      <h2>Heading 2 (h2)</h2>
      <h3>Heading 3 (h3)</h3>
      <h4>Heading 4 (h4)</h4>
      <h5>Heading 5 (h5)</h5>
      <h6>Heading 6 (h6)</h6>

      {/* Paragraph with different text styles */}
      <p className="paragraph">
        This is a <strong>bold</strong> text, this is an <em>italic</em> text,
        and here's a <span className="underline">underlined</span> text.
      </p>

      {/* Blockquote for quotations */}
      <blockquote cite="http://example.com">
        This is a blockquote, commonly used for quoting blocks of text.
      </blockquote>

      {/* Preformatted text */}
      <pre>
        Preformatted text block
        maintains spaces and line breaks.
      </pre>

      {/* Code snippet */}
      <code>
        {`<p>HTML code snippet</p>`}
      </code>

      {/* Small text */}
      <small>
        This is small text, often used for disclaimers or fine print.
      </small>

      {/* Marked or highlighted text */}
      <mark>
        This is marked text, used to highlight parts of the text.
      </mark>

      {/* Abbreviations and acronyms */}
      <p>
        The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.
      </p>
    </div>
  );
}

export default TextElements;
