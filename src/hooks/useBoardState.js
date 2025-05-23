import { useState } from 'react';

/**
 * 게시판 상태 관리 커스텀 훅
 * @returns {object} 게시판 상태와 관련 함수들
 */
function useBoardState() {
  // 초기 게시글 데이터
  const [posts, setPosts] = useState([
    { id: 1, title: '첫 번째 글', body: '첫 번째 글의 내용입니다.' },
    { id: 2, title: '두 번째 글', body: '두 번째 글의 내용입니다.' },
    { id: 3, title: '세 번째 글', body: '세 번째 글의 내용입니다.' }
  ]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [search, setSearch] = useState('');
  const [nextId, setNextId] = useState(4);
  const [editMode, setEditMode] = useState(false);

  // 글 추가 함수
  const addPost = (title, body) => {
    setPosts([
      ...posts,
      { id: nextId, title, body }
    ]);
    setNextId(nextId + 1);
  };

  // 글 삭제 함수
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    if (selectedPost && selectedPost.id === id) {
      setSelectedPost(null);
    }
  };

  // 글 수정 함수
  const editPost = (id, newTitle, newBody) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, title: newTitle, body: newBody } : post
    );
    setPosts(updatedPosts);
    setSelectedPost(
      updatedPosts.find(post => post.id === id) || null
    );
    setEditMode(false);
  };

  // 더블클릭 시 수정 모드 진입 함수
  const handleDoubleClick = (post) => {
    setSelectedPost(post);
    setEditMode(true);
  };

  // 검색어가 포함된 게시글만 보여주는 필터링 함수
  const getFilteredPosts = () => {
    return posts
      .filter(post =>
        post.title.includes(search) ||
        post.body.includes(search)
      )
      .sort((a, b) => b.id - a.id);
  };

  return {
    posts,
    selectedPost,
    search,
    editMode,
    addPost,
    deletePost,
    editPost,
    handleDoubleClick,
    setSelectedPost,
    setSearch,
    setEditMode,
    getFilteredPosts,
  };
}

export default useBoardState;
