import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListSubjectService {
  listSubjects = [
    {
        "Id": "ADAV",
        "Name": "Lập trình Android nâng cao",
        "Logo": "/assignment/assets/logos/ADAV.jpg"
    },
    {
        "Id": "ADBS",
        "Name": "Lập trình Android cơ bản",
        "Logo": "/assignment/assets/logos/ADBS.jpg"
    },
    {
        "Id": "ADTE",
        "Name": "Kiểm thử và triển khai ứng dụng Android",
        "Logo": "/assignment/assets/logos/ADTE.jpg"
    },
    {
        "Id": "ADUI",
        "Name": "Thiết kế giao diện trên Android",
        "Logo": "/assignment/assets/logos/ADUI.jpg"
    },
    {
        "Id": "ASNE",
        "Name": "Lập trình ASP.NET",
        "Logo": "/assignment/assets/logos/ASNE.png"
    },
    {
        "Id": "CLCO",
        "Name": "Điện toán đám mây",
        "Logo": "/assignment/assets/logos/CLCO.jpg"
    },
    {
        "Id": "DBAV",
        "Name": "SQL Server",
        "Logo": "/assignment/assets/logos/DBAV.png"
    },
    {
        "Id": "DBBS",
        "Name": "Cơ sở dữ liệu",
        "Logo": "/assignment/assets/logos/DBBS.png"
    },
    {
        "Id": "GAME",
        "Name": "Lập trình game 2D",
        "Logo": "/assignment/assets/logos/GAME.png"
    },
    {
        "Id": "HTCS",
        "Name": "HTML5 và CSS3",
        "Logo": "/assignment/assets/logos/HTCS.jpg"
    },
    {
        "Id": "INMA",
        "Name": "Internet Marketing",
        "Logo": "/assignment/assets/logos/INMA.jpg"
    },
    {
        "Id": "JAAV",
        "Name": "Lập trình Java nâng cao",
        "Logo": "/assignment/assets/logos/JAAV.png"
    },
    {
        "Id": "JABS",
        "Name": "Lập trình hướng đối tượng với Java",
        "Logo": "/assignment/assets/logos/JABS.png"
    },
    {
        "Id": "JSPR",
        "Name": "Lập trình JavaScript",
        "Logo": "/assignment/assets/logos/JSPR.png"
    },
    {
        "Id": "LAYO",
        "Name": "Thiết kế layout",
        "Logo": "/assignment/assets/logos/LAYO.jpg"
    },
    {
        "Id": "MOWE",
        "Name": "Thiết kế web cho điện thoại di động",
        "Logo": "/assignment/assets/logos/MOWE.png"
    },
    {
        "Id": "PHPP",
        "Name": "Lập trình PHP",
        "Logo": "/assignment/assets/logos/PHPP.png"
    },
    {
        "Id": "PMAG",
        "Name": "Quản lý dự án với Agile",
        "Logo": "/assignment/assets/logos/PMAG.jpg"
    },
    {
        "Id": "VBPR",
        "Name": "Lập trình VB.NET",
        "Logo": "/assignment/assets/logos/VBPR.png"
    },
    {
        "Id": "WEBU",
        "Name": "Xây dựng trang web",
        "Logo": "/assignment/assets/logos/WEBU.jpg"
    }
]
  constructor() { }
}
