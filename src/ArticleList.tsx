interface Article {
  id: number;
  title: string;
  content: string;
}

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}