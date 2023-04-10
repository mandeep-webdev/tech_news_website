import { useContext } from 'react';
import { AppContext } from '../context';
import styles from './newsList.css';

function NewsList() {
  const { hits, nbPages, isLoading } = useContext(AppContext);

  return (
    <>
      {hits &&
        hits.map((news) => {
          const { author, title, objectID, created_at, url, num_comments } =
            news;
          return (
            <>
              <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                  By <span>{author} </span>| <span>{num_comments}</span>{' '}
                  comments{' '}
                </p>
                <div className="card-btn">
                  <a href={url} target="_blank">
                    Read More
                  </a>
                  <a href="#">Remove</a>
                </div>
                <h6>{created_at}</h6>
              </div>
            </>
          );
        })}
    </>
  );
}

export default NewsList;
