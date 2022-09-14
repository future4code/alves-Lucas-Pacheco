import bcrypt from 'bcryptjs'
import dontev from 'dotenv'

dontev.config()

export class HashManager {
    public hash = async (plaintext: string) => 
    { 
        const rounds = Number(process.env.BRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)
        
        return hash
    }

  public compare = async (plaintext: string, hash: string) => {
        return bcrypt.compare(plaintext, hash)
        
    }
}