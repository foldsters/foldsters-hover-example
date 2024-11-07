import React, { useState } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import { Pressable } from 'react-native';

export const ResponsiveTabBarButton = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const hover = Gesture.Hover();
  hover.onStart(() => {
    setIsHovered(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }).onEnd(() => setIsHovered(false));
  return (
    <GestureDetector gesture={hover}>
      <Pressable {...props} style={{opacity: isHovered ? 1.0 : 0.8, flex: 1}} />
    </GestureDetector>
  );
}





