"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[422],{20422:(ot,h,a)=>{a.r(h),a.d(h,{AdminStudentFeesModule:()=>et});var d=a(36895),u=a(89299),b=a(77579),_=a(80574),t=a(94650),p=a(24006),x=a(87129),C=a(38283),M=a(86898),Z=a(11005),O=a(62373),P=a(88153),A=a(4859),v=a(56709),F=a(97392),y=a(51572),T=a(3238),S=a(23312),k=a(88789);const U=["receipt"];function w(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,c=t.oxw();return t.KtG(c.studentFeesPay(s))}),t._uU(1,"Pay Offline"),t.qZA()}}function q(n,i){if(1&n&&(t.TgZ(0,"button",28),t._uU(1,"Fee Paid"),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("disabled",e.paidFees===e.totalFees)}}function I(n,i){if(1&n&&(t.TgZ(0,"tbody")(1,"tr")(2,"td")(3,"p",23),t._uU(4),t.qZA()(),t.TgZ(5,"th"),t.YNc(6,w,2,0,"button",24),t.YNc(7,q,2,1,"button",25),t.qZA(),t.TgZ(8,"td")(9,"p",23),t._uU(10),t.ALo(11,"titlecase"),t.qZA()(),t.TgZ(12,"td")(13,"p",23),t._uU(14),t.qZA()(),t.TgZ(15,"td")(16,"p",23),t._uU(17),t.qZA()(),t.TgZ(18,"td")(19,"p",23),t._uU(20),t.qZA()(),t.TgZ(21,"td")(22,"p",23),t._uU(23),t.qZA()(),t.TgZ(24,"td")(25,"p",23),t._uU(26),t.qZA()(),t.TgZ(27,"td",23)(28,"mat-icon",26),t._uU(29,"launch"),t.qZA()(),t.TgZ(30,"td")(31,"p",23),t._uU(32),t.qZA()()()()),2&n){const e=i.$implicit,o=i.index;t.xp6(4),t.Oqu(o+1),t.xp6(2),t.Q6J("ngIf",e.paidFees!==e.totalFees),t.xp6(1),t.Q6J("ngIf",e.paidFees===e.totalFees),t.xp6(3),t.Oqu(t.lcZ(11,12,e.name)),t.xp6(4),t.Oqu(e.admissionNo),t.xp6(3),t.Oqu(e.rollNumber),t.xp6(3),t.hij(" \u20b9 ",e.paidFees,""),t.xp6(3),t.hij(" \u20b9 ",e.dueFees,""),t.xp6(3),t.hij(" \u20b9 ",e.totalFees,""),t.xp6(2),t.hYB("routerLink","/admin/students/fees/class/statement/",e.class,"/",e.studentId,""),t.xp6(4),t.Oqu(e.session)}}function N(n,i){if(1&n&&(t.TgZ(0,"div")(1,"p",39),t._uU(2),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Oqu(e.errorMsg)}}function j(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"td",37),t._uU(2),t.qZA(),t.TgZ(3,"td",40),t._uU(4),t.qZA(),t.BQk()),2&n){const e=i.$implicit;t.xp6(2),t.hij(" ",e.key," "),t.xp6(2),t.hij(" \u20b9 ",e.value," ")}}function B(n,i){if(1&n&&(t.ynx(0),t.YNc(1,j,5,2,"ng-container",12),t.ALo(2,"keyvalue"),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e))}}function z(n,i){if(1&n&&(t.TgZ(0,"tr"),t.ynx(1),t.YNc(2,B,3,3,"ng-container",12),t.BQk(),t.qZA()),2&n){const e=i.$implicit;t.xp6(2),t.Q6J("ngForOf",e)}}function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"mat-checkbox",44),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(3);return t.KtG(s.feesPay(s.payNow))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.hij("Allow ",e.paybleInstallment[0][0]," Installment")}}function Q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"mat-checkbox",44),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(3);return t.KtG(s.feesPay(s.payNow))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.hij("Allow ",e.paybleInstallment[0][0],"")}}function Y(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",41),t.YNc(1,J,2,1,"mat-checkbox",42),t.YNc(2,Q,2,1,"mat-checkbox",42),t.TgZ(3,"button",43),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.feesAddUpdate())}),t._uU(4),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf","Admission Fees"!==e.paybleInstallment[0][0]),t.xp6(1),t.Q6J("ngIf","Admission Fees"==e.paybleInstallment[0][0]),t.xp6(1),t.Q6J("disabled",!e.payNow),t.xp6(1),t.hij("Pay \u20b9 ",e.paybleInstallment[0][1],"")}}function R(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",29),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.feesAddUpdate())}),t.TgZ(1,"div",30),t.YNc(2,N,3,1,"div",31),t.TgZ(3,"div",1)(4,"div",32)(5,"div",33)(6,"table",34)(7,"tr")(8,"td"),t._UZ(9,"img",35),t._uU(10),t.ALo(11,"uppercase"),t.ALo(12,"uppercase"),t.qZA()()(),t.TgZ(13,"table",36)(14,"tr")(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA()()(),t.TgZ(21,"table",36)(22,"tr")(23,"td",37),t._uU(24,"Admission No. :"),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td",37),t._uU(28,"Class :"),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.ALo(31,"classSuffix"),t.qZA()(),t.TgZ(32,"tr")(33,"td",37),t._uU(34,"Student Name :"),t.qZA(),t.TgZ(35,"td"),t._uU(36),t.ALo(37,"titlecase"),t.qZA(),t.TgZ(38,"td",37),t._uU(39,"Father Name :"),t.qZA(),t.TgZ(40,"td"),t._uU(41),t.qZA()()(),t.TgZ(42,"table",38)(43,"tr")(44,"td",37),t._uU(45,"Paid Fee"),t.qZA(),t.TgZ(46,"td"),t._uU(47),t.qZA(),t.TgZ(48,"td",37),t._uU(49,"Due Fee"),t.qZA(),t.TgZ(50,"td"),t._uU(51),t.qZA(),t.TgZ(52,"td",37),t._uU(53,"Total Fee"),t.qZA(),t.TgZ(54,"td"),t._uU(55),t.qZA()()(),t.TgZ(56,"table",38),t.YNc(57,z,3,1,"tr",12),t.ALo(58,"chunk"),t.qZA()()()()(),t.YNc(59,Y,5,4,"div",21),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.feesForm),t.xp6(2),t.Q6J("ngIf",e.errorCheck),t.xp6(8),t.AsE(" ",t.lcZ(11,16,null==e.schoolInfo?null:e.schoolInfo.schoolName),", ",t.lcZ(12,18,null==e.schoolInfo?null:e.schoolInfo.city)," "),t.xp6(6),t.hij(" School Code : ",null==e.schoolInfo?null:e.schoolInfo.schoolCode," "),t.xp6(2),t.hij(" School Fee - ",e.singleStudent.session," "),t.xp6(2),t.hij(" Affiliation No. : ",null==e.schoolInfo?null:e.schoolInfo.affiliationNumber," "),t.xp6(6),t.Oqu(e.singleStudent.admissionNo),t.xp6(4),t.Oqu(t.lcZ(31,20,e.singleStudent.class)),t.xp6(6),t.Oqu(t.lcZ(37,22,e.singleStudent.name)),t.xp6(5),t.Oqu(e.singleStudent.fatherName),t.xp6(6),t.hij("\u20b9 ",e.singleStudent.paidFees,""),t.xp6(4),t.hij("\u20b9 ",e.singleStudent.dueFees,""),t.xp6(4),t.hij("\u20b9 ",e.singleStudent.totalFees,""),t.xp6(2),t.Q6J("ngForOf",t.xi3(58,24,e.singleStudent.installment,3)),t.xp6(2),t.Q6J("ngIf",e.paybleInstallment[0][1]>0&&!e.receiptMode)}}function L(n,i){if(1&n&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.hij(" ",e.key," Fee")}}function G(n,i){if(1&n&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.hij(" \u20b9 ",e.value,"")}}function E(n,i){if(1&n&&(t.TgZ(0,"tr",47)(1,"td",48),t._uU(2),t.qZA(),t.YNc(3,L,2,1,"td",52),t.ALo(4,"keyvalue"),t.YNc(5,G,2,1,"td",52),t.ALo(6,"keyvalue"),t.qZA()),2&n){const e=i.$implicit,o=i.index;t.xp6(2),t.hij("",o+1,"."),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,3,e)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,5,e))}}function D(n,i){if(1&n&&(t.TgZ(0,"div",30)(1,"div",1)(2,"div",32,45)(4,"div",33)(5,"table",34)(6,"tr"),t._UZ(7,"td"),t.TgZ(8,"td"),t._UZ(9,"img",35),t._uU(10),t.ALo(11,"uppercase"),t.ALo(12,"uppercase"),t.qZA()()(),t.TgZ(13,"table",36)(14,"tr")(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA()()(),t.TgZ(21,"table",36)(22,"tr")(23,"td",37),t._uU(24,"Receipt No. :"),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td",37),t._uU(28,"Admission No. :"),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.qZA()(),t.TgZ(31,"tr")(32,"td",37),t._uU(33,"Class :"),t.qZA(),t.TgZ(34,"td"),t._uU(35),t.ALo(36,"classSuffix"),t.qZA(),t.TgZ(37,"td",37),t._uU(38,"Date Of Birth :"),t.qZA(),t.TgZ(39,"td"),t._uU(40),t.qZA()(),t.TgZ(41,"tr")(42,"td",37),t._uU(43,"Student Name :"),t.qZA(),t.TgZ(44,"td"),t._uU(45),t.ALo(46,"titlecase"),t.qZA(),t.TgZ(47,"td",37),t._uU(48,"Father Name :"),t.qZA(),t.TgZ(49,"td"),t._uU(50),t.qZA()()(),t.TgZ(51,"table",46)(52,"tr",47)(53,"th",48),t._uU(54,"S. No."),t.qZA(),t.TgZ(55,"th",48),t._uU(56,"Particulars"),t.qZA(),t.TgZ(57,"th",48),t._uU(58,"Fee Amount"),t.qZA()(),t.YNc(59,E,7,7,"tr",49),t.TgZ(60,"tr",50),t._UZ(61,"td"),t.TgZ(62,"td",51),t._uU(63,"Total Fee"),t.qZA(),t.TgZ(64,"td",37),t._uU(65),t.qZA()(),t.TgZ(66,"tr",50),t._UZ(67,"td"),t.TgZ(68,"td",51),t._uU(69,"Paid Fee"),t.qZA(),t.TgZ(70,"td",37),t._uU(71),t.qZA()(),t.TgZ(72,"tr",50),t._UZ(73,"td"),t.TgZ(74,"td",51),t._uU(75,"Due Fee"),t.qZA(),t.TgZ(76,"td",37),t._uU(77),t.qZA()(),t.TgZ(78,"tr"),t._UZ(79,"td"),t.TgZ(80,"td")(81,"p",47)(82,"span",37),t._uU(83),t.qZA(),t._uU(84," installment amount deposited "),t.TgZ(85,"span",37),t._uU(86),t.qZA()()(),t._UZ(87,"td"),t.qZA()(),t.TgZ(88,"p"),t._uU(89),t.qZA(),t.TgZ(90,"div")(91,"h4",37),t._uU(92,"Disclaimer:"),t.qZA(),t.TgZ(93,"p"),t._uU(94),t.qZA(),t.TgZ(95,"p"),t._uU(96,"2. Verification: Review receipt details for accuracy, including payment amount and purpose. Report discrepancies to the School Office for correction."),t.qZA(),t.TgZ(97,"p"),t._uU(98,"3. Non-Transferable: Intended for your use only; do not share it."),t.qZA(),t.TgZ(99,"p"),t._uU(100,"4. Record Keeping: Keep this receipt for future reference, reimbursement, or tax purposes."),t.qZA(),t.TgZ(101,"p"),t._uU(102,"5. Lost Receipt: If lost or damaged, contact the School Office for a duplicate. A fee may apply."),t.qZA(),t.TgZ(103,"p"),t._uU(104,"6. Refund Policy: Refer to our institution's refund policy for fee refund information. Generally, fees are non-refundable. Exceptions may apply for duplicate payments or inadvertent overpayments with proper documentation and school policy approval."),t.qZA()()()()()()),2&n){const e=t.oxw();t.xp6(10),t.AsE(" ",t.lcZ(11,19,null==e.schoolInfo?null:e.schoolInfo.schoolName),", ",t.lcZ(12,21,null==e.schoolInfo?null:e.schoolInfo.city)," "),t.xp6(6),t.hij(" School Code : ",null==e.schoolInfo?null:e.schoolInfo.schoolCode," "),t.xp6(2),t.hij(" School Fee Receipt - ",e.singleStudent.session," "),t.xp6(2),t.hij(" Affiliation No. : ",null==e.schoolInfo?null:e.schoolInfo.affiliationNumber," "),t.xp6(6),t.Oqu(e.receiptInstallment.receiptNo),t.xp6(4),t.Oqu(e.singleStudent.admissionNo),t.xp6(5),t.Oqu(t.lcZ(36,23,e.singleStudent.class)),t.xp6(5),t.Oqu(e.singleStudent.dob),t.xp6(5),t.Oqu(t.lcZ(46,25,e.singleStudent.name)),t.xp6(5),t.Oqu(e.singleStudent.fatherName),t.xp6(9),t.Q6J("ngForOf",null==e.clsFeesStructure?null:e.clsFeesStructure.feesType),t.xp6(6),t.hij("\u20b9 ",e.receiptInstallment.totalFees,""),t.xp6(6),t.hij("\u20b9 ",e.receiptInstallment.paidFees,""),t.xp6(6),t.hij("\u20b9 ",e.receiptInstallment.dueFees,""),t.xp6(6),t.hij(" ",e.receiptInstallment.feesInstallment,""),t.xp6(3),t.hij("\u20b9 ",e.receiptInstallment.feesAmount," /-"),t.xp6(3),t.hij("Date : ",e.receiptInstallment.paymentDate,""),t.xp6(5),t.hij("1. Payment Responsibility: Confirms your obligation to ",null==e.schoolInfo?null:e.schoolInfo.schoolName," for listed fees.")}}function $(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",41)(1,"button",53),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.printReceipt())}),t._uU(2,"Print"),t.qZA()()}}function H(n,i){1&n&&t._UZ(0,"mat-progress-spinner",58)}function K(n,i){if(1&n&&(t.TgZ(0,"div",56),t.YNc(1,H,1,0,"mat-progress-spinner",57),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.loader)}}function V(n,i){if(1&n&&(t.TgZ(0,"div",54),t.YNc(1,K,2,1,"div",55),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.loader)}}const W=[{path:"",component:(()=>{class n{constructor(e,o,s,c,m,r){this.fb=e,this.activatedRoute=o,this.schoolService=s,this.printPdfService=c,this.feesService=m,this.feesStructureService=r,this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.deleteById="",this.successMsg="",this.errorMsg="",this.errorCheck=!1,this.feesInfo=[1,2,3,4,5],this.recordLimit=10,this.filters={},this.number=0,this.paginationValues=new b.x,this.page=0,this.showBulkFeesModal=!1,this.movies=[],this.selectedValue=0,this.fileChoose=!1,this.existRollnumber=[],this.studentList=[],this.payNow=!1,this.receiptInstallment={},this.receiptMode=!1,this.loader=!0,this.feesForm=this.fb.group({class:[""],studentId:[""],feesAmount:[""],feesInstallment:[""],createdBy:[""]})}ngOnInit(){this.getSchool(),this.cls=this.activatedRoute.snapshot.paramMap.get("id"),this.feesStructureByClass(this.cls),this.getAllStudentFeesCollectionByClass(this.cls)}printReceipt(){this.printPdfService.printElement(this.receipt.nativeElement),this.closeModal()}getSchool(){this.schoolService.getSchool().subscribe(e=>{e&&(this.schoolInfo=e)})}getAllStudentFeesCollectionByClass(e){this.feesService.getAllStudentFeesCollectionByClass(e).subscribe(o=>{if(o){let s=o.studentFeesCollection;const m=new Map(o.studentInfo.map(l=>[l._id,l])),r=s.map(l=>({...m.get(l.studentId),...l}));this.studentList=r,setTimeout(()=>{this.loader=!1},1e3)}})}feesStructureByClass(e){this.feesStructureService.feesStructureByClass(e).subscribe(o=>{o&&(this.clsFeesStructure=o)})}closeModal(){this.showModal=!1,this.showBulkFeesModal=!1,this.updateMode=!1,this.successMsg="",this.errorMsg="",this.payNow=!1,this.paybleInstallment=[],this.paybleInstallment=[0,0],this.receiptInstallment={},this.receiptMode=!1,this.getAllStudentFeesCollectionByClass(this.cls)}feesPay(e){!1===e&&(this.payNow=!0),!0===e&&(this.payNow=!1)}studentFeesPay(e){this.singleStudent=e;const o=e.admissionFees,s=this.clsFeesStructure.admissionFees,c=e.admissionFeesPayable;if("Admission"in this.clsFeesStructure.feesType[0]&&this.clsFeesStructure.feesType.shift(),1==c&&(this.clsFeesStructure.feesType=[{Admission:this.clsFeesStructure.admissionFees},...this.clsFeesStructure.feesType]),0==o&&1==c&&(this.paybleInstallment=[["Admission Fees",s]]),o>0&&1==c||0==o&&0==c){const r=this.singleStudent.installment.find(l=>{const[g,f]=Object.entries(l)[0];return 0===f});if(r){const[l,g]=Object.entries(r)[0];this.paybleInstallment=this.clsFeesStructure.installment.flatMap(f=>Object.entries(f).filter(([nt,st])=>nt===l))}else this.paybleInstallment=[0,0]}this.showModal=!0,this.deleteMode=!1,this.updateMode=!1,this.feesForm.reset()}updateFeesModel(e){this.showModal=!0,this.deleteMode=!1,this.updateMode=!0}deleteFeesModel(e){this.showModal=!0,this.updateMode=!1,this.deleteMode=!0,this.deleteById=e}feesAddUpdate(){this.feesForm.valid&&(this.updateMode?this.feesService.updateFees(this.feesForm.value).subscribe(e=>{e&&(this.closeModal(),this.successMsg=e)},e=>{this.errorCheck=!0,this.errorMsg=e.error}):(this.feesForm.value.class=this.singleStudent.class,this.feesForm.value.createdBy="Admin",this.feesForm.value.studentId=this.singleStudent.studentId,this.feesForm.value.feesInstallment=this.paybleInstallment[0][0],this.feesForm.value.feesAmount=this.paybleInstallment[0][1],"Admission Fees"==this.paybleInstallment[0][0]?this.feesService.addAdmissionFees(this.feesForm.value).subscribe(e=>{e&&(this.receiptMode=!0,this.receiptInstallment={class:e.className,receiptNo:e.admissionFeesReceiptNo,studentId:e.studentId,totalFees:e.totalFees,paidFees:e.paidFees,dueFees:e.dueFees,feesInstallment:"Admission Fees",feesAmount:e.admissionFees,paymentDate:e.admissionFeesPaymentDate})},e=>{this.errorCheck=!0,this.errorMsg=e.error}):this.feesService.addFees(this.feesForm.value).subscribe(e=>{e&&(this.receiptMode=!0,this.receiptInstallment=e)},e=>{this.errorCheck=!0,this.errorMsg=e.error})))}handleImport(e){this.fileChoose=!0;const o=e.target.files;if(o.length){const s=o[0],c=new FileReader;c.onload=m=>{const r=(0,_.ij)(m.target.fees),l=r.SheetNames;if(l.length){const g=_.P6.sheet_to_json(r.Sheets[l[0]]);this.movies=g}},c.readAsArrayBuffer(s)}}onChange(e){this.selectedValue=e.value}addBulkFeesModel(){this.showBulkFeesModal=!0}addBulkFees(){this.feesService.addBulkFees(this.movies).subscribe(e=>{e&&(this.successMsg=e)},e=>{this.errorCheck=!0,this.errorMsg=e.error.errMsg,this.existRollnumber=e.error.existRollnumber})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.qu),t.Y36(u.gz),t.Y36(x.E),t.Y36(C.Z),t.Y36(M.$),t.Y36(Z.t))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-student-fees"]],viewQuery:function(e,o){if(1&e&&t.Gf(U,5),2&e){let s;t.iGM(s=t.CRH())&&(o.receipt=s.first)}},decls:55,vars:10,consts:[[1,"container-fluid","dashboard-container"],[1,"row"],[1,"col-12","col-lg-2"],[1,"col-12","col-lg-10"],[1,"col-12","big-container"],[1,"col-lg-12","offset-lg-0"],[1,"main-card","pb-4"],[1,"col-12","col-lg-4","pt-2","pb-2"],[1,"col-12"],[1,"table","table-hover","align-middle","mt-2","mb-1","bg-white"],[1,"bg-light"],[1,"text-muted"],[4,"ngFor","ngForOf"],[1,"modal","fade","show"],["role","document",1,"modal-dialog","modal-dialog-scrollable","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["matRipple","",3,"click"],[3,"formGroup","ngSubmit",4,"ngIf"],["class","modal-body",4,"ngIf"],["class","modal-footer",4,"ngIf"],["class","spinner-container",4,"ngIf"],[1,"mb-0"],["style","background-color: transparent;color: #4881dc;border: 1px solid #4881dc;","class","submit-button","mat-raised-button","",3,"click",4,"ngIf"],["class","submit-button","mat-raised-button","","style","background-color: transparent;",3,"disabled",4,"ngIf"],[2,"cursor","pointer",3,"routerLink"],["mat-raised-button","",1,"submit-button",2,"background-color","transparent","color","#4881dc","border","1px solid #4881dc",3,"click"],["mat-raised-button","",1,"submit-button",2,"background-color","transparent",3,"disabled"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[4,"ngIf"],[1,"custom-container"],[1,"table-container"],[1,"logo-table","text-bold","text-center"],["src","../../../../assets/logo.png","alt",""],[1,"info-table","text-center"],[1,"text-bold"],[1,"custom-table"],[1,"error-message"],[2,"font-weight","400"],[1,"modal-footer"],["style","margin-right: 8px;","class","example-margin",3,"click",4,"ngIf"],["mat-raised-button","","type","button",1,"submit-button",3,"disabled","click"],[1,"example-margin",2,"margin-right","8px",3,"click"],["receipt",""],[1,"receipt-table"],[1,"text-center"],[1,"border"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center","receipt-row"],[1,"text-bold","text-right"],["class","border",4,"ngFor","ngForOf"],["mat-raised-button","",1,"submit-button","print-pdf",3,"click"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(e,o){1&e&&(t._UZ(0,"app-header-navbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t._UZ(4,"app-side-navbar"),t.qZA(),t.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",1)(11,"div",7)(12,"div",1)(13,"div",8)(14,"h3"),t._uU(15,"Fee Payment >"),t.TgZ(16,"span"),t._uU(17),t.ALo(18,"classSuffix"),t.qZA()()()()()(),t.TgZ(19,"table",9)(20,"thead",10)(21,"tr",11)(22,"th"),t._uU(23,"No."),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Fee Payment"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Student Name"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Admission No."),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Roll Number"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"Paid Fee"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Due Fee"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"Total Fee"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"Fee Statement"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Session"),t.qZA()()(),t.YNc(42,I,33,14,"tbody",12),t.qZA(),t.TgZ(43,"div",13)(44,"div",14)(45,"div",15)(46,"div",16)(47,"h5",17),t._uU(48,"Student Fee Payment"),t.qZA(),t.TgZ(49,"mat-icon",18),t.NdJ("click",function(){return o.closeModal()}),t._uU(50,"close"),t.qZA()(),t.YNc(51,R,60,27,"form",19),t.YNc(52,D,105,27,"div",20),t.YNc(53,$,3,0,"div",21),t.qZA()()()()()()()()()(),t.YNc(54,V,2,1,"div",22)),2&e&&(t.xp6(17),t.hij(" ",t.lcZ(18,8,o.cls),""),t.xp6(25),t.Q6J("ngForOf",o.studentList),t.xp6(1),t.ekj("show",o.showModal),t.xp6(8),t.Q6J("ngIf",!o.deleteMode&&o.paybleInstallment&&o.singleStudent&&!o.receiptMode),t.xp6(1),t.Q6J("ngIf",o.receiptMode&&o.receiptInstallment&&o.singleStudent),t.xp6(1),t.Q6J("ngIf",o.receiptMode),t.xp6(1),t.Q6J("ngIf",o.loader))},dependencies:[d.sg,d.O5,u.rH,O.R,P.A,A.lW,v.oG,F.Hw,y.Ou,T.wG,p._Y,p.JL,p.sg,d.gd,d.rS,d.Nd,S.S,k.N],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;font-family:serif;overflow-x:hidden}[_nghost-%COMP%]{--common-color: #fff;--header-height: 16vh}.header[_ngcontent-%COMP%]{background-color:var(--common-color);width:100%;min-height:12vh;left:0;top:0;position:fixed;z-index:2;padding:0!important;display:flex;justify-content:space-around;box-shadow:0 0 1px -10px #64748d15,0 0 0 1px #4d5c7615,0 0 4px #64748d15}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:65px;margin-left:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font:1em sans-serif;letter-spacing:.5px}.main-menu[_ngcontent-%COMP%]{display:none}.hamburger-icon[_ngcontent-%COMP%]{fill:#3f62a7;width:24px;height:24px}.mobile-menu[_ngcontent-%COMP%]{box-shadow:none}.hamburger-menu[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:100vh;height:200vh;position:absolute;left:0;z-index:1000;top:0;display:block}.hamburger-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:large;color:#000!important}.hamburger-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:larger;margin-top:5px;color:#3f62a7!important}.mobile-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#3f62a7}.hamburger-menu[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#000!important;font-size:28px;margin-top:3.5vh;margin-left:88%}.top-hamburger-menu[_ngcontent-%COMP%]{display:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#4e4caa24}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#4e4caa32}.side-navbar[_ngcontent-%COMP%]{display:none}.dashboard-container[_ngcontent-%COMP%]{background-color:transparent;min-height:90vh;width:100%}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:70vh;margin-top:1vh}.main-card[_ngcontent-%COMP%]{min-height:70vh;width:100%;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#33558b;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#33558b;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#33558b}p[_ngcontent-%COMP%]{color:#33558b;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#e9f1ff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#33558b}.form-control[_ngcontent-%COMP%]{height:45px;color:#33558b;border:2px solid #e1dfeed7}.form-control[_ngcontent-%COMP%]::placeholder{color:#4e4caa83;font-size:15px}.form-control[_ngcontent-%COMP%]:focus{border-color:#4e4caa46;box-shadow:0 0 0 1px #4e4caa1e}.text-danger[_ngcontent-%COMP%]{font-size:12px}.submit-button[_ngcontent-%COMP%]{height:42px;background:#4881dc;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#e9f1ff;color:#33558b;cursor:not-allowed}.learn-more[_ngcontent-%COMP%]{height:50px;width:225px;background:#f3014d;color:#fff;margin-top:10px!important;box-shadow:none!important}.learn-more[_ngcontent-%COMP%]:hover{height:50px;width:225px;background:rgba(33,150,0,.759);color:#fff;box-shadow:none!important}.learn-more.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#ffdde8;color:#682037;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#4881dc;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#33558b;cursor:pointer;text-decoration:none}.table[_ngcontent-%COMP%]{height:auto;display:block;width:100%;overflow-y:auto;overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{white-space:nowrap;color:#33558b}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#33558b;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#33558b}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5)}.modal-header[_ngcontent-%COMP%]{background-color:#4881dc;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#fff}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#fff}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.modal-dialog[_ngcontent-%COMP%]{height:80vh}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#4881dc;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}  mat-form-field{width:100%!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#33558b!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#33558b!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#33558b!important;opacity:.8!important}  .mat-input-element{caret-color:#33558b!important}  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#33558b!important}  .mat-form-field-label{color:#33558b!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#33558b!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#33558b!important}  .mat-radio-button{color:#33558b;margin-right:20px;margin-bottom:5px}  .mat-radio-outer-circle{border:1px solid #33558b}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#4881dc}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#4881dc}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#0000001a!important}.mat-checkbox[_ngcontent-%COMP%]{color:#33558b}  .mat-checkbox-frame{border-color:#33558b!important}  .mat-checkbox-ripple .mat-ripple-element{background-color:#4881dc!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#4881dc!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#4881dc!important}  .mat-slide-toggle-bar{height:27px!important;width:48px!important;border-radius:36px!important;background-color:#d3cde8}  .mat-slide-toggle-thumb{top:6px!important;right:-6px!important;position:relative!important;background-color:#fff!important}  .mat-slide-toggle.mat-checked .mat-ripple-element{background-color:transparent}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#4881dc!important}  .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff!important}@media (min-width: 576px) and (max-width:991.98px){.header[_ngcontent-%COMP%], .side-navbar[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.header[_ngcontent-%COMP%]{min-height:16vh!important;padding-bottom:15px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:105px;margin-left:250px}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1.1em sans-serif;letter-spacing:.5px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1em sans-serif;letter-spacing:.4px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]{display:inline-block}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;margin-left:20px;cursor:pointer}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{color:#000;font:16px sans-serif;letter-spacing:.85px}.desktop-menu[_ngcontent-%COMP%]{width:150%;padding-left:50px;padding-right:50px}.desktop-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.desktop-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:2px;color:#3f62a7}.hamburger[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%], .hamburger-icon[_ngcontent-%COMP%]{display:none}.side-navbar[_ngcontent-%COMP%]{height:90vh;width:16.5%;position:fixed;left:0;padding-top:2vh;padding-bottom:10vh;display:block;justify-content:space-around;background-color:#fff;overflow-x:auto;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#4881dc;width:100%;padding:5px;display:block;flex-direction:column;text-align:left}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;display:inline-block;margin-left:5px;margin-top:5px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:1.1em;font-weight:400;text-align:center;margin-left:15px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%]{background:#4881dc;color:#fff}.dashboard-container[_ngcontent-%COMP%]{width:auto;background-color:#64748d15;padding-bottom:1.5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:87vh;width:98.5%;margin-top:1.5vh;margin-left:.75%;border-radius:10px;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.main-card[_ngcontent-%COMP%]{min-height:70vh;padding-left:2px;padding-right:2px}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}.custom-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;overflow:auto}.table-container[_ngcontent-%COMP%]{background-color:#fff;border:none;padding:25px;margin-top:2vh}.logo-table[_ngcontent-%COMP%]{width:800px;border:none;font-size:1.3em;margin-top:2vh;margin-bottom:5vh;letter-spacing:.5px;display:inline-table}.logo-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:none;text-align:center}.info-table[_ngcontent-%COMP%]{width:800px;border:none;font-size:1em;letter-spacing:.25px;margin-bottom:5vh;display:inline-table}img[_ngcontent-%COMP%]{height:35px}.info-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:none}.custom-table[_ngcontent-%COMP%]{width:800px;font-size:1em;letter-spacing:.25px;margin-bottom:20px;border:1px solid #ccc;display:inline-table}.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:1px solid rgb(218,218,222);text-align:center}.receipt-table[_ngcontent-%COMP%]{width:800px;font-size:1em;letter-spacing:.25px;margin-bottom:20px;border:1px solid rgb(218,218,222);display:inline-table}.receipt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px}.receipt-table[_ngcontent-%COMP%]   .receipt-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:5px;padding-top:5px}.text-right[_ngcontent-%COMP%]{text-align:right}.border[_ngcontent-%COMP%]{border:1px solid #ccc}.text-center[_ngcontent-%COMP%]{text-align:center}.text-bold[_ngcontent-%COMP%]{font-weight:700}.print-pdf[_ngcontent-%COMP%]{display:none}@media (min-width: 576px) and (max-width:991.98px){.table-container[_ngcontent-%COMP%]{margin-top:1vh;border:1px solid #ccc}.logo-table[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]{width:100%}.custom-table[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]{width:100%;font-size:10px}.print-pdf[_ngcontent-%COMP%]{display:inline-block}}@media (min-width: 992px){.table-container[_ngcontent-%COMP%]{margin-top:1vh;margin-bottom:2vh;border-radius:5px}.logo-table[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]{width:100%}.custom-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;overflow:auto}.custom-table[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]{width:100%}.print-pdf[_ngcontent-%COMP%]{display:inline-block}}"]}),n})()}];let X=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(W),u.Bz]}),n})();var tt=a(1293);let et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,X,tt.g]}),n})()}}]);