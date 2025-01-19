import React from 'react';
import { View, Button } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import { SentenceItem } from '../types';

interface EditSentenceProps {
  editingSentence: SentenceItem | null;
  onChange: (value: string) => void;
  onUpdate: () => void;
}

const EditSentence: React.FC<EditSentenceProps> = ({ editingSentence, onChange, onUpdate }) => {
  if (!editingSentence) return null;

  return (
    <View>
      <AtInput
        name='editingSentence'
        title='编辑语句'
        type='text'
        placeholder='编辑语句'
        value={editingSentence.text}
        onChange={(value) => onChange(value as string)}
      />
      <Button onClick={onUpdate}>更新语句</Button>
    </View>
  );
};

export default EditSentence;
