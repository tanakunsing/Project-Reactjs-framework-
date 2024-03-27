import { useEffect, useState } from 'react';


function Welcomdata() {

    const datamk = [
        { name: 'ตรวจสอบปประวัติ 100%', p1: "ตรวจสอบประวัติอาชญกรรม ช่างทุกคนเพื่อความปลอดภัยในทรัพย์สิน ของท่าน", imageUrl: require("../images/M4.png")},
        { name: 'พูดจาดีแต่งกายสุภาพ', p1: "เน้นมารยาท การพูดจา ของทีมช่างแต่งกายด้วยเครื่องแบบ", imageUrl: require("../images/M5.png")},
        { name: 'ซื่อสัตย์ไม่คดโกง', p1: "ดำเนินการด้วยระบบบริษท แจ้งราคาก่อนให้บริการ พร้อมรายละเอีนดต่างๆ" , imageUrl: require("../images/M6.png")},
        { name: 'ประสบการณ์มากกว่า 200 เครื่อง', p1: "ทุกปัญหาการล้าง การซ่อม เราช่วยคุณได้",imageUrl: require("../images/M7.png") },
        { name: 'เก็บกวาดทำความสะอาด', p1: "การเก็บกวาด เศษวัสดุ อุปกรณ์ให้เรียบร้อย",imageUrl: require("../images/M8.png")},
        { name: 'รับประกันคุณภาพ', p1: "ให้สภาพเหมือนก่อนดำเนินการ" ,imageUrl: require("../images/M9.png")},
    ]

    const [datamk_get, setIdatamk] = useState(datamk);
    return (
        <>
            <h2 className='text-primary'>ทำไมต้อง ล้างแอร์ กับ CoolClean</h2>
            <hr />
           
            {datamk_get.map((datamk_get, index) => (
                 <div className="col-4 ">
                <div key={index} >
            
                    <div class="card border-0 " style={{ width: "25rem ", marginBottom: '10px' ,marginTop:'5px'}}>
                    <img style={{marginLeft:'90px'}} src={datamk_get.imageUrl} width={200} height={200} ></img>
                        <div class="card-body text-center">
                            <h4 class="card-text text-primary"><strong>{datamk_get.name}</strong></h4>
                            <p class="card-text">{datamk_get.p1}</p>
                        </div>
                    </div>
                </div>
                </div>
            ))}
     
        </>
    )
}
export default Welcomdata;