import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment , Head} from "react";


const DUMMY_MEETUPS =[
    {
        id : 'm1' ,
        title : 'First Meetup' ,
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qutb_Minar_2011.jpg/400px-Qutb_Minar_2011.jpg' ,
        address : 'Some address 10 , 1234 Some City' ,
        description : 'This is First Meetup'
    },
    {
        id : 'm2' ,
        title : 'Second Meetup' ,
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/500px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg' ,
        address : 'Some address 10 , 1234 Some City' ,
        description : 'This is Second Meetup'

    }
];

function HomePage(props){
    return(
            <Fragment>
                <Head>
                   <title>React Meetups</title>
                   <meta
                     name='description'
                     content='Browse a list of meetups'/>
                </Head>
                <MeetupList meetups={props.meetups}/>
            </Fragment>
    );
};

// export async function getServerSideProps(context){
//     // fetch data from API
//     // SSR ( Server Side Rendering)

//     const req = context.req;
//     const res = context.res;

//     return {
//         props : {
//             meetups : DUMMY_MEETUPS
//         }
//     }
// }


export async function getStaticProps(){
   //fetch data from an API 
   // SSG (Static Site Generation)

   const client = await MongoClient.connect('mongodb+srv://ASAmethia:Rasengan_98@cluster0.zloke3l.mongodb.net/?retryWrites=true&w=majority');
   const db = client.db();
   
   const meetupsCollection = db.collection('meetups');

   const meetups = await meetupsCollection.find().toArray();

   client.close(); 

   return {
    props : {
        meetups :  meetups.map(meetup => {
            return ({
                title : meetup.title,
                address : meetup.address,
                image : meetup.image ,
                id : meetup._id.toString()
            });
        } ) 
    } ,
    revalidate : 1
   };
}

export default HomePage;