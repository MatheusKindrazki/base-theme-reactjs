const cpf = (value: string): string => {
  const cpfMask = value.replace(/[^\d]/g, '');

  return cpfMask.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const money = (value: number): string => {
  const moneyNumber = (value as unknown) as number;

  return moneyNumber.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

const phone = (value: string): string => {
  let phoneMask = value.replace(/\D/g, '');
  phoneMask = phoneMask.replace(/^(\d{2})(\d)/g, '($1) $2');

  return phoneMask.replace(/(\d)(\d{4})$/, '$1-$2');
};

export { cpf, phone, money };
