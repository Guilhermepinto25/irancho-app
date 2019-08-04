export default mapeamento = [
  {
    label: 'Lote 1',
    icon: require('../../images/cow.png'),
    backgroundColor: '#3c4f22',
    tipo: 'pesagem',
    navigate: (navigator) => navigator.navigate('Pesagem')
  },
  {
    label: 'Lote 2',
    icon: 'syringe',
    backgroundColor: '#634125',
    tipo: 'medicamento',
    navigate: (navigator) => navigator.navigate('Medicamento')
  },
  {
    label: 'Lote 3',
    icon: require('../../images/cow.png'),
    backgroundColor: '#80a04b',
    tipo: 'aparte',
    navigate: (navigator) => navigator.navigate('Aparte')
  },
  {
    label: 'Lote 4',
    icon: require('../../images/cow.png'),
    backgroundColor: '#bb7505',
    tipo: 'entrada',
    navigate: (navigator) => navigator.navigate('Entrada')
  }
]