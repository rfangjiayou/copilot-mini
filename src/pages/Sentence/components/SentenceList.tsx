import React from 'react';
import { View, Text, Button } from '@tarojs/components';
import { SentenceItem } from '../types';

interface SentenceListProps {
  sentences: SentenceItem[];
  setSentences: React.Dispatch<React.SetStateAction<SentenceItem[]>>;
  setEditingSentence: React.Dispatch<React.SetStateAction<SentenceItem | null>>;
}

const SentenceList: React.FC<SentenceListProps> = ({ sentences, setSentences, setEditingSentence }) => {
  const handleEditSentence = (id: number) => {
    const sentence = sentences.find(s => s.id === id);
    if (sentence) {
      setEditingSentence(sentence);
    }
  };

  const handleDeleteSentence = (id: number) => {
    const updatedSentences = sentences.filter(s => s.id !== id);
    setSentences(updatedSentences);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('sentences', JSON.stringify(updatedSentences));
    }
  };

  return (
    <View>
      <Text>语句列表</Text>
      <ul>
        {sentences.map(sentence => (
          <li key={sentence.id}>
            {sentence.text}
            <Button onClick={() => handleEditSentence(sentence.id)}>编辑</Button>
            <Button onClick={() => handleDeleteSentence(sentence.id)}>删除</Button>
          </li>
        ))}
      </ul>
    </View>
  );
};

export default SentenceList;
