import { shape, string, arrayOf, func } from 'prop-types';

export const cardActionsTypes = {
  header: shape({
    title: string,
    subtitle: string,
    menu: arrayOf(
      shape({
        name: string,
        onPress: func
      })
    )
  }),
  footer: arrayOf(
    shape({
      name: string,
      onPress: func
    })
  )
};
