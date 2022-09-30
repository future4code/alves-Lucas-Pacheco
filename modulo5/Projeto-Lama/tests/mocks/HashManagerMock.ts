export class HashManagerMock {
    public hash = async (plaintext: string): Promise<string> => {
        if(plaintext == "batatinha") {
            return "hash-batatinha"
        }

        return "hash-mock"
        
    }

    public compare = async (plaintext: string, hash: string): Promise<boolean> => {
        if(plaintext == "batatinha" && hash == "hash-batatinha") {
            return true
        }

        return false
    }
}