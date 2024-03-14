import ReactMarkdown from 'react-markdown';

type MarkdownProps = {
  content: string;
};

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default Markdown;
