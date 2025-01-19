import React from 'react';
import { View, Text, Button } from '@tarojs/components';
import { SentenceItem } from '../types';

interface SentenceListProps {
  sentences: SentenceItem[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const SentenceList: React.FC<SentenceListProps> = ({ sentences, onEdit, onDelete }) => {
  return (
    <View>
      <Text>语句列表</Text>
      <ul>
        {sentences.map(sentence => (
          <li key={sentence.id}>
            {sentence.text}
            <Button onClick={() => onEdit(sentence.id)}>编辑</Button>
            <Button onClick={() => onDelete(sentence.id)}>删除</Button>
          </li>
        ))}
      </ul>
    </View>
  );
};

export default SentenceList;
