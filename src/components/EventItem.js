import React from 'react';
import styled from '@emotion/styled';
import { Link } from '../utils';

const Container = styled(Link)`
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(51,51,51,.05), 0 4px 20px 0 rgba(51,51,51,.1);
  display: block;
  margin-bottom: 20px;
  overflow: hidden;
  text-decoration: none;

  &:hover, &:focus, &:active {
    color: #4388de;
    text-decoration: underline;

    & > div:first-child {
      background-size: 105%;
      transform: none;
    }
  }
`;

const Image = styled.div`
  background-image: ${props => `url(${props.src})`};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 0;
  bottom: 0;
  height: auto;
  order: 0;
  padding-bottom: 65%;
  position: relative;
  right: 0;
  transition: .3s;
  width: 100%;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h4`
  color: #333;
  display: block;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0 0 10px;
  text-decoration: none;
`;

const Date = styled.p`
  color: #3339;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0;
`;

const Tag = styled.p`
  color: #3339;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0;
`;

export default function DownloadItem({
  date,
  image,
  link,
  title,
  tag
}) {
  return (
    <Container to={link}>
      <Image alt={title} src={image} />
      <Content>
        <Title>{ title }</Title>
        <Date>{ date }</Date>
        <Tag>{ tag }</Tag>
      </Content>
    </Container>
  );
}
