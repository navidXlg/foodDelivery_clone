import Accordion from "../../componants/utils/Accordin";
import { accordinData } from "../../data/data";



export default function CommonQuestions(){


    return <div className="my-16" id="commonQuestions">
              <p className="text-3xl text-start mb-16 font-bold">سؤالات متداول</p>
              <Accordion items={accordinData}/>
           </div>

    };