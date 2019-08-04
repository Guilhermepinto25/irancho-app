import React from 'react';
import MainPage from '~/components/main/MainPage';

const MainPageContainer = ({ navigation }) => {

  onPressSincronizarManejo = (idManejo) => {
    console.tron.log(idManejo)
    navigation.navigate('Atividades')
  }

  return (
    <MainPage
      manejos={manejos}
      onPressSincronizarManejo={onPressSincronizarManejo}
    />
  );
}

const manejos = [
  {
    documento: {
      idManejo: 1000,
      nome: 'Manejo 1',
      dtCriacao: '2019-06-25T15:07:03.000Z'
    },
    documentoExecucao: {
      quantidadeProcessada: 120
    }
  },
  {
    documento: {
      idManejo: 1001,
      nome: 'Manejo 2',
      dtCriacao: '2019-06-25T15:07:03.000Z'
    },
    documentoExecucao: {
      quantidadeProcessada: 120
    }
  },
  {
    documento: {
      idManejo: 1002,
      nome: 'Manejo 3',
      dtCriacao: '2019-06-25T15:07:03.000Z'
    },
    documentoExecucao: {
      quantidadeProcessada: 120
    }
  },
  {
    documento: {
      idManejo: 1003,
      nome: 'Manejo 4',
      dtCriacao: '2019-06-25T15:07:03.000Z'
    },
    documentoExecucao: {
      quantidadeProcessada: 120
    }
  }
]

MainPageContainer.navigationOptions = {
  title: 'Manejos',
}


export default MainPageContainer
