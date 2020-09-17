import React from 'react';
import { classNames } from '../utils';
import SectionActions from './SectionActions';

export default function CtaSection(props) {
  const {
    section
  } = props;

  return (
    <section className="section section--cta">
      <div className="container container--lg">
        <div
          style={{
            backgroundImage: section?.background_image ? `url(${section?.background_image})` : null
          }}
          className={classNames('section__body', 'align-center', {
            'inverse bg-blue': section?.has_background && (section?.background_color === 'blue'),
            'bg-gray': section?.has_background && (section?.background_color === 'gray')
          })}
        >
          <div className="container container--md">
            {section?.title && (
              <h2 className="section__title">{section?.title}</h2>
            )}
            {section?.subtitle && (
              <div className="section__copy">
                <p>{section?.subtitle}</p>
              </div>
            )}
            {section?.actions && (
              <div className="section__actions btn-group">
                <SectionActions {...props} actions={section?.actions} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
