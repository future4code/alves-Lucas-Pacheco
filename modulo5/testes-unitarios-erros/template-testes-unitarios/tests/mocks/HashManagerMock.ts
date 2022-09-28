export class HashManagerMock {
    public hash = async (plaintext: string): Promise<string> => {
        if(plaintext == "diabinho") {
            return "hash-diabinho"
        }

        return "hash-mock"
        
    }

    public compare = async (plaintext: string, hash: string): Promise<boolean>  => {
        if(plaintext == "diabinho" && hash == "hash-diabinho") {
            return true
        }

        return false
    }
}