import axios from "axios";
import { BASE_URL } from "./BASE_URL";


type User = {
    id: string, 
    name: string,
    email: string
}

type News = {
    title: string,
    content: string,
    date: number
}


const news: News = {
    title: "Brasil conquista hexa no catar",
    content: "Com um placar de 10x0 Brasil contra a França prova que o futebol sulamericano não está pra trás",
    date: Date.now()
}

// const news: User = {
//     id: Date.now().toString(),
//     name: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
//     email: "JoaoLabenu1/2@:!@" 
// }

const getNews = async (): Promise<User[]> => {
    const response = await axios.get(`${BASE_URL}/subscribers`)

    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

const sendNotifications =async (users: User[], message: string): Promise<void> => {
     try {
     for (const user of users)
       {
          const notifications = users.map((users) => {
            return axios.post(`${BASE_URL}/notifications`, {
                subscriberId: users.id,
                message: message
            })
          })

            await Promise.all(notifications)
            
        }
    } catch (error) {
        
    }
}


const createNews = async (title: string, content: string, date: number): Promise<void> => {

    await axios.put(`${BASE_URL}/news`, {
        title: title,
        content: content,
        date: date
    })
    
}

 




const main = async (): Promise<void> => {
    try {
        createNews(news)
        const subscribers = await getNews()
        const notifications = await sendNotifications(subscribers, "Olá!") 
       console.log(subscribers)
       console.log(notifications)
      
       
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
    
}

main()

