/** @jsxImportSource @emotion/react */
import { containerWhite } from '../Header/Header.module.style';
import { buttonGreen } from '../Button/Button.module.style';
import { cardTitle, cardDescription, card } from './Article.module.style';
import Button from '../Button/Button';

export interface Article {
  title: string;
  description: string[];
  imageUrl: string;
}

export interface ArticleProps {
  articles: Article[];
}

const Articles = ({ articles }: ArticleProps) => {
  return (
    <div className="container-fluid" css={containerWhite}>
      <div className="d-flex justify-content-center mt-4 mb-1">
        <h2>Latest articles</h2>
      </div>
      <div className="row bg-white pt-4">
        {articles.map((article: Article) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 mb-4" role="button">
              <div className="card" css={card}>
                <img
                  src={article.imageUrl}
                  alt="card-img"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title" css={cardTitle}>
                    {article.title}
                  </h4>
                  <p css={cardDescription} className="card-body">
                    <div className="d-flex">
                      {article.description.map(
                        (description: string, index: number) => {
                          if (article.description.length - 1 === index)
                            return <div className="m-1">{description} </div>;
                          return <div className="m-1">{description} | </div>;
                        }
                      )}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Button color={buttonGreen} text="See all articles" />
      </div>
    </div>
  );
};

export default Articles;
