import React, { useState, useEffect } from 'react';
import { View, Text, Button } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import styles from './index.module.less'; // 引入 CSS Modules 样式

interface Sentence {
  id: number;
  text: string;
}

const Index: React.FC = () => {
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [newSentence, setNewSentence] = useState('');
  const [editingSentence, setEditingSentence] = useState<Sentence | null>(null);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storedSentences = JSON.parse(localStorage.getItem('sentences') || '[]');
      setSentences(storedSentences);
    }
  }, []);

  const handleAddSentence = () => {
    if (newSentence.trim() === '') return; // 确保不添加空语句
    const newSentences = [...sentences, { id: Date.now(), text: newSentence }];
    setSentences(newSentences);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('sentences', JSON.stringify(newSentences));
    }
    setNewSentence('');
  };

  const handleEditSentence = (id: number) => {
    const sentence = sentences.find(s => s.id === id);
    if (sentence) {
      setEditingSentence(sentence);
    }
  };

  const handleUpdateSentence = () => {
    const updatedSentences = sentences.map(s =>
      s.id === editingSentence?.id ? { ...s, text: editingSentence.text } : s
    );
    setSentences(updatedSentences);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('sentences', JSON.stringify(updatedSentences));
    }
    setEditingSentence(null);
  };

  const handleDeleteSentence = (id: number) => {
    const updatedSentences = sentences.filter(s => s.id !== id);
    setSentences(updatedSentences);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('sentences', JSON.stringify(updatedSentences));
    }
  };

  return (
    <View className='index'>
      <Text>语句列表</Text>
      <ul>
        {sentences.map(sentence => (
          <li key={sentence.id}>
            {sentence.text}
            <Button type='primary' onClick={() => handleEditSentence(sentence.id)}>编辑</Button>
            <Button type='default' onClick={() => handleDeleteSentence(sentence.id)}>删除</Button>
          </li>
        ))}
      </ul>
      <View>
        <AtInput
          className={styles.customInput}
          name='newSentence'
          type='text'
          placeholder='输入新语句'
          value={newSentence}
          onChange={(value) => setNewSentence(value as string)}
        />
        <Button type='primary' onClick={handleAddSentence}>新增语句</Button>
      </View>
      {editingSentence && (
        <View>
          <AtInput
            className={styles.customInput}
            name='editingSentence'
            title='编辑语句'
            type='text'
            placeholder='编辑语句'
            value={editingSentence.text}
            onChange={(value) => setEditingSentence({ ...editingSentence, text: value as string })}
          />
          <Button type='primary' onClick={handleUpdateSentence}>更新语句</Button>
        </View>
      )}
    </View>
  );
};

export default Index;
