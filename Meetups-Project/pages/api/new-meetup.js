import { MongoClient } from "mongodb";
import { useRouter } from "next/router";

async function handler(req , res) {

    const router = useRouter();

    if(req.method === 'POST'){
        const data = req.body;
        const { title ,image , body , description } = data; 
        const client = await MongoClient.connect('mongodb+srv://ASAmethia:Rasengan_98@cluster0.zloke3l.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();
        
        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message : 'Meetup Inserted'});
        
        router.push('/');
    }
};

export default handler;