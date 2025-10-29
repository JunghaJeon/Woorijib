import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Pet} from '../../types';
import {colors, typography} from '../../constants/theme';

interface PetCardProps {
  pet: Pet;
  onFeed?: () => void;
  onPet?: () => void;
  onPlay?: () => void;
}

/**
 * 우리펫 카드 컴포넌트
 */
export const PetCard: React.FC<PetCardProps> = ({pet, onFeed, onPet, onPlay}) => {
  const expProgress = (pet.experience / (pet.level * 100)) * 100;

  return (
    <View style={styles.container}>
      {/* 펫 이미지 영역 */}
      <View style={styles.petImageContainer}>
        <Image
          source={getPetImage(pet.type)}
          style={styles.petImage}
          resizeMode="contain"
        />
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>Lv.{pet.level}</Text>
        </View>
      </View>

      {/* 펫 정보 */}
      <View style={styles.info}>
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.type}>{getPetTypeName(pet.type)}</Text>

        {/* 경험치 바 */}
        <View style={styles.expContainer}>
          <Text style={styles.label}>경험치</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, {width: `${expProgress}%`}]} />
          </View>
          <Text style={styles.expText}>
            {pet.experience}/{pet.level * 100}
          </Text>
        </View>

        {/* 상태 바 */}
        <View style={styles.statusContainer}>
          <View style={styles.statusItem}>
            <Text style={styles.statusEmoji}>😊</Text>
            <View style={styles.statusBar}>
              <View style={[styles.statusFill, {width: `${pet.happiness}%`}]} />
            </View>
            <Text style={styles.statusValue}>{pet.happiness}</Text>
          </View>

          <View style={styles.statusItem}>
            <Text style={styles.statusEmoji}>🍖</Text>
            <View style={styles.statusBar}>
              <View
                style={[
                  styles.statusFill,
                  {width: `${pet.hunger}%`, backgroundColor: colors.secondary.main},
                ]}
              />
            </View>
            <Text style={styles.statusValue}>{pet.hunger}</Text>
          </View>
        </View>
      </View>

      {/* 상호작용 버튼 */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={onFeed}>
          <Text style={styles.actionEmoji}>🍖</Text>
          <Text style={styles.actionText}>먹이주기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={onPet}>
          <Text style={styles.actionEmoji}>✋</Text>
          <Text style={styles.actionText}>쓰다듬기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={onPlay}>
          <Text style={styles.actionEmoji}>🎮</Text>
          <Text style={styles.actionText}>놀아주기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getPetImage = (type: Pet['type']) => {
  // 실제 앱에서는 asset 이미지를 사용
  const images = {
    dog: require('../../assets/images/pet-dog.png'),
    cat: require('../../assets/images/pet-cat.png'),
    rabbit: require('../../assets/images/pet-rabbit.png'),
  };
  return images[type];
};

const getPetTypeName = (type: Pet['type']): string => {
  const names = {
    dog: '강아지',
    cat: '고양이',
    rabbit: '토끼',
  };
  return names[type];
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  petImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  petImage: {
    width: 200,
    height: 200,
  },
  levelBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.accent,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  levelText: {
    color: colors.white,
    fontSize: typography.caption.fontSize,
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 20,
  },
  name: {
    fontSize: typography.title2.fontSize,
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
  },
  type: {
    fontSize: typography.body.fontSize,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 16,
  },
  expContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: typography.caption.fontSize,
    color: colors.text.secondary,
    marginBottom: 6,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.background.light,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accent,
  },
  expText: {
    fontSize: typography.small.fontSize,
    color: colors.text.secondary,
    textAlign: 'right',
  },
  statusContainer: {
    gap: 12,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusEmoji: {
    fontSize: 20,
    width: 24,
  },
  statusBar: {
    flex: 1,
    height: 8,
    backgroundColor: colors.background.light,
    borderRadius: 4,
    overflow: 'hidden',
  },
  statusFill: {
    height: '100%',
    backgroundColor: colors.primary.main,
  },
  statusValue: {
    fontSize: typography.caption.fontSize,
    color: colors.text.secondary,
    width: 30,
    textAlign: 'right',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 16,
  },
  actionButton: {
    alignItems: 'center',
    padding: 8,
  },
  actionEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  actionText: {
    fontSize: typography.caption.fontSize,
    color: colors.text.secondary,
  },
});
