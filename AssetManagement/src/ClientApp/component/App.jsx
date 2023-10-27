// App.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const App = () => {
  const [inputData, setInputData] = useState('');
  const [result, setResult] = useState('');

  const processData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/process', { data: inputData });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error processing data:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter data"
        value={inputData}
        onChangeText={(text) => setInputData(text)}
      />
      <Button title="Process" onPress={processData} />
      <Text>Result: {result}</Text>
    </View>
  );
};

export default App;
