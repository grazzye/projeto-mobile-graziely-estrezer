import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
        source={require('@/assets/images/inter.png')}
        style={styles.reactLogo}
      />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">área de transferência</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <Collapsible title="CONTATOS FAVORITOS"><ThemedText>yasmina bunda fina</ThemedText>
      <ThemedText>41 7896-6574</ThemedText>
      <ThemedText>mãe</ThemedText>
      <ThemedText>41 8000-6543</ThemedText>
      <ThemedText>pai</ThemedText>
      <ThemedText>41 4357-7864</ThemedText>
      <ThemedText>tia </ThemedText>
      <ThemedText>456.789.654-98</ThemedText>

      
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">NOVO AGENDAMENTO</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="CADASTRAR CHAVE PIX">
        <ThemedText>
        <ThemedText type="link">NOVO CADASTRO</ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
      </Collapsible>
      <Collapsible title="PIX AGENDADO">
        <ThemedText>
          você não possui agendamentos <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
      
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">NOVO AGENDAMENTO</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="MINHAS CHAVES">
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText> chaves cadastradas{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
          
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">CADASTRAR CHAVE</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="PIX SAQUE E PIX TROCO">
        <ThemedText> sacar com qr code {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">COMO FUNCIONA</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="RECLAME AQUI">
        
        <ThemedText>
         {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">  
        <ThemedText type="defaultSemiBold"></ThemedText>{' '}
        </ExternalLink>
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              <ThemedText type="defaultSemiBold"></ThemedText>{' '}
              <ThemedText type="link">SUPE</ThemedText>
              
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: 'orange',
    bottom: 100,
    left: 100,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo:{
  }
  
});
