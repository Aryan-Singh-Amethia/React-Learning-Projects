import { Fragment , Head } from "react";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage(){

    async function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);

        const response = fetch('/api/new-meetup',{
            method : 'POST' ,
            body : JSON.stringify(enteredMeetupData),
            headers : {
                'Content-Type' : 'Application/json'
            }
        });

        const data = (await response).json;

        console.log(data);
    }

    return(
        <Fragment>
        <Head>
        <title>New Meetup</title>
        <meta
          name='adding new meetup'
          content='new meetup details'/>
        </Head>
        <NewMeetUpForm  onAddMeetup={addMeetupHandler}/>
        </Fragment>
    );
}

export default NewMeetUpPage;