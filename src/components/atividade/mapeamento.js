export default mapeamento = [
  {
    label: 'Pesagem',
    icon: 'weight-hanging',
    backgroundColor: '#332411',
    tipo: 'pesagem',
    navigate: (navigator) => navigator.navigate('Pesagem')
  },
  {
    label: 'Medicamento',
    icon: 'syringe',
    backgroundColor: '#634125',
    tipo: 'medicamento',
    navigate: (navigator) => navigator.navigate('Medicamento')
  },
  {
    label: 'Aparte',
    icon: 'sync',
    backgroundColor: '#a26924',
    tipo: 'aparte',
    navigate: (navigator) => navigator.navigate('Aparte')
  },
  {
    label: 'Entrada',
    icon: 'sign-in-alt',
    backgroundColor: '#bb7505',
    tipo: 'entrada',
    navigate: (navigator) => navigator.navigate('Entrada')
  },
  {
    label: 'Venda',
    icon: 'dollar-sign',
    backgroundColor: '#3c4f22',
    tipo: 'venda',
    navigate: (navigator) => navigator.navigate('Venda')
  },
  {
    label: 'Reprodução',
    icon: 'venus-mars',
    backgroundColor: '#80a04b',
    tipo: 'reproducao',
    navigate: (navigator) => navigator.navigate('Reprodução')
  },
  {
    label: 'Exames',
    icon: 'stethoscope',
    backgroundColor: '#332411',
    tipo: 'exames',
    navigate: (navigator) => navigator.navigate('Exames')
  },
]