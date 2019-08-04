import React from 'react';
import AtividadesPage from '~/components/atividade/AtividadesPage';
import mapeamento from '~/components/atividade/mapeamento';

const AtividadesPageContainer = () => {

  onPressAtividade = (idAtividade) => {
    console.tron.log(idAtividade)
  }

  return (
    <AtividadesPage atividades={mapeamento} onPressAtividade={onPressAtividade} />
  );
}

export default AtividadesPageContainer
