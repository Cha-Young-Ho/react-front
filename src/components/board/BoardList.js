import React from 'react';
import Button from '../common/Button';

/**
 * 게시글 목록 컴포넌트
 * @param {object} props - 컴포넌트 속성
 * @param {Array} props.posts - 게시글 목록
 * @param {function} props.onDelete - 삭제 함수
 * @param {function} props.onSelect - 선택 함수
 * @param {number|null} props.selectedId - 선택된 게시글 ID
 * @param {function} props.onDoubleClick - 더블클릭 함수
 */
function BoardList({ posts, onDelete, onSelect, selectedId, onDoubleClick }) {
  return (
    <div className="board-list">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr
              key={post.id}
              style={post.id === selectedId ? { background: '#e6f7ff' } : {}}
            >
              <td>{post.id}</td>
              <td
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => onSelect(post)}
                onDoubleClick={() => onDoubleClick && onDoubleClick(post)}
              >
                {post.title}
              </td>
              <td>
                <Button 
                  type="danger" 
                  onClick={() => onDelete(post.id)}
                >
                  삭제
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '16px', color: '#888' }}>
          게시글이 없습니다.
        </div>
      )}
    </div>
  );
}

export default BoardList;
