"use strict";(self.webpackChunkmovieflix=self.webpackChunkmovieflix||[]).push([[728],{3728:(Pt,I,d)=>{d.r(I),d.d(I,{MovieModule:()=>Ot});var F=d(6223),t=d(5879),U=d(7582),y=d(2096),M=d(8645),j=d(3019),J=d(6232),R=d(5177),N=d(4716),z=d(9397),H=d(4552);class G extends M.x{constructor(o=1/0,i=1/0,a=H.l){super(),this._bufferSize=o,this._windowTime=i,this._timestampProvider=a,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=i===1/0,this._bufferSize=Math.max(1,o),this._windowTime=Math.max(1,i)}next(o){const{isStopped:i,_buffer:a,_infiniteTimeWindow:n,_timestampProvider:r,_windowTime:c}=this;i||(a.push(o),!n&&a.push(r.now()+c)),this._trimBuffer(),super.next(o)}_subscribe(o){this._throwIfClosed(),this._trimBuffer();const i=this._innerSubscribe(o),{_infiniteTimeWindow:a,_buffer:n}=this,r=n.slice();for(let c=0;c<r.length&&!o.closed;c+=a?1:2)o.next(r[c]);return this._checkFinalizedStatuses(o),i}_trimBuffer(){const{_bufferSize:o,_timestampProvider:i,_buffer:a,_infiniteTimeWindow:n}=this,r=(n?1:2)*o;if(o<1/0&&r<a.length&&a.splice(0,a.length-r),!n){const c=i.now();let m=0;for(let f=1;f<a.length&&a[f]<=c;f+=2)m=f;m&&a.splice(0,m+1)}}}var W=d(3168),b=d(4674),B=d(4829),Y=d(9360),q=d(5592);const Q={connector:()=>new M.x};function X(e,o,i,a){i&&!(0,b.m)(i)&&(a=i);const n=(0,b.m)(i)?i:void 0;return r=>function K(e,o){const i=(0,b.m)(e)?e:()=>e;return(0,b.m)(o)?function $(e,o=Q){const{connector:i}=o;return(0,Y.e)((a,n)=>{const r=i();(0,B.Xf)(e(function E(e){return new q.y(o=>e.subscribe(o))}(r))).subscribe(n),n.add(a.subscribe(r))})}(o,{connector:i}):a=>new W.c(a,i)}(new G(e,o,a),n)(r)}var V=d(6196);class tt{}const at=(e,o)=>JSON.stringify(e)===JSON.stringify(o),it=e=>e.map(o=>void 0!==o?JSON.parse(JSON.stringify(o)):o),l={storageStrategy:class et extends tt{constructor(){super(...arguments),this.cachePairs=[]}add(o,i,a){this.cachePairs.push(o)}addMany(o){this.cachePairs=o}updateAtIndex(o,i){Object.assign(this.cachePairs[o],i)}update(o,i){Object.assign(this.cachePairs[o],i)}getAll(){return this.cachePairs}removeAtIndex(o){this.cachePairs.splice(o,1)}remove(o){this.cachePairs.splice(o,1)}removeAll(){this.cachePairs.length=0}},globalCacheKey:"CACHE_STORAGE",promiseImplementation:Promise},nt=new M.x;class g{constructor(){this.movieList=[{id:1,title:"Tenet",description:"Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",rating:7.8,duration:"2h 30 min",genre:["Action","Sci-Fi"],releasedDate:new Date("3 September 2020"),trailerLink:"https://www.youtube.com/watch?v=LdOM0x0XDMo"},{id:2,title:"Spider-Man: Into the Spider-Verse",description:"Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",rating:8.4,duration:"1h 57min",genre:["Action","Animation","Adventure"],releasedDate:new Date("14 December 2018"),trailerLink:"https://www.youtube.com/watch?v=tg52up16eq0"},{id:3,title:"Knives Out",description:"A detective investigates the death of a patriarch of an eccentric, combative family.",rating:7.9,duration:"2h 10min",genre:["Comedy","Crime","Drama"],releasedDate:new Date("27 November 2019"),trailerLink:"https://www.youtube.com/watch?v=qGqiHJTsRkQ"},{id:4,title:"Guardians of the Galaxy",description:"A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",rating:8,duration:"2h 1min",genre:["Action","Adventure","Comedy"],releasedDate:new Date("1 August 2014"),trailerLink:"https://www.youtube.com/watch?v=d96cjJhvlMA"},{id:5,title:"Avengers: Age of Ultron",description:"When Tony Stark and Bruce Banner try to jump- start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",rating:7.3,duration:"2h 21min",genre:["Action","Adventure","Sci-Fi"],releasedDate:new Date("1 May 2015"),trailerLink:"https://www.youtube.com/watch?v=tmeOjFno6Do"}]}getAllMovies(){return(0,y.of)(this.movieList)}getMovieById(o){return(0,y.of)(this.movieList.find(i=>i.id===o))}static#t=this.\u0275fac=function(i){return new(i||g)};static#e=this.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac})}(0,U.gn)([function ot(e={}){return function(o,i,a){const n=e.cacheKey||o.constructor.name+"#"+i,r=a.value;if(a&&a.value){let c=e.storageStrategy?new e.storageStrategy:new l.storageStrategy;const m=[];e.cacheModifier&&e.cacheModifier.subscribe(x=>c.addMany(x(c.getAll(n,this)),n,this)),(0,j.T)(nt.asObservable(),e.cacheBusterObserver?e.cacheBusterObserver:(0,J.c)()).subscribe(x=>{c.removeAll(n,this),m.length=0}),e.cacheResolver=e.cacheResolver||l.cacheResolver||at,e.cacheHasher=e.cacheHasher||l.cacheHasher||it,a.value=function(...x){const v=c.getAll(n,this);let _=e.cacheHasher(x),s=v.find(h=>e.cacheResolver(h.parameters,_));const k=m.find(h=>e.cacheResolver(h.parameters,_));if((e.maxAge||l.maxAge)&&s&&s.created&&((new Date).getTime()-new Date(s.created).getTime()>(e.maxAge||l.maxAge)?(c.remove?c.remove(v.indexOf(s),s,n,this):c.removeAtIndex(v.indexOf(s),n,this),s=null):(e.slidingExpiration||l.slidingExpiration)&&(s.created=new Date,c.update?c.update(v.indexOf(s),s,n,this):c.updateAtIndex(v.indexOf(s),s,n,this))),s){const h=(0,y.of)(s.response);return e.async?h.pipe((0,R.g)(0)):h}if(k)return k.response;{const h=r.call(this,...x).pipe((0,N.x)(()=>{const w=m.find(St=>e.cacheResolver(St.parameters,_));m.splice(m.indexOf(w),1)}),(0,z.b)(w=>{(!e.shouldCacheDecider||e.shouldCacheDecider(w))&&((!(e.maxCacheCount||l.maxCacheCount)||1===(e.maxCacheCount||l.maxCacheCount)||(e.maxCacheCount||l.maxCacheCount)&&(e.maxCacheCount||l.maxCacheCount)<v.length+1)&&(c.remove?c.remove(0,v[0],n,this):c.removeAtIndex(0,n,this)),c.add({parameters:_,response:w,created:e.maxAge||l.maxAge?new Date:null},n,this))}),X(1),(0,V.x)());return m.push({parameters:_,response:h,created:new Date}),h}}}return a}}({maxAge:12e4})],g.prototype,"getAllMovies",null);var C=d(1256),rt=d(6593),u=d(6814),Z=d(1175),A=d(2296);function ct(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.addToWatchList(n.movie))}),t.TgZ(1,"span"),t._uU(2,"Add to your watchlist"),t.qZA(),t.TgZ(3,"mat-icon"),t._uU(4,"playlist_add"),t.qZA()()}}function dt(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.removeFromWatchList(n.movie))}),t.TgZ(1,"span"),t._uU(2,"Remove from your watchlist"),t.qZA(),t.TgZ(3,"mat-icon"),t._uU(4,"playlist_remove"),t.qZA()()}}let st=(()=>{class e{constructor(i,a,n,r){this.movieService=i,this.activatedRoute=a,this._sanitizer=n,this._location=r,this.watchList=new Array,this.itIsOnWatchList=!1}ngOnInit(){const i=Number.parseInt(this.activatedRoute.snapshot.paramMap.get("id"));this.movieService.getMovieById(i).subscribe(a=>{if(this.movie=a,this.trailerLink=this.getTrailerEmbededLink(a.trailerLink),localStorage.getItem("watchList")){const n=JSON.parse(localStorage.getItem("watchList"));this.watchList=n,this.itIsOnWatchList=this.watchList.some(r=>r.id===this.movie.id)}})}getTrailerEmbededLink(i){const n=new URL(i).searchParams.get("v");return this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${n}?si=Ch2URkGxWYYXXSdo&amp;controls=1`)}back(){this._location.back()}addToWatchList(i){this.watchList.find(a=>a.id===i.id)||(this.watchList.push(i),localStorage.setItem("watchList",JSON.stringify(this.watchList)),this.itIsOnWatchList=!0)}removeFromWatchList(i){this.watchList.find(a=>a.id===i.id)&&(this.watchList=this.watchList.filter(a=>a.id!=i.id),localStorage.setItem("watchList",JSON.stringify(this.watchList)),this.itIsOnWatchList=!1)}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(g),t.Y36(C.gz),t.Y36(rt.H7),t.Y36(u.Ye))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-movie-detail"]],decls:36,vars:12,consts:[["mat-button","",1,"back-button",3,"click"],[2,"display","flex","flex-flow","row","justify-content","center","justify-items","center","width","50em"],["width","560","height","315","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","allowfullscreen","",3,"src"],[2,"display","flex","flex-direction","column","margin-left","5%"],[1,"movie-details-text"],["mat-button","","class","small-icon-button","color","accent",3,"click",4,"ngIf"],["mat-button","","style","background-color: whitesmoke; opacity: 0.5;","color","accent",3,"click",4,"ngIf"],["mat-button","","color","accent",1,"small-icon-button",3,"click"],["mat-button","","color","accent",2,"background-color","whitesmoke","opacity","0.5",3,"click"]],template:function(a,n){1&a&&(t.TgZ(0,"div")(1,"button",0),t.NdJ("click",function(){return n.back()}),t.TgZ(2,"mat-icon"),t._uU(3,"arrow_back"),t.qZA(),t.TgZ(4,"span"),t._uU(5,"Back"),t.qZA()()(),t.TgZ(6,"div",1)(7,"div"),t._UZ(8,"iframe",2),t.qZA(),t.TgZ(9,"div",3)(10,"span",4),t._uU(11),t.qZA(),t.TgZ(12,"span",4)(13,"b"),t._uU(14,"Rating:"),t.qZA(),t._uU(15),t.qZA(),t.TgZ(16,"span",4)(17,"b"),t._uU(18,"Duration:"),t.qZA(),t._uU(19),t.qZA(),t.TgZ(20,"span",4)(21,"b"),t._uU(22,"Genere:"),t.qZA(),t._uU(23),t.qZA(),t.TgZ(24,"span",4)(25,"b"),t._uU(26,"Release Date:"),t.qZA(),t._uU(27),t.ALo(28,"date"),t.qZA(),t.TgZ(29,"p",4)(30,"span")(31,"b"),t._uU(32,"Description:"),t.qZA()(),t._uU(33),t.qZA(),t.YNc(34,ct,5,0,"button",5),t.YNc(35,dt,5,0,"button",6),t.qZA()()),2&a&&(t.xp6(8),t.Q6J("src",n.trailerLink,t.uOi),t.xp6(3),t.Oqu(n.movie.title),t.xp6(4),t.hij(" ",n.movie.rating,""),t.xp6(4),t.hij(" ",n.movie.duration,""),t.xp6(4),t.hij(" ",n.movie.genre.join(", "),""),t.xp6(4),t.hij(" ",t.xi3(28,9,n.movie.releasedDate,"dd MMM yyyy"),""),t.xp6(6),t.hij(" ",n.movie.description," "),t.xp6(1),t.Q6J("ngIf",!n.itIsOnWatchList),t.xp6(1),t.Q6J("ngIf",n.itIsOnWatchList))},dependencies:[u.O5,Z.Hw,A.lW,u.uU],styles:["iframe[_ngcontent-%COMP%]{position:absolute;top:15%;left:50%;width:48%;height:50%}.movie-details-text[_ngcontent-%COMP%]{color:#fff;font-size:165%}.back-button[_ngcontent-%COMP%]{margin-bottom:2%}"]})}return e})();var p=d(6825),lt=d(2596),T=d(7988),D=d(3680);const mt=["*"],ft=new t.OlP("MAT_CARD_CONFIG");let L=(()=>{class e{constructor(i){this.appearance=i?.appearance||"raised"}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(ft,8))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(a,n){2&a&&t.ekj("mat-mdc-card-outlined","outlined"===n.appearance)("mdc-card--outlined","outlined"===n.appearance)},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:mt,decls:1,vars:0,template:function(a,n){1&a&&(t.F$t(),t.Hsn(0))},styles:['.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation);--mdc-elevated-card-container-shape:4px;--mdc-outlined-card-container-shape:4px;--mdc-outlined-card-outline-width:1px}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0})}return e})(),O=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275dir=t.lG2({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})(),_t=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=t.oAB({type:e});static#a=this.\u0275inj=t.cJS({imports:[D.BQ,u.ez,D.BQ]})}return e})();function bt(e,o){1&e&&t._uU(0," radio_button_unchecked ")}function wt(e,o){1&e&&(t.TgZ(0,"div",15)(1,"span",16),t._uU(2,"On my watchlist"),t.qZA()())}function yt(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(i);const n=t.oxw(2).$implicit,r=t.oxw(2);return t.KtG(r.addToWatchList(n))}),t.TgZ(1,"mat-icon"),t._uU(2,"playlist_add"),t.qZA()()}}function Mt(e,o){1&e&&(t.TgZ(0,"button",24)(1,"mat-icon"),t._uU(2,"playlist_add_check"),t.qZA()())}function Ct(e,o){if(1&e&&(t.TgZ(0,"div",17)(1,"div",18)(2,"span",19),t._uU(3),t.qZA(),t.TgZ(4,"span",19),t._uU(5),t.qZA(),t.TgZ(6,"span",19),t._uU(7),t.qZA(),t.TgZ(8,"span",19),t._uU(9),t.qZA(),t.TgZ(10,"span",19),t._uU(11),t.ALo(12,"date"),t.qZA()(),t.TgZ(13,"div",20),t.YNc(14,yt,3,0,"button",21),t.YNc(15,Mt,3,0,"button",22),t.qZA()()),2&e){const i=t.oxw().$implicit,a=t.oxw(2);t.Q6J("@cardTrigger",void 0),t.xp6(3),t.Oqu(i.title),t.xp6(2),t.hij("Rating: ",i.rating,""),t.xp6(2),t.hij("Duration: ",i.duration,""),t.xp6(2),t.hij("Genere: ",i.genre.join(", "),""),t.xp6(2),t.hij("Release Date: ",t.xi3(12,8,i.releasedDate,"dd MMM yyyy"),""),t.xp6(3),t.Q6J("ngIf",!a.itIsOnWatchlist(i)),t.xp6(1),t.Q6J("ngIf",a.itIsOnWatchlist(i))}}const S=function(e){return{"background-image":e}};function At(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div")(1,"div",10),t.NdJ("mouseenter",function(){const r=t.CHM(i).$implicit,c=t.oxw(2);return t.KtG(c.displayMovieDetails(r,!0))})("mouseleave",function(){const r=t.CHM(i).$implicit,c=t.oxw(2);return t.KtG(c.displayMovieDetails(r,!1))}),t.TgZ(2,"mat-card",11)(3,"mat-card-content",12),t.NdJ("click",function(){const r=t.CHM(i).$implicit,c=t.oxw(2);return t.KtG(c.goToMovieDetails(r))}),t.YNc(4,wt,3,0,"div",13),t.qZA(),t.YNc(5,Ct,16,11,"div",14),t.qZA()()()}if(2&e){const i=o.$implicit,a=t.oxw(2);t.xp6(2),t.Q6J("ngStyle",t.VKq(3,S,"url("+a.getThumbnailPicture(i.trailerLink)+")")),t.xp6(2),t.Q6J("ngIf",a.itIsOnWatchlist(i)),t.xp6(1),t.Q6J("ngIf",a.movieDetailId==i.id)}}function Tt(e,o){if(1&e&&(t.TgZ(0,"div",8),t.YNc(1,At,6,5,"div",9),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.movieList)}}function It(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div")(1,"div")(2,"mat-card",11)(3,"mat-card-content",25),t.NdJ("click",function(){const r=t.CHM(i).$implicit,c=t.oxw(2);return t.KtG(c.goToMovieDetails(r))}),t.TgZ(4,"div",26)(5,"button",27),t.NdJ("click",function(){const r=t.CHM(i).$implicit,c=t.oxw(2);return t.KtG(c.removeFromWatchList(r))}),t.TgZ(6,"mat-icon"),t._uU(7,"playlist_remove"),t.qZA()()()()()()()}if(2&e){const i=o.$implicit,a=t.oxw(2);t.xp6(2),t.Q6J("ngStyle",t.VKq(1,S,"url("+a.getThumbnailPicture(i.trailerLink)+")"))}}function Zt(e,o){if(1&e&&(t.TgZ(0,"div",8),t.YNc(1,It,8,3,"div",9),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.watchList)}}const Dt=[{path:"",component:(()=>{class e{constructor(i,a,n){this.movieService=i,this.cdr=a,this.route=n,this.movieList=new Array,this.watchList=new Array,this.changeText=!1,this.movieDetailId=0}ngOnInit(){this.movieService.getAllMovies().subscribe(i=>{if(this.movieList=i,localStorage.getItem("watchList")){const a=JSON.parse(localStorage.getItem("watchList"));this.watchList=a}this.cdr.detectChanges()})}getThumbnailPicture(i){return`https://img.youtube.com/vi/${new URL(i).searchParams.get("v")}/sddefault.jpg`}addToWatchList(i){this.watchList.find(a=>a.id===i.id)||(this.watchList.push(i),localStorage.setItem("watchList",JSON.stringify(this.watchList)),this.cdr.detectChanges())}removeFromWatchList(i){this.watchList.find(a=>a.id===i.id)&&(this.watchList=this.watchList.filter(a=>a.id!=i.id),localStorage.setItem("watchList",JSON.stringify(this.watchList)),this.cdr.detectChanges())}goToMovieDetails(i){this.route.navigateByUrl(`/movie-detail/${i.id}`)}itIsOnWatchlist(i){return this.watchList.some(a=>a.id===i.id)}displayMovieDetails(i,a){return this.movieDetailId=a?i.id:0,a}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(g),t.Y36(t.sBO),t.Y36(C.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-movie"]],decls:28,vars:3,consts:[["fxflex","100",1,"display-flex"],[1,"spacer"],[1,"section-title"],["mat-button","","matTooltip","Sort by",1,"menu-button",3,"matMenuTriggerFor"],["noRadio",""],["menu","matMenu"],["mat-menu-item",""],["class","card-container",4,"ngIf"],[1,"card-container"],[4,"ngFor","ngForOf"],[3,"mouseenter","mouseleave"],[1,"card",3,"ngStyle"],[1,"card-content",3,"click"],["style","padding: 1%; background-color: brown;",4,"ngIf"],["id","detail","class","card-movie-details",4,"ngIf"],[2,"padding","1%","background-color","brown"],[2,"color","white","font-weight","bold","font-size","80%"],["id","detail",1,"card-movie-details"],[2,"display","flex","flex-direction","column"],[1,"movie-details-text"],[2,"display","flex","flex-flow","row-reverse","width","20%"],["mat-icon-button","","class","small-icon-button","matTooltip","Add to your watchlist","color","accent",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Added to your watchlist","class","small-icon-button","color","accent",4,"ngIf"],["mat-icon-button","","matTooltip","Add to your watchlist","color","accent",1,"small-icon-button",3,"click"],["mat-icon-button","","matTooltip","Added to your watchlist","color","accent",1,"small-icon-button"],[1,"card-content-watchlist",3,"click"],[2,"padding","2%"],["mat-icon-button","","matTooltip","Remove from watchlist","color","accent",2,"background-color","whitesmoke","opacity","0.5",3,"click"]],template:function(a,n){if(1&a&&(t.TgZ(0,"div",0),t._UZ(1,"span",1),t.TgZ(2,"h4",2),t._uU(3,"Sort"),t.qZA(),t.TgZ(4,"button",3)(5,"mat-icon"),t._uU(6,"sort"),t.qZA()(),t.YNc(7,bt,1,0,"ng-template",null,4,t.W1O),t.TgZ(9,"mat-menu",null,5)(11,"button",6)(12,"mat-icon"),t.ynx(13),t._uU(14,"radio_button_checked"),t.BQk(),t.qZA(),t._uU(15," Title "),t.qZA(),t.TgZ(16,"button",6)(17,"mat-icon"),t.ynx(18),t._uU(19,"radio_button_checked"),t.BQk(),t.qZA(),t._uU(20," Release Date "),t.qZA()()(),t.TgZ(21,"div")(22,"h2",2),t._uU(23,"Popular"),t.qZA(),t.YNc(24,Tt,2,1,"div",7),t.TgZ(25,"h2",2),t._uU(26,"Watchlist"),t.qZA(),t.YNc(27,Zt,2,1,"div",7),t.qZA()),2&a){const r=t.MAs(10);t.xp6(4),t.Q6J("matMenuTriggerFor",r),t.xp6(20),t.Q6J("ngIf",n.movieList),t.xp6(3),t.Q6J("ngIf",n.watchList)}},dependencies:[u.sg,u.O5,u.PC,Z.Hw,A.lW,A.RK,lt.gM,T.VK,T.OP,T.p6,L,O,u.uU],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:16px}.card[_ngcontent-%COMP%]{all:unset;border-radius:4px;background-color:#fafafa;height:200px;width:295px;margin:0 8px;padding:16px;display:flex;flex-flow:wrap;align-items:flex-start;align-content:flex-start;transition:all .2s ease-in-out;background-size:cover;justify-content:center;transition:all .3s ease-in-out}.card-content[_ngcontent-%COMP%]{min-width:110%;min-height:105%;padding:0;overflow:auto;flex-flow:wrap;display:flex;align-items:flex-start;align-content:flex-start;justify-content:flex-start}.card-movie-details[_ngcontent-%COMP%]{display:flex;align-items:flex-start;align-content:flex-start;flex-flow:row;padding:8px;background-color:#0a0a0a;min-width:80.5%;max-height:35%;margin-top:0%!important}.card-movie-details[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child{width:80%}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child){margin-right:0}.card.card-small[_ngcontent-%COMP%]{height:16px;width:168px}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover{box-shadow:0 4px 17px #00000059;transform:scale(1.3);margin:30px;opacity:1;z-index:950}#detail[_ngcontent-%COMP%]{box-shadow:0 4px 17px #00000059;transform:scale(1.3);margin:7.5%;opacity:1;z-index:950}.card-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;box-sizing:border-box;align-items:flex-end;align-content:flex-end}.card-content-watchlist[_ngcontent-%COMP%]{min-width:110%;min-height:100%;padding:8px;overflow:auto;flex-flow:wrap;display:flex;align-items:flex-end;align-content:flex-end;justify-content:flex-end}.section-title[_ngcontent-%COMP%]{color:#fff}.display-flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.menu-button[_ngcontent-%COMP%]{margin-top:.6%}.small-icon-button[_ngcontent-%COMP%]{width:24px!important;height:24px!important;padding:0!important;display:inline-flex!important;align-items:center;justify-content:center;background-color:#f5f5f5;opacity:.5}.small-icon-button[_ngcontent-%COMP%] > *[role=img][_ngcontent-%COMP%]{width:16px;height:16px;font-size:16px}.small-icon-button[_ngcontent-%COMP%] > *[role=img][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}.small-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-touch-target[_ngcontent-%COMP%]{width:24px!important;height:24px!important}.movie-details-text[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:65%}.star-component[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:40px;margin:8px;background-color:#fff;border:1px solid #eeeeee;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d;transition:1s ease-out}"],data:{animation:[(0,p.X$)("cardTrigger",[(0,p.eR)(":enter",[(0,p.oB)({opacity:0,transform:"translateY(-100%)"}),(0,p.jt)(200)]),(0,p.eR)(":leave",[(0,p.jt)(200,(0,p.oB)({opacity:0,transform:"translateY(-100%)"}))])])]}})}return e})(),data:{title:"Details"}},{path:"movie-detail/:id",component:st,data:{title:"Details"}}];var Lt=d(7307);let Ot=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=t.oAB({type:e});static#a=this.\u0275inj=t.cJS({providers:[g],imports:[u.ez,C.Bz.forChild(Dt),F.UX,Lt.m,_t]})}return e})()}}]);