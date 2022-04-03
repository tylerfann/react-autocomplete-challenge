import React, { useState, useEffect } from 'react';
import './style.css';

const list = {
  id: [
    'A123',
    'B123',
    'C123',
    'D123',
    'E123',
    'F123',
    'G123',
    'H123',
    'I123',
    'J123',
    'K123',
    'L123',
    'M123',
    'N123',
    'O123',
    'P123',
    'Q123',
    'R123',
    'S123',
    'T123',
    'U123',
    'V123',
    'W123',
    'X123',
    'Y123',
    'Z123',
  ],
  byId: {
    A123: { label: 'Closed', value: 'A' },
    B123: { label: 'Multiply', value: 'B' },
    C123: { label: 'Skirt', value: 'C' },
    D123: { label: 'Turn', value: 'D' },
    E123: { label: 'Hideous', value: 'E' },
    F123: { label: 'Equable', value: 'F' },
    G123: { label: 'Thrill', value: 'G' },
    H123: { label: 'Nondescript', value: 'H' },
    I123: { label: 'Gentle', value: 'I' },
    J123: { label: 'Guess', value: 'J' },
    K123: { label: 'Porter', value: 'K' },
    L123: { label: 'Abhorrent', value: 'L' },
    M123: { label: 'Marry', value: 'M' },
    N123: { label: 'Mindless', value: 'N' },
    O123: { label: 'Request', value: 'O' },
    P123: { label: 'Productive', value: 'P' },
    Q123: { label: 'Basketball', value: 'Q' },
    R123: { label: 'Relax', value: 'R' },
    S123: { label: 'Scale', value: 'S' },
    T123: { label: 'Injure', value: 'T' },
    U123: { label: 'Terrible', value: 'U' },
    V123: { label: 'Delay', value: 'V' },
    W123: { label: 'Lively', value: 'W' },
    X123: { label: 'Scarecrow', value: 'X' },
    Y123: { label: 'Quiver', value: 'Y' },
    Z123: { label: 'Animated', value: 'Z' },
  },
};

export default function App() {
  const newList = list.id.map((el) => {
    return list.byId[el];
  });
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const findMatch = (string) => {
    const match = newList.filter((el) =>
      el.label.toLowerCase().includes(string.toLowerCase())
    );

    if (match) {
      return match;
    }
    return false;
  };

  useEffect(() => {
    setItems(newList);
  }, []);

  useEffect(() => {
    if (text.length > 0) {
      const match = findMatch(text);
      if (match) {
        setItems(match);
      }
    }

    if (text.length === 0) {
      setItems(newList);
    }
  }, [text]);

  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: '8px',
          borderRadius: '3px',
        }}
      >
        <label
          style={{ color: 'blue', fontWeight: 'bold', marginBottom: '2px' }}
        >
          Test Label
        </label>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          style={{
            border: 'none',
            borderBottom: 'solid 2px blue',
            padding: '4px',
          }}
        />
      </form>
      {items.length > 0 && (
        <ul
          style={{
            backgroundColor: 'white',
            listStyle: 'none',
            padding: '0px',
            borderRadius: '3px',
          }}
        >
          {items.map((el, index) => {
            const splitString = el.label
              .toLowerCase()
              .split(text.toLowerCase());
            splitString.splice(1, 0, text.toLowerCase());
            return (
              <li
                onClick={() => setText(el.label.toLowerCase())}
                style={{ padding: '4px' }}
                key={index}
                className="item"
              >
                {splitString.map((el, index) => {
                  if (index === 1) {
                    return (
                      <span key={index} style={{ fontWeight: 'bold' }}>
                        {el}
                      </span>
                    );
                  } else {
                    return <span key={index}>{el}</span>;
                  }
                })}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
