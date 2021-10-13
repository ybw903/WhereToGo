import { NextApiRequest, NextApiResponse } from "next";
import { ScheduleInfo } from "../../../src/type";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
    
    if (req.method == 'GET') {

    } else if (req.method == 'POST') {
        console.log(req.body);
        const response = await fetch(
          'http://localhost:4000/api/tour_schedule/',
          {
            headers: {
              'Content-Type':'application/json'
            },
            body:JSON.stringify({...req.body}),
            method: 'POST'
          }
        );
        console.log(response);
        return res.status(200).json({status: 'ok'});
    } else if (req.method == 'DELETE') {
        console.log(req.body.id);
    }
  }
  