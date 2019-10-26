import React from 'react';

export type Props = {
  // could be global declaration if logging other types of items
  item: {
    datetime: string;
    value: string;
    number: string;
    occurrences: string;
    last_datetime: string;
  }
}

type Keys = Array<keyof Props['item']>;

const LogItem = ({ item }: Props) => {
  const itemProperties = Object.keys(item).sort() as Keys;

  return (
    <ul>
      {itemProperties.map((key, i) => {
        return <li key={i}>{key}: {item[key]}</li>
      })}
    </ul>
  )
};

export default LogItem;
