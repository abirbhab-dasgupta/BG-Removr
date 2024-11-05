import {Webhook} from  'svix'

//API cpntroller function to manage clerk user with database
//http://localhost:4000/api/user/webhooks

const clerkWebhooks = async(req,res) => {
   
    try {
        //create a clerk webhook with  clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify()
    } catch (error) {
        
    }
}