import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import SentenceList from './components/SentenceList';
import AddSentence from './components/AddSentence';
import EditSentence from './components/EditSentence';
import { SentenceItem } from './types';

const Sentence: React.FC = () => {
  const [sentences, setSentences] = useState<SentenceItem[]>([]);
  const [newSentence, setNewSentence] = useState('');
  const [editingSentence, setEditingSentence] = useState<SentenceItem | null>(null);

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
      <SentenceList sentences={sentences} onEdit={handleEditSentence} onDelete={handleDeleteSentence} />
      <AddSentence newSentence={newSentence} onChange={setNewSentence} onAdd={handleAddSentence} />
      <EditSentence editingSentence={editingSentence} onChange={(text) => setEditingSentence(editingSentence ? { ...editingSentence, text } : null)} onUpdate={handleUpdateSentence} />
    </View>
  );
};

export default Sentence;
