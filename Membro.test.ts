import { Membro } from './Membro';

describe('Membro', () => {
  it('Cria Membro', () => {
    const membro = new Membro('Nome', 'Endereço', 'Telefone', 'Matricula');
    expect(membro.getNome()).toBe('Nome');
    expect(membro.getEndereco()).toBe('Endereço');
    expect(membro.getTelefone()).toBe('Telefone');
    expect(membro.getMatricula()).toBe('Matricula');
  });

  it('deve permitir atualizar o nome', () => {
    const membro = new Membro('Nome', 'Endereço', 'Telefone', 'Matricula');
    membro.setNome('Novo Nome');
    expect(membro.getNome()).toBe('Novo Nome');
  });

  it('Push para o CSV', () => {
    const membro = new Membro('Nome', 'Endereço', 'Telefone', 'Matricula');
    expect(membro.getNome()).toBe('Nome');
    expect(membro.getEndereco()).toBe('Endereço');
    expect(membro.getTelefone()).toBe('Telefone');
    expect(membro.getMatricula()).toBe('Matricula');
  });
});
