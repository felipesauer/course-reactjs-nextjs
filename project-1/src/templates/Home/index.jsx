import React, { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { loadPost } from '../../utils/load-post';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = searchValue
    ? posts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleLoadPost = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPost();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  const handleLoadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    console.log('oi');
    handleLoadPost(0, postsPerPage);
  }, [handleLoadPost, postsPerPage]);

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p> Não existem posts :(</p>}

      <div className="button-container">
        {!searchValue && <Button text="Load more posts" onClick={handleLoadMorePosts} disabled={noMorePosts} />}
      </div>
    </section>
  );
};
