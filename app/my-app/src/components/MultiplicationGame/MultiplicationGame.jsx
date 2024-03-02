import React, { useState, useEffect } from 'react';

const MultiplicationGame = () => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 9) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 9) + 1);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key >= 0 && event.key <= 9) {
        // ユーザーの答えに数字を追加
        setUserAnswer((prev) => `${prev}${event.key}`);
      } else if (event.key === 'Enter') {
        // エンターキーが押された場合、答えをチェック
        checkAnswer();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [userAnswer]); // この依存配列を削除または変更することを検討してください

  const generateNewProblem = () => {
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
    setUserAnswer('');
    setMessage('');
  };

  const checkAnswer = () => {
    if (parseInt(userAnswer) === num1 * num2) {
      setMessage('正解！');
    } else {
      setMessage('不正解。');
    }
    setTimeout(generateNewProblem, 2000); // 2秒後に新しい問題を生成
  };

  return (
    <div>
      <h2>掛け算クイズ</h2>
      <p>{`${num1} × ${num2} = ?`}</p>
      <p>答え: {userAnswer}</p>
      <p>{message}</p>
    </div>
  );
};

export default MultiplicationGame;
