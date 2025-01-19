import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import SentenceList from './components/SentenceList';
import AddSentence from './components/AddSentence';
import EditSentence from './components/EditSentence';
import { SentenceItem } from './types';

const Sentence: React.FC = () => {
  const [sentences, setSentences] = useState<SentenceItem[]>([]);
  const [editingSentence, setEditingSentence] = useState<SentenceItem | null>(null);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storedSentences = JSON.parse(localStorage.getItem('sentences') || '[]');
      setSentences(storedSentences);
    }
  }, []);

  return (
    <View className='index'>
      <SentenceList sentences={sentences} setSentences={setSentences} setEditingSentence={setEditingSentence} />
      <AddSentence sentences={sentences} setSentences={setSentences} />
      <EditSentence sentences={sentences} setSentences={setSentences} editingSentence={editingSentence} setEditingSentence={setEditingSentence} />
    </View>
  );
};

export default Sentence;
