"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[2608],{32608:(Z,p,e)=>{e.r(p),e.d(p,{NoticeModule:()=>O});var r=e(36895),s=e(89299),n=e(94650),d=e(12013),m=e(462),g=e(97496),a=e(37084),l=e(51572);function f(o,i){1&o&&(n.TgZ(0,"h3",8),n._uU(1,"No new notifications"),n.qZA())}function u(o,i){1&o&&(n.TgZ(0,"h3",8),n._uU(1,"Notifications"),n.qZA())}function h(o,i){if(1&o&&(n.TgZ(0,"mat-expansion-panel",9)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),n._uU(3),n.qZA()(),n.TgZ(4,"p"),n._uU(5),n.qZA()()),2&o){const t=i.$implicit;n.xp6(3),n.Oqu(t.title),n.xp6(2),n.Oqu(t.message)}}function x(o,i){1&o&&n._UZ(0,"mat-progress-spinner",14)}function v(o,i){if(1&o&&(n.TgZ(0,"div",12),n.YNc(1,x,1,0,"mat-progress-spinner",13),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("ngIf",t.loader)}}function C(o,i){if(1&o&&(n.TgZ(0,"div",10),n.YNc(1,v,2,1,"div",11),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",t.loader)}}const N=[{path:"",component:(()=>{class o{constructor(t){this.notificationService=t,this.notifications=[],this.loader=!0}ngOnInit(){this.notification()}notification(){this.notificationService.getNotificationList().subscribe(t=>{t&&(this.notifications=t,setTimeout(()=>{this.loader=!1},1e3))})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(d.g))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-notice"]],decls:12,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","col-lg-8","offset-lg-2","big-container"],[1,"col-lg-10","offset-lg-1"],[1,"main-card"],["style","text-align: center;margin-bottom: 10vh;",4,"ngIf"],["class","notice-card",4,"ngFor","ngForOf"],["class","spinner-container",4,"ngIf"],[2,"text-align","center","margin-bottom","10vh"],[1,"notice-card"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","animationDuration","20000","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","animationDuration","20000","strokeWidth","3"]],template:function(t,c){1&t&&(n._UZ(0,"app-header"),n.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),n.YNc(6,f,2,0,"h3",5),n.YNc(7,u,2,0,"h3",5),n.TgZ(8,"mat-accordion"),n.YNc(9,h,6,2,"mat-expansion-panel",6),n.qZA()()()()()(),n._UZ(10,"app-footer"),n.YNc(11,C,2,1,"div",7)),2&t&&(n.xp6(6),n.Q6J("ngIf",c.notifications.length<=0),n.xp6(1),n.Q6J("ngIf",c.notifications.length>0),n.xp6(2),n.Q6J("ngForOf",c.notifications),n.xp6(2),n.Q6J("ngIf",c.loader))},dependencies:[r.sg,r.O5,m.G,g.c,a.pp,a.ib,a.yz,a.yK,l.Ou],styles:[".container-fluid[_ngcontent-%COMP%]{background-color:#fff;padding-bottom:5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:90vh;margin-top:2vh}.main-card[_ngcontent-%COMP%]{background-color:#fff;margin-top:20px;margin-bottom:2vh;border-radius:10px}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#33558b;margin-top:2vh;font-size:18px;font-weight:500;letter-spacing:.5px;margin-bottom:5px}p[_ngcontent-%COMP%]{margin-top:2vh;color:#4e4caac1;font-size:15px;letter-spacing:.5px}.notice-card[_ngcontent-%COMP%]{margin-bottom:20px;border-radius:10px!important;background-color:#8c88ff3d;box-shadow:none!important}mat-expansion-panel-header[_ngcontent-%COMP%]{box-shadow:none!important;min-height:50px;height:auto}mat-panel-title[_ngcontent-%COMP%]{color:#33558b!important;box-shadow:none!important}@media (min-width: 576px) and (max-width:991.98px){.container-fluid[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.container-fluid[_ngcontent-%COMP%]{background-color:#64748d15;padding-bottom:5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;margin-top:5vh;border-radius:10px;border:1px solid rgba(218,218,224,.858)}.main-card[_ngcontent-%COMP%]{background-color:transparent;margin-top:50px;padding-bottom:15px}}"]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.Bz.forChild(N),s.Bz]}),o})();var M=e(11160);let O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[r.ez,b,M.S]}),o})()}}]);