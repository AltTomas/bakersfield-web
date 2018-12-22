import React, { Component } from 'react';
import { string, bool } from 'prop-types';
import Markdown from 'react-markdown';
import breaks from 'remark-breaks';

import { retrieveClassNamesFromProps } from 'utils/styleUtils';

import styles from './styles.module.scss';

const variants = [
  'uppercase',
  'lowercase',
  'xxsmall',
  'xsmall',
  'small',
  'xmedium',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
  'title',
  'xtitle',
  'xxtitle',
  'light',
  'semilight',
  'semibold',
  'bold',
  'extrabold',
  'blue',
  'darkBlue',
  'gray',
  'white',
  'error',
  'green'
];

class AText extends Component {
  render() {
    const style = retrieveClassNamesFromProps(variants, styles, this.props);

    const handleCustomTag = text => {
      let value = text;
      if (typeof text === 'object') {
        value = text.children;
      }
      const CustomTag = this.props.tag;
      return (
        <CustomTag key={value} className={`${styles.base} ${style} ${this.props.className}`}>
          {value}
        </CustomTag>
      );
    };

    const renderLinkComponent = prop => (
      <a href={prop.href} rel="noopener noreferrer" target="_blank">
        {prop.children}
      </a>
    );

    const value = isNaN(this.props.children) ? this.props.children : `${this.props.children}`; // eslint-disable-line

    return this.props.withoutMarkdown ? (
      handleCustomTag(value)
    ) : (
      <Markdown
        source={value}
        escapeHtml={false}
        plugins={[breaks]}
        unwrapDisallowed
        disallowedTypes={['root', 'paragraph']}
        className={`${styles.base} ${style} ${this.props.className}`}
        renderers={{
          link: renderLinkComponent,
          text: handleCustomTag
        }}
      >
        {value}
      </Markdown>
    );
  }
}

AText.defaultProps = {
  tag: 'span'
};

AText.propTypes = {
  className: string,
  tag: string,
  withoutMarkdown: bool
};

export default AText;
