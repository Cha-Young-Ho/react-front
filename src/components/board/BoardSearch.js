import React from 'react';
import Input from '../common/Input';

/**
 * 게시글 검색 컴포넌트
 * @param {object} props - 컴포넌트 속성
 * @param {string} props.search - 검색어
 * @param {function} props.setSearch - 검색어 설정 함수
 */
function BoardSearch({ search, setSearch }) {
  return (
    <div className="board-search" style={{ marginBottom: '16px' }}>
      <Input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
    </div>
  );
}

export default BoardSearch;
