import { NextApiRequest, NextApiResponse } from "next";
import { ScheduleInfo } from "../../../src/type";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ScheduleInfo>
  ) {
    
    if (req.method == 'GET') {

    } else if (req.method == 'POST') {
        console.log(req.body.tourScheduleDetails);
    }
  }
  