use anchor_lang::prelude::*;

declare_id!("my_solana_program");

#[program]
pub mod my_solana_program {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        msg!("Program initialized!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
