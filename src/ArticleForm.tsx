import { useState } from 'react';

interface ArticleFormProps {
  addArticle: (title: string, content: string) => void;
}

export default function ArticleForm({ addArticle }: ArticleFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    addArticle(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Article</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Article</button>
    </form>
  );
}