import React from 'react';
import AtividadesPage from '~/components/atividade/AtividadesPage';
import mapeamento from '~/components/atividade/mapeamento';
import withSideBar from '~/components/withSideBar';

const AtividadesPageContainer = ({ navigation }) => {

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

AtividadesPageContainer.navigationOptions = {
  title: 'Atividades',
}

export default withSideBar(AtividadesPageContainer)
