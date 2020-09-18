import React from 'react';
import styled from '@emotion/styled';
import { Link } from '../utils';

const Container = styled.article`
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(51,51,51,.05), 0 4px 20px 0 rgba(51,51,51,.1);
  margin-bottom: 20px;
  padding: 20px;
`;

const Image = styled.img`
  max-width: 100px;
  max-height: 40px;
  margin-bottom: 15px;
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: left;
  object-position: left;
  font-family: "object-fit: contain; object-position: left";
`;

const Title = styled(Link)`
  color: #333;
  display: block;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0 0 10px;
  text-decoration: none;

  &:hover, &:focus, &:active {
    color: #4388de;
    text-decoration: underline;
  }
`;

const Author = styled.p`
  color: #333;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 10px;
`;

const Date = styled.p`
  color: #3339;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 10px;
`;

const Tag = styled.p`
  background-color: rgba(67,136,222,.1);
  border-radius: 4px;
  color: #4388de;
  display: inline-block;
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin: 0;
  padding: 4px 10px;
`;

export default function DownloadItem({
  author,
  date,
  image,
  link,
  title,
  tag
}) {
  return (
    <Container>
      <Image alt={title} src={image} />
      <Title to={link}>{ title }</Title>
      <Author>by <strong>{ author }</strong></Author>
      <Date>{ date }</Date>
      <Tag>{ tag }</Tag>
    </Container>
  );
}
