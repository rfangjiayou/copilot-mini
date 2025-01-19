import React, { useState } from 'react';
import { View, Button } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import { SentenceItem } from '../types';

interface AddSentenceProps {
  sentences: SentenceItem[];
  setSentences: React.Dispatch<React.SetStateAction<SentenceItem[]>>;
}

const AddSentence: React.FC<AddSentenceProps> = ({ sentences, setSentences }) => {
  const [newSentence, setNewSentence] = useState('');

  const handleAddSentence = () => {
    if (newSentence.trim() === '') return; // 确保不添加空语句
    const newSentences = [...sentences, { id: Date.now(), text: newSentence }];
    setSentences(newSentences);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('sentences', JSON.stringify(newSentences));
    }
    setNewSentence('');
  };

  return (
    <View>
      <AtInput
        name='newSentence'
        type='text'
        placeholder='输入新语句'
        value={newSentence}
        onChange={(value) => setNewSentence(value as string)}
      />
      <Button onClick={handleAddSentence}>新增语句</Button>
    </View>
  );
};

export default AddSentence;
