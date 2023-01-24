(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24],{3301:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{ei:function(){return pick}});let pick=(obj,keys)=>keys.reduce((acc,key)=>(acc[key]=obj[key],acc),{})},2607:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return __webpack_require__(3750)}])},4213:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return BlogList_BlogList}});var jsx_runtime=__webpack_require__(5893);__webpack_require__(7294);var styles=__webpack_require__(5270);let BlogListStyle=(0,styles.zo)("ul",{display:"flex",flexWrap:"wrap",marginLeft:"-40px","@bp1":{marginLeft:"-54px"},"@bp3":{marginLeft:"0"}}),BlogItem=(0,styles.zo)("li",{width:"calc((100% / 3) - 40px)",marginLeft:"40px",marginBottom:"40px","@bp1":{width:"calc((100% / 2) - 54px)",marginLeft:"54px",marginBottom:"54px"},"@bp3":{width:"100%",marginLeft:"0",marginBottom:"48px"}});var Card_style=__webpack_require__(5349),foundations=__webpack_require__(9923),dist_image=__webpack_require__(8782),image_default=__webpack_require__.n(dist_image),UIkit=__webpack_require__(8561),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link);let Card=props=>(0,jsx_runtime.jsxs)(Card_style.UE,{children:[(0,jsx_runtime.jsx)(Card_style.fb,{children:(0,jsx_runtime.jsx)(link_default(),{href:"/blog/".concat(props.slug),children:(0,jsx_runtime.jsx)(image_default(),{src:props.image,alt:props.title,layout:"fill",objectFit:"cover",objectPosition:"top"})})}),(0,jsx_runtime.jsxs)(Card_style.aY,{children:[(0,jsx_runtime.jsx)(Card_style.WD,{children:(0,jsx_runtime.jsx)(link_default(),{href:"/category/".concat(props.categories[0].toLowerCase()),children:(0,jsx_runtime.jsxs)(foundations.xv,{size:1,css:{display:"flex",alignItems:"center"},children:[(0,jsx_runtime.jsx)(UIkit.JO,{name:"folder",size:14}),props.categories[0]]})})}),(0,jsx_runtime.jsx)(foundations.xv,{as:"h3",size:6,className:"title",truncate:!0,children:(0,jsx_runtime.jsx)(link_default(),{href:"/blog/".concat(props.slug),children:props.title})}),(0,jsx_runtime.jsx)(foundations.xv,{size:2,className:"title",lineClamp:!0,css:{my:"$6",$$lineClamp:3,fontFamily:"$Lora"},children:(0,jsx_runtime.jsx)(link_default(),{href:"/blog/".concat(props.slug),children:props.description})}),(0,jsx_runtime.jsx)(Card_style.eW,{children:props.views&&(0,jsx_runtime.jsx)(foundations.xv,{size:1,link:"secondary",children:(0,jsx_runtime.jsxs)(link_default(),{href:"/blog/".concat(props.slug),children:[(0,jsx_runtime.jsx)(UIkit.JO,{name:"eye",size:14}),props.views,"K"]})})})]})]}),BlogList=param=>{let{blogList}=param;return(0,jsx_runtime.jsx)(BlogListStyle,{children:blogList.map(blog=>(0,jsx_runtime.jsx)(BlogItem,{children:(0,jsx_runtime.jsx)(Card,{...blog},blog.slug)},blog.slug))})};var BlogList_BlogList=BlogList},5349:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{UE:function(){return CardStyle},WD:function(){return Category},aY:function(){return CardContent},eW:function(){return CardFooter},fb:function(){return ImageWrapper}});var styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5270);let CardStyle=(0,styles__WEBPACK_IMPORTED_MODULE_0__.zo)("div",{}),ImageWrapper=(0,styles__WEBPACK_IMPORTED_MODULE_0__.zo)("div",{position:"relative",height:"0",paddingBottom:"65%"}),CardContent=(0,styles__WEBPACK_IMPORTED_MODULE_0__.zo)("div",{paddingTop:"$6"}),Category=(0,styles__WEBPACK_IMPORTED_MODULE_0__.zo)("div",{marginBottom:"$2",display:"flex",alignItems:"center",color:"$grey",transition:"$main",".icon":{marginRight:"$1",fill:"$grey",transition:"$main"},"&:hover":{color:"$darkGray",".icon":{fill:"$darkGray"}}}),CardFooter=(0,styles__WEBPACK_IMPORTED_MODULE_0__.zo)("div",{display:"flex",alignItems:"center",justifyContent:"flex-end",".icon":{marginRight:"$1",fill:"$grey"}})},5065:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Pagnation}});var jsx_runtime=__webpack_require__(5893);__webpack_require__(7294);var next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link),styles=__webpack_require__(5270);let PaginationStyle=(0,styles.zo)("nav",{my:"$10"}),PaginationList=(0,styles.zo)("ul",{display:"flex",alignItems:"center",justifyContent:"center",li:{height:"44px",width:"44px",fontSize:"$1",fontWeight:"$4",textAlign:"center",marginRight:"$1",a:{display:"block",lineHeight:"44px",transition:"$main","&.active":{backgroundColor:"$primary",color:"$white"},"&:hover":{"&:not(.active)":{color:"$primary"},".icon":{fill:"$primary"}}}}});var UIkit=__webpack_require__(8561);let Pagination=param=>{let{currentPage,totalPostCount,pathname}=param,pageIntoArray=Array.from(Array(totalPostCount).keys());return pageIntoArray.length<=1?null:(0,jsx_runtime.jsx)(PaginationStyle,{children:(0,jsx_runtime.jsxs)(PaginationList,{children:[currentPage>1&&(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(link_default(),{href:{pathname:"/".concat(pathname),query:{page:currentPage-1}},children:(0,jsx_runtime.jsx)(UIkit.JO,{name:"chevron-left"})})}),pageIntoArray.map(page=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(link_default(),{href:{pathname:"/".concat(pathname),query:{page:page+1}},className:currentPage===page+1?"active":"",children:page+1})},page)),currentPage<pageIntoArray.length&&(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(link_default(),{href:{pathname:"/".concat(pathname),query:{page:currentPage+1}},children:(0,jsx_runtime.jsx)(UIkit.JO,{name:"chevron-right"})})})]})})};var Pagnation=Pagination},3346:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c7:function(){return GITHUB_API},ou:function(){return show_per_page}});let GITHUB_API="https://api.github.com/repos/aimhubio/aim/",show_per_page=9;__webpack_exports__.ZP="https://v4.aimstack.io/"},3750:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return Category}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),next_seo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2962),_contentlayer_client__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3301),utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(558),styles_foundations__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9923),components_BlogList_BlogList__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4213),components_Pagination_Pagnation__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5065),next_router__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1163),__N_SSG=!0;function Category(param){let{posts}=param,router=(0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)(),params=router.query,pathname="/category/"+router.query.slug,page=Number(params.page)||1,pickedPosts=posts.map(post=>(0,_contentlayer_client__WEBPACK_IMPORTED_MODULE_3__.ei)(post,["title","date","slug","description","draft","image","categories"])),totalPostCount=(0,utils__WEBPACK_IMPORTED_MODULE_8__.mC)(posts.length),totalPosts=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>(0,utils__WEBPACK_IMPORTED_MODULE_8__.eU)(pickedPosts,page),[page,pickedPosts]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_seo__WEBPACK_IMPORTED_MODULE_2__.PB,{title:"Access your category realted articles",description:"Access your category realted articles",openGraph:{url:"https://aimstack.io/",title:"Access your category realted articles",description:"Access your category realted articles",images:[{url:"".concat((0,utils__WEBPACK_IMPORTED_MODULE_8__.ef)("banner.png")),width:1224,height:724,alt:"banner",type:"image/jpeg"}],site_name:"Aimstack"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_foundations__WEBPACK_IMPORTED_MODULE_4__.W2,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_foundations__WEBPACK_IMPORTED_MODULE_4__.xv,{as:"h1",size:6,className:"title",css:{textAlign:"center",my:"$10"},children:["Category: ",(0,utils__WEBPACK_IMPORTED_MODULE_8__.Qs)(router.query.slug)]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_BlogList_BlogList__WEBPACK_IMPORTED_MODULE_5__.Z,{blogList:totalPosts()}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Pagination_Pagnation__WEBPACK_IMPORTED_MODULE_6__.Z,{currentPage:page,pathname:pathname,totalPostCount:totalPostCount})]})]})}},558:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Bi:function(){return formattedDate},Qs:function(){return titleCase},eU:function(){return getTotalPosts},ef:function(){return ImageUrl},mC:function(){return pageCount}});var _config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3346);function sortByDate(a,b){return new Date(b.date)-new Date(a.date)}function pageCount(number){return Math.ceil(number/_config__WEBPACK_IMPORTED_MODULE_0__.ou)}function ImageUrl(url){return _config__WEBPACK_IMPORTED_MODULE_0__.ZP+url}function titleCase(str){return str.replace(/(^\w)/g,g=>g[0].toUpperCase()).replace(/([-_]\w)/g,g=>" "+g[1].toUpperCase()).trim()}function formattedDate(date){return new Date(date).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})}function getTotalPosts(posts,page){let postSortByDate=posts.sort(sortByDate),publish=postSortByDate.filter((post,i)=>!post.draft),totalPosts=publish.slice(0,_config__WEBPACK_IMPORTED_MODULE_0__.ou);return 2===page&&(totalPosts=publish.slice(_config__WEBPACK_IMPORTED_MODULE_0__.ou,_config__WEBPACK_IMPORTED_MODULE_0__.ou*page)),page>2&&(totalPosts=publish.slice(_config__WEBPACK_IMPORTED_MODULE_0__.ou*page-_config__WEBPACK_IMPORTED_MODULE_0__.ou,_config__WEBPACK_IMPORTED_MODULE_0__.ou*page)),totalPosts}}},function(__webpack_require__){__webpack_require__.O(0,[962,774,888,179],function(){return __webpack_require__(__webpack_require__.s=2607)}),_N_E=__webpack_require__.O()}]);