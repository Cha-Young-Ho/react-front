import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import TextArea from '../common/TextArea';

/**
 * 게시글 작성 폼 컴포넌트
 * @param {object} props - 컴포넌트 속성
 * @param {function} props.addPost - 게시글 추가 함수
 */
function BoardForm({ addPost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    addPost(title, body);
    setTitle('');
    setBody('');
    setShowForm(false);
  };

  const handleCancel = () => {
    setTitle('');
    setBody('');
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <Button onClick={() => setShowForm(true)}>글쓰기</Button>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="글 제목을 입력하세요"
        autoFocus
      />
      <TextArea
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="글 내용을 입력하세요"
        rows={4}
      />
      <div style={{ textAlign: 'right', marginTop: '8px' }}>
        <Button type="primary" onClick={handleSubmit}>등록</Button>
        <Button type="default" onClick={handleCancel}>취소</Button>
      </div>
    </form>
  );
}

export default BoardForm;
