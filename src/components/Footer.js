import React from 'react';
import styled from '@emotion/styled';
import Action from './Action';
import { htmlToReact } from '../utils';

const StyledFooter = styled.footer`
  background-color: #eee;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: .875rem;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  padding: 20px;
  width: 100%;
`;

export default function Footer(props) {
  const footer = props?.pageContext?.site?.siteMetadata?.footer || {};

  return (
    <StyledFooter>
      <Wrapper>
        <div className="site-footer__copyright">
          {footer.content && (
            htmlToReact(footer.content)
          )}
          {footer.links.map((action, index) => (
            <Action key={index} {...props} action={action} />
          ))}
        </div>
        {footer.has_nav && (
          <div className="site-footer__nav">
            {footer.has_nav && (
              <ul className="site-footer__menu menu">
                {footer.nav_links.map((action, index) => (
                  <li key={index}>
                    <Action {...props} action={action} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </Wrapper>
    </StyledFooter>
  );
}
