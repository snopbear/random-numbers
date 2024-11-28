import{a as k,b as c,c as j,d as G,e as z,f as L,g as T,h as $,i as q,j as b,k as D,l as V,m as A,n as B,o as _,p as U,q as v,r as Y,s as h}from"./chunk-KDMOEVOG.js";import{$a as n,Da as m,Ea as P,Ob as g,Pb as f,Qb as I,R as N,Sa as u,Wa as l,_a as t,ab as p,ca as O,db as F,eb as S,i as x,ob as o,pb as R,qb as w,sb as E,x as C}from"./chunk-TQIQAWUS.js";var H=[b],J=[_,h,v],K=[g,f,I],ae=[...H,...J,K];function Q(e,d){if(e&1&&(t(0,"mat-option",10),o(1),n()),e&2){let r=d.$implicit;l("value",r),m(),R(r)}}function W(e,d){e&1&&(t(0,"mat-error"),o(1," Favorite number is required. "),n())}function X(e,d){e&1&&(t(0,"mat-error"),o(1," Number length is required. "),n())}function Z(e,d){e&1&&(t(0,"mat-error"),o(1," Minimum length is 1. "),n())}function ee(e,d){if(e&1&&(t(0,"div",11),p(1,"hr"),t(2,"strong"),o(3," Your random number is: "),n(),t(4,"p"),o(5),n()()),e&2){let r=S();m(5),w(" ",r._generatedNumber,"")}}var he=(()=>{class e{fb;_numberForm;_numbers=[...Array(10).keys()];_generatedNumber="";destroy$=new x;constructor(r){this.fb=r}ngOnInit(){this._numberForm=this.fb.group({favoriteNumber:[null,c.required],numberLength:[null,[c.required,c.min(1),c.max(200)]]})}generateNumber(){let{favoriteNumber:r,numberLength:a}=this._numberForm.value;this._numberForm.valid&&(this.updateRandomNumber(r,a),C(5e3).pipe(N(this.destroy$)).subscribe(()=>this.updateRandomNumber(r,a)))}updateRandomNumber(r,a){let i="";for(let s=0;s<a-1;s++)i+=Math.floor(Math.random()*10);this._generatedNumber=`${i}${r}`}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(a){return new(a||e)(P(q))};static \u0275cmp=O({type:e,selectors:[["app-random-numbers-generator-rxjs"]],standalone:!0,features:[E],decls:21,vars:6,consts:[[1,"box"],[1,"borderLine"],[3,"ngSubmit","formGroup"],["appearance","fill"],["formControlName","favoriteNumber"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","","type","number","formControlName","numberLength"],["type","submit",1,"top-down"],["class","output",4,"ngIf"],[3,"value"],[1,"output"]],template:function(a,i){if(a&1&&(t(0,"div",0),p(1,"span",1),t(2,"form",2),F("ngSubmit",function(){return i.generateNumber()}),t(3,"h2"),o(4,"Random Number"),n(),t(5,"mat-form-field",3)(6,"mat-label"),o(7,"Favorite Number"),n(),t(8,"mat-select",4),u(9,Q,2,2,"mat-option",5),n(),u(10,W,2,0,"mat-error",6),n(),t(11,"mat-form-field",3)(12,"mat-label"),o(13,"Number Length"),n(),p(14,"input",7),u(15,X,2,0,"mat-error",6)(16,Z,2,0,"mat-error",6),n(),t(17,"button",8)(18,"span"),o(19,"Generate"),n()(),u(20,ee,6,1,"div",9),n()()),a&2){let s,M,y;m(2),l("formGroup",i._numberForm),m(7),l("ngForOf",i._numbers),m(),l("ngIf",(s=i._numberForm.get("favoriteNumber"))==null?null:s.hasError("required")),m(5),l("ngIf",(M=i._numberForm.get("numberLength"))==null?null:M.hasError("required")),m(),l("ngIf",(y=i._numberForm.get("numberLength"))==null?null:y.hasError("min")),m(4),l("ngIf",i._generatedNumber)}},dependencies:[b,z,k,L,j,G,T,$,_,B,V,A,h,Y,D,v,U,g,f],styles:['mat-form-field[_ngcontent-%COMP%]{width:100%}@keyframes _ngcontent-%COMP%_animate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.box[_ngcontent-%COMP%]{position:relative;width:48rem;height:60rem;background:var(--primary-color);border-radius:.8rem;overflow:hidden;padding:1rem}.box[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:48rem;height:55rem;background:linear-gradient(0deg,transparent,transparent,var(--secondary-color),var(--secondary-color),var(--secondary-color));z-index:1;transform-origin:bottom right;animation:_ngcontent-%COMP%_animate 6s linear infinite}.box[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-50%;left:-50%;width:48rem;height:55rem;background:linear-gradient(0deg,transparent,transparent,var(--secondary-color),var(--secondary-color),var(--secondary-color));z-index:1;transform-origin:bottom right;animation:_ngcontent-%COMP%_animate 6s linear infinite;animation-delay:-3s}.borderLine[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:48rem;height:52rem;background:linear-gradient(0deg,transparent,transparent,var(--secondary-color-m),var(--secondary-color-m),var(--secondary-color-m));z-index:1;transform-origin:bottom right;animation:_ngcontent-%COMP%_animate 6s linear infinite;animation-delay:-1.5s}.borderLine[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-50%;left:-50%;width:48rem;height:52rem;background:linear-gradient(0deg,transparent,transparent,var(--secondary-color-m),var(--secondary-color-m),var(--secondary-color-m));z-index:1;transform-origin:bottom right;animation:_ngcontent-%COMP%_animate 6s linear infinite;animation-delay:-4.5s}.box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{position:absolute;inset:.4rem;background:var(--tertiary-color);padding:5rem 4rem;border-radius:.8rem;z-index:2;display:flex;flex-direction:column;align-items:center}.box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--tertiary-color-m);font-weight:700;font-size:2rem;text-align:center;letter-spacing:.1em;margin-bottom:5rem}hr[_ngcontent-%COMP%]{border-top:1px solid var(--secondary-color)}.output[_ngcontent-%COMP%]{font-size:2rem;text-align:center;color:var(--tertiary-color-m);width:100%;overflow-wrap:break-word}.output[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:2rem;font-weight:500;margin:2rem 0}.output[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;font-size:1.7rem;color:var(--secondary-color)}button[_ngcontent-%COMP%]{border:0;outline:none;cursor:pointer;color:var(--tertiary-color-m);background-color:transparent;font-size:2.4rem;padding:2rem;margin:1rem 0;transition:transform .2s ease-in-out;position:relative}button.top-down[_ngcontent-%COMP%]{overflow:hidden}button.top-down[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:var(--secondary-color-m);width:100%;height:100%;top:-100%;left:0;transition:.35s top;z-index:1}button.top-down[_ngcontent-%COMP%]:hover:before{top:0}button.top-down[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;z-index:2;transition:.35s color}button.top-down[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--tertiary-color-m);text-decoration:underline;transition:.7s all}']})}return e})();export{he as RandomNumbersGeneratorRxjsComponent};
