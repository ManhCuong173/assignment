import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListSubjectService {
  listSubjects = [
    {
        "Id": "ADAV",
        "Name": "Lập trình Android nâng cao",
        "Logo": "./../../assets/logos/ADAV.jpg"
    },
    {
        "Id": "ADBS",
        "Name": "Lập trình Android cơ bản",
        "Logo": "./../../assets/logos/ADBS.jpg"
    },
    {
        "Id": "ADTE",
        "Name": "Kiểm thử và triển khai ứng dụng Android",
        "Logo": "./../../assets/logos/ADTE.jpg"
    },
    {
        "Id": "ADUI",
        "Name": "Thiết kế giao diện trên Android",
        "Logo": "./../../assets/logos/ADUI.jpg"
    },
    {
        "Id": "ASNE",
        "Name": "Lập trình ASP.NET",
        "Logo": "./../../assets/logos/ASNE.png"
    },
    {
        "Id": "CLCO",
        "Name": "Điện toán đám mây",
        "Logo": "./../../assets/logos/CLCO.jpg"
    },
    {
        "Id": "DBAV",
        "Name": "SQL Server",
        "Logo": "./../../assets/logos/DBAV.png"
    },
    {
        "Id": "DBBS",
        "Name": "Cơ sở dữ liệu",
        "Logo": "./../../assets/logos/DBBS.png"
    },
    {
        "Id": "GAME",
        "Name": "Lập trình game 2D",
        "Logo": "./../../assets/logos/GAME.png"
    },
    {
        "Id": "HTCS",
        "Name": "HTML5 và CSS3",
        "Logo": "./../../assets/logos/HTCS.jpg"
    },
    {
        "Id": "INMA",
        "Name": "Internet Marketing",
        "Logo": "./../../assets/logos/INMA.jpg"
    },
    {
        "Id": "JAAV",
        "Name": "Lập trình Java nâng cao",
        "Logo": "./../../assets/logos/JAAV.png"
    },
    {
        "Id": "JABS",
        "Name": "Lập trình hướng đối tượng với Java",
        "Logo": "./../../assets/logos/JABS.png"
    },
    {
        "Id": "JSPR",
        "Name": "Lập trình JavaScript",
        "Logo": "./../../assets/logos/JSPR.png"
    },
    {
        "Id": "LAYO",
        "Name": "Thiết kế layout",
        "Logo": "./../../assets/logos/LAYO.jpg"
    },
    {
        "Id": "MOWE",
        "Name": "Thiết kế web cho điện thoại di động",
        "Logo": "./../../assets/logos/MOWE.png"
    },
    {
        "Id": "PHPP",
        "Name": "Lập trình PHP",
        "Logo": "./../../assets/logos/PHPP.png"
    },
    {
        "Id": "PMAG",
        "Name": "Quản lý dự án với Agile",
        "Logo": "./../../assets/logos/PMAG.jpg"
    },
    {
        "Id": "VBPR",
        "Name": "Lập trình VB.NET",
        "Logo": "./../../assets/logos/VBPR.png"
    },
    {
        "Id": "WEBU",
        "Name": "Xây dựng trang web",
        "Logo": "./../../assets/logos/WEBU.jpg"
    }
]
  constructor() { }
}
