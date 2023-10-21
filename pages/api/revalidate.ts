//https://<yoursite.com>/api/revalidate?secret=<token>
//http://localhost:3000/api/revalidate?path=/&secret=ManassehLearnsCode  after site is deployed it can be https
 //above is a get request
//path= / means home page 


//ON DEMAND
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.query.secret !== process.env.MY_SECRET_TOKEN){
        return res.status(401).json({"message": 'Invalid Token'})
    }
    const path = req.query.path  as string
    await res.revalidate(path)

    return res.json({revalidated: true})
    //we cant test this in dev mode only in build
}