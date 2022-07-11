import React, { useEffect, useState } from 'react';
import { 
  Text,
  View,
  FlatList,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

interface Skill {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [gretting, setGretting] = useState('');
  const [mySkills, setMySkills] = useState<Skill[]>([]);

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) setGretting('Good Morning');
    else if (currentHour >= 12 && currentHour < 18) 
      setGretting('Good Afternoon');
    else setGretting('Good Night');
  }, [mySkills]);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills([...mySkills, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Gustavo
      </Text>

      <Text style={styles.gretting}>
        { gretting }
      </Text>
      
      <TextInput 
        style={styles.input} 
        placeholder='New Skill'
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 30 }]}>
        My Skills
      </Text>

      <FlatList 
        data={mySkills} 
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    fontSize: 18,
    marginTop: 30,
    borderRadius: 5,
    color: '#ffffff',
    backgroundColor: '#1f1e25',
    padding: Platform.OS === 'ios' ? 15 : 10,
  },
  gretting: {
    color: '#ffffff',
  }
});
