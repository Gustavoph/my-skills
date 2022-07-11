import React from 'react';
import { 
  Text, 
  StyleSheet,
  TouchableOpacity, 
  TouchableOpacityProps, 
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      style={[styles.buttonSkill, { marginTop: 15 }]}
    >
      <Text style={styles.textSkill}>
        { skill }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    padding: 22,
    borderRadius: 5,
    backgroundColor: '#1f1e25',
  },
  textSkill: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
