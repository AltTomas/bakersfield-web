import Immutable from 'seamless-immutable';

/**
 * Receives an array of strings, and returns an obj with that strings as properties with that string as value.
 * E.G:
 * stringArrayToObject(['A', 'B', 'C']) // { A: 'A', B: 'B', C: 'C' }
 */
export function stringArrayToObject(actionsArray, namespace = '') {
  if (actionsArray.some(actionName => !actionName || typeof actionName !== 'string')) {
    throw new Error('Action names must be strings and must not be empty');
  }
  const actions = Immutable(actionsArray);
  return Immutable.asObject(actions, actionName => [actionName, `${namespace}:${actionName}`]);
}

export const getRandomNumber = (limit = 10) => Math.floor(Math.random() * Number(limit));
