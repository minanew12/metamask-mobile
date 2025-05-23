import type { Theme } from '@metamask/design-tokens';
import { StyleSheet, TextStyle } from 'react-native';
import {
  getFontFamily,
  TextVariant,
} from '../../../component-library/components/Texts/Text';

const styleSheet = (params: { theme: Theme }) => {
  const { theme } = params;
  const { colors, typography } = theme;
  return StyleSheet.create({
    screen: { justifyContent: 'flex-end' },
    sheet: {
      backgroundColor: colors.background.default,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    notch: {
      width: 48,
      height: 5,
      borderRadius: 4,
      backgroundColor: colors.border.default,
      marginTop: 12,
      alignSelf: 'center',
      marginBottom: 16,
    },
    optionButton: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 16,
    },
    icon: {
      marginRight: 16,
      color: colors.text.default,
    },
    optionLabel: {
      ...typography.sBodyLGMedium,
      fontFamily: getFontFamily(TextVariant.BodyLGMedium),
      color: colors.text.default,
    } as TextStyle,
  });
};

export default styleSheet;
