import React from 'react';
import {
  NameGeneratorInterface,
  NameGeneratorAutoCompleteInterface,
  QuizInterface,
  SociogramInterface,
} from '../containers/Interfaces';

export default function loadInterface(options) {
  if (Object.hasOwnProperty.call(options, 'custom')) { return options.custom; }
  switch (options) {
    case 'NameGeneratorAutoComplete':
      return NameGeneratorAutoCompleteInterface;
    case 'NameGenerator':
      return NameGeneratorInterface;
    case 'Sociogram':
      return SociogramInterface;
    case 'Quiz':
      return QuizInterface;
    default:
      return () => (<div>No &quot;{options}&quot; interface found.</div>);
  }
}
