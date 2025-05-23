import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import TextArea from '../common/TextArea';

// 스타일드 컴포넌트 정의
const Container = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  background: #f8fafc;
`;

const Title = styled.h2`
  color: #1769aa;
  margin-bottom: 12px;
`;

const ContentTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const ContentBody = styled.div`
  margin-top: 10px;
  white-space: pre-line;
`;

const ButtonContainer = styled.div`
  text-align: right;
  margin-top: 10px;
`;

/**
 * 게시글 상세보기 컴포넌트
 * @param {object} props - 컴포넌트 속성
 * @param {object} props.post - 선택된 게시글
 * @param {function} props.onEdit - 수정 함수
 * @param {boolean} props.editMode - 수정 모드 여부
 * @param {function} props.setEditMode - 수정 모드 설정 함수
 */
function BoardDetail({ post, onEdit, editMode, setEditMode }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // post가 바뀔 때마다 폼 값도 바꿔줌
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setEditMode(false);
    }
  }, [post, setEditMode]);

  if (!post) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    onEdit(post.id, title, body);
  };

  return (
    <Container>
      <Title>상세보기</Title>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ fontSize: '1.2em', fontWeight: 'bold' }}
          />
          <TextArea
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={4}
          />
          <ButtonContainer>
            <Button type="primary" onClick={handleSubmit}>수정 완료</Button>
            <Button type="default" onClick={() => setEditMode(false)}>취소</Button>
          </ButtonContainer>
        </form>
      ) : (
        <>
          <ContentTitle>{post.title}</ContentTitle>
          <ContentBody>{post.body}</ContentBody>
          <ButtonContainer>
            <Button type="primary" onClick={() => setEditMode(true)}>수정</Button>
          </ButtonContainer>
        </>
      )}
    </Container>
  );
}

export default BoardDetail;
