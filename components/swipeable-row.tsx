import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SWIPE_THRESHOLD = 80;
const ACTION_WIDTH = 80;

type SwipeableRowProps = {
  children: React.ReactNode;
  onEdit?: () => void;
  onPin?: () => void;
  onMore?: () => void;
  onArchive?: () => void;
};

export function SwipeableRow({
  children,
  onEdit,
  onPin,
  onMore,
  onArchive,
}: SwipeableRowProps) {
  const translateX = useSharedValue(0);
  const contextX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-5, 5])
    .onStart(() => {
      contextX.value = translateX.value;
    })
    .onUpdate((event) => {
      const newValue = contextX.value + event.translationX;
      // Limit the swipe range
      translateX.value = Math.max(-ACTION_WIDTH * 2, Math.min(ACTION_WIDTH * 2, newValue));
    })
    .onEnd((event) => {
      if (event.translationX > SWIPE_THRESHOLD) {
        // Swiped right - show left actions
        translateX.value = withSpring(ACTION_WIDTH * 2, { damping: 20, stiffness: 200 });
      } else if (event.translationX < -SWIPE_THRESHOLD) {
        // Swiped left - show right actions
        translateX.value = withSpring(-ACTION_WIDTH * 2, { damping: 20, stiffness: 200 });
      } else {
        // Snap back
        translateX.value = withSpring(0, { damping: 20, stiffness: 200 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const leftActionsStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 20 ? 1 : 0,
  }));

  const rightActionsStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < -20 ? 1 : 0,
  }));

  const handleClose = () => {
    translateX.value = withSpring(0, { damping: 20, stiffness: 200 });
  };

  return (
    <View style={styles.container}>
      {/* Left actions (shown when swiping right) */}
      <Animated.View style={[styles.leftActions, leftActionsStyle]}>
        <TouchableOpacity
          style={[styles.actionButton, styles.editAction]}
          onPress={() => {
            handleClose();
            onEdit?.();
          }}
        >
          <MaterialIcons name="edit" size={22} color="#fff" />
          <Text style={styles.actionText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.pinAction]}
          onPress={() => {
            handleClose();
            onPin?.();
          }}
        >
          <MaterialIcons name="push-pin" size={22} color="#fff" />
          <Text style={styles.actionText}>Fijar</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Right actions (shown when swiping left) */}
      <Animated.View style={[styles.rightActions, rightActionsStyle]}>
        <TouchableOpacity
          style={[styles.actionButton, styles.moreAction]}
          onPress={() => {
            handleClose();
            onMore?.();
          }}
        >
          <MaterialIcons name="more-horiz" size={22} color="#fff" />
          <Text style={styles.actionText}>Más</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.archiveAction]}
          onPress={() => {
            handleClose();
            onArchive?.();
          }}
        >
          <MaterialIcons name="archive" size={22} color="#fff" />
          <Text style={styles.actionText}>Archivar</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Main content */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.content, animatedStyle]}>
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  content: {
    backgroundColor: '#ffffff',
    zIndex: 1,
  },
  leftActions: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    zIndex: 0,
  },
  rightActions: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    zIndex: 0,
  },
  actionButton: {
    width: ACTION_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  actionText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  editAction: {
    backgroundColor: '#4CAF50',
  },
  pinAction: {
    backgroundColor: '#757575',
  },
  moreAction: {
    backgroundColor: '#757575',
  },
  archiveAction: {
    backgroundColor: '#4CAF50',
  },
});
