import React from 'react';

import { useTransition, animated } from 'react-spring';
import './style.css';

const TableContent = ({items}) => {

    const transitions = useTransition(items, {keys: item => item.title}, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      delay: 200,
    })


  return (

    transitions.map((item) => (

      <animated.tr key={item.title} className="tr-height" >
      <td className="border px-4 py-2">{item.title}</td>
      <td className="border px-4 py-2">{item.name}</td>
      <td className="border px-4 py-2">{item.duration}</td>
    </animated.tr>
    ))



  );
};

export default TableContent;


// {dataList.map((item) => (
//   <TrTabeli key={item.title} item={item} />
// ))}