import React from 'react';
import { View, Text, Button } from '@tarojs/components';
import { SentenceItem } from '../types';
import styles from './SentenceList.module.less'; // 引入 CSS Modules 样式

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
    <View className={styles.container}>
      <Text className={styles.title}>发现</Text>
      <View className={styles.list}>
        {sentences.map(sentence => (
          <View key={sentence.id} className={styles.sentenceItem}>
            <Text className={styles.sentenceText}>{sentence.text}</Text>
            <Button className={styles.editButton} onClick={() => handleEditSentence(sentence.id)}>编辑</Button>
            <Button className={styles.deleteButton} onClick={() => handleDeleteSentence(sentence.id)}>删除</Button>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SentenceList;
