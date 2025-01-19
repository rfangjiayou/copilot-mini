import React from 'react';
import { View, Button } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import { SentenceItem } from '../types';

interface EditSentenceProps {
  sentences: SentenceItem[];
  setSentences: React.Dispatch<React.SetStateAction<SentenceItem[]>>;
  editingSentence: SentenceItem | null;
  setEditingSentence: React.Dispatch<React.SetStateAction<SentenceItem | null>>;
}

const EditSentence: React.FC<EditSentenceProps> = ({ sentences, setSentences, editingSentence, setEditingSentence }) => {
  if (!editingSentence) return null;

  const handleUpdateSentence = () => {
    const updatedSentences = sentences.map(s =>
      s.id === editingSentence.id ? { ...s, text: editingSentence.text } : s
    );
    setSentences(updatedSentences);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('sentences', JSON.stringify(updatedSentences));
    }
    setEditingSentence(null);
  };

  return (
    <View>
      <AtInput
        name='editingSentence'
        title='编辑语句'
        type='text'
        placeholder='编辑语句'
        value={editingSentence.text}
        onChange={(value) => setEditingSentence({ ...editingSentence, text: value as string })}
      />
      <Button onClick={handleUpdateSentence}>更新语句</Button>
    </View>
  );
};

export default EditSentence;
