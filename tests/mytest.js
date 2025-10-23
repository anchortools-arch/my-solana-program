const anchor = require('@project-serum/anchor');
const { SystemProgram } = anchor.web3;

describe('my_solana_program', () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.MySolanaProgram;
  it('Is initialized!', async () => {
    const account = anchor.web3.Keypair.generate();
    await program.methods.initialize().accounts({
      baseAccount: account.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    }).signers([account]).rpc();
  });
});
