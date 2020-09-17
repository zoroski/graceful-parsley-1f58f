import React from 'react';
import { Link, classNames, withPrefix } from '../utils';

export default function Action({
  action
}) {
  return (
    <Link
      className={classNames({ 'btn': action?.style !== 'link', 'btn--secondary': action?.style === 'secondary' })}
      to={withPrefix(action?.url)} {...(action?.new_window ? ({ target: '_blank', rel: 'noopener' }) : null)}
    >
      {action?.label}
    </Link>
  );
}
