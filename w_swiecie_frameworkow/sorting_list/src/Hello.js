import React, { useState } from 'react';

import TableContent from './TableContent';
import { useTransition, animated } from 'react-spring';
import './style.css';

const Hello = ({ name }) =>  {
  //vars
  const [dataList, setDataList] = useState(data);
  const [isUpSorted, setIsUpSorted] = useState(false);
  // let height = 50;
  // const transitions = useTransition(
  //   dataList.map((data, i) => ({...data, height, y: i * height}),
  //   d => d.name,
  //   {
  //     from: {height: 50, opacity: 0},
  //     leave: {height: 0, opacity: 0},
  //     enter: ({y, heigh}) => ({y, height, opacity: 1}),
  //     update: ({y, height}) => ({y, height})
  //   }));

  // const transition = useTransition(
  //   dataList, 
  //   item => item.title, 
  //   {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   delay: 200,
  // });

  const transition = useTransition(
    dataList,
    {keys: dataList => dataList.title},
    {
    from: { opacity: 0 },
    enter: { opacity: 1 }
    });

  //functions
  function sortChangeHandler() {
    if (isUpSorted) {
      setDataList((temporaryList) =>
        temporaryList.sort((a, b) => a.duration - b.duration)
      );
      setIsUpSorted(false);
    } else {
      setDataList((temporaryList) =>
        temporaryList.sort((a, b) => b.duration - a.duration)
      );
      setIsUpSorted(true);
    }
  }

  //JSX
  return (
    <table className="table-auto bg-white rounded-md overflow-hidden shadow-xl">
      <thead>
        <tr>
          <th className="px-4 py-2">Moduł</th>
          <th className="px-4 py-2">Autor</th>
          <th className="px-4 py-2">
            {isUpSorted && (
              <a
                onClick={sortChangeHandler}
                className="hover:text-orange-600"
                href="#"
              >
                <i className="fas fa-caret-down"></i> Czas trwania
              </a>
            )}

            {!isUpSorted && (
              <a
                onClick={sortChangeHandler}
                className="hover:text-orange-600"
                href="#"
              >
                <i className="fas fa-caret-up"></i> Czas trwania
              </a>
            )}
          </th>
        </tr>
      </thead>
      <tbody>

        <TableContent items={dataList}/>

      </tbody>
    </table>
  );
};

const data = [
  { title: 'Fundamenty języka JavaScript', name: 'Adam', duration: 10129 },
  { title: 'Przeglądarka bez tajemnic', name: 'Przemek', duration: 19393 },
  { title: 'W świecie frameworków', name: 'Marcin', duration: 14002 },
];


export default Hello;
