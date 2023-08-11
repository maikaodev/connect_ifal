import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, Main } from '../src/components'
import { Api } from '../src/api/communication';
import { Settings } from '../src/components/Settings';

export default function App() {
  const [userName, setUserName] = useState<string>('Maikaodev');
  const [userDetails, setUserDetails] = useState({});

  const handleChangeUserName = (newUserName) => setUserName(newUserName);

  const loadData = async () => {
    const response = await Api.getProfile(userName);
    console.log("response", response)

    if(response) {
      setUserDetails(response);
    }
  }

  useEffect(() => {
    if(userName && userName !== '') {
      loadData();
    }
  }, [userName]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <Header {...{handleChangeUserName}}/>
      <Main {...{userDetails}}/>
      <Settings />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
