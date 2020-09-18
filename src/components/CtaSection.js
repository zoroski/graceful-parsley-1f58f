import React from 'react';
import styled from '@emotion/styled';
import SectionActions from './SectionActions';

const Container = styled.section`
  background-image: url(${props => props?.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 3.75rem;
  width: 100%;
`;

const Content = styled.div`
  padding: 3.75em 0;
  position: relative;
  text-align: center;
`;

const Title = styled.h2`
  color: ${props => props.hasBackgroundImage ? '#fff' : '#282f36'};
  font-size: 2.25em;
  font-weight: 700;
  line-height: 1.2;
  margin: 2.25rem 0 1.125rem;
`;

const Copy = styled.p`
  color: ${props => props.hasBackgroundImage ? '#fff' : '#536171'};
  margin: 0 0 1.5rem;
  text-align: center;
`;

const ActionsContainer = styled.div`
  justify-content: center;
`;

export default function CtaSection(props) {
  const {
    section
  } = props;

  return (
    <Container backgroundImage={section?.background_image}>
      <div className="container container--lg">
        <Content>
          <div className="container container--md">
            {section?.title && (
              <Title hasBackgroundImage={!!section?.background_image}>{section?.title}</Title>
            )}
            {section?.subtitle && (
              <Copy hasBackgroundImage={!!section?.background_image}>
                <p>{section?.subtitle}</p>
              </Copy>
            )}
            {section?.actions && (
              <ActionsContainer>
                <SectionActions {...props} actions={section?.actions} center />
              </ActionsContainer>
            )}
          </div>
        </Content>
      </div>
    </Container>
  );
}
