"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[8947],{98947:(j,y,i)=>{i.r(y),i.d(y,{ResultModule:()=>dt});var O=i(36895),I=i(89299),d=i(24006),t=i(94650),u=i(87129),F=i(38283),z=i(87258),J=i(22759),G=i(462),Y=i(97496),E=i(3238),L=i(4859),A=i(59549),Q=i(44144),D=i(51572),K=i(84385),B=i(88789);const $=["content"];function H(e,l){1&e&&(t.TgZ(0,"mat-hint",17),t._uU(1,"Please enter admission no."),t.qZA())}function W(e,l){if(1&e&&(t.TgZ(0,"div")(1,"mat-option",18),t._uU(2),t.ALo(3,"classSuffix"),t.qZA()()),2&e){const n=l.$implicit;t.xp6(1),t.s9C("value",n.class),t.xp6(1),t.Oqu(t.lcZ(3,2,n.class))}}function X(e,l){1&e&&(t.TgZ(0,"mat-hint",17),t._uU(1,"Class is required"),t.qZA())}function V(e,l){1&e&&(t.TgZ(0,"mat-hint",17),t._uU(1,"Please enter roll number."),t.qZA())}function tt(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"div",6)(1,"div",4)(2,"div",7)(3,"h3"),t._uU(4,"Exam Result"),t.qZA(),t.TgZ(5,"div",8)(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"form",9),t.NdJ("ngSubmit",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.examResult())}),t.TgZ(9,"mat-form-field",10)(10,"mat-label"),t._uU(11,"Admission No."),t.qZA(),t._UZ(12,"input",11),t.YNc(13,H,2,0,"mat-hint",12),t.qZA(),t.TgZ(14,"mat-form-field",10)(15,"mat-label"),t._uU(16,"class"),t.qZA(),t.TgZ(17,"mat-select",13),t.YNc(18,W,4,4,"div",14),t.qZA(),t.YNc(19,X,2,0,"mat-hint",12),t.qZA(),t.TgZ(20,"mat-form-field",10)(21,"mat-label"),t._uU(22,"Roll Number"),t.qZA(),t._UZ(23,"input",15),t.YNc(24,V,2,0,"mat-hint",12),t.qZA(),t.TgZ(25,"button",16),t._uU(26,"Submit"),t.qZA()()()()()()}if(2&e){const n=t.oxw(2);let o,s,M;t.xp6(7),t.Oqu(n.errorMsg),t.xp6(1),t.Q6J("formGroup",n.examResultForm),t.xp6(5),t.Q6J("ngIf",!(null!=(o=n.examResultForm.get("admissionNo"))&&o.valid)&&(null==(o=n.examResultForm.get("admissionNo"))?null:o.touched)),t.xp6(5),t.Q6J("ngForOf",n.classInfo),t.xp6(1),t.Q6J("ngIf",!(null!=(s=n.examResultForm.get("class"))&&s.valid)&&(null==(s=n.examResultForm.get("class"))?null:s.touched)),t.xp6(5),t.Q6J("ngIf",!(null!=(M=n.examResultForm.get("rollNumber"))&&M.valid)&&(null==(M=n.examResultForm.get("rollNumber"))?null:M.touched)),t.xp6(1),t.Q6J("disabled",!n.examResultForm.valid)}}function nt(e,l){if(1&e&&(t.TgZ(0,"div",3)(1,"div",4),t.YNc(2,tt,27,7,"div",5),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngIf",!n.examResultInfo)}}function et(e,l){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"titlecase"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA()()),2&e){const n=l.$implicit,o=l.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(t.lcZ(5,6,n.subject)),t.xp6(3),t.Oqu(n.theoryMarks),t.xp6(2),t.Oqu(n.practicalMarks>0?n.practicalMarks:""),t.xp6(2),t.Oqu(n.totalMarks),t.xp6(2),t.Oqu(n.grade)}}function ot(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"div",19)(1,"div",4)(2,"div",20,21)(4,"div",22)(5,"table",23)(6,"tr")(7,"td"),t._UZ(8,"img",24),t._uU(9),t.ALo(10,"uppercase"),t.ALo(11,"uppercase"),t.qZA()()(),t.TgZ(12,"table",25)(13,"tr")(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"titlecase"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA()()(),t.TgZ(21,"table",25)(22,"tr")(23,"td",26),t._uU(24,"Admission No. :"),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td",26),t._uU(28,"Roll Number :"),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.qZA(),t.TgZ(31,"td",26),t._uU(32,"Class :"),t.qZA(),t.TgZ(33,"td"),t._uU(34),t.ALo(35,"classSuffix"),t.qZA()(),t.TgZ(36,"tr")(37,"td",26),t._uU(38,"Student Name :"),t.qZA(),t.TgZ(39,"td"),t._uU(40),t.ALo(41,"titlecase"),t.qZA(),t.TgZ(42,"td",26),t._uU(43,"Father Name :"),t.qZA(),t.TgZ(44,"td"),t._uU(45),t.ALo(46,"titlecase"),t.qZA(),t.TgZ(47,"td",26),t._uU(48,"Mother Name :"),t.qZA(),t.TgZ(49,"td"),t._uU(50),t.ALo(51,"titlecase"),t.qZA()()(),t.TgZ(52,"table",27)(53,"tr")(54,"th"),t._uU(55,"S.No."),t.qZA(),t.TgZ(56,"th"),t._uU(57,"Subject"),t.qZA(),t.TgZ(58,"th"),t._uU(59,"Theory Marks"),t.qZA(),t.TgZ(60,"th"),t._uU(61,"Practical Marks"),t.qZA(),t.TgZ(62,"th"),t._uU(63,"Total Marks"),t.qZA(),t.TgZ(64,"th"),t._uU(65,"Grade"),t.qZA()(),t.YNc(66,et,14,8,"tr",14),t.qZA(),t.TgZ(67,"table",27)(68,"tr")(69,"td")(70,"span",26),t._uU(71,"Result Status"),t.qZA(),t._uU(72),t.qZA(),t.TgZ(73,"td")(74,"span",26),t._uU(75,"Grand Total (Theory + Practical/Internal Marks)"),t.qZA(),t._uU(76),t.qZA(),t.TgZ(77,"td")(78,"span",26),t._uU(79,"Percentage"),t.qZA(),t._uU(80),t.qZA(),t.TgZ(81,"td")(82,"span",26),t._uU(83,"Overall Grade"),t.qZA(),t._uU(84),t.qZA()()(),t.TgZ(85,"div")(86,"h4",26),t._uU(87,"Disclaimer:"),t.qZA(),t.TgZ(88,"p"),t._uU(89,"This is your online exam result, issued in accordance with our institution's policies. Please take note of the following:"),t.qZA(),t.TgZ(90,"p"),t._uU(91),t.qZA(),t.TgZ(92,"p"),t._uU(93,"2. Verify Accuracy: Review the result for accuracy, including your name, exam details, and scores. Report any discrepancies to the Examination Office for correction."),t.qZA(),t.TgZ(94,"p"),t._uU(95,"3. Confidential: This result is meant for your use only and should not be shared or used by others."),t.qZA(),t.TgZ(96,"p"),t._uU(97,"4. Record Keeping: Keep this result document for your records. It may be required for future reference or academic purposes."),t.qZA(),t.TgZ(98,"p"),t._uU(99,"5. Lost or Damaged: In case of loss or damage to the result, please contact the Examination Office for a duplicate or replacement. A fee may apply."),t.qZA(),t.TgZ(100,"p"),t._uU(101,"6. Academic Integrity: It is essential to maintain academic integrity and adhere to the school's code of conduct in all academic matters."),t.qZA(),t.TgZ(102,"p"),t._uU(103,"Your acceptance and retention of this result indicate your understanding and agreement with the terms and conditions outlined in this disclaimer."),t.qZA()()()()(),t.TgZ(104,"div",4)(105,"div",28)(106,"button",29),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.downloadPDF())}),t._uU(107,"PDF"),t.qZA(),t.TgZ(108,"button",30),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.printContent())}),t._uU(109,"Print"),t.qZA()()(),t._UZ(110,"app-footer"),t.qZA()}if(2&e){const n=t.oxw();t.xp6(9),t.AsE(" ",t.lcZ(10,19,null==n.schoolInfo?null:n.schoolInfo.schoolName),", ",t.lcZ(11,21,null==n.schoolInfo?null:n.schoolInfo.city)," "),t.xp6(6),t.hij(" School Code : ",null==n.schoolInfo?null:n.schoolInfo.schoolCode," "),t.xp6(2),t.AsE(" ",t.lcZ(18,23,null==n.examResultInfo?null:n.examResultInfo.examType)," Exam Result - ",null==n.studentInfo?null:n.studentInfo.session," "),t.xp6(3),t.hij(" Affiliation No. : ",null==n.schoolInfo?null:n.schoolInfo.affiliationNumber," "),t.xp6(6),t.Oqu(null==n.studentInfo?null:n.studentInfo.admissionNo),t.xp6(4),t.Oqu(null==n.studentInfo?null:n.studentInfo.rollNumber),t.xp6(4),t.Oqu(t.lcZ(35,25,null==n.studentInfo?null:n.studentInfo.class)),t.xp6(6),t.Oqu(t.lcZ(41,27,null==n.studentInfo?null:n.studentInfo.name)),t.xp6(5),t.Oqu(t.lcZ(46,29,null==n.studentInfo?null:n.studentInfo.fatherName)),t.xp6(5),t.Oqu(t.lcZ(51,31,null==n.studentInfo?null:n.studentInfo.motherName)),t.xp6(16),t.Q6J("ngForOf",n.examResultInfo.marks),t.xp6(6),t.hij(" : ",n.examResultInfo.resultStatus," "),t.xp6(4),t.AsE(" : ",null==n.examResultInfo?null:n.examResultInfo.grandTotalMarks,"/",null==n.examResultInfo?null:n.examResultInfo.totalMaxMarks," "),t.xp6(4),t.hij(" : ",null==n.examResultInfo?null:n.examResultInfo.percentile,"% "),t.xp6(4),t.hij(" : ",null==n.examResultInfo?null:n.examResultInfo.percentileGrade," "),t.xp6(7),t.hij("1. Result Identification: This document serves as your official exam result for the specified examination at ",null==n.schoolInfo?null:n.schoolInfo.schoolName,".")}}function at(e,l){1&e&&t._UZ(0,"mat-progress-spinner",35)}function rt(e,l){if(1&e&&(t.TgZ(0,"div",33),t.YNc(1,at,1,0,"mat-progress-spinner",34),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.loader)}}function it(e,l){if(1&e&&(t.TgZ(0,"div",31),t.YNc(1,rt,2,1,"div",32),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.loader)}}const ct=[{path:"",component:(()=>{class e{constructor(n,o,s,M,C){this.fb=n,this.schoolService=o,this.printPdfService=s,this.examResultService=M,this.classService=C,this.errorMsg="",this.processedData=[],this.loader=!1,this.examResultForm=this.fb.group({admissionNo:["",d.kI.required],class:["",d.kI.required],rollNumber:["",d.kI.required]})}ngOnInit(){this.getClass(),this.getSchool()}printContent(){this.printPdfService.printElement(this.content.nativeElement)}downloadPDF(){this.printPdfService.generatePDF(this.content.nativeElement,"Result.pdf")}getSchool(){this.schoolService.getSchool().subscribe(n=>{n&&(this.schoolInfo=n)})}getClass(){this.classService.getClassList().subscribe(n=>{n&&(this.classInfo=n)})}examResult(){this.examResultService.singleStudentExamResult(this.examResultForm.value).subscribe(n=>{if(n){let s=function(k,R){let b=0;for(let x=0;x<k.length;x++){const a=k[x],r=R[x],c=Object.keys(a)[0],g=parseInt(a[c]);parseInt(r[c])<g&&b++}return b};this.loader=!0,this.studentInfo=n.studentInfo;let o=n.examResult;this.resultStructureInfo=n.examResultStructure;const M=s(this.resultStructureInfo.theoryPassMarks,o.theoryMarks);let C;C=0===M?"PASS":M<=2?"SUPPLY":"FAIL";let P=0,T="",h=0;if(o.practicalMarks){this.examResultInfo={};const b=this.resultStructureInfo.theoryMaxMarks.reduce((a,r)=>{const c=Object.keys(r)[0],g=this.resultStructureInfo.theoryMaxMarks.find(f=>Object.keys(f)[0]===c);return a+(g?parseFloat(g[c]):0)},0)+this.resultStructureInfo.practicalMaxMarks.reduce((a,r)=>{const c=Object.keys(r)[0],g=this.resultStructureInfo.practicalMaxMarks.find(f=>Object.keys(f)[0]===c);return a+(g?parseFloat(g[c]):0)},0);this.examResultInfo={class:o.class,examType:o.examType,rollNumber:o.rollNumber,admissionNo:o.admissionNo,marks:o.theoryMarks.map(a=>{const r=Object.keys(a)[0],c=parseFloat(a[r]),g=o.practicalMarks.find(p=>Object.keys(p)[0]===r),m=g?parseFloat(g[r]):0,f=c+m,v=this.resultStructureInfo.theoryMaxMarks.find(p=>p.hasOwnProperty(r))[r],Z=this.resultStructureInfo.practicalMaxMarks.find(p=>Object.keys(p)[0]===r),_=Z?parseFloat(Z[r]):0,q=(f/(parseFloat(v)+_)*100).toFixed(0);let U="";const S=this.resultStructureInfo.gradeMaxMarks,N=this.resultStructureInfo.gradeMinMarks;for(let p=0;p<S.length;p++){const ut=Object.values(S[p])[0];if(q>=N[p][Object.keys(N[p])[0]]&&q<=ut){U=Object.keys(S[p])[0];break}}return{subject:r,theoryMarks:c,practicalMarks:m,totalMarks:f,grade:U}})},P=this.examResultInfo.marks.reduce((a,r)=>a+r.totalMarks,0),h=P/b*100,h=parseFloat(h.toFixed(2));const x=parseFloat(h.toFixed(0));for(let a=0;a<this.resultStructureInfo.gradeMaxMarks.length;a++){const r=parseFloat(String(Object.values(this.resultStructureInfo.gradeMaxMarks[a])[0])),c=parseFloat(String(Object.values(this.resultStructureInfo.gradeMinMarks[a])[0]));if(!isNaN(r)&&!isNaN(c)&&x>=c&&x<=r){T=Object.keys(this.resultStructureInfo.gradeMaxMarks[a])[0];break}}this.examResultInfo.grandTotalMarks=P,this.examResultInfo.totalMaxMarks=b,this.examResultInfo.percentile=h,this.examResultInfo.percentileGrade=T,this.examResultInfo.resultStatus=C}if(!o.practicalMarks){this.examResultInfo={};const b=this.resultStructureInfo.theoryMaxMarks.reduce((a,r)=>{const c=Object.keys(r)[0],g=this.resultStructureInfo.theoryMaxMarks.find(f=>Object.keys(f)[0]===c);return a+(g?parseFloat(g[c]):0)},0)+0;this.examResultInfo={class:o.class,examType:o.examType,rollNumber:o.rollNumber,admissionNo:o.admissionNo,marks:o.theoryMarks.map(a=>{const r=Object.keys(a)[0],c=parseFloat(a[r]),m=c+0;let f="";const v=this.resultStructureInfo.gradeMaxMarks,Z=this.resultStructureInfo.gradeMinMarks;for(let _=0;_<v.length;_++){const w=Object.values(v[_])[0];if(m>=Z[_][Object.keys(Z[_])[0]]&&m<=w){f=Object.keys(v[_])[0];break}}return{subject:r,theoryMarks:c,practicalMarks:0,totalMarks:m,grade:f}})},P=this.examResultInfo.marks.reduce((a,r)=>a+r.totalMarks,0),h=P/b*100,h=parseFloat(h.toFixed(2));const x=parseFloat(h.toFixed(0));for(let a=0;a<this.resultStructureInfo.gradeMaxMarks.length;a++){const r=parseFloat(String(Object.values(this.resultStructureInfo.gradeMaxMarks[a])[0])),c=parseFloat(String(Object.values(this.resultStructureInfo.gradeMinMarks[a])[0]));if(!isNaN(r)&&!isNaN(c)&&x>=c&&x<=r){T=Object.keys(this.resultStructureInfo.gradeMaxMarks[a])[0];break}}this.examResultInfo.grandTotalMarks=P,this.examResultInfo.totalMaxMarks=b,this.examResultInfo.percentile=h,this.examResultInfo.percentileGrade=T,this.examResultInfo.resultStatus=C}setTimeout(()=>{this.loader=!1},1500)}},n=>{this.errorMsg=n.error.errorMsg})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.qu),t.Y36(u.E),t.Y36(F.Z),t.Y36(z.k),t.Y36(J.j))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-result"]],viewQuery:function(n,o){if(1&n&&t.Gf($,5),2&n){let s;t.iGM(s=t.CRH())&&(o.content=s.first)}},decls:4,vars:3,consts:[["class","login",4,"ngIf"],["class","container-fluid",4,"ngIf"],["class","spinner-container",4,"ngIf"],[1,"login"],[1,"row"],["class","col-12 col-lg-5 offset-lg-3 login-card",4,"ngIf"],[1,"col-12","col-lg-5","offset-lg-3","login-card"],[1,"col-12","col-lg-10","offset-lg-1"],[1,"col-12"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","admissionNo"],["class","form-text text-danger",4,"ngIf"],["type","number","matInput","","formControlName","class"],[4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","rollNumber"],["type","submit","mat-raised-button","",1,"submit-button",3,"disabled"],[1,"form-text","text-danger"],[3,"value"],[1,"container-fluid"],[1,"col-lg-10","offset-lg-1","custom-container"],["content",""],[1,"table-container"],[1,"logo-table","text-bold"],["src","../../../../assets/logo.png","alt",""],[1,"info-table"],[1,"text-bold"],[1,"custom-table"],[1,"col-lg-10","offset-lg-1","mt-4","mb-4"],["mat-raised-button","",1,"submit-button","print-pdf","mx-4",3,"click"],["mat-raised-button","",1,"submit-button","print-pdf",3,"click"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(n,o){1&n&&(t._UZ(0,"app-header"),t.YNc(1,nt,3,1,"div",0),t.YNc(2,ot,111,33,"div",1),t.YNc(3,it,2,1,"div",2)),2&n&&(t.xp6(1),t.Q6J("ngIf",!o.examResultInfo),t.xp6(1),t.Q6J("ngIf",o.examResultInfo&&o.studentInfo),t.xp6(1),t.Q6J("ngIf",o.loader))},dependencies:[O.sg,O.O5,G.G,Y.c,E.ey,L.lW,A.KE,A.bx,A.hX,Q.Nt,D.Ou,K.gD,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,O.gd,O.rS,B.N],styles:[".login[_ngcontent-%COMP%]{background-color:#fff;padding-top:10vh;padding-left:2%;padding-right:2%}.login-card[_ngcontent-%COMP%]{background-color:#fff;padding-top:5vh;padding-bottom:5vh;box-shadow:none}.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}h3[_ngcontent-%COMP%]{color:#33558b;padding-bottom:2vh;letter-spacing:.6px;font-size:18px;font-weight:500;margin-bottom:5px;text-align:center}h2[_ngcontent-%COMP%]{color:#e4409a;font-size:16px;letter-spacing:.5px}p[_ngcontent-%COMP%]{color:#33558b;margin-top:2vh;letter-spacing:.25px;font-size:16px;margin-bottom:5px}a[_ngcontent-%COMP%]{color:#33558b;font-size:16px;font-weight:500;letter-spacing:.25px;text-decoration:none}@media (min-width:1200px){.login[_ngcontent-%COMP%]{min-height:90vh;padding-top:5vh;background-color:#f1f4f9;padding-left:2%;padding-right:2%}.login-card[_ngcontent-%COMP%]{margin-top:2vh;margin-left:30%;margin-bottom:10vh;border-radius:15px;box-shadow:0 0 1px -10px #f1f4f9,0 0 #f1f4f9,0 0 15px #d2e1fc}.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:48px;margin-bottom:15px}}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;font-family:serif;overflow-x:hidden}[_nghost-%COMP%]{--common-color: #fff;--header-height: 16vh}.header[_ngcontent-%COMP%]{background-color:var(--common-color);width:100%;min-height:12vh;left:0;top:0;position:fixed;z-index:2;padding:0!important;display:flex;justify-content:space-around;box-shadow:0 0 1px -10px #64748d15,0 0 0 1px #4d5c7615,0 0 4px #64748d15}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:65px;margin-left:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font:1em sans-serif;letter-spacing:.5px}.main-menu[_ngcontent-%COMP%]{display:none}.hamburger-icon[_ngcontent-%COMP%]{fill:#3f62a7;width:24px;height:24px}.mobile-menu[_ngcontent-%COMP%]{box-shadow:none}.hamburger-menu[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:100vh;height:200vh;position:absolute;left:0;z-index:1000;top:0;display:block}.hamburger-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:large;color:#000!important}.hamburger-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:larger;margin-top:5px;color:#3f62a7!important}.mobile-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#3f62a7}.hamburger-menu[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#000!important;font-size:28px;margin-top:3.5vh;margin-left:88%}.top-hamburger-menu[_ngcontent-%COMP%]{display:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#4e4caa24}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#4e4caa32}.side-navbar[_ngcontent-%COMP%]{display:none}.dashboard-container[_ngcontent-%COMP%]{background-color:transparent;min-height:90vh;width:100%}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:70vh;margin-top:1vh}.main-card[_ngcontent-%COMP%]{min-height:70vh;width:100%;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#33558b;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#33558b;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#33558b}p[_ngcontent-%COMP%]{color:#33558b;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#e9f1ff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#33558b}.form-control[_ngcontent-%COMP%]{height:45px;color:#33558b;border:2px solid #e1dfeed7}.form-control[_ngcontent-%COMP%]::placeholder{color:#4e4caa83;font-size:15px}.form-control[_ngcontent-%COMP%]:focus{border-color:#4e4caa46;box-shadow:0 0 0 1px #4e4caa1e}.text-danger[_ngcontent-%COMP%]{font-size:12px}.submit-button[_ngcontent-%COMP%]{height:42px;background:#4881dc;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#e9f1ff;color:#33558b;cursor:not-allowed}.learn-more[_ngcontent-%COMP%]{height:50px;width:225px;background:#f3014d;color:#fff;margin-top:10px!important;box-shadow:none!important}.learn-more[_ngcontent-%COMP%]:hover{height:50px;width:225px;background:rgba(33,150,0,.759);color:#fff;box-shadow:none!important}.learn-more.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#ffdde8;color:#682037;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#4881dc;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#33558b;cursor:pointer;text-decoration:none}.table[_ngcontent-%COMP%]{height:auto;display:block;width:100%;overflow-y:auto;overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{white-space:nowrap;color:#33558b}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#33558b;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#33558b}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5)}.modal-header[_ngcontent-%COMP%]{background-color:#4881dc;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#fff}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#fff}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.modal-dialog[_ngcontent-%COMP%]{height:80vh}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#4881dc;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}  mat-form-field{width:100%!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#33558b!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#33558b!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#33558b!important;opacity:.8!important}  .mat-input-element{caret-color:#33558b!important}  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#33558b!important}  .mat-form-field-label{color:#33558b!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#33558b!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#33558b!important}  .mat-radio-button{color:#33558b;margin-right:20px;margin-bottom:5px}  .mat-radio-outer-circle{border:1px solid #33558b}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#4881dc}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#4881dc}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#0000001a!important}.mat-checkbox[_ngcontent-%COMP%]{color:#33558b}  .mat-checkbox-frame{border-color:#33558b!important}  .mat-checkbox-ripple .mat-ripple-element{background-color:#4881dc!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#4881dc!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#4881dc!important}  .mat-slide-toggle-bar{height:27px!important;width:48px!important;border-radius:36px!important;background-color:#d3cde8}  .mat-slide-toggle-thumb{top:6px!important;right:-6px!important;position:relative!important;background-color:#fff!important}  .mat-slide-toggle.mat-checked .mat-ripple-element{background-color:transparent}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#4881dc!important}  .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff!important}@media (min-width: 576px) and (max-width:991.98px){.header[_ngcontent-%COMP%], .side-navbar[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.header[_ngcontent-%COMP%]{min-height:16vh!important;padding-bottom:15px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:105px;margin-left:250px}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1.1em sans-serif;letter-spacing:.5px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1em sans-serif;letter-spacing:.4px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]{display:inline-block}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;margin-left:20px;cursor:pointer}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{color:#000;font:16px sans-serif;letter-spacing:.85px}.desktop-menu[_ngcontent-%COMP%]{width:150%;padding-left:50px;padding-right:50px}.desktop-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.desktop-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:2px;color:#3f62a7}.hamburger[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%], .hamburger-icon[_ngcontent-%COMP%]{display:none}.side-navbar[_ngcontent-%COMP%]{height:90vh;width:16.5%;position:fixed;left:0;padding-top:2vh;padding-bottom:10vh;display:block;justify-content:space-around;background-color:#fff;overflow-x:auto;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#4881dc;width:100%;padding:5px;display:block;flex-direction:column;text-align:left}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;display:inline-block;margin-left:5px;margin-top:5px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:1.1em;font-weight:400;text-align:center;margin-left:15px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%]{background:#4881dc;color:#fff}.dashboard-container[_ngcontent-%COMP%]{width:auto;background-color:#64748d15;padding-bottom:1.5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:87vh;width:98.5%;margin-top:1.5vh;margin-left:.75%;border-radius:10px;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.main-card[_ngcontent-%COMP%]{min-height:70vh;padding-left:2px;padding-right:2px}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}.custom-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;overflow:auto}.table-container[_ngcontent-%COMP%]{background-color:#fff;border:none;padding:25px;margin-top:2vh}.logo-table[_ngcontent-%COMP%]{width:800px;border:none;font-size:1.3em;margin-top:2vh;margin-bottom:5vh;letter-spacing:.5px;display:inline-table}.logo-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:none;text-align:center}.info-table[_ngcontent-%COMP%]{width:800px;border:none;font-size:1em;letter-spacing:.25px;margin-bottom:5vh;display:inline-table}img[_ngcontent-%COMP%]{height:35px}.info-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:none}.custom-table[_ngcontent-%COMP%]{width:800px;font-size:1em;letter-spacing:.25px;margin-bottom:20px;border:1px solid #ccc;display:inline-table}.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:1px solid rgb(218,218,222);text-align:center}.receipt-table[_ngcontent-%COMP%]{width:800px;font-size:1em;letter-spacing:.25px;margin-bottom:20px;border:1px solid rgb(218,218,222);display:inline-table}.receipt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px}.receipt-table[_ngcontent-%COMP%]   .receipt-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:5px;padding-top:5px}.text-right[_ngcontent-%COMP%]{text-align:right}.border[_ngcontent-%COMP%]{border:1px solid #ccc}.text-center[_ngcontent-%COMP%]{text-align:center}.text-bold[_ngcontent-%COMP%]{font-weight:700}.print-pdf[_ngcontent-%COMP%]{display:none}@media (min-width: 576px) and (max-width:991.98px){.table-container[_ngcontent-%COMP%]{margin-top:1vh;border:1px solid #ccc}.logo-table[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]{width:100%}.custom-table[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]{width:100%;font-size:10px}.print-pdf[_ngcontent-%COMP%]{display:inline-block}}@media (min-width: 992px){.table-container[_ngcontent-%COMP%]{margin-top:1vh;margin-bottom:2vh;border-radius:5px}.logo-table[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]{width:100%}.custom-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;overflow:auto}.custom-table[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]{width:100%}.print-pdf[_ngcontent-%COMP%]{display:inline-block}}.info-table[_ngcontent-%COMP%]{text-align:center}@media (min-width: 992px){.container-fluid[_ngcontent-%COMP%]{padding-top:3vh;background-color:#64748d15}.table-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;border:1px solid rgba(218,218,224,.858)}}"]}),e})()}];let lt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[I.Bz.forChild(ct),I.Bz]}),e})();var st=i(11160);let dt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[O.ez,lt,st.S]}),e})()},88789:(j,y,i)=>{i.d(y,{N:()=>I});var O=i(94650);let I=(()=>{class d{transform(u){return u>=4&&u<=12?`${u}th`:1==u?`${u}st`:2==u?`${u}nd`:3==u?`${u}rd`:200==u?"Nursery":201==u?"LKG":202==u?"UKG":void 0}}return d.\u0275fac=function(u){return new(u||d)},d.\u0275pipe=O.Yjl({name:"classSuffix",type:d,pure:!0}),d})()}}]);