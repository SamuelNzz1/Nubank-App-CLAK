import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { TopHelp } from '../../components/HelpComponents/TopHelpCLAK'
import { MiddleHelp } from '../../components/HelpComponents/MiddleHelpCLAK'

type HelpProps = {
  navigation: any

}

export const Help : React.FC <HelpProps> = ({navigation}) => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (text: string) => {
    setSearchText(text);  
};

    return (
      <ScrollView
        contentContainerStyle = {styles.container}
      > 
        <TopHelp
          navigation={navigation}
          searchText={searchText}
          handleSearchChange={handleSearchChange}
        />
        <MiddleHelp
          searchText={searchText}
        />

      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
      height: 700,
      backgroundColor: "white",
      gap: 50
      

  }
})