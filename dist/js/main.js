// // 初始化
// var myApp = new Framework7({
//           pushState: true,
//           swipePanel: 'left',
//           // ... other parameters
//     });

// var $$ = Dom7;

// var myApp = new Framework7({
//   // ...
// });   
 

// // 初始化视图
// var mainView = myApp.addView('.view-main', {
//   dynamicNavbar: true,// 在当前View中是否使用动态导航栏
//   url: undefined,// View 默认的 url，如果没有定义，则就是当前文件的路径
//   domCache: false,// 是否要进行dom缓存
//   // 另一个View的CSS选择器，默认情况下，所有的链接都会被加载到当前的页面。
//   // 可以指定讲当前view中链接加载到另一个View中。
//   linksView: undefined
// });

// // Option 1. Using one 'pageInit' handler for all pages (recommended way):
// $$(document).on('pageInit', function (e) {
//   // Do something here when page loaded and initialized
  
// })
 
// // Option 2. Using live 'pageInit' event handlers for each page (not recommended)
// $$(document).on('pageInit', '.page[data-page="hone"]', function (e) {
//   // Do something here when page with data-page="about" attribute loaded and initialized
// })  



// // In page callbacks:
// myApp.onPageInit('home', function (page) {
//   // "page" variable contains all required information about loaded and initialized page 
// })
 
// // In page events:
// $$(document).on('pageInit', function (e) {;
//   // Page Data contains all required information about loaded and initialized page 
//   var page = e.detail.page;
// })

// var total = myApp.onPageInit('home', function(page){
//     console.log("home页面被触发了");
// });

// total.trigger();// home页面被触发了

// $$(document).on('pageInit', function (e) {
//     var page = e.detail.page;
//     // Code for About page
//     if (page.name === 'about') {
//         // We need to get count GET parameter from URL (about.html?count=10)
//         var count = page.query.count;
//         // Now we can generate some dummy list
//         var listHTML = '<ul>';
//         for (var i = 0; i < count; i++) {
//             listHTML += '<li>' + i + '</li>';
//         }
//         listHTML += '</ul>';
//         // And insert generated list to page content
//         $$(page.container).find('.page-content').append(listHTML);
//     }
//     // Code for Services page
//     if (page.name === 'services') {
//         myApp.alert('Here comes our services!');
//     }
// });

// 初始化
var myApp = new Framework7();

// 添加视图
var mainView = myApp.addView('.view-main');

// // 前进 ：切换视图中的链接，用以替换内容
// mainView.router.load({
//     url: "/index.html",
// });

// // 后退 ：切换视图中的链接，用以替换内容
// mainView.router.back({
//     url: "/demo.html",
// });

// 动态页面的写法
// HTML Content of new page:
var newPageContent = `<div class="page" data-page="my-page"> 
                        <div class="page-content"> 
                          <p>Here comes new page</p> 
                        </div> 
                      </div>`;

 ;''
 
//Load new content as new page
mainView.router.loadContent(newPageContent);
