import React from 'react';
import AtividadesPage from '~/components/atividade/AtividadesPage';
import mapeamento from '~/components/aparte/mapeamento';
import withSideBar from '~/components/withSideBar';

const Aparte = ({ navigation }) => {

  onPressAtividade = (idAtividade) => {
    console.tron.log(idAtividade)
  }

  return (
    <AtividadesPage 
      atividades={mapeamento} 
      onPressAtividade={onPressAtividade} 
      navigation={navigation}
    />
  );
}

Aparte.navigationOptions = {
  title: 'Aparte',
}

export default withSideBar(Aparte)
