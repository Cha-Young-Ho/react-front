import React from 'react';
import BoardForm from '../components/board/BoardForm';
import BoardList from '../components/board/BoardList';
import BoardDetail from '../components/board/BoardDetail';
import BoardSearch from '../components/board/BoardSearch';
import useBoardState from '../hooks/useBoardState';

/**
 * 게시판 페이지 컴포넌트
 */
function BoardPage() {
  const {
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
    getFilteredPosts
  } = useBoardState();

  const filteredPosts = getFilteredPosts();

  return (
    <div className="board-container">
      <h1>게시판</h1>
      <BoardSearch search={search} setSearch={setSearch} />
      <BoardForm addPost={addPost} />
      <BoardList
        posts={filteredPosts}
        onDelete={deletePost}
        onSelect={setSelectedPost}
        selectedId={selectedPost ? selectedPost.id : null}
        onDoubleClick={handleDoubleClick}
      />
      <BoardDetail
        post={selectedPost}
        onEdit={editPost}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </div>
  );
}

export default BoardPage;
