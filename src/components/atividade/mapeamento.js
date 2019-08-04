export default mapeamento = [
  {
    label: 'Pesagem',
    icon: 'balance-scale',
    tipo: 'pesagem',
    navigate: (navigator) => navigator.navigate('Pesagem')
  },
  {
    label: 'Medicamento',
    icon: 'sync',
    tipo: 'medicamento',
    navigate: (navigator) => navigator.navigate('Medicamento')
  },
  {
    label: 'Aparte',
    icon: 'sync',
    tipo: 'aparte',
    navigate: (navigator) => navigator.navigate('Aparte')
  },
  {
    label: 'Entrada',
    icon: 'sync',
    tipo: 'entrada',
    navigate: (navigator) => navigator.navigate('Entrada')
  },
  {
    label: 'Venda',
    icon: 'sync',
    tipo: 'venda',
    navigate: (navigator) => navigator.navigate('Venda')
  },
  {
    label: 'Reprodução',
    icon: 'sync',
    tipo: 'reproducao',
    navigate: (navigator) => navigator.navigate('Reprodução')
  },
  {
    label: 'Exames',
    icon: 'sync',
    tipo: 'exames',
    navigate: (navigator) => navigator.navigate('Exames')
  },
]