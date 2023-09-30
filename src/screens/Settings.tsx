import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { MainTemplate, RobotoBlack, RobotoLight } from '@/components';

export const Settings = () => {
  const handleEmailPress = () => {
    const subject = 'Zgłaszanie błędu w aplikacji Rakietomania';
    const body = 'Treść e-maila';

    const mailtoUrl = `mailto:danielsledz2003@gmail.com?subject=${subject}&body=${body}`;

    Linking.openURL(mailtoUrl);
  };

  return (
    <MainTemplate>
      <RobotoBlack>Settings</RobotoBlack>

      <RobotoLight style={styles.versionText}>App version: 0.8 beta</RobotoLight>
      <RobotoLight style={styles.versionText}>Developer: Daniel Śledź</RobotoLight>
      <RobotoLight style={styles.versionText}>
        Jeśli napotkasz błąd lub problem, prosimy o przesłanie informacji na adres:{' '}
        <TouchableOpacity onPress={handleEmailPress} style={styles.emailContainer}>
          <RobotoBlack style={styles.email}>danielsledz2003@gmail.com</RobotoBlack>
        </TouchableOpacity>
      </RobotoLight>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  versionText: {
    fontSize: 20,
    marginTop: 20,
  },

  emailContainer: {
    margin: 0,
    padding: 0,
    height: 20,
  },

  email: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
