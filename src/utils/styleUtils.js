export const retrieveClassNamesFromProps = (variants, styles, props, suffix = '') =>
  variants
    .filter(variant => props[variant])
    .map(variant => styles[`${variant}${suffix}`])
    .join(' ');

export const joinClasses = classes => classes.filter(className => className).join(' ');
