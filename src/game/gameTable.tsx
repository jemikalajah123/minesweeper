import React from 'react';
import {Result} from 'antd';
import {SmileOutlined} from '@ant-design/icons';
import {GameClient} from '../common/gameClient';
import {Button} from '@mui/material';
import {useGameTableStyles} from './gameTableStyles';

interface Props {
    gameMap: string[]
}

export function GameTable({
  gameMap,
}: Props) {
  const classes = useGameTableStyles();

  const onCellClick = (y: number, x: number) => {
    GameClient.socket.send(`open ${x} ${y}`);
  };

  const renderMap = (items: any) => {
    return items.map((item: any, rowIndex: number) => {
      const squares = item.split('');
      const row = squares.map((square: any, columnIndex: number) => {
        const key = `square-${rowIndex}-${columnIndex}`;
        const testId = `square-${rowIndex}-${columnIndex}`;
        if (square !== '□') {
          return (
            <Button
              variant="outlined"
              color={square === '*' ? 'error' : 'success'}
              onClick={() => onCellClick(rowIndex, columnIndex)}
              key={key}
              className={classes.cell}
              data-testid={testId}
            >
              <p className={classes.text}>{square}</p>
            </Button>
          );
        }
        return (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onCellClick(rowIndex, columnIndex)}
            key={key}
            className={classes.cell}
            data-testid={testId}
          />
        );
      });
      return (
        <div
          className={classes.row}
          key={`square-row-${rowIndex}`}>
          {row}
        </div>
      );
    });
  };

  if (!gameMap.length) {
    return (
      <Result
        icon={<SmileOutlined />}
        title="Press START and start playing Minesweeper!"
      />
    );
  }

  return (
    <>{renderMap(gameMap)}</>
  );
}
