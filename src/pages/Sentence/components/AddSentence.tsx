import React from 'react';
import { View, Button } from '@tarojs/components';
import { AtInput } from 'taro-ui';

interface AddSentenceProps {
  newSentence: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}

const AddSentence: React.FC<AddSentenceProps> = ({ newSentence, onChange, onAdd }) => {
  return (
    <View>
      <AtInput
        name='newSentence'
        title='新语句'
        type='text'
        placeholder='输入新语句'
        value={newSentence}
        onChange={(value) => onChange(value as string)}
      />
      <Button onClick={onAdd}>新增语句</Button>
    </View>
  );
};

export default AddSentence;
